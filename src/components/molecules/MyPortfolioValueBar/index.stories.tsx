import { MyPortfolioValueBar } from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "@storybook/addon-console";
export default {
  title: "molecules/MyPortfolioValueBar ",
  component: MyPortfolioValueBar,
  argTypes: {
    title: { control: "text" },
    isProfit: { control: "boolean" },
    totalInvestment: { control: "text" },
    profit: { control: "text" },
    loss: { control: "text" },
  },
} as ComponentMeta<typeof MyPortfolioValueBar>;

const template: ComponentStory<typeof MyPortfolioValueBar> = (args) => (
  <MyPortfolioValueBar {...args} />
);
export const Card1 = template.bind({});
Card1.args = {
  title: "Total Investment",
  isProfit: true,
  totalInvestment: "$ 0.00",
  profit: "+0.0%",
  loss: "+0.0%",
};
