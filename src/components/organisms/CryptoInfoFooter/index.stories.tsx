import { CryptoInfoFooter } from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "@storybook/addon-console";
import BitcoinIcon from "../../../../public/assets/images/bitcoin.svg";
export default {
  title: "organisms/CryptoInfoFooter ",
  component: CryptoInfoFooter,
} as ComponentMeta<typeof CryptoInfoFooter>;

const template: ComponentStory<typeof CryptoInfoFooter> = (args) => (
  <CryptoInfoFooter {...args} />
);
export const Bitcoin = template.bind({});
Bitcoin.args = {
  iconURL: BitcoinIcon,
  cryptoName: "Bitcoin",
};
