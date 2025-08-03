import { TradeScreen } from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "@storybook/addon-console";
export default {
  title: "pages/TradeScreen ",
  component: TradeScreen,
  argTypes: {
    crytoName: { control: "text" },
  },
} as ComponentMeta<typeof TradeScreen>;

const template: ComponentStory<typeof TradeScreen> = (args) => (
  <TradeScreen {...args} />
);
export const Bitcoin = template.bind({});
Bitcoin.args = {
  cryptoName: "Bitcoin",
};
export const Ethereum = template.bind({});
Ethereum.args = {
  cryptoName: "Ethereum",
};
