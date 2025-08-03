import { Box, styled } from "@mui/material";
import React from "react";
import Icon from "../../atoms/Icon";
import Transport from "../../../../public/assets/images/delivery.svg";
import TypographyComponent from "../../atoms/Typography";
import Stepper from "../../../../public/assets/images/stepper.svg";
import Wallet from "../../../../public/assets/images/wallet.svg";
import BankCard from "../../../../public/assets/images/bank-card.svg";
import theme from "../../../theme/theme";
import { transactionHistoryStepper } from "../../utils/constants";
import { useSelector } from "react-redux";
const OuterBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "2px",
  alignContent: "center",
  marginTop: "5px",
}));
const ImageBox = styled(Box)(() => ({
  backgroundColor: theme.palette.greyShade.grey100,
  borderRadius: "50%",
  width: "42px",
  height: "42px",
}));
const InnerBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  gap: "8px",
  alignItems: "center",
}));
interface Props {
  currencySymbol?: string;
  cryptoName:string;
}
const TransactionStepper = ({ currencySymbol,cryptoName }: Props) => {
  const selectedDeliveryType = useSelector(
    (state: {
      dropDownData: { value: { type: string; time: string; fee: number } };
    }) => state.dropDownData.value
  );
  return (
    <div>
      <OuterBox data-testid="transaction-stepper">
        <InnerBox>
          <ImageBox>
            <Icon height="32px" width="32px" padding="5px 6px" src={BankCard} />
          </ImageBox>
          <OuterBox>
            <TypographyComponent
              variant="caption2"
              style={{ color: theme.palette.textColor.mediumEmphasis }}
            >
              {transactionHistoryStepper.step1[0]}
            </TypographyComponent>
            <TypographyComponent
              variant="body1"
              style={{ color: theme.palette.textColor.highEmphasis }}
              data-testid="typo1"
            >
              {transactionHistoryStepper.step1[1]}
            </TypographyComponent>
          </OuterBox>
        </InnerBox>
        <Icon
          height="40px"
          width="40px"
          src={Stepper}
          data-testid="delivery-icon"
        />
        <InnerBox>
          <ImageBox>
            <Icon
              height="32px"
              width="32px"
              padding="5px 6px"
              src={Transport}
            />
          </ImageBox>
          <OuterBox>
            <TypographyComponent
              variant="caption2"
              style={{ color: theme.palette.textColor.mediumEmphasis }}
            >
              {transactionHistoryStepper.step2[0]}
            </TypographyComponent>
            <TypographyComponent
              variant="body1"
              style={{ color: theme.palette.textColor.highEmphasis }}
              data-testid="currencyId"
            >
              {selectedDeliveryType.fee} {currencySymbol}
            </TypographyComponent>
          </OuterBox>
        </InnerBox>
        <Icon height="40px" width="40px" src={Stepper} />
        <InnerBox>
          <ImageBox>
            <Icon height="32px" width="32px" padding="5px 6px" src={Wallet} />
          </ImageBox>
          <OuterBox>
            <TypographyComponent
              variant="caption2"
              style={{ color: theme.palette.textColor.mediumEmphasis }}
            >
              {transactionHistoryStepper.step3[0]}
            </TypographyComponent>
            <TypographyComponent
              variant="body1"
              style={{ color: theme.palette.textColor.highEmphasis }}
              data-testid="walletId"
            >
              
              {`${cryptoName} wallet`}
            </TypographyComponent>
          </OuterBox>
        </InnerBox>
      </OuterBox>
    </div>
  );
};
export default TransactionStepper;
