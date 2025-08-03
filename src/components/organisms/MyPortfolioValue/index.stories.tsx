import { MyPortfolioValue } from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "@storybook/addon-console";
export default {
  title: "organisms/MyPortfolioValue ",
  component: MyPortfolioValue,
  argTypes: {
    showCrypto: { control: "boolean" },
    isProfit: { control: "boolean" },
  },
} as ComponentMeta<typeof MyPortfolioValue>;

const template: ComponentStory<typeof MyPortfolioValue> = (args) => (
  <MyPortfolioValue {...args} />
);
export const MyPortfolioValue1 = template.bind({});
MyPortfolioValue1.args = {
  showCrypto: true,
  isProfit: true,
};
