import React from "react";
import { PortfolioCard, CryptoInfoFooter } from ".";
import { getImagePath } from ".";
import BitcoinIcon from "../../../../public/assets/images/bitcoin.svg";
import CardanoIcon from "../../../../public/assets/images/Cardano.svg";
import DogecoinIcon from "../../../../public/assets/images/Dogecoin.svg";
import EthereumIcon from "../../../../public/assets/images/Ethereum.svg";
import Ethereum2Icon from "../../../../public/assets/images/Ethereum2.svg";
import PolkadotIcon from "../../../../public/assets/images/Polkadot.svg";
import TetherIcon from "../../../../public/assets/images/Tether.svg";
import USDCoinIcon from "../../../../public/assets/images/USD Coin.svg";
import XRPIcon from "../../../../public/assets/images/XRP.svg";
import BitcoinCoinIcon from "../../../../public/assets/images/BitcoinCoin.svg";
import Success from "../../../../public/assets/images/transaction-success.svg";
import Warning from "../../../../public/assets/images/transaction-warning.svg";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom";
import { server } from "../../../mocks/server";
import { rest } from "msw";

describe("CryptoInfoFooter testcases", () => {
  test("TypographyComponent displays correct price and profit/loss", () => {
    render(
      <PortfolioCard
        image={BitcoinIcon}
        text="Bitcoin"
        subText="Moves tightly together"
        cuurencyValue="$3,406,069.54"
        profitOrLoss="+8.2%"
      />
    );
    expect(screen.getByText("Bitcoin")).toBeInTheDocument();
    expect(screen.getByText("Moves tightly together")).toBeInTheDocument();
  });
  test("returns Image correctly", () => {
    expect(getImagePath("BitcoinIcon")).toEqual(BitcoinIcon);
    expect(getImagePath("EthereumIcon")).toEqual(EthereumIcon);
    expect(getImagePath("Ethereum2Icon")).toEqual(Ethereum2Icon);
    expect(getImagePath("TetherIcon")).toEqual(TetherIcon);
    expect(getImagePath("BitcoinCoin")).toEqual(BitcoinCoinIcon);
    expect(getImagePath("CardanoIcon")).toEqual(CardanoIcon);
    expect(getImagePath("XRPIcon")).toEqual(XRPIcon);
    expect(getImagePath("DodgeCoinIcon")).toEqual(DogecoinIcon);
    expect(getImagePath("USDCoinIcon")).toEqual(USDCoinIcon);
    expect(getImagePath("PolkadotIcon")).toEqual(PolkadotIcon);
    expect(getImagePath("success")).toEqual(Success);
    expect(getImagePath("warning")).toEqual(Warning);
  });
  test("renders errors", async () => {
    server.use(
      rest.get("http://localhost:3001/cryptoCurrency", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    render(
      <CryptoInfoFooter
        iconURL={BitcoinIcon}
        cryptoName="Bitcoin"
        type="BTC"
        price="$3,406,069.54"
        change="+1.06%"
        marketCap="$60.1T"
        Vol24H="$2.9T"
        circulatingSupply="18.8M BTC"
        profitloss="+8.2%"
        isWatchlisted={false}
      />
    );
    await waitForElementToBeRemoved(screen.getByText("loading..."));
    const error = await screen.getByText("failed to fetch data");
    expect(error).toBeInTheDocument();
  });
});
