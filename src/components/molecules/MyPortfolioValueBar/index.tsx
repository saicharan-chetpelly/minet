import React from "react";
import { Grid, GridProps } from "@mui/material";
import TypographyComponent from "../../atoms/Typography";
import theme from "../../../theme/theme";
import Icon from "../../atoms/Icon";
import profit from "../../../../public/assets/images/profit.svg";
import loss from "../../../../public/assets/images/loss.svg";

interface MyPortfolioValueBarProps {
  title?: string;
  isProfit?: boolean;
  totalInvestment?: string;
  profit?: string;
  loss?: string;
}
export const StyledGrid = (props: GridProps) => {
  return <Grid item container width="auto" {...props} />;
};
export const MyPortfolioValueBar = (props: MyPortfolioValueBarProps) => {
  return (
    <StyledGrid direction="column">
      <Grid container alignItems="center" mb={2}>
        <TypographyComponent
          variant="caption1"
          color={theme.palette.textColor.mediumEmphasis}
          sx={{ margin: "4px 4px 4px 0px", letterSpacing: "0.01em" }}
        >
          {props.title}
        </TypographyComponent>

        <StyledGrid alignItems="center" justifyContent="center">
          <Icon
            src={props.isProfit ? profit : loss}
            padding="0px 7.5px 0px 7.5px"
          />

          <TypographyComponent
            variant="overline"
            color={
              props.isProfit
                ? theme.palette.semantic.success500
                : theme.palette.semantic.error500
            }
            paddingRight="8px"
            data-testid="profitOrLossIcon"
          >
            {props.isProfit ? props.profit : props.loss}
          </TypographyComponent>
        </StyledGrid>
      </Grid>
      <TypographyComponent
        variant="heading6"
        color={theme.palette.textColor.highEmphasis}
      >
        {props.totalInvestment ? props.totalInvestment : "$ 0.00"}
      </TypographyComponent>
    </StyledGrid>
  );
};
