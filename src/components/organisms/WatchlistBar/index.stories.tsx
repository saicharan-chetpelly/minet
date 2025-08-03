import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import WatchList from ".";
import Partition from "../../../../public/assets/images/Partition.svg";
export default {
  title: "organisms/WatchList",
  component: WatchList,
  argTypes: {
    mainText: {
      control: { type: "text" },
    },
    optionText: {
      control: { type: "text" },
    },
    editText: {
      control: { type: "text" },
    },
  },
} as ComponentMeta<typeof WatchList>;
const template: ComponentStory<typeof WatchList> = (args) => (
  <WatchList {...args} />
);
export const WatchList1 = template.bind({});
WatchList1.args = {
  mainText: "Watchlist",
  optionText: "Discover assets",
  partition: Partition,
  editText: "View Watchlist",
};
