import TransactionStepper from "./index";
import { Provider } from "react-redux";
import {store} from "../../../store"
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "@storybook/addon-console";
export default {
  title: "molecules/TransactionStepper ",
  component: TransactionStepper,
} as ComponentMeta<typeof TransactionStepper>;

const template: ComponentStory<typeof TransactionStepper> = (args) => (
  <Provider store={store}>
    <TransactionStepper {...args}/>
  </Provider>
);
export const Primary = template.bind({});
Primary.args = {
  currencySymbol:"BTC",
  cryptoName:"Bitcoin"
};