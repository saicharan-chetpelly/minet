import { MyWalletTransactions } from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "@storybook/addon-console";
import { getImagePath } from "../../organisms/CryptoInfoFooter";
export default {
  title: "molecules/WalletTransactions ",
  component: MyWalletTransactions,
  argTypes: {
    date: { control: "Date" },
    status: { control: "text" },
    icon: { control: "text" },
    depositor: { control: "text" },
    balance: { control: "text" },
    type: { control: "text" },
    cost: { control: "text" },
    name: { control: "text" },
  },
} as ComponentMeta<typeof MyWalletTransactions>;

const template: ComponentStory<typeof MyWalletTransactions> = (args) => (
  <MyWalletTransactions {...args} />
);

export const Bitcoin = template.bind({});
Bitcoin.args = {
  date: new Date("2015-02-28T12:00:00Z"),
  name: "Bitcoin",
  status: "warning",
  icon: getImagePath("BitcoinIcon"),
  cost: "+0.0010 BTC",
  balance: "+$900",
  type: "BTC",
  depositor: "Badgley",
};
