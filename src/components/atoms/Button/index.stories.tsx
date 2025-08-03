import MuiButton from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";
export default {
  title: "atoms/Button",
  component: MuiButton,
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["text", "contained", "outlined"],
    },
    color: {
      control: { type: "select" },
      options: ["info", "primary", "success", "error", "warning"],
    },
    size: { control: { type: "radio" }, options: ["small", "medium", "large"] },
    disabled: { control: { type: "boolean" } },
  },
} as ComponentMeta<typeof MuiButton>;

const template: ComponentStory<typeof MuiButton> = (args) => (
  <MuiButton {...args} />
);
export const Primary = template.bind({});
export const Secondary = template.bind({});
Secondary.args = {
  variant: "outlined",
  children: "buy",
  size: "medium",
  color: "primary",
  disabled: true,
  sx: {
    width: "100px",
    height: "40px",
    color: "black",
  },
};
Primary.args = {
  variant: "contained",
  children: "sell",
  size: "small",
  color: "warning",
  disabled: true,
  sx: {
    width: "100px",
    height: "40px",
    color: "black",
  },
};
