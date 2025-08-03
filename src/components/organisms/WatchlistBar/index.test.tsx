import React from 'react'
import '@testing-library/jest-dom'
import { screen, render, fireEvent } from '@testing-library/react'
import WatchList from '.'
import Partition from '../../../../public/assets/images/Partition.svg'
import { BrowserRouter } from 'react-router-dom'
describe('WatchList tests', () => {
  test('Whether Watchlist rendering or not', () => {
    render(<BrowserRouter><WatchList mainText={'Watchlist'} optionText={'discover'} partition={Partition} editText={'edit'}/></BrowserRouter>)
  })
})
it('contains a TypographyComponent with text "Discover assets"', () => {
  const { getByText } = render(<BrowserRouter><WatchList mainText={'Watchlist'} optionText={'Discover assets'} partition={Partition} editText={'edit'}/></BrowserRouter>);
  expect(getByText('Discover assets')).toBeInTheDocument();
});
it('contains a "watchlist" data-testid attribute', () => {
  const { getByTestId } = render(<BrowserRouter><WatchList mainText={'Watchlist'} optionText={'discover'} partition={Partition} editText={'edit'}/></BrowserRouter>);
  expect(getByTestId('watchlist')).toBeInTheDocument();
});
it('contains a StyledBox component with data-testid="styled-box"', () => {
  const { getByTestId } = render(<BrowserRouter><WatchList mainText={'Watchlist'} optionText={'discover'} partition={Partition} editText={'edit'}/></BrowserRouter>);
  expect(getByTestId('styled-box')).toBeInTheDocument();
});
it("fire event check for discover assets",()=>{
  render(<BrowserRouter><WatchList mainText={'Watchlist'} optionText={'Discover assets'} partition={Partition} editText={'View Watchlist'}/></BrowserRouter>);
  fireEvent.click(screen.getByRole("button",{name:/discover assets/i}));
});
it("fire event check for view watchlist",()=>{
  render(<BrowserRouter><WatchList mainText={'Watchlist'} optionText={'Discover assets'} partition={Partition} editText={'View Watchlist'} /></BrowserRouter>);
  fireEvent.click(screen.getByRole("button",{name:/view watchlist/i}));
});