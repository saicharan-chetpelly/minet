import React from "react";
import {
  PortfolioScreen,
  SearchBar,
  StyledTitleTabs,
  TotalBalance,
  TradeScreen,
} from ".";
import { MyWalletTransactions } from "../../molecules/WalletTransactions";
import {
  render,
  screen,
  fireEvent,
  waitForElementToBeRemoved,
  waitFor,
  act,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import BitcoinIcon from "../../../../public/assets/images/bitcoin.svg";
import { server } from "../../../mocks/server";
import { rest } from "msw";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";

const mockCryptoProps = {
  iconURL: BitcoinIcon,
  cryptoName: "Bitcoin",
  type: "BTC",
  price: "$3,406,069.54",
  change: "+1.06%",
  marketCap: "$60.1T",
  Vol24H: "$2.9T",
  circulatingSupply: "18.8M BTC",
  profitloss: "+8.2%",
  isWatchlisted: false,
};
const mockTransactionProps = {
  date: new Date("2022-03-13T04:20:00"),
  name: "Transaction Name",
  status: "success",
  icon: BitcoinIcon,
  cost: "$10.00",
  balance: "$100.00",
  type: "crypto",
  depositor: "Depositor Name",
};
describe("TradeScreen page testcases", () => {
  test("handleChange function updates tab value correctly", () => {
    const { getByRole } = render(<PortfolioScreen {...mockCryptoProps} />);
    const tab = getByRole("tab", { name: "1W" });
    act(() => {
      fireEvent.click(tab);
    });

    expect(tab).toHaveAttribute("aria-selected", "true");

    render(<StyledTitleTabs {...mockCryptoProps} />);
    const tab1 = screen.getByRole("tab", { name: "Wallet" });
    act(() => {
      fireEvent.click(tab1);
    });
    expect(tab1).toHaveAttribute("aria-selected", "true");
  });

  test("renders errors for trade screen", async () => {
    server.use(
      rest.get("http://localhost:3001/cryptoCurrency", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    render(
      <Router>
        <TradeScreen cryptoName="Bitcoin" />
      </Router>
    );
    await waitForElementToBeRemoved(screen.getByText("loading..."));
    const error = await screen.getByText("failed to fetch data");
    expect(error).toBeInTheDocument();
  });
  test("renders errors for search component", async () => {
    server.use(
      rest.get("http://localhost:3001/transactions", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    render(<SearchBar {...mockCryptoProps} />);
    await waitForElementToBeRemoved(screen.getByText("loading..."));
    const error = await screen.getByText("failed to fetch data");
    expect(error).toBeInTheDocument();
  });
  test("renders MyWalletTransaction component", async () => {
    render(<SearchBar {...mockCryptoProps} />);
    render(<MyWalletTransactions {...mockTransactionProps} />);

    const month = screen.getByText("Mar");
    expect(month).toBeInTheDocument();

    const day = screen.getByText("13");
    expect(day).toBeInTheDocument();
  });
  it("should display loading message while fetching data for search component", async () => {
    render(<SearchBar {...mockCryptoProps} />);
    expect(screen.getByText("loading...")).toBeInTheDocument();
    await waitFor(() => screen.queryByText("loading...") === null);
  });

  it("should display error message if data fetching failed for search component", async () => {
    server.use(
      rest.get("http://localhost:3001/transactions", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    render(<SearchBar {...mockCryptoProps} />);
    await waitFor(() =>
      expect(screen.getByText("failed to fetch data")).toBeInTheDocument()
    );
  });
  test("renders WatchlistedCryptoDetail component with fetched data", async () => {
    render(
      <Router>
        <TradeScreen cryptoName="Bitcoin" />
      </Router>
    );
    await waitFor(() =>
      expect(screen.queryByText("loading...")).not.toBeInTheDocument()
    );
    expect(screen.getByText("BTC")).toBeInTheDocument();
  });
  test("seachInput onchange event handler", async () => {
    render(<SearchBar {...mockCryptoProps} />);
    await waitFor(() =>
      expect(screen.queryByText("loading...")).not.toBeInTheDocument()
    );
    const searchInput = screen.getByRole("textbox");
    act(() => {
      userEvent.type(searchInput, "Badgley");
    });

    await waitFor(() => {
      const items = screen.getAllByText(/Badgley/i);
      expect(items.length).toBeGreaterThanOrEqual(0);
    });
  });
  it("renders the Total Balance component", () => {
    render(<TotalBalance {...mockCryptoProps} />);

    const cryptoBalanceText = screen.getByText("0.0234510 BTC ($85,553.73)");
    expect(cryptoBalanceText).toBeInTheDocument();
  });

  it("displays Ethereum balance when cryptoName prop is Ethereum", () => {
    render(<TotalBalance {...mockCryptoProps} cryptoName="Ethereum" />);

    const cryptoBalanceText = screen.getByText("0.5234510 ETH ($648.54)");
    expect(cryptoBalanceText).toBeInTheDocument();
  });
  it("should renders drop down component", async () => {
    render(<SearchBar {...mockCryptoProps} />);
    await waitFor(() =>
      expect(screen.queryByText("loading...")).not.toBeInTheDocument()
    );
    const fn = jest.fn();
    const dropDown = screen.queryByTestId("dropDown");
    expect(dropDown).toBeInTheDocument();
    if (dropDown?.firstChild) {
      fireEvent.keyDown(dropDown.firstChild, { key: "ArrowDown" });
      await screen.findByText("1W");
      const ele = screen.getByText("1W");
      act(() => {
        fireEvent.click(ele);
      });

      expect(fn).toHaveBeenCalledTimes(0);
    }
  });
});
