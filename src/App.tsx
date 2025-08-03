import { ThemeProvider } from "@mui/material";
import React, { useEffect, useState } from "react";
import theme from "./theme/theme";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import DashboardPage from "./components/pages/DashboardPage";
import TradePage from "./components/pages/TradePage";
import { useSelector } from "react-redux";  
import { TradeScreen } from "./components/pages/TradeScreen";
import axios from "axios";
import PurchasePage from "./components/pages/PurchaseScreen";
import { PaymentStatus } from "./components/organisms/PaymentStatus";
import {
  CRYPTO_BUTTON,
  MYPORTFOLIOVALUE,
  PAYMENT_MESSAGE,
} from "./components/utils/constants";

const App = () => {
  let [types, setTypes] = useState([""]);
  let [names, setNames] = useState([""]);
  const lowerPrice = useSelector(
    (state: { lowerPrice: { val: { price: number } } }) => state.lowerPrice.val
  );
  useEffect(() => {
    axios
      .get("http://localhost:3001/cryptoCurrency")
      .then((response) => {
        const data = response.data;
        const tempNames = data.map(
          (item: { cryptoName: any }) => item.cryptoName
        );
        setNames(tempNames);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("http://localhost:3001/chooseCrypto")
      .then((response) => {
        const data = response.data;
        const tempTypes = data.map((item: { type: any }) => item.type);
        setTypes(tempTypes);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Routes>
          <Route
            path="/"
            element={<DashboardPage leftText={MYPORTFOLIOVALUE} />}
          />
          <Route path="/trade-page" element={<TradePage />} />
          {names.map((name: string) => (
            <Route
              key={name}
              path={`/${name.toLowerCase()}`}
              element={<TradeScreen cryptoName={name} />}
            />
          ))}
          <Route path="/purchase-page" element={<PurchasePage />} />
          {types.map((type: string) => (
            <Route
              key={type}
              path={`/payment/${type.toLowerCase()}`}
              element={
                <PaymentStatus
                  value={`${lowerPrice.price} ${type}`}
                  message={PAYMENT_MESSAGE}
                  cryptoButton={CRYPTO_BUTTON}
                />
              }
            />
          ))}
        </Routes>
      </div>
    </ThemeProvider>
  );
};
export default App;
