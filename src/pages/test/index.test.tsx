import { render, screen } from "@testing-library/react";
import Home from "../index";
import React from "react";
import "@testing-library/jest-dom";

const renderer = () => {
  render(<Home />);
};

test("", () => {
  renderer();
  expect(screen.getByTestId("h2")).toHaveTextContent("hello world!!");
});
