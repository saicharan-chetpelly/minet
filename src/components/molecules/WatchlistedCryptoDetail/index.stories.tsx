import { WatchlistedCryptoDetail } from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "@storybook/addon-console";
import BitcoinIcon from "../../../../public/assets/images/bitcoin.svg";
export default {
  title: "molecules/WatchlistedCryptoDetail ",
  component: WatchlistedCryptoDetail,
} as ComponentMeta<typeof WatchlistedCryptoDetail>;

const template: ComponentStory<typeof WatchlistedCryptoDetail> = (args) => (
  <WatchlistedCryptoDetail {...args} />
);
export const Bitcoin = template.bind({});
Bitcoin.args = {
  iconURL: BitcoinIcon,
  cryptoName: "Bitcoin",
  type: "BTC",
  price: "$3,406,069.54",
  change: "+1.06%",
  marketCap: "$60.1T",
  Vol24H: "$2.9T",
  circulatingSupply: "18.8M BTC",
  profitloss: "+8.2%",
  isWatchlisted: false,
};
