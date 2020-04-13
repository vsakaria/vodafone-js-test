import React, { ReactElement, useState, useEffect } from "react";
import { Order } from "../Orders";
import { processOrder } from "../../utils/helpers/processOrder";

interface OrderProcessProps {
    orders: Order[];
}

const OrderProcess = (props: OrderProcessProps): ReactElement => {

    const [output, setOutput] = useState({ title: "No orders processed" })
    const { orders } = props;

    useEffect(() => {
        setOutput(processOrder(orders))
    }, [orders])

    return (
        <section>
            {output.title}
        </section>
    );
};

export default OrderProcess;