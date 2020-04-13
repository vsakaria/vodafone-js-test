import React from "react";

import { cleanup, waitForElement, render } from "@testing-library/react";

import OrderProcess from "../OrderProcess";
import { Order } from "../../Orders";


afterAll(cleanup);

describe("The processing of orders", () => {
    test("WHEN a order is a success", () => {
        const orders: Order[] = [{ state: "success" }]
        const { getByText } = render(<OrderProcess orders={orders} />);
        expect(getByText("Order complete")).toBeInTheDocument();
    });
})

