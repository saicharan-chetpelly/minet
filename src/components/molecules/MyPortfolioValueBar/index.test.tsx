import { render, screen } from "@testing-library/react";
import { MyPortfolioValueBar } from ".";
import React from "react";
import "@testing-library/jest-dom";

describe("MyPortfolioValueBar component tests correctly", () => {
  test("MyPortfolioValueBar tests correctly with title", () => {
    render(
      <MyPortfolioValueBar title="Total Investment" totalInvestment="$ 0.00" />
    );
    expect(screen.getByText(/Total Investment/i)).toBeInTheDocument();
    expect(screen.getByText("$ 0.00")).toBeInTheDocument();
  });
  it("renders profit or loss Icon", () => {
    render(<MyPortfolioValueBar isProfit={true} />);
    const image = screen.getByTestId("profitOrLossIcon");
    expect(image).toBeDefined();
  });
});
