import React from "react";
import {
  screen,
  render,
  fireEvent,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { PaymentStatus } from ".";
import { BrowserRouter as Router } from "react-router-dom";
import { PAYMENT_FAIL, PAYMENT_SUCCESS } from "../../utils/constants";
import { server } from "../../../mocks/server";
import { rest } from "msw";

describe("PaymentStatus", () => {
  test("renders errors", async () => {
    server.use(
      rest.get("http://localhost:3001/wallets", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    server.use(
      rest.get("http://localhost:3001/transactions", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    render(
      <Router>
        <PaymentStatus
          value={"0.0234510 BTC"}
          message={PAYMENT_SUCCESS}
          cryptoButton={"BUY CRYPTO"}
        />
      </Router>
    );
    await waitForElementToBeRemoved(screen.getByText("loading..."));
    const buyButton = await screen.getByRole("button", { name: /buy crypto/i });
    fireEvent.click(buyButton);
    const goToUSDButton = screen.getByRole("button", {
      name: /go to usd coin/i,
    });
    fireEvent.click(goToUSDButton);
  });

  test("transaction image renders correctly", async () => {
    const walletData = [
      {
        id: 1,
        type: "US Dollar",
        cryptoName: "USD Coin",
        totalBalance: "$30864.92620471",
      },
    ];
    const items = [
      {
        date: "2023-03-17T09:59:59.513Z",
        cryptoName: "cryptoName",
        transactionState: "error",
        depositor: "Badgley",
        status: "not purchased",
        transactionAmountInBTC: "$1 BTC",
        transactionAmount: "$3407069000000.54",
        deliveryFee: "0.001 BTC",
        transactionFee: "$1,000.00",
        id: 1,
      },
    ];
    server.use(
      rest.get("http://localhost:3001/wallets", (req, res, ctx) => {
        return res(ctx.json(walletData));
      })
    );
    server.use(
      rest.get("http://localhost:3001/transactions", (req, res, ctx) => {
        return res(ctx.json(items));
      })
    );
    render(
      <Router>
        <PaymentStatus
          value={"0.0234510 BTC"}
          message={PAYMENT_FAIL}
          cryptoButton={"BUY CRYPTO"}
        />
      </Router>
    );
    await waitForElementToBeRemoved(screen.getByText("loading..."));
    const image = await screen.getByAltText("error");
    expect(image).toHaveAttribute("alt", "error");
    const text = await screen.getByTestId("payment-message");
    expect(text).toHaveTextContent(PAYMENT_FAIL);
  });
  test("transaction image renders correctly", async () => {
    const wallet = [
      {
        id: 1,
        type: "US Dollar",
        cryptoName: "USD Coin",
        totalBalance: "$30864.92620471",
      },
    ];
    const items = [
      {
        date: "2023-03-17T09:59:59.513Z",
        cryptoName: "cryptoName",
        transactionState: "error",
        depositor: "Badgley",
        status: "not purchased",
        transactionAmountInBTC: "$1 BTC",
        transactionAmount: "$1100.54",
        deliveryFee: "0.001 BTC",
        transactionFee: "$1,000.00",
        id: 1,
      },
    ];
    server.use(
      rest.get("http://localhost:3001/wallets", (req, res, ctx) => {
        return res(ctx.json(wallet));
      })
    );
    server.use(
      rest.get("http://localhost:3001/transactions", (req, res, ctx) => {
        return res(ctx.json(items));
      })
    );
    render(
      <Router>
        <PaymentStatus
          value={"0.0234510 BTC"}
          message={PAYMENT_SUCCESS}
          cryptoButton={"BUY CRYPTO"}
        />
      </Router>
    );
    await waitForElementToBeRemoved(screen.getByText("loading..."));
    const image = await screen.getByAltText("success");
    expect(image).toHaveAttribute("alt", "success");
    const text = await screen.getByTestId("payment-message");
    expect(text).toHaveTextContent(PAYMENT_SUCCESS);
  });
});
