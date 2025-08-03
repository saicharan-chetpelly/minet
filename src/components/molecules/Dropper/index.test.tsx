import React from 'react'
import {
  render,
  screen,
  fireEvent,
} from '@testing-library/react'
import '@testing-library/jest-dom'
import Dropper from '.'
it('should renders drop down component', async () => {
  const menuList = ['1H', '24H', '1W', '1M', '1Y', 'ALL']
  const fn = jest.fn()
  render(<Dropper onChange={fn} menuList={menuList} width="77px" />)
  const dropDown = screen.getByTestId('dropDown')
  expect(dropDown).toBeInTheDocument()
  if (dropDown.firstChild) {
    fireEvent.keyDown(dropDown.firstChild, { key: 'ArrowDown' })
    await screen.findByText('1W')
    const ele = screen.getByText('1W')
    fireEvent.click(ele)
    expect(fn).toHaveBeenCalledTimes(1)
    expect(fn).toHaveBeenCalledWith('1W')
  }
})
it('should renders drop down component', async () => {
  const menuList = ['1H', '24H', '1W', '1M', '1Y', 'ALL']
  render(<Dropper menuList={menuList} width="77px" />)
  const dropDown = screen.getByTestId('dropDown')
  expect(dropDown).toBeInTheDocument()
})