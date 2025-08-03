import React, { useState, useEffect } from "react";
import { CryptoCurrencyProps } from "../../pages/TradeScreen";
import BitcoinIcon from "../../../../public/assets/images/bitcoin.svg";
import CardanoIcon from "../../../../public/assets/images/Cardano.svg";
import DogecoinIcon from "../../../../public/assets/images/Dogecoin.svg";
import EthereumIcon from "../../../../public/assets/images/Ethereum.svg";
import Ethereum2Icon from "../../../../public/assets/images/Ethereum2.svg";
import PolkadotIcon from "../../../../public/assets/images/Polkadot.svg";
import TetherIcon from "../../../../public/assets/images/Tether.svg";
import USDCoinIcon from "../../../../public/assets/images/USD Coin.svg";
import XRPIcon from "../../../../public/assets/images/XRP.svg";
import BitcoinCoinIcon from "../../../../public/assets/images/BitcoinCoin.svg";
import ErrorIcon from "../../../../public/assets/images/transaction-error.svg";
import Success from "../../../../public/assets/images/transaction-success.svg";
import Warning from "../../../../public/assets/images/transaction-warning.svg";
import WebsiteIcon from "../../../../public/assets/images/website.svg";
import PaperWorkIcon from "../../../../public/assets/images/paperwork.svg";
import styled from "@emotion/styled";
import { Box } from "@mui/system";
import axios from "axios";
import Stack from "@mui/material/Stack";
import TypographyComponent from "../../atoms/Typography";
import theme from "../../../theme/theme";
import IconWithTypography from "../../molecules/IconTypo";
import Icon from "../../atoms/Icon";

import {
  RESOURCES,
  ABOUT,
  CRYPTOCONTENT,
  PRICE_CORRELATION_WITH,
  OFFICIAL_WEBSITE,
  MOVES_TIGHTLY_TOGETHER,
  WHITE_PAPER,
} from "../../utils/constants";
interface PortfolioCardProps {
  image: string;
  text: string;
  subText: string;
  cuurencyValue: string;
  profitOrLoss: string;
}
const CustomStackPortfolioCard = styled(Stack)({
  minHeight: "50px",
  maxHeight: "244px",
  width: "397px",

  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.greyShade.grey300,
    borderRadius: "30px",
  },
  overflowY: "scroll",
  "&::-webkit-scrollbar": { width: "5px" },
  "&::-webkit-scrollbar-track": {
    backgroundColor: theme.palette.semantic.main,
  },
});

export const PortfolioCard = (props: PortfolioCardProps) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      paddingBottom="20px"
    >
      <Stack direction="row" alignItems="center">
        <Icon src={props.image} width="42px" height="42px" />
        <Stack marginLeft="10px">
          <TypographyComponent
            variant="body1"
            color={theme.palette.textColor.highEmphasis}
            fontWeight="600"
          >
            {props.text}
          </TypographyComponent>
          <TypographyComponent
            variant="caption2"
            color={theme.palette.textColor.mediumEmphasis}
          >
            {props.subText}
          </TypographyComponent>
        </Stack>
      </Stack>

      <Stack alignItems="flex-end">
        <TypographyComponent
          variant="body1"
          color={theme.palette.textColor.highEmphasis}
        >
          {props.cuurencyValue}
        </TypographyComponent>
        <TypographyComponent
          variant="caption2"
          color={theme.palette.textColor.mediumEmphasis}
        >
          {props.profitOrLoss}
        </TypographyComponent>
      </Stack>
    </Stack>
  );
};
export const getImagePath = (pathname: string): string => {
  switch (pathname) {
    case "BitcoinIcon":
      return BitcoinIcon;
    case "EthereumIcon":
      return EthereumIcon;
    case "Ethereum2Icon":
      return Ethereum2Icon;
    case "TetherIcon":
      return TetherIcon;
    case "BitcoinCoin":
      return BitcoinCoinIcon;
    case "CardanoIcon":
      return CardanoIcon;
    case "XRPIcon":
      return XRPIcon;
    case "DodgeCoinIcon":
      return DogecoinIcon;
    case "USDCoinIcon":
      return USDCoinIcon;
    case "PolkadotIcon":
      return PolkadotIcon;
    case "success":
      return Success;
    case "warning":
      return Warning;
    default:
      return ErrorIcon;
  }
};
export const CryptoInfoFooter = (props: CryptoCurrencyProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [data, setData] = useState([
    {
      id: 1,
      iconURL: "",
      cryptoName: "",
      type: "",
      price: "",
      change: "",
      marketCap: "",
      Vol24H: "",
      circulatingSupply: "",
      profitloss: "",
      isWatchlisted: false,
    },
  ]);
  useEffect(() => {
    const getDataApi = async () => {
      try {
        const result = await axios.get("http://localhost:3001/cryptoCurrency");
        setIsLoading(false);
        setData(result.data);
      } catch (err) {
        setIsLoading(false);
        setErrorMessage("failed to fetch data");
        console.log(err);
      }
    };
    getDataApi();
  }, []);
  return isLoading ? (
    <h1>loading...</h1>
  ) : (
    <>
      {errorMessage && <p>{errorMessage}</p>}
      <Stack direction="row" justifyContent="space-between">
        <Stack width="816px">
          <Stack marginBottom="24px">
            <Stack>
              <TypographyComponent
                variant="body1"
                color={theme.palette.textColor.highEmphasis}
                marginBottom="8px"
                fontWeight="600"
              >
                {ABOUT} {props.cryptoName}
              </TypographyComponent>
              <TypographyComponent variant="body2" color="#000000">
                {CRYPTOCONTENT}
              </TypographyComponent>
            </Stack>
          </Stack>
          <Stack>
            <TypographyComponent
              variant="body1"
              color={theme.palette.textColor.highEmphasis}
              marginBottom="8px"
              fontWeight="600"
            >
              {RESOURCES}
            </TypographyComponent>
            <IconWithTypography
              image={WebsiteIcon}
              imageWidth="20px"
              imageHeight="20px"
              text={OFFICIAL_WEBSITE}
              textColor={theme.palette.primary.main}
              textVariant="body2"
              margin="6px"
            />

            <IconWithTypography
              image={PaperWorkIcon}
              imageWidth="20px"
              imageHeight="20px"
              text={WHITE_PAPER}
              textColor={theme.palette.primary.main}
              textVariant="body2"
              margin="6px"
            />
          </Stack>
        </Stack>
        <Stack
          width="397px"
          sx={{
            border: `1px solid ${theme.palette.greyShade.grey100}`,
            borderRadius: "4px",
          }}
        >
          <TypographyComponent
            variant="subtitle1"
            color={theme.palette.textColor.highEmphasis}
            padding="16px 0px 16px 28px"
            sx={{ fontWeight: "600" }}
          >
            {PRICE_CORRELATION_WITH}
          </TypographyComponent>
          <CustomStackPortfolioCard>
            <Box padding="0 24px 0 28px">
              {data.map((item) => (
                <PortfolioCard
                  key={item.id}
                  image={getImagePath(item.iconURL)}
                  text={item.cryptoName}
                  subText={MOVES_TIGHTLY_TOGETHER}
                  cuurencyValue={item.price}
                  profitOrLoss={item.profitloss}
                />
              ))}
            </Box>
          </CustomStackPortfolioCard>
        </Stack>
      </Stack>
    </>
  );
};
