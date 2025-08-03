import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import RecentTransactionsComponent from '.'

it('should renders the recent transactions', () => {
  render(
    <RecentTransactionsComponent mainText={'Recent Transactions'} optionText={'View All'} />
  )
  const ReactElement = screen.getByTestId('recentTransacions')
  expect(ReactElement).toBeInTheDocument()
})
it('contains a Recent Transactions text', () => {
  const { getByText } = render(<RecentTransactionsComponent mainText={'Recent Transactions'} optionText={'View All'} />);
  expect(getByText('Recent Transactions')).toBeInTheDocument();
});
it('contains a View All text', () => {
  const { getByText } = render(<RecentTransactionsComponent mainText={'Recent Transactions'} optionText={'View All'} />);
  expect(getByText('View All')).toBeInTheDocument();
});
