import { MyWalletTransactions } from ".";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import BitcoinIcon from "../../../../public/assets/images/bitcoin.svg";

import React from "react";
describe("MyWalletTransactions component", () => {
  const mockProps = {
    date: new Date("2022-03-13T04:20:00"),
    name: "Transaction Name",
    status: "success",
    icon: BitcoinIcon,
    cost: "$10.00",
    balance: "$100.00",
    type: "crypto",
    depositor: "Depositor Name",
  };

  it("should render the transaction details correctly", () => {
    render(<MyWalletTransactions {...mockProps} />);

    const month = screen.getByText("Mar");
    expect(month).toBeInTheDocument();

    const day = screen.getByText("13");
    expect(day).toBeInTheDocument();

    const icon = screen.getByRole("img");
    expect(icon).toHaveAttribute("src", mockProps.icon);
  });
});
