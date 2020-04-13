import { ResponseObject } from "./ProcessResponse";
import { Order, States } from "./../../components/Orders";

const { SUCCESS, ERROR } = States;

export const processOrder = (orders: Order[]): ResponseObject => {
  const output = { title: "No orders processeed", message: null };

  for (const order of orders) {
    if (order.state === SUCCESS) {
      return { title: "Order complete", message: null };
    }

    if (order.state === ERROR) {
      switch (order.errorCode) {
        case "NO_STOCK":
          return { title: "Error page", message: "No stock has been found" };
        case "INCORRECT_DETAILS":
          return {
            title: "Error page",
            message: "Incorrect details have been entered"
          };
      }
    }
  }

  return output;
};
