import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Provider } from "react-redux";
import {store} from "../../../store";
import PurchasePage from "."
export default {
    title: "pages/PurchasePage",
    component: PurchasePage,
  } as ComponentMeta<typeof PurchasePage>;
  const template: ComponentStory<typeof PurchasePage> = (args) => (
    <Provider store={store}>
        <PurchasePage/>;
        </Provider>);
  export const PurchasePage1 = template.bind({});
  PurchasePage1.args = {

  };