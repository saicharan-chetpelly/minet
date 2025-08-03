import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { WatchListItem } from ".";
export default {
  title: "molecules/WatchListItem",
  component: WatchListItem,
  argTypes: {
  },
} as ComponentMeta<typeof WatchListItem>;
const template: ComponentStory<typeof WatchListItem> = () => (
  <WatchListItem  />
);
export const WatchList = template.bind({});
WatchList.args = {
};
