import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import DiscoverAssets from ".";

export default {
  title: "organisms/DiscoverAssets",
  component: DiscoverAssets,
} as ComponentMeta<typeof DiscoverAssets>;

const Template: ComponentStory<typeof DiscoverAssets> = () => (
  <DiscoverAssets />
);
export const Primary = Template.bind({});
Primary.args = {};
