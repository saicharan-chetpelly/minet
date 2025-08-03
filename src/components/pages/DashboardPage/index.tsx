import React from "react";
import { Box, Grid, styled } from "@mui/material";
import WatchList from "../../organisms/WatchlistBar";
import MyPortfolio from "../../organisms/MyPortfolio";
import theme from "../../../theme/theme";
import TypographyComponent from "../../atoms/Typography";
import { TypographyProps } from "@mui/material/Typography";
import { DISCOVER_ASSETS, WATCHLIST, DASHBOARD } from "../../utils/constants";
import Partition from "../../../../public/assets/images/Partition.svg";
import Chart from "../../../../public/assets/images/chart.svg";
import List1 from "../../../../public/assets/images/list-blue.svg";
import { MyPortfolioValue } from "../../organisms/MyPortfolioValue";
import { Stack } from "@mui/system";
import RecentTransaction from "../../molecules/RecentTransactions";
import NavigationBar from "../../organisms/NavigationBar";
import ApplicationHeader from "../../organisms/ApplicationHeader";
import Footer from "../../molecules/Footer";
interface DashboardProps extends TypographyProps {
  leftText: string;
}
const PortfolioTypographyBox = styled(Grid)({
  paddingBottom: "14px",
});
const LeftContainer = styled(Stack)({
  paddingTop: "24px",
});
const DashboardPage = (props: DashboardProps) => {
  const { leftText } = props;
  return (
    <>
      <Stack direction={"row"} >
        <NavigationBar currentPage={DASHBOARD} />{" "}
        <Grid
          container
          direction="row"
          minWidth={"1236px"}
          justifyContent="space-between"
        >
          <Stack flexGrow={1}>
            <ApplicationHeader
              isButtonsRequired={true}
              headerTitle={DASHBOARD}
            />
          </Stack>
          <Grid item width="69%">
            <LeftContainer>
              <WatchList
                data-testid="watchlist-component"
                partition={Partition}
                mainText={WATCHLIST}
                optionText={DISCOVER_ASSETS}
                editText={"View Watchlist"}
              />
              <Box>
                <PortfolioTypographyBox container direction="row">
                  <Grid item xs={6}>
                    <TypographyComponent
                      variant="subtitle1"
                      children={leftText}
                      color={theme.palette.textColor.highEmphasis}
                      style={{ paddingLeft: "35px", fontWeight: "600" }}
                    />
                  </Grid>
                </PortfolioTypographyBox>
                <MyPortfolioValue showCrypto={true} isProfit={true} />
              </Box>
            </LeftContainer>
          </Grid>

          <Grid
            item
            width="31%"
            display={"flex"}
            justifyContent={"end"}
            sx={{ paddingTop: "20px" }}
          >
            <Box
              sx={{
                backgroundColor: theme.palette.semantic.main,
                paddingLeft: "24px",
              }}
            >
              <MyPortfolio
                data-testid="my-portfolio-component"
                imageOne={Chart}
                imageTwo={List1}
                mainHead={"My portfolio"}
              />
              <RecentTransaction />
            </Box>
          </Grid>
          <Footer />
        </Grid>
      </Stack>
    </>
  );
};
export default DashboardPage;
