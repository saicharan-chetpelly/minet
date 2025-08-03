import { render, fireEvent,screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store';
import { AmountDetails } from '.';
import React from "react"

describe('checking for rendering of AmountDetails Card', () => {
  test('updates state correctly when button is clicked', () => {
    render(
            <Provider store={store}>
              <AmountDetails outertxt="Amount details"
              btctext="BTC"
              buttontext="Buy Max"
              items={[
                {
                  id: 1,
                  iconURL:"BitCoinIcon",
                  cryptoName: "Bitcoin",
                  price: "$3,406,069.54",
                  type: "BTC",
                },
              ]}/>
            </Provider>
          );
    const button = screen.getByRole('button', { name: /buy max/i });
    fireEvent.click(button);
    
    const state = store.getState();
    expect(state.lowerPrice.val.price).toBe(1);
  });
  test('updates state correctly when slider is moved', () => {
   render(
            <Provider store={store}>
              <AmountDetails outertxt="Amount details"
              btctext="BTC"
              buttontext="Buy Max"
              items={[
                {
                  id: 1,
                  iconURL:"BitCoinIcon",
                  cryptoName: "Bitcoin",
                  price: "$3,406,069.54",
                  type: "BTC",
                },
              ]}/>
            </Provider>
          );
    const slider = screen.getByRole('slider');
    fireEvent.change(slider,{target:{value:0.486667}})
    const state = store.getState();
    expect(state.lowerPrice.val.price).toBe(0.486667);
  });
});
