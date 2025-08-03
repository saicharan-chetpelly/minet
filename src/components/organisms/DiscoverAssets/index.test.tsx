import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import DiscoverAssets from ".";
import React from "react";
import "@testing-library/jest-dom";
import { server } from "../../../mocks/server";
import { rest } from "msw";
import { BrowserRouter as Router } from "react-router-dom";

describe("Discover Assets", () => {
  test("Page loading status", async () => {
    render(
      <Router>
        <DiscoverAssets />
      </Router>
    );
    const load = screen.getByText("Loading..");
    expect(load).toBeInTheDocument();
  });
  test("data fetched after loading", async () => {
    render(
      <Router>
        <DiscoverAssets />
      </Router>
    );
    await waitForElementToBeRemoved(screen.getByText("Loading.."));
    const users = screen.getAllByAltText("cryptoImages");
    expect(users).toHaveLength(11);
  });
  test("searching items found correctly", async () => {
    render(
      <Router>
        <DiscoverAssets />
      </Router>
    );
    await waitForElementToBeRemoved(screen.getByText("Loading.."));
    const searchInput = screen.getByPlaceholderText("Search all assets");
    fireEvent.change(searchInput, { target: { value: "bit" } });
    expect(
      screen.getByRole("cell", {
        name: /cryptoimages bitcoin btc/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("cell", {
        name: /cryptoimages ethereum eth/i,
      })
    ).not.toBeInTheDocument();
  });
  test("tab switching between all assets and watchlist", async () => {
    render(
      <Router>
        <DiscoverAssets />
      </Router>
    );
    await waitForElementToBeRemoved(screen.getByText("Loading.."));
    const tab1 = screen.getByRole("tab", { name: "Watchlist" });
    fireEvent.click(tab1);
    expect(tab1).toHaveAttribute("aria-selected", "true");
  });
  test("error case coverage", async () => {
    server.use(
      rest.get("http://localhost:3001/cryptoCurrency", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    render(
      <Router>
        <DiscoverAssets />
      </Router>
    );
    await waitForElementToBeRemoved(screen.getByText("Loading.."));
    const error = await screen.getByText("Something went wrong");
    expect(error).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "icon" }));
  });
});
