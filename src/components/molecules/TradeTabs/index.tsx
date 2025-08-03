import React from "react";
import { Stack, styled, TableCell, TableRow, IconButton } from "@mui/material";
import TypographyComponent from "../../atoms/Typography";
import { Image } from "../../atoms/Image";
import Icon from "../../atoms/Icon";
import theme from "../../../theme/theme";
import WatchEmptyStar from "../../../../public/assets/images/watch.svg";
import WatchStar from "../../../../public/assets/images/watchstar.svg";
import BitCoin from "../../../../public/assets/images/bitcoin.svg";
import Ethereum from "../../../../public/assets/images/ethereum-logo.svg";
import Ethereum2 from "../../../../public/assets/images/ethereum2-logo.svg";
import Tether from "../../../../public/assets/images/tether-logo.svg";
import Bitcoin2 from "../../../../public/assets/images/bitcoinCoin-logo.svg";
import Cardano from "../../../../public/assets/images/cardano-logo.svg";
import XRP from "../../../../public/assets/images/xrp-logo.svg";
import DogdeIcon from "../../../../public/assets/images/dodgeCoin-logo.svg";
import USD from "../../../../public/assets/images/usdCoin-logo.svg";
import Polkadot from "../../../../public/assets/images/polkadot-logo.svg";
import { useNavigate } from "react-router";

interface DataProps {
  id: number;
  iconURL: string;
  cryptoName: string;
  type: string;
  price: string;
  change: string;
  marketCap: string;
  Vol24H?: string;
  circulatingSupply?: string;
  profitloss: string;
  isWatchlisted: boolean;
}
type CryptoDataProps = {
  cryptoData: DataProps;
  toggleStatus: (id: number) => void;
};

const StyledTableCell = styled(TableCell)({
  padding: "16px 16px 16px 0px",
  borderBottom: `1px solid ${theme.palette.greyShade.grey100}`,
  borderTop: `1px solid ${theme.palette.greyShade.grey100}`,
});

const TradeTabs = (props: CryptoDataProps) => {
  const { cryptoData, toggleStatus } = props;
  const navigate = useNavigate();
  const profitOrLoss =
    cryptoData.profitloss.charAt(0) === "+"
      ? theme.palette.semantic.success500
      : theme.palette.semantic.error500;

  const ImagePath = (path: string) => {
    switch (path) {
      case "BitcoinIcon":
        return BitCoin;
      case "EthereumIcon":
        return Ethereum;
      case "Ethereum2Icon":
        return Ethereum2;
      case "TetherIcon":
        return Tether;
      case "BitcoinCoin":
        return Bitcoin2;
      case "CardanoIcon":
        return Cardano;
      case "XRPIcon":
        return XRP;
      case "DodgeCoinIcon":
        return DogdeIcon;
      case "USDCoinIcon":
        return USD;
      case "PolkadotIcon":
        return Polkadot;
      default:
        return "";
    }
  };
  const clickHandler = () => {
    navigate(`/${cryptoData.cryptoName.toLowerCase()}`);
  };

  return (
    <TableRow
      onClick={clickHandler}
      key={cryptoData.id}
      sx={{
        backgroundColor: theme.palette.warning.contrastText,
        cursor: "pointer",
      }}
      data-testid="rowItem"
    >
      <TableCell
        sx={{
          borderLeft: `1px solid ${theme.palette.greyShade.grey100}`,
          borderTop: `1px solid ${theme.palette.greyShade.grey100}`,
          width:"350px",
        }}
      >
        <Stack direction="row" alignItems="center">
          <Image source={ImagePath(cryptoData.iconURL)} alt="cryptoImages" />
          <Stack direction="column" paddingLeft="12px">
            <TypographyComponent
              variant="body1"
              children={cryptoData.cryptoName}
            />
            <TypographyComponent
              fontSize="12px"
              color={theme.palette.textColor.mediumEmphasis}
              children={cryptoData.type}
            />
          </Stack>
        </Stack>
      </TableCell>
      <StyledTableCell>
        <TypographyComponent variant="body2" children={cryptoData.price} sx={{width:"337px"}}/>
      </StyledTableCell>
      <StyledTableCell>
        <TypographyComponent
          variant="body2"
          color={profitOrLoss}
          children={cryptoData.change}
          sx={{width:"239px"}}
        />
      </StyledTableCell>
      <StyledTableCell>
        <TypographyComponent variant="body2" children={cryptoData.marketCap} sx={{width:"237px"}}/>
      </StyledTableCell>
      <StyledTableCell
        sx={{ borderRight: `1px solid ${theme.palette.greyShade.grey100}` }}
      >
        <IconButton
          onClick={(event) => {
            event.stopPropagation();
            toggleStatus(cryptoData.id);
          }}
        >
          {cryptoData.isWatchlisted ? (
            <Icon src={WatchStar} />
          ) : (
            <Icon src={WatchEmptyStar} />
          )}
        </IconButton>
      </StyledTableCell>
    </TableRow>
  );
};
export default TradeTabs;
