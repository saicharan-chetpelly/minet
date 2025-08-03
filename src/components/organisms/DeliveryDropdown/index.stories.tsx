import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import DeliveryDropdown from ".";
import { Provider } from "react-redux";
import {store} from "../../../store";
import { deliveryTypes } from "../../utils/constants";
export default {
  title: "organisms/DeliveryDropdown",
  component: DeliveryDropdown,
  argTypes: {
    instantTime: {
      control: { type: "text" },
    },
    deliveryFee: {
      control: { type: "text" },
    },
    type: {
      control: { type: "text" },
    },
  },
} as ComponentMeta<typeof DeliveryDropdown>;
const template: ComponentStory<typeof DeliveryDropdown> = (args) => (
  <Provider store={store}>
    <DeliveryDropdown {...args} />
  </Provider>
);
export const DeliveryDropdown1 = template.bind({});
DeliveryDropdown1.args = {
  items: [{ id: 1, deliveryFee: 0.001, type: "BTC" }],
  deliveryTypes:[ {
    id:0,
    time:"2-5 minutes",
    type:"Instant",
},
{
    id:1,
    time:"4 hours",
    type:"Faster"
},
{
    id:2,
    time:"120 hours",
    type:"Fast"
}]
};