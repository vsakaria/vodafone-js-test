import React, { ReactElement, useState, useEffect } from "react";
import { Order } from "../Orders";
import { processOrder } from "../../utils/helpers/processOrder";

interface OrderProcessProps {
  orders: Order[];
}

interface OrderProcessState {
  title: string;
  message: string | null;
}

const OrderProcess = (props: OrderProcessProps): ReactElement => {
  const [output, setOutput] = useState<OrderProcessState>({
    title: "No orders processed",
    message: ""
  });
  const { orders } = props;

  useEffect(() => {
    setOutput(processOrder(orders));
  }, [orders]);

  return (
    <section>
      <p>{output.title}</p>
      <p>{output.message}</p>
    </section>
  );
};

export default OrderProcess;
