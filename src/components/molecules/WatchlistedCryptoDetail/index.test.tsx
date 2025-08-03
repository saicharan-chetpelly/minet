import React from "react";
import { WatchlistedCryptoDetail } from ".";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BitcoinIcon from "../../../../public/assets/images/bitcoin.svg";

describe("WatchlistedCryptoDetail testcases", () => {
  const mockCryptoCurrencyProps = {
    iconURL: BitcoinIcon,
    cryptoName: "Bitcoin",
    type: "Type",
    price: "$3,406,069.54",
    change: "+1.06%",
    profitloss: "+1.23%",
    marketCap: "$123.45B",
    Vol24H: "$123.45M",
    circulatingSupply: "12.34M",
    isWatchlisted: false,
  };

  it("renders the correct crypto currency name", () => {
    render(<WatchlistedCryptoDetail {...mockCryptoCurrencyProps} />);
    const cryptoName = screen.getByText(/Bitcoin/i);
    expect(cryptoName).toBeInTheDocument();
  });

  it("renders the correct market cap value", () => {
    render(<WatchlistedCryptoDetail {...mockCryptoCurrencyProps} />);
    const marketCap = screen.getByText(/\$123.45B/i);
    expect(marketCap).toBeInTheDocument();
  });
});
