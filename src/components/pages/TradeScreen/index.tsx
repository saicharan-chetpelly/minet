import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import theme from "../../../theme/theme";
import FilterIcon from "../../../../public/assets/images/filter.svg";
import TypographyComponent from "../../atoms/Typography";
import Icon from "../../atoms/Icon";
import ProfitIcon from "../../../../public/assets/images/profit.svg";
import Divider from "@mui/material/Divider";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Graph } from "../../molecules/Graph";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import Dropper from "../../molecules/Dropper";
import { WatchlistedCryptoDetail } from "../../molecules/WatchlistedCryptoDetail";
import {
  CryptoInfoFooter,
  getImagePath,
} from "../../organisms/CryptoInfoFooter";
import {
  StyledTabs,
  StyledTab,
  StyledBox,
} from "../../organisms/MyPortfolioValue";
import { StyledGrid } from "../../molecules/MyPortfolioValueBar";
import Input from "../../atoms/Input";
import { MyWalletTransactions } from "../../molecules/WalletTransactions";
import {
  BITCOIN_TOTALBAL,
  CURRENT_VALUE,
  ETHEREUM_TOTALBAL,
  OVERVIEW,
  SEARCH_ALL_ASSETS,
  TAB_MENU_LIST,
  TAB_MENU_VALUES,
  TOTAL_BALANCE,
  TRADE,
  WALLET,
} from "../../utils/constants";
import ApplicationHeader from "../../organisms/ApplicationHeader";
import NavigationBar from "../../organisms/NavigationBar";
import Footer from "../../molecules/Footer";

export const CustomStackTransactions = styled(Stack)({
  padding: "24px",
  minHeight: "50px",
  maxHeight: "538px",
  width: "1190px",

  border: `1px solid ${theme.palette.greyShade.grey100}`,
  borderRadius: "0px 0px 4px 4px",

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
interface TradeScreenProps {
  cryptoName: string;
}
interface TabProps {
  value: number;
  index: number;
  children: React.ReactNode;
}
export interface CryptoCurrencyProps {
  id?: number;
  iconURL: string;
  cryptoName: string;
  type?: string;
  price: string;
  change?: string;
  marketCap?: string;
  Vol24H?: string;
  circulatingSupply: string;
  profitloss: string;
  isWatchlisted?: boolean;
}

export const PortfolioScreen = (props: CryptoCurrencyProps) => {
  const [tabValue, setTabValue] = React.useState("month");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };
  return (
    <Stack
      p={6}
      sx={{ border: `1px solid ${theme.palette.greyShade.grey100}` }}
      marginBottom="24px"
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        paddingBottom="16px"
      >
        <Stack>
          <TypographyComponent
            variant="caption1"
            color={theme.palette.textColor.mediumEmphasis}
          >
            {CURRENT_VALUE}
          </TypographyComponent>
          <TypographyComponent
            variant="heading6"
            color={theme.palette.textColor.highEmphasis}
            sx={{ paddingTop: "2px" }}
          >
            {props.price}
          </TypographyComponent>
          <StyledGrid alignItems="center" paddingTop="4px">
            <Icon src={ProfitIcon} padding="0px 7.5px 0px 7.5px" />

            <TypographyComponent
              variant="overline"
              color={theme.palette.semantic.success500}
            >
              {props.profitloss}
            </TypographyComponent>
          </StyledGrid>
        </Stack>
        <Stack>
          <StyledBox alignSelf="flex-start">
            <StyledTabs value={tabValue} onChange={handleChange}>
              <StyledTab label={TAB_MENU_LIST[0]} value={TAB_MENU_VALUES[0]} />
              <StyledTab label={TAB_MENU_LIST[1]} value={TAB_MENU_VALUES[1]} />
              <StyledTab label={TAB_MENU_LIST[2]} value={TAB_MENU_VALUES[2]} />
              <StyledTab label={TAB_MENU_LIST[3]} value={TAB_MENU_VALUES[3]} />
              <StyledTab label={TAB_MENU_LIST[4]} value={TAB_MENU_VALUES[4]} />
              <StyledTab label={TAB_MENU_LIST[5]} value={TAB_MENU_VALUES[5]} />
            </StyledTabs>
          </StyledBox>
        </Stack>
      </Stack>
      <Graph
        isCryptoGraph={true}
        isTotalInvestmentGraph={false}
        width={1190}
        height={268}
      />
    </Stack>
  );
};

const TabPanel = (props: TabProps) => {
  return <div>{props.value === props.index && <>{props.children}</>}</div>;
};
export const StyledTitleTabs = (props: CryptoCurrencyProps) => {
  const [tabValue, setTabValue] = React.useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    event.preventDefault();
    setTabValue(newValue);
  };

  return (
    <>
      <Box margin="24px 0px 24px 0px" data-testid="styledTabs">
        <Tabs
          value={tabValue}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab
            label={OVERVIEW}
            disableRipple
            sx={{
              textTransform: "none",
              fontSize: `${theme.typography.subtitle1.fontSize}`,
              fontWeight: `${theme.typography.subtitle1.fontWeight}`,
              lineHeight: `${theme.typography.subtitle1.lineHeight}`,
              letterSpacing: "0.05em",
              color: `${theme.palette.textColor.mediumEmphasis}`,
            }}
          />
          <Tab
            label={WALLET}
            disableRipple
            sx={{
              textTransform: "none",
              fontSize: `${theme.typography.subtitle1.fontSize}`,
              fontWeight: `${theme.typography.subtitle1.fontWeight}`,
              lineHeight: `${theme.typography.subtitle1.lineHeight}`,
              letterSpacing: "0.05em",
              color: `${theme.palette.textColor.mediumEmphasis}`,
            }}
          />
        </Tabs>
      </Box>
      <TabPanel value={tabValue} index={0}>
        {
          <>
            <PortfolioScreen
              iconURL={props.iconURL}
              cryptoName={props.cryptoName}
              type={props.type}
              price={props.price}
              change={props.change}
              marketCap={props.marketCap}
              Vol24H={props.Vol24H}
              circulatingSupply={props.circulatingSupply}
              profitloss={props.profitloss}
              isWatchlisted={props.isWatchlisted}
            />
            <CryptoInfoFooter
              iconURL={props.iconURL}
              cryptoName={props.cryptoName}
              type={props.type}
              price={props.price}
              change={props.change}
              marketCap={props.marketCap}
              Vol24H={props.Vol24H}
              circulatingSupply={props.circulatingSupply}
              profitloss={props.profitloss}
              isWatchlisted={props.isWatchlisted}
            />
          </>
        }
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        {
          <>
            <TotalBalance
              iconURL={props.iconURL}
              cryptoName={props.cryptoName}
              type={props.type}
              price={props.price}
              change={props.change}
              marketCap={props.marketCap}
              Vol24H={props.Vol24H}
              circulatingSupply={props.circulatingSupply}
              profitloss={props.profitloss}
              isWatchlisted={props.isWatchlisted}
            />
            <SearchBar
              iconURL={props.iconURL}
              cryptoName={props.cryptoName}
              type={props.type}
              price={props.price}
              change={props.change}
              marketCap={props.marketCap}
              Vol24H={props.Vol24H}
              circulatingSupply={props.circulatingSupply}
              profitloss={props.profitloss}
              isWatchlisted={props.isWatchlisted}
            />
          </>
        }
      </TabPanel>
    </>
  );
};

const StyledTradeScreen = styled(Box)({
  width: "1239px",
  height: "942px",
  padding: "24px 24px 24px 40px",
});

export const TotalBalance = (props: CryptoCurrencyProps) => {
  return (
    <Stack
      direction="row"
      sx={{
        border: `1px solid ${theme.palette.greyShade.grey100}`,
        borderRadius: "4px",
        padding: "16px 0px 16px 24px",
        marginTop: "24px",
      }}
    >
      <TypographyComponent
        variant="subtitle1"
        color={theme.palette.textColor.highEmphasis}
        fontWeight="600"
        paddingRight="10px"
        letterSpacing="0.005em"
      >
        {TOTAL_BALANCE}
      </TypographyComponent>
      <TypographyComponent
        variant="subtitle1"
        color={theme.palette.textColor.highEmphasis}
        fontWeight="600"
        paddingRight="10px"
        letterSpacing="0.005em"
      >
        {props.cryptoName === "Bitcoin" ? (
          <>{BITCOIN_TOTALBAL}</>
        ) : (
          <>{ETHEREUM_TOTALBAL}</>
        )}
      </TypographyComponent>
    </Stack>
  );
};
export const SearchBar = (props: CryptoCurrencyProps) => {
  const [loadData, setLoadData] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchedVal, setSearchedVal] = useState("");
  const [transactionData, setTransactionData] = useState([
    {
      id: 0,
      date: "",
      cryptoName: "",
      status: "",
      transactionAmountInBTC: "",
      transactionAmount: "",
      type: "",
      transactionState: "",
      depositor: "",
    },
  ]);
  useEffect(() => {
    const getDataApi = async () => {
      try {
        const result = await axios.get("http://localhost:3001/transactions");
        setLoadData(false);
        setTransactionData(result.data);
      } catch (err) {
        setLoadData(false);
        setError("failed to fetch data");
        console.log(err);
      }
    };
    getDataApi();
  }, []);
  return loadData ? (
    <h1>loading...</h1>
  ) : (
    <>
      {error && <p>{error}</p>}
      <Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          margin="12px 0px 12px 0px"
        >
          <Stack></Stack>
          <Stack>
            <Stack direction="row" alignItems="center">
              <Input
                variant="outlined"
                label={SEARCH_ALL_ASSETS}
                data-testid="searchAssets"
                size="small"
                sx={{ width: "348px", height: "40px", marginRight: "12px" }}
                onChange={(e) => setSearchedVal(e.target.value)}
                className={searchedVal.length > 0 ? "active" : "inactive"}
                icon={
                  <>
                    <SearchIcon data-testis="searchIcon" />
                    <Divider
                      sx={{ margin: "0px 8px 0px 8px" }}
                      orientation="vertical"
                    />
                    <Icon
                      src={FilterIcon}
                      padding="6px 0px 0px 0px"
                      data-testis="Filter icon"
                    />
                  </>
                }
              />
              <div>
                <Dropper
                  data-testid="dropDown"
                  onChange={() => {}}
                  menuList={TAB_MENU_LIST}
                  width={"77px"}
                  backgroundColor="none"
                />
              </div>
            </Stack>
          </Stack>
        </Stack>
        <CustomStackTransactions>
          <Stack spacing={6}>
            {transactionData
              .filter(
                (row) =>
                  !searchedVal.length ||
                  row.depositor
                    .toLowerCase()
                    .includes(searchedVal.toLowerCase())
              )
              .filter(
                (transaction) => transaction.cryptoName === props.cryptoName
              )
              .map((item) => (
                <MyWalletTransactions
                  data-testid="walletTransactions"
                  key={item.id}
                  date={new Date(item.date)}
                  name={item.cryptoName}
                  status={item.status}
                  icon={getImagePath(item.transactionState)}
                  cost={item.transactionAmountInBTC}
                  balance={item.transactionAmount}
                  type={item.type}
                  depositor={item.depositor}
                />
              ))}
          </Stack>
        </CustomStackTransactions>
      </Box>
    </>
  );
};
export const TradeScreen = (props: TradeScreenProps) => {
  const [load, setLoad] = useState(true);
  const [errMsg, setErrMsg] = useState<string | null>(null);
  const [cryptoData, setCryptoData] = useState([
    {
      id: 0,
      iconURL: "",
      cryptoName: "",
      type: "",
      price: "",
      change: "",
      marketCap: "",
      Vol24H: "",
      circulatingSupply: "",
      profitloss: "",
      isWatchlisted: true,
    },
  ]);
  useEffect(() => {
    const getDataApi = async () => {
      try {
        const result = await axios.get("http://localhost:3001/cryptoCurrency");
        setLoad(false);
        setCryptoData(result.data);
      } catch (err) {
        setLoad(false);
        setErrMsg("failed to fetch data");
        console.log(err);
      }
    };
    getDataApi();
  }, []);

  return load ? (
    <h1>loading...</h1>
  ) : (
    <>
      {errMsg && <p>{errMsg}</p>}
      <Stack direction="row">
        <NavigationBar currentPage={TRADE} />
        <Stack flexGrow={1}>
          <ApplicationHeader isButtonsRequired={true} headerTitle={TRADE} />
          <Stack overflow="auto">
            
                <StyledTradeScreen>
                  {cryptoData
                    .filter((item) => item.cryptoName === props.cryptoName)
                    .map((item) => (
                      <WatchlistedCryptoDetail
                        data-testid="cryptoDetail"
                        key={item.cryptoName}
                        iconURL={getImagePath(item.iconURL)}
                        cryptoName={item.cryptoName}
                        type={item.type}
                        price={item.price}
                        change={item.change}
                        marketCap={item.marketCap}
                        Vol24H={item.Vol24H}
                        circulatingSupply={item.circulatingSupply}
                        profitloss={item.profitloss}
                        isWatchlisted={item.isWatchlisted}
                      />
                    ))}
                  {cryptoData
                    .filter((item) => item.cryptoName === props.cryptoName)
                    .map((item) => (
                      <StyledTitleTabs
                        key={item.cryptoName}
                        iconURL={getImagePath(item.iconURL)}
                        cryptoName={item.cryptoName}
                        type={item.type}
                        price={item.price}
                        change={item.change}
                        marketCap={item.marketCap}
                        Vol24H={item.Vol24H}
                        circulatingSupply={item.circulatingSupply}
                        profitloss={item.profitloss}
                        isWatchlisted={item.isWatchlisted}
                      />
                    ))}
                </StyledTradeScreen>
              
          </Stack>
          <Footer />
        </Stack>
      </Stack>
    </>
  );
};
