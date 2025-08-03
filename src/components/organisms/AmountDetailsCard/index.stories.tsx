import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Provider } from "react-redux";
import { AmountDetails } from ".";
import {store} from "../../../store";

export default {
  title: "organisms/AmountDetails",
  component: AmountDetails,
} as ComponentMeta<typeof AmountDetails>;

const Template: ComponentStory<typeof AmountDetails> = (args) => (
  <Provider store={store}>
    <AmountDetails {...args} />
  </Provider>
);

export const Primary = Template.bind({});
Primary.args = {
  outertxt: "Amount details",
  buttontext: "Buy max",
  btctext: "BTC",
  items: [
    {
      id: 0,
      price: "$3,406,069.54",
      type: "BTC",
      iconURL:"",
      cryptoName:""
    },
  ],
};