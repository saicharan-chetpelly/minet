import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Transaction from './index'
import success from "../../../public/assets/images/transaction-status.svg";

it('renders Icon', () => {
  render(<Transaction date={new Date("2015-02-10T12:00:00Z")} name="Bitcoin BTC" status="Sold" icon={success} cost="-0.0234510 BTC" balance="+$34,000.00" />)
  const image = screen.getByTestId('transactionComponent')
  expect(image).toBeDefined()
})