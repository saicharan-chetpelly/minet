import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Icon from "./index"
import BankCard from '../../../../public/assets/images/bank-card.svg'
import DashBoard from '../../../../public/assets/images/dashboard.svg'
import Eye from '../../../../public/assets/images/eye.svg'
import Filter from '../../../../public/assets/images/filter.svg'
export default {
    title: "atoms/Icon Atom",
    component: Icon,
    argTypes: {
      src: {
      control: {type:'select'},
      options: [BankCard,Eye,Filter,DashBoard],
      },
      width: {
        control: { type: 'text' },
      },
      height:{
        control: { type: 'text' },
      }, 
    }
  } as ComponentMeta<typeof Icon>;
  const template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;
  export const Icon1 = template.bind({});
  Icon1.args = {
    src: DashBoard,
    width: '20px',
    height: '20px',
  };
  