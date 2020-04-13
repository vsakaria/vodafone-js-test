import React from "react";

import { cleanup, waitForElement, render } from "@testing-library/react";

import OrderProcess from "../OrderProcess";
import { Order } from "../../Orders";

afterAll(cleanup);

describe("The processing of orders", () => {
  test("WHEN a order is a success", async () => {
    const orders: Order[] = [{ state: "success" }];
    const { getByText } = render(<OrderProcess orders={orders} />);

    const text = await waitForElement(() => getByText("Order complete"));
    expect(text).toBeInTheDocument();
  });

  test("WHEN a order is an error AND the error code is NO STOCK", async () => {
    const orders: Order[] = [{ state: "error", errorCode: "NO_STOCK" }];
    const { getByText } = render(<OrderProcess orders={orders} />);
    const text = await waitForElement(() => getByText("Error page"));
    expect(text).toBeInTheDocument();
    expect(getByText("No stock has been found")).toBeInTheDocument();
  });

  test("WHEN a order is an error AND the error code is INCORRECT_DETAILS", async () => {
    const orders: Order[] = [
      { state: "error", errorCode: "INCORRECT_DETAILS" }
    ];
    const { getByText } = render(<OrderProcess orders={orders} />);
    const text = await waitForElement(() => getByText("Error page"));
    expect(text).toBeInTheDocument();
    expect(
      getByText("Incorrect details have been entered")
    ).toBeInTheDocument();
  });

  test("WHEN a order is an error AND the error code is null", async () => {
    const orders: Order[] = [{ state: "error", errorCode: null }];
    const { getByText, getByTestId } = render(<OrderProcess orders={orders} />);
    const text = await waitForElement(() => getByText("Error page"));
    expect(text).toBeInTheDocument();
    expect(getByTestId("output-message")).toHaveTextContent("");
  });

  test("WHEN a order is an error AND the error code is undefined", async () => {
    const orders: Order[] = [{ state: "error", errorCode: undefined }];
    const { getByText, getByTestId } = render(<OrderProcess orders={orders} />);
    const text = await waitForElement(() => getByText("Error page"));
    expect(text).toBeInTheDocument();
    expect(getByTestId("output-message")).toHaveTextContent("");
  });
});
