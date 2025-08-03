import DashboardPage from ".";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";
jest.mock("react-apexcharts", () => ({
  __esModule: true,
  default: () => <div />,
}));
const renderDashboard = () => {
  render(
    <BrowserRouter>
      <DashboardPage leftText={"My portfolio value"} />
    </BrowserRouter>
  );
};
describe("Pages/DashboardPage", () => {
  test("Renders watchlist cards correctly", async () => {
    renderDashboard();
    const watchlist = screen.getByTestId("watchlist");
    expect(watchlist).toBeInTheDocument();
  });
});
describe("DashboardPage", () => {
  it("renders My portfolio value text", () => {
    render(
      <BrowserRouter>
        <DashboardPage leftText={"My portfolio value"} />
      </BrowserRouter>
    );
    const portfolioValueText = screen.getByText("My portfolio value");
    expect(portfolioValueText).toBeInTheDocument();
  });
});
