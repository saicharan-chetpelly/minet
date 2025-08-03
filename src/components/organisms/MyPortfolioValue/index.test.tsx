import { MyPortfolioValue } from ".";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
describe("MyPortfolioValue", () => {
  it("renders investment and crypto details correctly", () => {
    render(<MyPortfolioValue showCrypto isProfit />);
    expect(screen.getAllByText("Total Investment").length).toEqual(2);
  });

  it("does not render crypto details if showCrypto prop is false", () => {
    render(<MyPortfolioValue showCrypto={false} />);
    expect(screen.queryByText("Bitcoin")).not.toBeInTheDocument();
  });

  it("switches tabs when clicked", () => {
    render(<MyPortfolioValue />);
    fireEvent.click(screen.getByTestId("hourTab"));
    expect(screen.getByText("1H")).toHaveClass("Mui-selected");
  });

  it("renders a graph when showCrypto prop is true", () => {
    render(<MyPortfolioValue showCrypto />);
    expect(screen.getByTestId("graph")).toBeInTheDocument();
  });
});
