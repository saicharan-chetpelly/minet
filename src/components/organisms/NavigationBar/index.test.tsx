import { render, screen, fireEvent } from "@testing-library/react";
import NavigationBar from ".";
import React from "react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";

describe("NavigationBar", () => {
  test("navigation bar render check", () => {
    render(
      <Router>
        <NavigationBar />
      </Router>
    );
    const images = screen.getAllByRole("img");
    expect(images.length).toBeGreaterThanOrEqual(1);
  });

  test("fire event check for dashboard", () => {
    render(
      <Router>
        <NavigationBar />
      </Router>
    );
    const button = screen.getByRole("button", {
      name: /dashboard/i,
    });
    fireEvent.click(button);
  });

  test("fire event check for myportfolio", () => {
    render(
      <Router>
        <NavigationBar />
      </Router>
    );
    const button = screen.getByRole("button", {
      name: /my portfolia/i,
    });
    fireEvent.click(button);
  });

  test("fire event check for trade", () => {
    render(
      <Router>
        <NavigationBar />
      </Router>
    );
    const button = screen.getByRole("button", {
      name: /trade/i,
    });
    fireEvent.click(button);
  });
  test("fire event check for notification", () => {
    render(
      <Router>
        <NavigationBar />
      </Router>
    );
    const button = screen.getByRole("button", {
      name: /notifications/i,
    });
    fireEvent.click(button);
  });
  test("fire event check for logout", () => {
    render(
      <Router>
        <NavigationBar />
      </Router>
    );
    const button = screen.getByRole("button", {
      name: /log\-out/i,
    });
    fireEvent.click(button);
  });
});
