import React, { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import styled from "@emotion/styled";
import TypographyComponent from "../../atoms/Typography";
import MuiButton from "../../atoms/Button";
import Transaction from "../Transaction";
import axios from "axios";
import theme2 from "../../../theme/theme";
import Success from "../../../../public/assets/images/transaction-success.svg";
import Error from "../../../../public/assets/images/transaction-error.svg";
import EmptyTransaction from "../../../../public/assets/images/empty-transaction.svg";
import {
  EMPTY_STATEMENT,
  RECENT_TRANSACTION,
  VIEW_ALL,
} from "../../utils/constants";

import Icon from "../../atoms/Icon";
const CustomStack = styled(Stack)({
  paddingRight: "24px",
  minHeight: "360px",
  maxHeight: "460px",
  width: "350px",
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme2.palette.greyShade.grey300,
    borderRadius: "30px",
  },
  overflowY: "scroll",
  "&::-webkit-scrollbar": { width: "0.3rem" },
  "&::-webkit-scrollbar-track": {
    backgroundColor: theme2.palette.semantic.main,
  },
});

const getImagePath = (pathname: string): string => {
  if (pathname === "success") {
    return Success;
  } else return Error;
};

const viewTransactions = () => {
  console.log("view all transactions");
};

const RecentTransaction = () => {
  const [loading, setLoading] = useState(true);
  const [errormsg, setErrormsg] = useState<string | null>(null);
  const [items, setItems] = useState([
    {
      id: 0,
      date: "",
      cryptoName: "",
      status: "",
      transactionAmountInBTC: "",
      transactionFee: "",
      type: "",
      transactionState: "",
    },
  ]);
  useEffect(() => {
    const getDataApi = async () => {
      try {
        const result = await axios.get("http://localhost:3001/transactions");
        setLoading(false);
        setItems(result.data);
      } catch (err) {
        setLoading(false);
        setErrormsg("failed to fetch data");
        console.log(err);
      }
    };
    getDataApi();
  }, []);
  return loading ? (
    <h1>loading...</h1>
  ) : (
    <>
      {errormsg && <p>{errormsg}</p>}
      <Stack
        direction="row"
        justifyContent="space-between"
        paddingRight="36px"
        marginBottom="16px"
      >
        <TypographyComponent
          variant="body1"
          sx={{ fontWeight: "600" }}
          color={theme2.palette.textColor.highEmphasis}
        >
          {RECENT_TRANSACTION}
        </TypographyComponent>
        <MuiButton
          sx={{
            textTransform: "none",
            padding: 0,
            minWidth: 0,
            lineHeight: "0px",
            fontWeight: "400",
          }}
          variant="text"
          onClick={viewTransactions}
        >
          {VIEW_ALL}
        </MuiButton>
      </Stack>
      <CustomStack direction="column" spacing={3}>
        {items.length >= 1 ? (
          <Stack spacing={6}>
            {items.map((item) => (
              <Transaction
                key={item.id}
                date={new Date(item.date)}
                name={item.cryptoName}
                status={item.status}
                icon={getImagePath(item.transactionState)}
                cost={item.transactionAmountInBTC}
                balance={item.transactionFee}
                type={item.type}
              />
            ))}
          </Stack>
        ) : (
          <Stack alignItems="center">
            <Icon src={EmptyTransaction} />
            <TypographyComponent
              variant="caption2"
              color={theme2.palette.textColor.mediumEmphasis}
              sx={{ textAlign: "center" }}
            >
              {EMPTY_STATEMENT}
            </TypographyComponent>
          </Stack>
        )}
      </CustomStack>
    </>
  );
};

export default RecentTransaction;
