import Dropper from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";
export default {
  title: "molecules/Dropper",
  component: Dropper,
  argTypes: {
    backgroundColor: {
      control: { type: "text" },
    },
    width: { control: { type: "text" },},
    
  },
} as ComponentMeta<typeof Dropper>;

const template: ComponentStory<typeof Dropper> = (args) => (
  <Dropper {...args} />
);
export const Primary = template.bind({});
Primary.args = {
  menuList: ['English','Hindi'],
  width: "170px",
  backgroundColor: "grey",
 
};
