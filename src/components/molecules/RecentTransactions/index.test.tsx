import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import RecentTransaction from ".";
import React from "react";
import "@testing-library/jest-dom";
import { server } from "../../../mocks/server";
import { rest } from "msw";

describe("Testing for Recent transactions molecule", () => {
  test("renders correctly", () => {
    render(<RecentTransaction />);
    const users = screen.getByText("loading...");
    expect(users).toBeInTheDocument();
  });

  test("Rendering the text", async () => {
    render(<RecentTransaction />);
    await waitForElementToBeRemoved(screen.getByText("loading..."));
  });

  test("onclick event check", async () => {
    render(<RecentTransaction />);
    await waitForElementToBeRemoved(screen.getByText("loading..."));

    const textElement = screen.getByRole("button", { name: /View All/i });
    fireEvent.click(textElement);
  });

  test("renders errors", async () => {
    server.use(
      rest.get("http://localhost:3001/transactions", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    render(<RecentTransaction />);
    await waitForElementToBeRemoved(screen.getByText("loading..."));
    const error = await screen.getByText("failed to fetch data");
    expect(error).toBeInTheDocument();
  });
  test("renders items correctly with non-empty list", async () => {
    const items = [
      {
        date: "2023-03-17T09:59:59.513Z",
        cryptoName: "cryptoName",
        transactionState: "error",
        depositor: "Badgley",
        status: "not purchased",
        transactionAmountInBTC: "$1 BTC",
        transactionAmount: "$3407069.54",
        deliveryFee: "0.001 BTC",
        transactionFee: "$1,000.00",
        id: 1,
      },
    ];
    server.use(
      rest.get("http://localhost:3001/transactions", (req, res, ctx) => {
        return res(ctx.json(items));
      })
    );

    render(<RecentTransaction />);
    await waitForElementToBeRemoved(screen.getByText("loading..."));

    // ensure that the list of transactions is displayed and the error message is not
    expect(screen.queryByText("failed to fetch data")).not.toBeInTheDocument();
    expect(screen.getAllByTestId("transactionComponent")).toHaveLength(1);
  });
  test("renders items correctly", async () => {
    const items: [] = [];
    server.use(
      rest.get("http://localhost:3001/transactions", (req, res, ctx) => {
        return res(ctx.json(items));
      })
    );

    render(<RecentTransaction />);
    await waitForElementToBeRemoved(screen.getByText("loading..."));
    const transactionItems = screen.queryAllByTestId("transactionComponent");

    expect(transactionItems).toHaveLength(0);
  });
});
