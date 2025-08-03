import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PaymentStatus } from ".";
import { PAYMENT_FAIL, PAYMENT_SUCCESS } from "../../utils/constants";

export default {
  title: "organisms/PaymentStatus",
  component: PaymentStatus,
  argTypes: {
    value: {
      control: { type: "text" },
    },
    message: {
      control: { type: "text" },
    },
    cryptoButton: {
      control: { type: "text" },
    },
  },
} as ComponentMeta<typeof PaymentStatus>;
const template: ComponentStory<typeof PaymentStatus> = (args) => (
  <PaymentStatus {...args} />
);
export const BuyBitcoin = template.bind({});
BuyBitcoin.args = {
  value: "0.0234510 BTC",
  message: PAYMENT_SUCCESS,
  cryptoButton: "BUY CRYPTO",
};
export const BitcoinFail = template.bind({});
BitcoinFail.args = {
  value: "0.0234510 BTC",
  message: PAYMENT_FAIL,
  cryptoButton: "BUY CRYPTO",
};
export const BuyEthereum = template.bind({});
BuyEthereum.args = {
  value: "0.5234510 ETH",
  message: PAYMENT_SUCCESS,
  cryptoButton: "BUY CRYPTO",
};