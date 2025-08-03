import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid } from "recharts";
import theme from "../../../theme/theme";
import {
  BitcoinGraphProfitdata,
  BitcoinGraphLossdata,
} from "../../utils/constants";

interface GraphProps {
  isProfit?: boolean;
  isCryptoGraph?: boolean;
  isTotalInvestmentGraph?: boolean;
  width?: number;
  height?: number;
}

export const Graph = (props: GraphProps) => {
  return (
    <div data-testid="graph">
      <AreaChart
        width={props.width}
        height={props.height}
        data={props.isProfit ? BitcoinGraphProfitdata : BitcoinGraphLossdata}
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
      >
        <CartesianGrid
          strokeDasharray="0"
          vertical={false}
          style={{ color: `${theme.palette.greyShade.grey300}` }}
        />
        <XAxis
          dataKey="xAxislabel"
          interval="preserveStartEnd"
          tickLine={false}
          fontVariant="overline"
          opacity={0.6}
          style={{
            fontSize: `${theme.typography.overline.fontSize}`,
          }}
        />
        <YAxis hide />
        {props.isTotalInvestmentGraph ? (
          <Area
            type="monotone"
            dataKey="totalInvestment"
            stackId="1"
            stroke={`${theme.palette.primary.main}`}
            fill={`${theme.palette.primary.main}`}
            strokeWidth="2px"
            fillOpacity={0.1}
          />
        ) : (
          <></>
        )}
        {props.isCryptoGraph ? (
          <Area
            type="monotone"
            dataKey="Bitcoin"
            stackId="1"
            stroke={`${theme.palette.semantic.warning300}`}
            fill={`${theme.palette.semantic.warning300}`}
            strokeWidth="2px"
            fillOpacity={0.1}
          />
        ) : (
          <></>
        )}
      </AreaChart>
    </div>
  );
};
