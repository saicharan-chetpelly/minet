import { ComponentStory, ComponentMeta } from "@storybook/react";
import PaymentAndDetailsCard from ".";

export default {
  title: "organisms/PaymentAndDetailsCard",
  component: PaymentAndDetailsCard,
} as ComponentMeta<typeof PaymentAndDetailsCard>;

const Template: ComponentStory<typeof PaymentAndDetailsCard> = (args) => (
  <PaymentAndDetailsCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  title: "Payment Method",
};