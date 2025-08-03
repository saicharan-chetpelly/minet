import { Box, Grid, Stack } from "@mui/material";
import { AmountDetails } from "../../organisms/AmountDetailsCard";
import CheckoutCard from "../../organisms/CheckoutCard";
import PaymentAndDetailsCard from "../../organisms/PaymentAndDetailsCard";
import DeliveryDropdown from "../../organisms/DeliveryDropdown";
import { BuyCrypto } from "../../organisms/CryptoSelect";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  AMOUNT_DETAILS,
  BTC,
  BUY_CRYPTO,
  BUY_MAX,
  CHECKOUT,
  CHOOSE_CRYPTO,
  deliveryTypes,
  PAYMENT_METHOD,
} from "../../utils/constants";
import NavigationBar from "../../organisms/NavigationBar";
import ApplicationHeader from "../../organisms/ApplicationHeader";
import Footer from "../../molecules/Footer";

interface CryptoDataItems {
  id: number;
  iconURL: string;
  cryptoName: string;
  price: string;
  type: string;
  deliveryFee: number;
}
const PurchasePage = () => {
  const [items, setItems] = useState<CryptoDataItems[]>([
    {
      id: 0,
      iconURL: "",
      cryptoName: "",
      price: "",
      type: "",
      deliveryFee: 0.001,
    },
  ]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const getDataApi = async () => {
      try {
        const result = await axios.get("http://localhost:3001/chooseCrypto");
        setIsLoading(false);
        setItems(result.data);
      } catch (err) {
        setIsLoading(false);
        setErrorMessage("Error");
      }
    };
    getDataApi();
  }, []);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div data-testid="purchase-page">
      {errorMessage && <p data-testId="para">{errorMessage}</p>}
      <Stack direction="row">
        <NavigationBar />
        <Stack flexGrow={1}>
          <ApplicationHeader isButtonsRequired={true} headerTitle={CHECKOUT} />
          <Box width="1200px" paddingLeft={"30px"}>
            <Grid container display={"flex"} justifyContent="space-between">
              <Grid
                item
                xs={7.5}
                sx={{ paddingTop: "24px", paddingBottom: "24px" }}
              >
                <Grid container direction={"column"} gap={3}>
                  <Grid item>
                    <BuyCrypto
                      subTitle={BUY_CRYPTO}
                      boxTitle={CHOOSE_CRYPTO}
                      items={items}
                    />
                  </Grid>
                  <Grid item>
                    <PaymentAndDetailsCard title={PAYMENT_METHOD} />
                  </Grid>
                  <Grid item>
                    <AmountDetails
                      outertxt={AMOUNT_DETAILS}
                      buttontext={BUY_MAX}
                      btctext={BTC}
                      items={items}
                    />
                  </Grid>
                  <Grid item>
                    <DeliveryDropdown
                      items={items}
                      deliveryTypes={deliveryTypes}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={4} paddingLeft="24px">
                <CheckoutCard items={items} />
              </Grid>
            </Grid>
          </Box>
          <Footer />
        </Stack>
      </Stack>
    </div>
  );
};
export default PurchasePage;
