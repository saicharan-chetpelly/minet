import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ApplicationHeader from ".";
import React from "react";
describe("Application header", () => {
  test("dashboard renders correctly", () => {
    render(
      <Router>
        <ApplicationHeader headerTitle="Dashboard" isButtonsRequired={true} />
      </Router>
    );
    fireEvent.click(screen.getByRole("button", { name: /sell/i }));
    fireEvent.click(screen.getByRole("button", { name: /buy/i }));
    fireEvent.click(screen.getByTestId("iconComponent"));
  });
  test("when isButtonsRequired is false", () => {
    render(
      <Router>
        <ApplicationHeader headerTitle="Dashboard" isButtonsRequired={false} />
      </Router>
    );
  });
});
