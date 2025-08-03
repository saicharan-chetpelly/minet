import { Box, Grid,Slider } from "@mui/material";
import MuiButton from "../../atoms/Button";
import TypographyComponent from "../../atoms/Typography";
import theme from "../../../theme/theme";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLowerData } from "../../../features/sliderLowerPrice";
import { setUpperData } from "../../../features/sliderUpperPrice";
interface CryptoData {
  id: number;
  iconURL: string;
  cryptoName: string;
  price: string;
  type: string;
}
interface BoxProps {
  outertxt: string;
  buttontext: string;
  btctext: string;
  items: CryptoData[];
}
export const AmountDetails = ({
  outertxt,
  btctext,
  buttontext,
  ...props
}: BoxProps) => {
  const lowerPrice = useSelector(
    (state: { lowerPrice: { val: { price: number } } }) => state.lowerPrice.val
  );
  const upperValue = useSelector(
    (state: { upperPrice: { value: { upperPrice: number } } }) =>
      state.upperPrice.value
  );
  const cryptoData = useSelector(
    (state: { cryptoData: { value: { id: number } } }) => state.cryptoData.value
  );
  const dispatch1 = useDispatch();
  const dispatch2 = useDispatch();
  const getData = (val: number) => {
    calculateAmount(val);
    dispatch1(setLowerData({ price: +val }));
  };
  const calculateAmount = (value: number) => {
    const updatedPrice = +props.items[cryptoData.id].price
      .substring(1)
      .replaceAll(",", "");
    const price = (value * updatedPrice).toLocaleString();
    dispatch2(setUpperData({ upperPrice: price }));
  };
  return (
    <Box
      border={`1px solid ${theme.palette.greyShade.grey100}`}
      width="720px"
      padding="24px"
      gap="12px"
      display="grid"
      borderRadius="4px"
    >
      <TypographyComponent variant="body1" fontWeight="bold">
        {outertxt}
      </TypographyComponent>
      <Box
        border={`1px solid ${theme.palette.greyShade.grey100}`}
        width="673px"
        borderRadius="4px"
        padding="16px"
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Grid item>
          <TypographyComponent
            variant="subtitle2"
            data-testId="upperPrice"
          >{`$${upperValue.upperPrice}`}</TypographyComponent>
        </Grid>
        <Grid item>
          <MuiButton
            variant="outlined"
            sx={{ height: "42px", width: "95px" }}
            onClick={() => {
              dispatch1(setLowerData({ price: 1 }));
              dispatch2(
                setUpperData({
                  upperPrice: `${props.items[cryptoData.id].price.substring(
                    1
                  )}`,
                })
              );
            }}
          >
            <TypographyComponent
              variant="button"
              textTransform="none"
              color={`${theme.palette.primary.primary500}`}
            >
              {buttontext}
            </TypographyComponent>
          </MuiButton>
        </Grid>
      </Box>
   <Grid item display={"flex"}>
        <Grid item>
          <Slider
            min={0}
            max={1}
            value={lowerPrice.price}
            step={0.000001}
            size="small"
            orientation="vertical"
            onChange={(e, val: any) => {
              getData(val);
            }}
            sx={{
              height: "90px",
              color: `${theme.palette.textColor.lowEmphasis}`,
              marginLeft: "2rem",
              marginTop: "-0.8rem",
              mb: "-1rem",
            }}
            data-testid="slider"
          />
        </Grid>
        <Grid item mt={2}>
          <TypographyComponent
            variant="caption1"
            color={`${theme.palette.textColor.mediumEmphasis}`}
          >
            {`1${props.items[cryptoData.id].type}= ${
              props.items[cryptoData.id].price
            }`}
          </TypographyComponent>
        </Grid>
      </Grid>
      <Box
        border=" 1px solid #E8E8F7"
        borderRadius="4px"
        width="673px"
        padding="16px"
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Grid item>
          <TypographyComponent variant="subtitle2" data-testid="lowerPrice">
            {lowerPrice.price}
          </TypographyComponent>
        </Grid>
        <Grid item>
          <TypographyComponent
            variant="body2"
            color={`${theme.palette.textColor.mediumEmphasis}`}
          >
            {btctext}
          </TypographyComponent>
        </Grid>
      </Box>
    </Box>
  );
};
