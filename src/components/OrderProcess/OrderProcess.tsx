import React, { ReactElement, useState, useEffect } from "react";
import { Order, ResponseObject } from "../Orders";
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
    title: "Processing...",
    message: ""
  });
  const { orders } = props;

  useEffect(() => {
    processOrder(orders).then((output: ResponseObject) => {
      setOutput(output);
    });
  }, [orders]);

  return (
    <section>
      <p>{output.title}</p>
      <p data-testid="output-message">{output.message}</p>
    </section>
  );
};

export default OrderProcess;
