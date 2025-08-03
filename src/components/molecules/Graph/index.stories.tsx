import { Graph } from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "@storybook/addon-console";
export default {
  title: "molecules/Graph ",
  component: Graph,
  argTypes: {
    isProfit: { control: "boolean" },
    isCryptoGraph: { control: "boolean" },
    isTotalInvestmentGraph: { control: "boolean" },
  },
} as ComponentMeta<typeof Graph>;

const template: ComponentStory<typeof Graph> = (args) => <Graph {...args} />;
export const Profit = template.bind({});
export const Loss = template.bind({});
Profit.args = {
  isProfit: true,
  isCryptoGraph: true,
  isTotalInvestmentGraph: true,
  width:792,
  height:268
};
Loss.args = {
  isProfit: false,
  isCryptoGraph: true,
  isTotalInvestmentGraph: false,
  width:792,
  height:268
};
