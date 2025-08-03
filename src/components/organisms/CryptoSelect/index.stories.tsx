import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Provider } from "react-redux";
import  {BuyCrypto} from ".";
import {store} from "../../../store";
import data from "../../../data/db.json"
export default {
  title: "organisms/BuyCrypto",
  component: BuyCrypto,
  argTypes: {
    subTitle: {
      control: { type: "text" },},
    boxTitle: {
        control: { type: "text" },},
  },
} as ComponentMeta<typeof BuyCrypto>;

const Template: ComponentStory<typeof BuyCrypto> = (args) => (
  <Provider store={store}>
    <BuyCrypto {...args} />
  </Provider>
);

export const Primary = Template.bind({});
Primary.args = {
subTitle:"Buy Crypto",
boxTitle:"Choose Crypto",
items:[ {
  id: 1,
  iconURL: "BitCoinIcon",
  cryptoName: "Bitcoin",
  price: "$3,406,069.54",
  deliveryFee: 0.001
},
{
  id: 2,
  iconURL: "EthereumIcon",
  cryptoName: "Ethereum",
  price: "$1,297.93",
  deliveryFee: 0.005
},
{
  id: 3,
  iconURL: "BinanceIcon",
  cryptoName: "Binance",
  price: "$30,054.88",
  deliveryFee: 0.002
}]
};