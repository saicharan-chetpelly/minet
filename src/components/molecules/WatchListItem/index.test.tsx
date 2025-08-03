import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import { WatchListItem } from ".";
import { BrowserRouter as Router } from "react-router-dom";
describe("WatchListItem", () => {
  test("should have atleast 1 watchlist item", () => {
    render(
      <Router>
        <WatchListItem />
      </Router>
    );
    const graphs = screen.getAllByRole("region");
    expect(graphs.length).toBeGreaterThanOrEqual(1);
  });

  test("should navigate to the correct page when clicked", () => {
    render(
      <Router>
        <WatchListItem />
      </Router>
    );
    const images = screen.getAllByAltText("Bitcoin");
    images.forEach((img) => {
      fireEvent.click(img);
    });
  });
});
