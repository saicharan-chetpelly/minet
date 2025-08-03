import React from "react";
import theme from "../../../theme/theme";
import Stack from "@mui/material/Stack";
import TypographyComponent from "../../atoms/Typography";
import Icon from "../../atoms/Icon";
import { Chip } from "@mui/material";
import { FROM } from "../../utils/constants";

interface TransactionProps {
  date?: Date;
  name?: string;
  status?: string;
  icon: string;
  cost?: string;
  balance?: string;
  type?: string;
  depositor?: string;
}

export const MyWalletTransactions = (props: TransactionProps) => {
  const month = props.date?.toLocaleString("en-US", { month: "short" });
  const day = props.date?.toLocaleString("en-US", { day: "2-digit" });

  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Stack direction="row" spacing={3} alignItems="center">
        <Stack>
          <TypographyComponent
            variant="caption2"
            color={theme.palette.textColor.mediumEmphasis}
          >
            {month}
          </TypographyComponent>
          <TypographyComponent
            variant="subtitle2"
            color={theme.palette.textColor.highEmphasis}
          >
            {day}
          </TypographyComponent>
        </Stack>
        <Stack sx={{ mt: "3px" }}>
          <Icon src={props.icon} />
        </Stack>
        <Stack spacing={1}>
          <TypographyComponent
            variant="body1"
            sx={{ fontWeight: "600" }}
            color={theme.palette.textColor.highEmphasis}
          >
            {props.name}
          </TypographyComponent>
          <Stack direction="row" spacing="10px">
            <TypographyComponent
              variant="caption2"
              color={theme.palette.textColor.mediumEmphasis}
            >
              {FROM} {props.depositor}
            </TypographyComponent>
            <Chip
              label={props.status}
              sx={{
                height: "auto",
                backgroundColor: `${theme.palette.greyShade.grey100}`,
                color: `${theme.palette.greyShade.grey500}`,
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
          color={theme.palette.textColor.highEmphasis}
        >
          {props.cost}
        </TypographyComponent>
        <TypographyComponent
          variant="caption2"
          color={theme.palette.textColor.mediumEmphasis}
        >
          {props.balance}
        </TypographyComponent>
      </Stack>
    </Stack>
  );
};
