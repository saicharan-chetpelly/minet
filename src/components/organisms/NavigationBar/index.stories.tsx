import NavigationBar from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "@storybook/addon-console"
export default {
  title: "organisms/NavigationBar ",
  component: NavigationBar,
 
} as ComponentMeta<typeof NavigationBar>;

const template: ComponentStory<typeof NavigationBar> = (args) => (
  <NavigationBar  />
);
export const Primary = template.bind({});
Primary.args = {
  
};
