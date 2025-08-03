import React, { useState, useEffect } from "react";
import {
  Box,
  Tab,
  TableContainer,
  TableBody,
  TableRow,
  Table,
  TableHead,
  TableCell,
  Stack,
  styled,
  Divider,
  Tabs,
} from "@mui/material";
import TypographyComponent from "../../atoms/Typography";
import Input from "../../atoms/Input";
import Icon from "../../atoms/Icon";
import TradeTabs from "../../molecules/TradeTabs";
import axios from "axios";
import theme from "../../../theme/theme";
import SwitchIcon from "../../../../public/assets/images/switch.svg";
import SearchIcon from "../../../../public/assets/images/search.svg";
import DropDownIcon from "../../../../public/assets/images/down.svg";

import {
  ALLASSETS,
  WATCHLIST,
  TABLE_HEAD_CHANGE,
  TABLE_HEAD_MARKETCAP,
  TABLE_HEAD_PRICE,
  TABLE_HEAD_NAME,
  TABLE_HEAD_WATCH,
  SEARCH_ALL_ASSETS,
} from "../../utils/constants";
import { useLocation } from "react-router";

interface TabProps {
  value: number;
  index: number;
  children: React.ReactNode;
}
const TabPanel = (props: TabProps) => {
  return <div>{props.value === props.index && <>{props.children}</>}</div>;
};

const StyledTableCell = styled(TableCell)({
  borderBottom: "none",
  height: "9px",
});
const StyledDivider = styled(Divider)({
  color: theme.palette.primary.grey100,
  borderWidth: "1px",
  width: "66%",
});
const StyledTable = styled(Table)({
  borderSpacing: " 0px 12px",
  borderCollapse: "separate",
});

const DiscoverAssets = () => {
  const statusValue = useLocation().state;
  const [searchedVal, setSearchedVal] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [state, setState] = useState([
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
    const getApiData = async () => {
      try {
        const result = await axios.get("http://localhost:3001/cryptoCurrency");
        setLoading(false);
        setState(result.data);
      } catch (err) {
        setLoading(false);
        setError("Something went wrong");
      }
    };
    getApiData();
  }, []);

  const addItemToWatchList = (index: number) => {
    setState((prevState) => {
      prevState[index - 1].isWatchlisted = !prevState[index - 1].isWatchlisted;
      axios.patch(`http://localhost:3001/cryptoCurrency/${index}`, {
        isWatchlisted: prevState[index - 1].isWatchlisted,
      });
      return [...prevState];
    });
  };

  const [tabvalue, setTabValue] = useState<number>(statusValue?.tabValue ?? 0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return loading ? (
    <h1>Loading..</h1>
  ) : (
    <>
      {error && <p>{error}</p>}
      <Box minHeight={"80vh"} display="flex" flexDirection={"column"}>
        <Box sx={{ ml: "24px", mt: "24px" }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            flexGrow={1}
          >
            <Tabs
              value={tabvalue}
              onChange={handleChange}
              aria-label="lab API tabs example"
            >
              <Tab
                label={ALLASSETS}
                sx={{ textTransform: "none", fontSize: "20px" }}
              />
              <Tab
                label={WATCHLIST}
                sx={{ textTransform: "none", fontSize: "20px" }}
              />
            </Tabs>
            <Stack direction="row" spacing={3} sx={{ mr: "18px" }}>
              <Input
                placeholder={SEARCH_ALL_ASSETS}
                size="small"
                sx={{
                  width: "230px",
                  backgroundColor: theme.palette.semantic.main,
                }}
                icon={<Icon src={SearchIcon} />}
                onChange={(e) => setSearchedVal(e.target.value)}
                value={searchedVal}
                className={tabvalue ? "active" : "inactive"}
                data-testid="searchInput"
              />
              <Input
                placeholder="24h"
                size="small"
                sx={{
                  width: "78px",
                  backgroundColor: theme.palette.semantic.main,
                }}
                icon={<Icon src={DropDownIcon} />}
              />
              <Input
                size="small"
                placeholder={ALLASSETS}
                sx={{
                  width: "122px",
                  backgroundColor: theme.palette.semantic.main,
                }}
                icon={<Icon src={DropDownIcon} />}
              />
            </Stack>
          </Stack>
          <StyledDivider />
        </Box>

        <TabPanel value={tabvalue} index={tabvalue}>
          <TableContainer sx={{ width: "97%", height: "auto", ml: "24px" }}>
            <StyledTable>
              <TableHead>
                <TableRow>
                  <StyledTableCell width="350px" padding="none">
                    <TypographyComponent
                      fontWeight="bold"
                      sx={{ ml: "40px" }}
                      variant="caption1"
                      children={TABLE_HEAD_NAME}
                    />
                  </StyledTableCell>
                  <StyledTableCell width="337px" padding="none">
                    <TypographyComponent
                      fontWeight="bold"
                      variant="caption1"
                      children={TABLE_HEAD_PRICE}
                    />
                  </StyledTableCell>
                  <StyledTableCell width="239px" padding="none">
                    <TypographyComponent
                      fontWeight="bold"
                      variant="caption1"
                      children={TABLE_HEAD_CHANGE}
                    />
                  </StyledTableCell>
                  <StyledTableCell width="237px" padding="none">
                    <Stack direction="row" alignItems="center" width="60px">
                      <TypographyComponent
                        fontWeight="bold"
                        variant="caption1"
                        children={TABLE_HEAD_MARKETCAP}
                      />
                      <Icon src={SwitchIcon} />
                    </Stack>
                  </StyledTableCell>
                  <StyledTableCell width="78px" padding="none">
                    <TypographyComponent
                      fontWeight="bold"
                      variant="caption1"
                      children={TABLE_HEAD_WATCH}
                    />
                  </StyledTableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {state
                  .filter(
                    (serchedValue) =>
                      !searchedVal.length ||
                      serchedValue.cryptoName
                        .toString()
                        .toLowerCase()
                        .includes(searchedVal.toString().toLowerCase())
                  )
                  .filter((selectedItems) =>
                    tabvalue == 1
                      ? selectedItems.isWatchlisted === true
                      : selectedItems
                  )
                  .map((item) => (
                    <TradeTabs
                      key={item.id}
                      cryptoData={item}
                      toggleStatus={(id: number) => addItemToWatchList(id)}
                    />
                  ))}
              </TableBody>
            </StyledTable>
          </TableContainer>
        </TabPanel>
      </Box>
    </>
  );
};
export default DiscoverAssets;
