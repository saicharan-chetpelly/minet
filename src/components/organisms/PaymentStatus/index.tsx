import { Grid, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import MuiButton from "../../atoms/Button";
import TypographyComponent from "../../atoms/Typography";
import Success from "../../../../public/assets/images/transaction-success.svg";
import Error from "../../../../public/assets/images/transaction-error.svg";
import {
  CHECKOUT,
  GO_TO_USD_COIN,
  PAYMENT_FAIL,
  PAYMENT_SUCCESS,
} from "../../utils/constants";
import NavigationBar from "../NavigationBar";
import Footer from "../../molecules/Footer";
import ApplicationHeader from "../ApplicationHeader";
import axios from "axios";
import { Image } from "../../atoms/Image";

interface BuyProps {
  value: string;
  message: string;
  cryptoButton: string;
}

export const PaymentStatus = (props: BuyProps) => {
  const { value, cryptoButton } = props;
  let [balance, setBalance] = useState(0);
  let [total, setTotal] = useState(1000);
  const [loadWalletData, setLoadWalletData] = useState(true);
  const [errorMessage1, setErrorMessage1] = useState<string | null>(null);
  const cryptoButtonHandler = () => {
    console.log(`${cryptoButton} clicked`);
  };
  const goToUSDHandler = () => {
    console.log("Go to USD clicked");
  };
  useEffect(() => {
    const getDataApi = async () => {
      try {
        await axios.get("http://localhost:3001/wallets").then((result) => {
          const updatedBalance =
            balance +
            result.data[0].totalBalance.substring(1).replaceAll(",", "");
          setBalance(updatedBalance);
        });

        await axios.get("http://localhost:3001/transactions").then((result) => {
          const updatedTotal =
            total +
            +result.data[result.data.length - 1].transactionAmount
              .substring(1)
              .replaceAll(",", "");
          setTotal(updatedTotal);
        });
        setLoadWalletData(false);
      } catch (err) {
        setLoadWalletData(false);
        setErrorMessage1("failed to fetch data");
        console.log(err);
      }
    };
    getDataApi();
  }, []);
  return loadWalletData ? (
    <h1>loading...</h1>
  ) : (
    <>
      {errorMessage1 && <p>{errorMessage1}</p>}
      <Stack direction="row">
        <NavigationBar />
        <Stack flexGrow={1}>
          <ApplicationHeader isButtonsRequired={true} headerTitle={CHECKOUT} />
          <Grid
            container
            spacing={2}
            direction="column"
            alignItems={"center"}
            padding={"154px 50px 130px 50px"}
          >
            <Grid item>
              <Image
                source={balance >= total ? Success : Error}
                width={"64px"}
                height={"64px"}
                alt={balance >= total ? "success" : "error"}
              />
            </Grid>
            <Grid item>
              <TypographyComponent
                variant="heading4"
                fontWeight="600"
                children={value}
              />
            </Grid>
            <Grid item width={330}>
              <TypographyComponent
                variant="body2"
                children={balance >= total ? PAYMENT_SUCCESS : PAYMENT_FAIL}
                align={"center"}
                data-testid="payment-message"
              />
            </Grid>
            <Grid item>
              <Grid container columnGap={5}>
                <MuiButton
                  variant="outlined"
                  children={cryptoButton}
                  style={{
                    marginTop: "30px",
                    fontWeight: "600",
                    border: "1px solid",
                    width: "126px",
                    height: "42px",
                  }}
                  onClick={cryptoButtonHandler}
                />
                <MuiButton
                  variant="contained"
                  children={GO_TO_USD_COIN}
                  style={{
                    marginTop: "30px",
                    width: "154px",
                    height: "42px",
                  }}
                  onClick={goToUSDHandler}
                />
              </Grid>
            </Grid>
          </Grid>
          <Footer />
        </Stack>
      </Stack>
    </>
  );
};
