import RecentTransaction from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "@storybook/addon-console"
export default {
  title: "molecules/RecentTransaction ",
  component: RecentTransaction,
 
} as ComponentMeta<typeof RecentTransaction>;

const template: ComponentStory<typeof RecentTransaction> = (args) => (
  <RecentTransaction  />
);
export const Primary = template.bind({});
Primary.args = {
  
};