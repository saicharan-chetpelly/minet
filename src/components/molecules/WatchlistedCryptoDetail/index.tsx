import React from "react";
import TypographyComponent from "../../atoms/Typography";
import Stack from "@mui/material/Stack";
import { CryptoCurrencyProps } from "../../pages/TradeScreen";
import theme from "../../../theme/theme";
import Icon from "../../atoms/Icon";
import { Grid } from "@mui/material";
import { StyledGrid } from "../MyPortfolioValueBar";
import ProfitIcon from "../../../../public/assets/images/profit.svg";
import IconWithTypography from "../IconTypo";
import StarFilled from "../../../../public/assets/images/filled-star.svg";
import Divider from "@mui/material/Divider";
import {
  ADDED_TO_WATCHLIST,
  CIRCULATING_SUPPLY,
  MARKET_CAP,
  Vol24H,
} from "../../utils/constants";
interface ColumStackProps {
  title?: string;
  value?: string;
}
const ColumnStack = (props: ColumStackProps) => {
  return (
    <Stack justifyContent="center" marginRight={"24px"}>
      <TypographyComponent
        variant="caption1"
        color={theme.palette.textColor.mediumEmphasis}
        sx={{ paddingBottom: "4px" }}
      >
        {props.title}
      </TypographyComponent>
      <TypographyComponent
        color={theme.palette.textColor.highEmphasis}
        fontWeight="600"
        variant="body2"
      >
        {props.value}
      </TypographyComponent>
    </Stack>
  );
};

export const WatchlistedCryptoDetail = (props: CryptoCurrencyProps) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      padding="24px 19.5px"
      alignItems="center"
      sx={{ border: `1px solid ${theme.palette.greyShade.grey100}` }}
    >
      <Stack direction="row" padding="1px 0px 1px 0px">
        <Stack direction="row" alignItems="center">
          <Icon src={props.iconURL} width="56px" height="56px" />
          <Stack marginLeft="12px">
            <TypographyComponent>{props.cryptoName}</TypographyComponent>
            <Grid container alignItems="center">
              <TypographyComponent
                variant="caption1"
                color={theme.palette.textColor.mediumEmphasis}
                sx={{ margin: "4px 4px 4px 0px", letterSpacing: "0.01em" }}
              >
                {props.type}
              </TypographyComponent>

              <StyledGrid alignItems="center" justifyContent="center">
                <Icon src={ProfitIcon} padding="0px 7.5px 0px 7.5px" />

                <TypographyComponent
                  variant="overline"
                  color={theme.palette.semantic.success500}
                  data-testid="profitOrLossIcon"
                >
                  {props.profitloss}
                </TypographyComponent>
              </StyledGrid>
            </Grid>
          </Stack>
        </Stack>
        <Divider
          orientation="vertical"
          sx={{ margin: "0px 33px", color: "#B4B4CF" }}
        />
        <ColumnStack title={MARKET_CAP} value={props.marketCap} />
        <ColumnStack title={Vol24H} value={props.Vol24H} />
        <ColumnStack
          title={CIRCULATING_SUPPLY}
          value={props.circulatingSupply}
        />
      </Stack>
      <Stack
        width="215px"
        height="42px"
        justifyContent="center"
        alignItems="center"
        sx={{
          border: `1px solid ${theme.palette.primary.main}`,
          borderRadius: "4px",
        }}
      >
        <IconWithTypography
          image={StarFilled}
          imageWidth="19px"
          imageHeight="18px"
          text={ADDED_TO_WATCHLIST}
          textVariant="button"
          textColor={theme.palette.primary.main}
        />
      </Stack>
    </Stack>
  );
};
