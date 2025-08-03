import TypographyComponent from "../../atoms/Typography";
import React,{useState} from "react";
import Box from "@mui/material/Box";
import { ChooseCrypto } from "../../molecules/CryptoCard";
import Grid from "@mui/material/Grid";
import Bitcoin from "../../../../public/assets/images/bitcoin-crypto.svg";
import Ethereum from "../../../../public/assets/images/ethereum-crypto.svg";
import Cardano from "../../../../public/assets/images/cardano-crypto.svg";
import Dogecoin from "../../../../public/assets/images/dodge-crypto.svg";
import Polkadot from "../../../../public/assets/images/polkadot-crypto.svg";
import Theter from "../../../../public/assets/images/tether-crypto.svg";
import Xrp from "../../../../public/assets/images/xrp-crypto.svg";
import Binance from "../../../../public/assets/images/Binance.svg";
import UsdCoin from "../../../../public/assets/images/usdCoin-logo.svg";
import theme from "../../../theme/theme";
import DoneIcon from "@mui/icons-material/Done";
import { styled } from "@mui/material";
import { useDispatch } from "react-redux";
import  { selectData } from "../../../features/cryptoData";
import { selectType } from "../../../features/dropDownData";
import { setLowerData } from "../../../features/sliderLowerPrice";
import { setUpperData } from "../../../features/sliderUpperPrice";
interface CryptoData {
  id: number;
  iconURL: string;
  cryptoName: string;
  price: string;
  deliveryFee: number;
}
interface BuyCryptoProps {
  subTitle: string;
  boxTitle: string;
  items: CryptoData[];
}

const StyledGrid = styled(Grid)({
  overflowY: "scroll",
  "&::-webkit-scrollbar": { width: "4.8px" },
  "&::-webkit-scrollbar-track": {
    backgroundColor: theme.palette.semantic.main,
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.greyShade.grey300,
    borderRadius: "30px",
  },
  paddingRight: "10px",
});
export const BuyCrypto = (props: BuyCryptoProps) => {
  const dispatch = useDispatch();
  const dispatch2 = useDispatch();
  const getImagePath = (pathname: string): string => {
    switch (pathname) {
      case "BitCoinIcon":
        return Bitcoin;
      case "EthereumIcon":
        return Ethereum;
      case "TetherIcon":
        return Theter;
      case "XRPIcon":
        return Xrp;
      case "PolkadotIcon":
        return Polkadot;
      case "CardanoIcon":
        return Cardano;
      case "DodgeCoinIcon":
        return Dogecoin;
      case "BinanceIcon":
        return Binance;
      default:
        return UsdCoin;
    }
  };
  const [selected, setSelected] = useState(props.items.map(() => false));
  const handleClick = (index: number) => {
    const newSelected = [...selected];
    newSelected.forEach((val, i) => {
      if (val) {
        newSelected[i] = false;
      }
    });
    newSelected[index] = true;
    setSelected(newSelected);
    dispatch(selectData({ id: index }));
    dispatch2(
      selectType({
        type: "Instant",
        time: "2-5 min",
        fee: `${props.items[index].deliveryFee}`,
      })
    );
    dispatch(setLowerData({ price: 0 }));
    dispatch(setUpperData({ upperPrice: 0 }));
  };
  return (
    <>
      <TypographyComponent
        variant="subtitle1"
        sx={{ padding: "12px 0px 12px 0px" }}
        fontWeight="bold"
        data-testid="title"
      >
        {props.subTitle}
      </TypographyComponent>
      <Box
        border={`1px solid ${theme.palette.greyShade.grey100}`}
        width="720px"
        padding="24px"
        gap="16px"
        display="grid"
        borderRadius="4px"
      >
        <Grid item>
          <TypographyComponent variant="body1" fontWeight="bold">
            {props.boxTitle}
          </TypographyComponent>
        </Grid>
        <StyledGrid
          item
          display={"flex"}
          flexDirection="column"
          gap={3}
          maxHeight="320px"
          sx={{ overflowY: "scroll" }}
        >
          <Grid item display={"flex"}>
            <Grid item container>
              {props.items.map((values, index) =>
                selected[index] ? (
                  <Grid
                    container
                    width="159px"
                    height="156px"
                    padding="24px"
                    gap="12px"
                    xs={12}
                    sm={6}
                    md={3}
                    direction="row"
                    border={`2px solid ${theme.palette.primary.primary500}`}
                    borderRadius="4px"
                    alignItems={"center"}
                    justifyContent="center"
                    key={values.id}
                  >
                    <ChooseCrypto
                      imageSource={getImagePath(values.iconURL)}
                      imageAlt="cryptos"
                      cryptoText={values.cryptoName}
                      cryptoPayment={values.price}
                    />
                    <DoneIcon
                      color="success"
                      sx={{ position: "relative", mt: "-224px", ml: "112px" }}
                      data-testId="selectIcon"
                    />
                  </Grid>
                ) : (
                  <Grid
                    container
                    padding="24px"
                    gap="12px"
                    xs={12}
                    sm={6}
                    md={3}
                    direction="row"
                    alignItems={"center"}
                    justifyContent="center"
                    data-testId="card"
                    onClick={() => {
                      handleClick(index);
                    }}
                    key={values.id}
                  >
                    <ChooseCrypto
                      imageSource={getImagePath(values.iconURL)}
                      imageAlt="cryptos"
                      cryptoText={values.cryptoName}
                      cryptoPayment={values.price}
                    />
                  </Grid>
                )
              )}
            </Grid>
          </Grid>
        </StyledGrid>
      </Box>
    </>
  );
};
