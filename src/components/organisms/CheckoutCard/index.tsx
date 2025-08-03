import { styled, Box, Grid, Stack } from "@mui/material";
import React from "react";
import TypographyComponent from "../../atoms/Typography";
import {
  BUY_NOW,
  formatCurrency,
  NOT_PURCHASED,
  PURCHASED,
  YOU_ARE_BUYING,
} from "../../utils/constants";
import theme from "../../../theme/theme";
import TransactionStepper from "../../molecules/TransactionsStepper";
import Icon from "../../atoms/Icon";
import dottedLine from "../../../../public/assets/images/orderSummary.svg";
import MuiButton from "../../atoms/Button";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router";

interface CryptoData {
  id: number;
  iconURL: string;
  cryptoName: string;
  price: string;
  type: string;
}
interface CheckoutCardProps {
  price?: number;
  items: CryptoData[];
}
const StyledBox = styled(Box)({
  width: "527px",
  border: `1px solid ${theme.palette.greyShade.grey100}`,
  borderRadius: "4px",
  background: theme.palette.semantic.main,
});
const TypographyGrid = styled(Grid)({
  paddingTop: "28px",
  paddingBottom: "32px",
  alignItems: "center",
  justifyContent: "center",
  margin: "0px",
  width: "100%",
  borderBottom: `1px solid ${theme.palette.greyShade.grey100}`,
});
const StepperBox = styled(Box)({
  padding: "24px 0 24px 24px",
  borderBottom: `1px solid ${theme.palette.greyShade.grey100}`,
});
const TotalBox = styled(Stack)({
  padding: "24px 0 70px 24px",
});
const renderOrderSummary = (
  leftValue: string,
  rightValue: string,
  width: string,
  bold: boolean
) => {
  return (
    <Stack direction="row" spacing={0}>
      <TypographyComponent
        variant={bold ? "body1" : "overline"}
        children={leftValue}
        color={theme.palette.textColor.highEmphasis}
        textTransform="none"
      />
      <Icon
        src={dottedLine}
        width={width}
        height={"5px"}
        padding={bold ? "0 0 1px 0" : "0 0 4px 0"}
      />
      <TypographyComponent
        variant={bold ? "body1" : "overline"}
        children={`${rightValue}`}
        color={theme.palette.textColor.highEmphasis}
        display="flex"
        justifyContent={"end"}
      />
    </Stack>
  );
};
const StyledMuiButton = styled(MuiButton)({
  width: "479px",
  height: "42px",
});
const typographyStyle = {
  color: theme.palette.textColor.mediumEmphasis,
};
const CheckoutCard: React.FC<CheckoutCardProps> = ({ price, ...props }) => {
  const cryptoData = useSelector(
    (state: { cryptoData: { value: { id: number } } }) => state.cryptoData.value
  );
  const lowerPrice = useSelector(
    (state: { lowerPrice: { val: { price: number } } }) => state.lowerPrice.val
  );
  const selectedDeliveryType = useSelector(
    (state: {
      dropDownData: { value: { type: string; time: string; fee: number } };
    }) => state.dropDownData.value
  );
  let amount =
    lowerPrice.price *
    +`${props.items[cryptoData.id].price}`.substring(1).replaceAll(",", "");
  let total = amount + 1000;
  const navigate = useNavigate();
  const postDataApi = async () => {
    try {
      const result = await axios.get("http://localhost:3001/wallets");
      let balance = +result.data[0].totalBalance
        .substring(1)
        .replaceAll(",", "");
      if (balance >= total) {
        await axios.patch(`http://localhost:3001/wallets/${1}`, {
          totalBalance: `$${balance - total}`,
        });
      }
      await axios.post("http://localhost:3001/transactions", {
        date: new Date().toISOString(),
        cryptoName: props.items[cryptoData.id].cryptoName,
        transactionState: balance >= total ? "success" : "error",
        depositor: "Badgley",
        status: balance >= total ? PURCHASED : NOT_PURCHASED,
        transactionAmountInBTC: `$${lowerPrice.price} ${
          props.items[cryptoData.id].type
        }`,
        transactionAmount: `$${total}`,
        deliveryFee: `${selectedDeliveryType.fee} ${
          props.items[cryptoData.id].type
        }`,
        transactionFee: "$1,000.00",
      });
      navigate(`/payment/${props.items[cryptoData.id].type}`);
    } catch (err) {}
  };
  return (
    <StyledBox data-testid="checkout-card">
      <TypographyGrid container spacing="12px" direction={"column"}>
        <Grid item xs={12}>
          <TypographyComponent
            variant="caption1"
            children={YOU_ARE_BUYING}
            style={typographyStyle}
          />
        </Grid>
        <Grid item xs={12}>
          <TypographyComponent
            variant="h6"
            children={`${lowerPrice.price} ${props.items[cryptoData.id].type}`}
          />
        </Grid>
        <Grid item xs={12}>
          <TypographyComponent
            variant="caption1"
            children={`${props.items[cryptoData.id].cryptoName} = ${
              props.items[cryptoData.id].price
            }`}
            style={typographyStyle}
          />
        </Grid>
      </TypographyGrid>
      <StepperBox>
        <TransactionStepper
          currencySymbol={props.items[cryptoData.id].type}
          cryptoName={props.items[cryptoData.id].cryptoName}
        />
      </StepperBox>
      <TotalBox spacing={2} direction={"column"} paddingRight="12px">
        {renderOrderSummary(
          `${lowerPrice.price} ${props.items[cryptoData.id].type}`,
          formatCurrency.format(amount),
          "330px",
          false
        )}
        {renderOrderSummary("transaction fee", "$1,000.00", "333px", false)}
        {renderOrderSummary(
          "Total",
          formatCurrency.format(total),
          "350px",
          true
        )}
        <StyledMuiButton
          variant="contained"
          children={BUY_NOW}
          data-testid="buynow"
          onClick={() => {
            postDataApi();
          }}
        />
      </TotalBox>
    </StyledBox>
  );
};
export default CheckoutCard;
