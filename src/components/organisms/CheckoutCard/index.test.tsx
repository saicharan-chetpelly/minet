import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CheckoutCard from ".";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { rest } from "msw";
import { server } from "../../../mocks/server";
import { BrowserRouter as Router } from "react-router-dom";

describe("Checkout Card tests", () => {
  const initialState = {
    lowerPrice: {
      val: {
        price: 0,
      },
    },
    cryptoData: {
      value: {
        id: 0,
      },
    },
    dropDownData: {
      value: {
        type: "Instant",
        time: "2-5 min",
        fee: 0.001,
      },
    },
  };
  const initialItems = {
    id: 0,
    iconURL: "",
    cryptoName: "",
    price: "",
    type: "",
    deliveryFee: 0.001,
  };
  const mockStore = configureStore();
  let store;
  test("renders the component", () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Router>
          {initialState.cryptoData.value != undefined &&
            initialState.lowerPrice.val != undefined &&
            initialState.dropDownData.value != undefined && (
              <CheckoutCard
                items={[initialItems]}
                price={25000}
              />
            )}
        </Router>
      </Provider>
    );
  });
  test("fire event check", () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Router>
          {initialState.cryptoData.value != undefined &&
            initialState.lowerPrice.val != undefined &&
            initialState.dropDownData.value != undefined && (
              <CheckoutCard
                items={[initialItems]}
                price={25000}
              />
            )}
        </Router>
      </Provider>
    );
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
  });
  test("fire event check for else case", () => {
    server.use(
      rest.get("http://localhost:3001/wallets", (req, res, ctx) => {
        return res(
          ctx.json([
            {
              id: 1,
              iconURL: "USDCoinIcon",
              type: "US Dollar",
              cryptoName: "USD Coin",
              totalBalance: "$935.72",
            },
          ])
        );
      })
    );
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Router>
          {initialState.cryptoData.value != undefined &&
            initialState.lowerPrice.val != undefined &&
            initialState.dropDownData.value != undefined && (
              <CheckoutCard
                items={[initialItems]}
                price={25000}
              />
            )}
        </Router>
      </Provider>
    );
    const buttonElement = screen.getByTestId("buynow");
    fireEvent.click(buttonElement);
  });
});
