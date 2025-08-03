import React from "react";
import { Grid, Box, Stack } from "@mui/material";
import theme from "../../../theme/theme";
import Tabs, { TabsProps } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Image } from "../../atoms/Image";
import EmptyGraphReport from "../../../../public/assets/images/data-report.svg";
import styled from "@emotion/styled";
import Divider from "@mui/material/Divider";
import {
  MyPortfolioValueBar,
  StyledGrid,
} from "../../molecules/MyPortfolioValueBar";
import { Graph } from "../../molecules/Graph";
import PrimaryEllipse from "../../../../public/assets/images/primary-ellipse.svg";
import WarningEllipse from "../../../../public/assets/images/warning-ellipse.svg";
import IconWithTypography from "../../molecules/IconTypo";
import {
  TAB_MENU_LIST,
  TAB_MENU_VALUES,
  TOTAL_INVESTMENT,
} from "../../utils/constants";

interface LinkTabProps {
  label?: string;
  value?: string;
}
interface MyPortfolioValueProps {
  showCrypto?: boolean;
  isProfit?: boolean;
}

const StyledPorfolioValue = styled(Stack)({
  width: "910px",
  height: "492px",
  border: `1px solid ${theme.palette.greyShade.grey100}`,
  marginLeft: "35px",
});
export const StyledBox = styled(Box)({
  border: `1px solid ${theme.palette.greyShade.grey100}`,
  borderRadius: "4px",
});
export const StyledTabs = (props: TabsProps) => {
  return (
    <Tabs
      sx={{
        "& a": {
          padding: "0px 4px 0px 4px",
          margin: "0px 12px 0px 12px",
        },
        "& .MuiTabs-scroller": { height: "38px" },
      }}
      textColor="primary"
      indicatorColor="primary"
      {...props}
    />
  );
};
export const StyledTab = (props: LinkTabProps) => {
  return (
    <Tab
      component="a"
      disableRipple
      sx={{
        minWidth: "0",
        fontSize: `${theme.typography.caption2.fontSize}`,
        fontWeight: `${theme.typography.caption2.fontWeight}`,
        lineHeight: `${theme.typography.caption2.lineHeight}`,
        color: `${theme.palette.textColor.mediumEmphasis}`,
      }}
      {...props}
    />
  );
};
export const MyPortfolioValue = ({
  showCrypto,
  isProfit,
}: MyPortfolioValueProps) => {
  const [tabValue, setTabValue] = React.useState("month");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };
  return (
    <StyledPorfolioValue>
      <Grid container padding="24px 24px 0px 24px" mb={4}>
        <StyledGrid xs={6} justifyContent="space-between" height="90px">
          <MyPortfolioValueBar
            title={TOTAL_INVESTMENT}
            isProfit={true}
            totalInvestment={showCrypto ? "$ 11,900,204" : "$ 0.00"}
            profit="+0.0%"
            loss="+0.0%"
          />
          {showCrypto ? (
            <>
              <StyledGrid>
                <Divider orientation="vertical" />
              </StyledGrid>
              <MyPortfolioValueBar
                title="Bitcoin"
                isProfit={isProfit}
                totalInvestment="$ 12,400"
                profit="+8.2%"
                loss="+8.2%"
              />
            </>
          ) : (
            <></>
          )}
        </StyledGrid>
        <StyledGrid xs={6} justifyContent="flex-end">
          <StyledBox alignSelf="flex-start">
            <StyledTabs value={tabValue} onChange={handleChange}>
              <StyledTab
                label={TAB_MENU_LIST[0]}
                value={TAB_MENU_VALUES[0]}
                data-testid="hourTab"
              />
              <StyledTab label={TAB_MENU_LIST[1]} value={TAB_MENU_VALUES[1]} />
              <StyledTab label={TAB_MENU_LIST[2]} value={TAB_MENU_VALUES[2]} />
              <StyledTab label={TAB_MENU_LIST[3]} value={TAB_MENU_VALUES[3]} />
              <StyledTab label={TAB_MENU_LIST[4]} value={TAB_MENU_VALUES[4]} />
              <StyledTab label={TAB_MENU_LIST[5]} value={TAB_MENU_VALUES[5]} />
            </StyledTabs>
          </StyledBox>
          <StyledGrid
            alignItems="center"
            justifyContent="space-between"
            alignSelf="flex-end"
          >
            {showCrypto ? (
              <IconWithTypography
                image={WarningEllipse}
                text="Bitcoin"
                imageHeight="8px"
                imageWidth="8px"
                textColor=" #000000"
                textVariant="overline"
                textTransform="none"
                iconandtextgap="4px"
                gapBetweenText="0px"
                letterSpacing="0px"
                marginRight="24px"
              />
            ) : (
              <></>
            )}
            <IconWithTypography
              justifyContent="flex-end"
              image={PrimaryEllipse}
              text={TOTAL_INVESTMENT}
              imageHeight="8px"
              imageWidth="8px"
              textColor=" #000000"
              textVariant="overline"
              textTransform="none"
              iconandtextgap="4px"
              gapBetweenText="0px"
              letterSpacing="0px"
            />
          </StyledGrid>
        </StyledGrid>
      </Grid>
      <Grid container justifyContent="center" alignItems="center" p={6}>
        <Grid item>
          {showCrypto ? (
            <>
              {isProfit ? (
                <Graph
                  isCryptoGraph={true}
                  isTotalInvestmentGraph={true}
                  isProfit={true}
                  width={792}
                  height={268}
                />
              ) : (
                <Graph
                  isCryptoGraph={true}
                  isTotalInvestmentGraph={true}
                  isProfit={false}
                  width={792}
                  height={268}
                />
              )}
            </>
          ) : (
            <Image source={EmptyGraphReport} />
          )}
        </Grid>
      </Grid>
    </StyledPorfolioValue>
  );
};
