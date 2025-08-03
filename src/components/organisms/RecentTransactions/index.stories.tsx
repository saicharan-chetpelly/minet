import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import RecentTransactionsComponent from "."
export default {
    title: "organisms/RecentTransactionsComponent",
    component: RecentTransactionsComponent,
    argTypes: {
      mainText:{
        control:{type:"text"},
      },
      optionText:{
        control:{type:"text"},
      }
    }
  } as ComponentMeta<typeof RecentTransactionsComponent>;
  const template: ComponentStory<typeof RecentTransactionsComponent> = (args) => <RecentTransactionsComponent {...args}/>;
  export const RecentTransactionsComponent1 = template.bind({});
RecentTransactionsComponent1.args = {
   mainText:"Recent Transactions",
   optionText:"View All"
  };
  