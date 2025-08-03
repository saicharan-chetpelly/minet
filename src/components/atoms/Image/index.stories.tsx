import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Image } from "./index";
import LoginImage from '../../../../public/assets/images/LoginImage.svg'
import SignUpImage from '../../../../public/assets/images/SignupImage.svg'
export default {
  title: "atoms/Image",
  component: Image,
  argTypes: {
    source: {
      control: { type: "select" },
      options: [LoginImage,SignUpImage],
    },
    width: {
      control: { type: "text" },
    },
    height: {
      control: { type: "text" },
    },
  },
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args: any) => (
  <Image {...args} />
);

export const Login = Template.bind({});
Login.args = {
  source: LoginImage,
  width: "720px",
  height: "768px",
};

export const Signup = Template.bind({});
Signup.args = {
  source:SignUpImage,
  width: "720px",
  height: "768px",
};
