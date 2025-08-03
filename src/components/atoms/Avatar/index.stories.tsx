import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AvatarComponent from '.';
import ProfileImage from "../../../../public/assets/images/profile.svg"
export default {
    title: "atoms/Avatar Atom",
    component: AvatarComponent,
    argTypes:{
      variant:{
        control:{type:"radio"},
        options:["circular","rounded","square"],
      },
    }
  } as ComponentMeta<typeof AvatarComponent>;
  const template: ComponentStory<typeof AvatarComponent> = (args) => <AvatarComponent {...args} />;
  export const Avatar1 = template.bind({});
  Avatar1.args = {
    src:ProfileImage,
    alt:"profile",
    variant:"circular",
  };
  export const Avatar2 = template.bind({});
  Avatar2.args={
    children:"N",
    variant:"square"
  } 