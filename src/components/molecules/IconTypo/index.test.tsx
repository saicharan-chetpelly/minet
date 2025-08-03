import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import IconWithTypography from '.'
import '@testing-library/jest-dom'
import theme from '../../../theme/theme'
it('should renders Icon With Typography having text and subtext', async () => {
  render(
    <IconWithTypography
      image="assets/images/bitcoin.svg"
      imageHeight="42px"
      imageWidth="42px"
      text="Bitcoin"
      textVariant="body1"
      textColor={theme.palette.textColor.highEmphasis}
      subText="BTC"
      subTextVariant="overline"
      subTextColor={theme.palette.textColor.mediumEmphasis}
    />
  )
  let wrapper = screen.getByTestId('iconWithTypography')
  expect(wrapper).toBeInTheDocument()
  wrapper = screen.getByTestId('iconWithTypography-subtext')
  expect(wrapper).toBeInTheDocument()
  wrapper = screen.getByTestId('flex-col')
  expect(wrapper).toBeInTheDocument()
})
it('should renders Icon With Typography having text only', async () => {
  render(
    <IconWithTypography
      image="assets/images/bitcoin.svg"
      imageHeight="42px"
      imageWidth="42px"
      text="Bitcoin"
      textVariant="body1"
      textColor={theme.palette.textColor.highEmphasis}
      iconandtextgap="10px"
    />
  )
  const wrapper = screen.getByTestId('iconWithTypography')
  expect(wrapper).toBeInTheDocument()
})
it('should renders Icon With Typography when inconTypogrsphy gap is not passed', async () => {
  render(
    <IconWithTypography
      image="assets/images/bitcoin.svg"
      imageHeight="42px"
      imageWidth="42px"
      text="Bitcoin"
      textVariant="body1"
      textColor={theme.palette.textColor.highEmphasis}
    />
  )
  const wrapper = screen.getByTestId('iconWithTypography')
  expect(wrapper).toHaveStyle('gap:10px')
  expect(wrapper).toBeInTheDocument()
})
it('renders', () => {
    render( <IconWithTypography
      image="assets/images/bitcoin.svg"
      imageHeight="42px"
      imageWidth="42px"
      text="Bitcoin"
      textVariant="body1"
      textColor={theme.palette.textColor.highEmphasis}
      iconandtextgap="10px"
      gapBetweenText="10px"
      margin="0"
      textHeight="5px"
      
    />)
  })