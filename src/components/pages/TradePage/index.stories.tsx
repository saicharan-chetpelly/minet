import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import TradePage from ".";

export default {
  title: "Pages/TradePage",
  component: TradePage,
} as ComponentMeta<typeof TradePage>;

const Template: ComponentStory<typeof TradePage> = (args) => <TradePage />;
export const Primary = Template.bind({});
Primary.args = {};
