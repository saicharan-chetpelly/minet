import Transaction from "./index";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Success from "../../../../public/assets/images/transaction-success.svg";

export default {
  title: "molecules/Transaction",
  component: Transaction,
  argTypes: {
    
  },
} as ComponentMeta<typeof Transaction>;

const template: ComponentStory<typeof Transaction> = (args) => <Transaction {...args} />;


export const primary = template.bind({});
primary.args = {
    date: new Date("2015-02-28T12:00:00Z"),
    name: "Bitcoin BTC",
    status: "Sold",
    icon: Success ,
    cost: "-0.0234510 BTC",
    balance: "+$34,000.00",

};
