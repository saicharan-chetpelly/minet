import { ChooseCrypto } from "./index";
import { Provider } from "react-redux";
import { store } from "../../../store"
import Bitcoin from "../../../../public/assets/images/bitcoin-crypto.svg";
import Etherium from "../../../../public/assets/images/ethereum-crypto.svg";
import Binance from "../../../../public/assets/images/Binance.svg";
import Tether from "../../../../public/assets/images/tether-crypto.svg";
import Cardano from "../../../../public/assets/images/cardano-crypto.svg";
import XRP from "../../../../public/assets/images/xrp-crypto.svg";
import Dogecoin from "../../../../public/assets/images/dodge-crypto.svg";
import Polkadot from "../../../../public/assets/images/polkadot-crypto.svg";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import "@storybook/addon-console";
export default {
  title: "molecules/ChooseCrypto ",
  component: ChooseCrypto,
  argTypes: {
    imageSource: {
      control: { type: "select" },
      options: [
        Bitcoin,
        Etherium,
        Binance,
        Tether,
        Cardano,
        XRP,
        Dogecoin,
        Polkadot,
      ],
    },
    imageAlt: {
      control: { type: "text" },
    },
    CryptoText: {
      control: { type: "select" },
      options: [
        "Bitcoin",
        "Etherium",
        "Binance",
        "Tether",
        "Cardano",
        "XRP",
        "Dogecoin",
        "Polkadot",
      ],
    },
    CryptoPayment: { control: { type: "text" } },
  },
} as ComponentMeta<typeof ChooseCrypto>;

const template: ComponentStory<typeof ChooseCrypto> = (args) => (
  <Provider store={store}>
    <ChooseCrypto {...args} />
  </Provider>
);
export const Primary = template.bind({});
Primary.args = {
  imageSource: Bitcoin,
  imageAlt: "bitcoin",
  cryptoText: "Bitcoin",
  cryptoPayment: "$3,406,069.54",
};