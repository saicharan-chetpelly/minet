import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import IconWithTypography from "."
import theme from '../../../theme/theme';
import Bitcoin from '../../../../public/assets/images/bitcoin.svg'
export default {
    title: "molecules/IconWithTypography",
    component: IconWithTypography,
    argTypes: {
      text: { control: 'text' },
      subText: { control: 'text' },
      textVariant: { control: 'select', options: ['h1', 'h2', 'h3', 'heading4', 'h5', 'heading6', 'subtitle1', 'subtitle2', 'body1', 'body2'] },
      subTextVariant: { control: 'select', options: ['h1', 'h2', 'h3', 'heading4', 'h5', 'heading6', 'subtitle1', 'subtitle2', 'body1', 'body2'] },
      textColor: { control: 'color' },
      subTextColor: { control: 'color' },
      image: { control: 'text' },
      imageHeight: { control: 'text' },
      imageWidth: { control: 'text' },
      iconandtextgap: { control: 'text' },
      textHeight: { control: 'text' },
      textWidth: { control: 'text' },
      margin: { control: 'text' },
      gapBetweenText: { control: 'text' },
    },
  } as ComponentMeta<typeof IconWithTypography>;
  const template: ComponentStory<typeof IconWithTypography> = (args) =>  <IconWithTypography {...args} />;
  export const IconWithTypography1 = template.bind({});
IconWithTypography1.args = {
  text: 'Default Icon with Typography',
  subText: 'Sub Text',
  image:Bitcoin,
  imageHeight: '50px',
  imageWidth: '50px',
  textVariant: 'subtitle1',
  };
  