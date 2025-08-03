import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import TransactionStepper from '.';

const mockStore = configureMockStore([]);

describe('checking for the  TransactionStepper component', () => {
  let store:any;
 beforeEach(() => {
    store = mockStore({
      dropDownData: { value: { type: 'Standard', time: '3-4 days', fee: 0.01 } },
      cryptoData: { value: { id: 1 } }
    });
  });
  test('renders the transaction stepper whole data correctly', () => {
    render(
      <Provider store={store}>
        <TransactionStepper currencySymbol="BTC" cryptoName="Bitcoin"/>
      </Provider>

    );

    expect(screen.getByTestId('transaction-stepper')).toBeInTheDocument()
  });

  test('renders the transaction stepper with correct data', () => {
    render(
      <Provider store={store}>
        <TransactionStepper currencySymbol="BTC" cryptoName="Bitcoin"/>
      </Provider>
    );

    expect(screen.getByTestId('typo1')).toHaveTextContent('Visa credit ...8845');
  });
  test("should set currencySymbol prop correctly", () => {
    const currencySymbol = "ETH";
     render(
      <Provider store={store}>
      <TransactionStepper currencySymbol={currencySymbol}  cryptoName="Bitcoin"/>
    </Provider>
    );
   const typoElement=screen.getByTestId("currencyId")
   expect(typoElement.textContent).toContain("ETH")
  });
})
  