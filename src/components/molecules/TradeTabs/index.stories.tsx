import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import TradeTabs from ".";

export default {
  title: "molecules/TradeTabs",
  component: TradeTabs,
} as ComponentMeta<typeof TradeTabs>;

const Template: ComponentStory<typeof TradeTabs> = (args) => (
  <TradeTabs {...args} />
);
export const TradeTab1 = Template.bind({});
TradeTab1.args = {
  cryptoData: {
    id: 2,
    iconURL: "EthereumIcon",
    cryptoName: "Ethereum",
    type: "ETH",
    price: "$1,297.93",
    change: "-5.49%",
    marketCap: "$25.4T",
    Vol24H: "$11.5B",
    circulatingSupply: "122.60M ETH",
    profitloss: "+0.64%",
    isWatchlisted: false,
  },
};
