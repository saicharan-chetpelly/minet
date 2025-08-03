import Input from "./index";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import SearchIcon from '@mui/icons-material/Search';
import VisibilityIcon from '@mui/icons-material/Visibility';
export default {
  title: "atoms/Input",
  component: Input,
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["outlined", "standard", "filled"],
    },
    color: {
      control: { type: "select" },
      options: ["primary", "error", "secondary", "info", "success", "warning"],
    },
  },
} as ComponentMeta<typeof Input>;

const template: ComponentStory<typeof Input> = (args) => <Input {...args} />;


export const primary = template.bind({});
primary.args = {
  variant: "outlined",
  label: "email",
  color: "primary",
  icon:<SearchIcon />
};
export const secondary = template.bind({});
secondary.args = {
  variant: "outlined",
  label: "email",
  color: "primary",
  icon:<VisibilityIcon />
};
