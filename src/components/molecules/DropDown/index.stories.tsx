import { ComponentMeta, ComponentStory } from "@storybook/react";
import DropDown from ".";

export default {
  title: "molecules/DropDown",
  component: DropDown   
} as ComponentMeta<typeof DropDown>;

const Template: ComponentStory<typeof DropDown> = () => (
  <DropDown />
);
export const Primary = Template.bind({});
Primary.args = {
  
};

