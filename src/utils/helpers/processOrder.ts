import { ResponseObject } from "./ProcessResponse";
import { Order } from "./../../components/Orders";

const handleErrorState = (order: Order): ResponseObject => {
  switch (order.errorCode) {
    case "NO_STOCK":
      return { title: "Error page", message: "No stock has been found" };
    case "INCORRECT_DETAILS":
      return {
        title: "Error page",
        message: "Incorrect details have been entered"
      };
    case null:
    case undefined:
      return { title: "Error page", message: null };
  }
};

const handleSuccess = (): ResponseObject => ({
  title: "Order complete",
  message: null
});

function delay(ms: number): Promise<any> {
  return new Promise(resolve => setTimeout(() => resolve("done"), ms));
}

export const processOrder = async (orders: any): Promise<any> => {
  let output;
  for (const order of orders) {
    if (order.state === "success") {
      output = handleSuccess();
    }

    if (order.state === "error") {
      output = handleErrorState(order);
    }

    if (order.state === "processing") {
      await delay(2000);
      orders.shift();
      output = processOrder(orders);
    }
  }
  return output;
};
