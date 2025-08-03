import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MyPortfolio from "."
import Chart from "../../../../public/assets/images/chart.svg"
import List1 from "../../../../public/assets/images/list-1.svg"
export default {
    title: "organisms/MyPortfolio",
    component: MyPortfolio,
    argTypes: {
      mainHead:{
        control:{type:"text"},
      },
      imageOne:{
        control:{type:"text"},
      },
      imageTwo:{
        control:{type:"text"},
      }

    }
  } as ComponentMeta<typeof MyPortfolio>;
  const template: ComponentStory<typeof MyPortfolio> = (args) => <MyPortfolio {...args}/>;
  export const MyPortfolio1 = template.bind({});
MyPortfolio1.args = {
   mainHead:"My Portfolio",
   imageOne:Chart,
   imageTwo:List1
  };
  