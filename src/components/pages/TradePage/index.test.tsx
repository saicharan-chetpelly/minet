import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TradePage from ".";
import { BrowserRouter as Router } from "react-router-dom";

test("trade page renders correctly", () => {
  const statusValue = {
    tabValue: 0,
  };
  render(<Router>{statusValue.tabValue != undefined && <TradePage />}</Router>);
  expect(screen.getByText("Trade")).toBeInTheDocument();
});
