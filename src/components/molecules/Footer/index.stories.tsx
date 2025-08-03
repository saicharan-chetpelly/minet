import Footer from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";
export default {
  title: "molecules/Footer",
  component: Footer,
  argTypes: {
    backgroundColor: {
      control: { type: "text" },
    },
    width: { control: { type: "text" },},
    
  },
} as ComponentMeta<typeof Footer
>;

const template: ComponentStory<typeof Footer> = (args) => (<Footer />);
export const Primary = template.bind({});
Primary.args = {
  menuList: ['English','Hindi'],
  width: "170px",
  backgroundColor: "grey"
};