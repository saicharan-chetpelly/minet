import React from 'react';
import { render, fireEvent ,screen} from '@testing-library/react';
import { Provider } from 'react-redux';
import { BuyCrypto } from '.';
import {store} from "../../../store"
import data from "../../../data/db.json"



describe('checking for the cryptoSelect component that', () => {
  test('should show the image correctly', () => {
     render(
      <Provider store={store}>
     <BuyCrypto  subTitle="Buy Crypto"
        boxTitle="Choose Crypto"
        items={data.chooseCrypto}/></Provider>);
        const textElement=screen.getByTestId("title");
          expect(textElement).toBeInTheDocument()
  });
  test("checking for click event  that  should select the clicked card",  ()=>{
     render(
      <Provider store={store}>
    <BuyCrypto  subTitle="Buy Crypto"
        boxTitle="Choose Crypto"
        items={data.chooseCrypto}/></Provider>);
    const selectedCard = screen.queryAllByTestId('card');
    fireEvent.click(selectedCard[2]);
    fireEvent.click(selectedCard[3]);
    expect(store.getState().cryptoData.value.id).toEqual(3)
    })
});
