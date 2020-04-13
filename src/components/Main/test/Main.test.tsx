import React from "react";

import { cleanup, waitForElement, render } from "@testing-library/react";

import Main from "../Main";

afterAll(cleanup);

test("Main displays the correct title", () => {
  const { getByText } = render(<Main />);
  expect(getByText('Vodafone Test')).toBeInTheDocument();

});
