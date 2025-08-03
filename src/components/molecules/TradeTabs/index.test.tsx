import { fireEvent, getByTestId, render, screen, within } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import TradeTabs from ".";
import { BrowserRouter as Router } from "react-router-dom";
describe("Ttesting for the tradetabs component",()=>{
test("Trade tabs renders correctly", () => {
  render(
    <Router>
    <TradeTabs
      cryptoData={{
        id: 2,
        iconURL: "EthereumIcon",
        cryptoName: "Ethereum",
        type: "ETH",
        price: "$1,297.93",
        change: "-5.49%",
        marketCap: "$25.4T",
        Vol24H: "$11.5B",
        circulatingSupply: "122.60M ETH",
        profitloss: "+0.64%",
        isWatchlisted: false,
      }}
      toggleStatus={() => console.log("item is added to watch list")}
    />
    </Router>
  );
  const row = screen.getByRole("row", {
    name: /cryptoImages ethereum eth \$1,297\.93 \-5\.49% \$25\.4t icon/i,
  });
  expect(row).toBeInTheDocument();
  fireEvent.click(
    within(row).getByRole("img", {
      name: /icon/i,
    })
  );

});
  test("testing whether the onclick event navigates to the expected page or not",()=>{
   render( <Router>
    <TradeTabs
      cryptoData={{
        id: 2,
        iconURL: "EthereumIcon",
        cryptoName: "Ethereum",
        type: "ETH",
        price: "$1,297.93",
        change: "+5.49%",
        marketCap: "$25.4T",
        Vol24H: "$11.5B",
        circulatingSupply: "122.60M ETH",
        profitloss: "+0.64%",
        isWatchlisted: false,
      }}
      toggleStatus={() => console.log("item is added to watch list")}
    />
    </Router>);
    const rowElement=screen.getByTestId("rowItem");
      fireEvent.click(rowElement)
  })
  test("testing for all the images",()=>{
    const mockCryptoData={
      id: 2,
      iconURL: "EthereumIcon",
      cryptoName: "Ethereum",
      type: "ETH",
      price: "$1,297.93",
      change: "-5.49%",
      marketCap: "$25.4T",
      Vol24H: "$11.5B",
      circulatingSupply: "122.60M ETH",
      profitloss: "-0.64%",
      isWatchlisted: true,
    }
    render( <Router>
     <TradeTabs
       cryptoData={mockCryptoData}
       toggleStatus={() => console.log("item is added to watch list")}
     />
     </Router>);
    const images = [
      'BitcoinIcon',
      'Ethereum2Icon',
      'TetherIcon',
      'BitcoinCoin',
      'CardanoIcon',
      'XRPIcon',
      'DodgeCoinIcon',
      'USDCoinIcon',
      'PolkadotIcon',
      ''
    ];

    images.forEach((iconURL) => {
      const cryptoData = { ...mockCryptoData, iconURL };
     render(<Router><TradeTabs cryptoData={cryptoData} toggleStatus={() => {}} /></Router>);
      const expectedAltName=screen.getAllByAltText("cryptoImages")
      expect(expectedAltName.length).toBeGreaterThanOrEqual(2)

     });
   })

})