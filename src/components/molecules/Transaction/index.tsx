import { Stack } from "@mui/material";
import Chip from "@mui/material/Chip";
import React from "react";
import Icon from "../../atoms/Icon";
import TypographyComponent from "../../atoms/Typography";
import theme2 from "../../../theme/theme";

interface TransactionProps {
  date: Date;
  name?: string;
  status?: string;
  icon: string;
  cost?: string;
  balance?: string;
  type?: string;
}

const Transaction = (props: TransactionProps) => {
  const month = props.date.toLocaleString("en-US", { month: "short" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <Stack spacing={2} data-testid="transactionComponent">
      <TypographyComponent
        variant="caption2"
        color={theme2.palette.textColor.highEmphasis}
      >
        {month} {day}
      </TypographyComponent>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" spacing={3} alignItems="center">
          <Stack sx={{ mt: "3px" }}>
            <Icon src={props.icon} />
          </Stack>
          <Stack spacing={1}>
            <TypographyComponent
              variant="body1"
              sx={{ fontWeight: "600" }}
              color={theme2.palette.textColor.highEmphasis}
            >
              {props.name} {props.type}
            </TypographyComponent>
            <Stack alignItems="flex-start">
              <Chip
                label={props.status}
                sx={{
                  height: "auto",
                  backgroundColor: `${theme2.palette.greyShade.grey100}`,
                  color: `${theme2.palette.greyShade.grey500}`,
                  "& .MuiChip-root ": { justifyContent: "flex-start" },
                  "& .css-6od3lo-MuiChip-label": { padding: "2px 8px 2px 8px" },
                }}
              />
            </Stack>
          </Stack>
        </Stack>
        <Stack spacing={1} alignItems="flex-end">
          <TypographyComponent
            variant="body1"
            sx={{ fontWeight: "600" }}
            color={theme2.palette.textColor.highEmphasis}
          >
            {props.cost}
          </TypographyComponent>
          <TypographyComponent
            variant="caption2"
            color={theme2.palette.textColor.mediumEmphasis}
          >
            {props.balance}
          </TypographyComponent>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Transaction;
