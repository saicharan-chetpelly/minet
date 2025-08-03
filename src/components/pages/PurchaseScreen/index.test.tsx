import PurchasePage from ".";
import {
  act,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { server } from "../../../mocks/server";
import { rest } from "msw";
import { Provider } from "react-redux";
import { store } from "../../../store";
import { BrowserRouter as Router } from "react-router-dom";

describe("PaymentMethod", () => {
  test("loading", async () => {
    act(() => {
      render(
        <Provider store={store}>
          <Router>
            <PurchasePage />
          </Router>
        </Provider>
      );
    });
    const users = screen.getByText("Loading...");
    expect(users).toBeInTheDocument();
  });
  test("Rendering the images of the my portfolio data", async () => {
    render(
      <Provider store={store}>
        <Router>
          <PurchasePage />
        </Router>
      </Provider>
    );
    await waitForElementToBeRemoved(screen.getByText("Loading..."));
    const imageElement = screen.getByTestId("purchase-page");
    expect(imageElement).toBeInTheDocument();
  });
  test("renders errors", async () => {
    server.use(
      rest.get("http://localhost:3001/chooseCrypto", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    render(
      <Provider store={store}>
        <Router>
          <PurchasePage />
        </Router>
      </Provider>
    );
    await waitForElementToBeRemoved(screen.getByText("Loading..."));
    const error = await screen.getByTestId("para");
    expect(error).toBeInTheDocument();
  });
});
