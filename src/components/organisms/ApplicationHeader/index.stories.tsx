import { ComponentMeta, ComponentStory } from "@storybook/react";
import ApplicationHeader from ".";

export default {
  title: "organisms/AppliactionHeader",
  component: ApplicationHeader,  
  argTypes:{
    headerTitle:{control:{type:"text"}},
    isBottonsRequired:{control:{type:"boolean"}}
  }
} as ComponentMeta<typeof ApplicationHeader>;

const Template: ComponentStory<typeof ApplicationHeader> = (args) => (
  <ApplicationHeader {...args} />
);
export const Primary = Template.bind({});
Primary.args = {
  headerTitle:"Dashbord",
  isButtonsRequired:true
};

