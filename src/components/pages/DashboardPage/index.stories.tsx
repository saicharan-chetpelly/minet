import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DashboardPage from "."
export default {
    title: "pages/DashboardPage",
    component: DashboardPage,
    argTypes: {
      leftText: {
        control: { type: "text" },
      },
    }
  } as ComponentMeta<typeof DashboardPage>;
  const template: ComponentStory<typeof DashboardPage> = (args) => <DashboardPage {...args}/>;
  export const DashboardPage1 = template.bind({});
  DashboardPage1.args = {
    leftText: 'My PortFolio Value',
  };
  