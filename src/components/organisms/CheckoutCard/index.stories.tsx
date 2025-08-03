import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Provider } from "react-redux";
import  CheckoutCard from ".";
import {store} from "../../../store";

export default {
  title: "organisms/CheckoutCard",
  component: CheckoutCard,
} as ComponentMeta<typeof CheckoutCard>;

const Template: ComponentStory<typeof CheckoutCard> = (args) => (
  <Provider store={store}>
    <CheckoutCard {...args} />
  </Provider>
);

export const Primary = Template.bind({});
Primary.args = {
items:[
    {
        id: 0,
  iconURL: "",
  cryptoName: "BTC",
  price:"3456700.00",
  type:""
    }
],
};