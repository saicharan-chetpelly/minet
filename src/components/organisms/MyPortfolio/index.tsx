import React, { useEffect, useState } from "react";
import { Box, Divider, Grid, styled } from "@mui/material";
import TypographyComponent from "../../atoms/Typography";
import Icon from "../../atoms/Icon";
import theme from "../../../theme/theme";
import { TypographyProps } from "@mui/material/Typography";
import Bitcoin from "../../../../public/assets/images/bitcoin.svg";
import Ethereum from "../../../../public/assets/images/ethereum-logo.svg";
import Tether from "../../../../public/assets/images/tether-logo.svg";
import XRP from "../../../../public/assets/images/xrp-logo.svg";
import Ethereum2 from "../../../../public/assets/images/ethereum2-logo.svg";
import DodgeCoin from "../../../../public/assets/images/dodgeCoin-logo.svg";
import Cardano from "../../../../public/assets/images/cardano-logo.svg";
import Bitcoin2 from "../../../../public/assets/images/bitcoinCoin-logo.svg";
import USD from "../../../../public/assets/images/usdCoin-logo.svg";
import axios from "axios";
import { Image } from "../../atoms/Image";
import Rupee from "../../../../public/assets/images/rupee.svg";
import IconWithTypography from "../../molecules/IconTypo";
import { TOTAL_BALANCE, MY_WALLLETS } from "../../utils/constants";
import { useNavigate } from "react-router";
interface MyPortfolioProps extends TypographyProps {
  mainHead: string;
  imageOne: string;
  imageTwo: string;
}
const StyledWalletBox = styled(Box)({
  paddingTop: "24px",
});
const WalletAmountContainer = styled(Grid)({
  paddingTop: "22px",
});
const WalletContainer = styled(Grid)({
  paddingTop: "12px",
});
const StyledDivider = styled(Divider)({
  color: theme.palette.greyShade.grey100,
  borderWidth: "1px",
});
const StyledGrid = styled(Grid)({
  overflowY: "scroll",
  "&::-webkit-scrollbar": { width: "5px" },
  "&::-webkit-scrollbar-track": {
    backgroundColor: theme.palette.semantic.main,
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.greyShade.grey300,
    borderRadius: "30px",
  },
  paddingRight: "6px",
});
const StyledGrid1 = styled(Grid)({
  flexDirection: "column",
  paddingLeft: "12px",
});
const StyledGrid2 = styled(Grid)({
  flexDirection: "column",
  textAlign: "right",
  flexGrow: "1",
});
interface PortfolioData {
  id: number;
  iconURL: string;
  type: string;
  cryptoName: string;
  currencyValue: string;
  profitLoss: string;
}
interface WalletsData {
  id: number;
  iconURL: string;
  type: string;
  cryptoName: string;
  totalBalance: string;
}

const MyPortfolio = (props: MyPortfolioProps) => {
  const { mainHead, imageOne, imageTwo } = props;
  const getImagePath = (pathname: string): string => {
    switch (pathname) {
      case "BitcoinIcon":
        return Bitcoin;
      case "EthereumIcon":
        return Ethereum;
      case "TetherIcon":
        return Tether;
      case "XRPIcon":
        return XRP;
      case "BitcoinIcon2":
        return Bitcoin2;
      case "CardanoIcon":
        return Cardano;
      case "Ethereum2Icon":
        return Ethereum2;
      case "DodgeIcon":
        return DodgeCoin;
      case "USDIcon":
        return USD;
      case "USDCoinIcon":
        return Rupee;
      default:
        return "";
    }
  };
  const [items, setItems] = useState<PortfolioData[]>([
    {
      id: 0,
      iconURL: "",
      type: "",
      cryptoName: "",
      currencyValue: "",
      profitLoss: "",
    },
  ]);

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [walletsItems, setWallets] = useState<WalletsData[]>([
    {
      id: 0,
      iconURL: "",
      type: "",
      cryptoName: "",
      totalBalance: "",
    },
  ]);
  
  const navigate = useNavigate();
  useEffect(() => {
    const getDataApi = async () => {
      try {
        const result = await axios.get("http://localhost:3001/myPortfolio");
        const result2 = await axios.get("http://localhost:3001/wallets");
        setLoading(false);
        setItems(result.data);
        setWallets(result2.data);
      } catch (err) {
        setLoading(false);
        setError("Error fetching Data");
      }
    };
    getDataApi();
  }, []);
  
  const result =
    "$" +
    items.reduce(
      (total, currentValue) =>
        total + +currentValue.currencyValue.substring(1).replaceAll(",", ""),
      0
    );
  return loading ? (
    <h1 data-testid="header">Loading...</h1>
  ) : (
    <>
      {error && <p>{error}</p>}
      <Grid
        container
        direction={"column"}
        width={"398px"}
        padding="6.4px"
        display="flex"
        gap={3}
        sx={{ paddingRight: "46px" }}
      >
        <Grid
          container
          display={"flex"}
          justifyContent="space-between"
          alignItems={"center"}
        >
          <Grid item>
            <TypographyComponent
              children={mainHead}
              variant="body1"
              fontWeight={"bold"}
            />
          </Grid>
          <Grid item>
            <Grid container display={"flex"} alignItems={"center"} gap={1}>
              <Grid item pt={0.2}>
                <Icon src={imageOne} />
              </Grid>
              <Grid item>
                <Icon src={imageTwo} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <StyledGrid
          item
          display={"flex"}
          flexDirection="column"
          maxHeight="224px"
          sx={{ overflowY: "scroll" }}
        >
          {items.map((row) => (
            <Grid
              container
              sx={{
                padding: "8px 12px 8px 8px",
                maxWidth: "398px",
                boxShadow: "1px 2px 2px -1px rgb(0,0,0,8%)",
                cursor: "pointer",
              }}
              key={row.id}
              data-testid="itemId"
              onClick={() => {
                navigate(`/${row.cryptoName.toLowerCase()}`);
              }}
            >
              <Grid item columnSpacing="12px">
                <Image
                  data-testid="image1"
                  source={getImagePath(row.iconURL)}
                  alt="crypto"
                />
              </Grid>
              <StyledGrid1 item>
                <TypographyComponent
                  data-testid="cryptoCurrency"
                  variant="body1"
                  children={row.cryptoName}
                  fontWeight="bold"
                  color={theme.palette.textColor.highEmphasis}
                />
                <TypographyComponent
                  data-testid="type"
                  variant="caption2"
                  children={row.type}
                  color={theme.palette.textColor.mediumEmphasis}
                />
              </StyledGrid1>
              <StyledGrid2 item>
                <TypographyComponent
                  data-testid="currencyValue"
                  variant="body1"
                  children={row.currencyValue}
                  fontWeight="bold"
                  color={theme.palette.textColor.highEmphasis}
                />
                <TypographyComponent
                  data-testid="profitLoss"
                  variant="caption2"
                  children={row.profitLoss}
                  color={row.profitLoss.charAt(0)=="+"?theme.palette.semantic.success500:theme.palette.semantic.error500}
                />
              </StyledGrid2>
            </Grid>
          ))}
        </StyledGrid>
        <Grid item>
          <StyledDivider />
          <Grid
            container
            display={"flex"}
            justifyContent="space-between"
            paddingTop={3}
            paddingBottom={3}
          >
            <Grid item>
              <TypographyComponent
                children={TOTAL_BALANCE}
                variant="body1"
                fontWeight={"bold"}
                color={theme.palette.textColor.mediumEmphasis}
                paddingTop="12px"
                paddingBottom="12px"
              />
            </Grid>
            <StyledGrid item sx={{ paddingTop: "12px" }}>
              <TypographyComponent
                variant="body1"
                color={theme.palette.textColor.highEmphasis}
                fontWeight="bold"
              >
                {result}
              </TypographyComponent>
            </StyledGrid>
          </Grid>
          <StyledDivider />
          <StyledWalletBox>
            <TypographyComponent
              variant="subtitle1"
              children={MY_WALLLETS}
              color={theme.palette.textColor.highEmphasis}
              fontWeight="bold"
            />
            <WalletContainer container>
              <Grid item xs={6} paddingTop="12px">
                <IconWithTypography
                  image={getImagePath(walletsItems[0].iconURL)}
                  imageHeight={"42px"}
                  imageWidth={"42px"}
                  text={walletsItems[0].cryptoName}
                  textVariant="body1"
                  textColor={theme.palette.textColor.highEmphasis}
                  subText={walletsItems[0].type}
                  subTextVariant="caption2"
                  subTextColor={theme.palette.textColor.mediumEmphasis}
                />
              </Grid>
              <WalletAmountContainer
                item
                display={"flex"}
                justifyContent="flex-end"
                flexGrow="1"
              >
                <TypographyComponent
                  variant="body1"
                  children={`$${
                    Math.round(
                      +walletsItems[0].totalBalance.substring(1) * 100
                    ) / 100
                  }`}
                  color={theme.palette.textColor.highEmphasis}
                  fontWeight="bold"
                />
              </WalletAmountContainer>
            </WalletContainer>
          </StyledWalletBox>
        </Grid>
      </Grid>
    </>
  );
};
export default MyPortfolio;
