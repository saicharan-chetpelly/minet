import { ComponentMeta, ComponentStory } from "@storybook/react";
import TypographyComponent from "./index";

export default {
  title: "atoms/TypographyComponent",
  component: TypographyComponent,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "button",
        "caption",
        "heading4",
        "heading6",
        "subtitle1",
        "subtitle2",
        "body1",
        "body2",
        "overline",
        undefined,
      ],
    },
    align: {
      control: { type: "select" },
      options: ["inherit", "center", "right", "left", "justify", undefined],
    },
    fontWeight: {
      control: { type: "number" },
    },
  },
} as ComponentMeta<typeof TypographyComponent>;

const Template: ComponentStory<typeof TypographyComponent> = (args) => (
  <TypographyComponent {...args} />
);
export const Primary = Template.bind({});
Primary.args = {
  variant: "heading4",
  children: "sample text1",
  align: "center",
  fontWeight: 400,
};
export const Secondary = Template.bind({});
Secondary.args = {
  variant: "heading4",
  children: "sample text2",
  align: "left",
  fontWeight: 600,
};