import React from "react";

import { cleanup, waitForElement, render } from "@testing-library/react";

import OrderProcess from "../OrderProcess";
import { Order } from "../../Orders";

afterAll(cleanup);

describe("The processing of orders", () => {
  test("WHEN a order is a success", () => {
    const orders: Order[] = [{ state: "success" }];
    const { getByText } = render(<OrderProcess orders={orders} />);
    expect(getByText("Order complete")).toBeInTheDocument();
  });

  test("WHEN a order is an error AND the error code is NO STOCK", () => {
    const orders: Order[] = [{ state: "error", errorCode: "NO_STOCK" }];
    const { getByText } = render(<OrderProcess orders={orders} />);
    expect(getByText("Error page")).toBeInTheDocument();
    expect(getByText("No stock has been found")).toBeInTheDocument();
  });

  test("WHEN a order is an error AND the error code is INCORRECT_DETAILS", () => {
    const orders: Order[] = [
      { state: "error", errorCode: "INCORRECT_DETAILS" }
    ];
    const { getByText } = render(<OrderProcess orders={orders} />);
    expect(getByText("Error page")).toBeInTheDocument();
    expect(
      getByText("Incorrect details have been entered")
    ).toBeInTheDocument();
  });
});
