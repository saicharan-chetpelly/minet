import { render, screen, fireEvent } from "@testing-library/react";
import { deliveryTypes } from "../../utils/constants";
import DeliveryDropdown from ".";
import React from 'react'
import data from "../../../data/db.json"
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { store } from "../../../store";

describe("checking for the deliveryDropDown component that ", () => {
  test("tests whether the header is rendering correct or not",async ()=>{
   await  render(<Provider store={store}>
    <DeliveryDropdown items={data.chooseCrypto} deliveryTypes={deliveryTypes}/>
    </Provider>)
    const typoElement=screen.getByTestId("typo")
    expect(typoElement).toBeInTheDocument()
  })
  test("tests wheter renders the default delivery type", async () => {
   await  render(<Provider store={store}>
      <DeliveryDropdown items={data.chooseCrypto}  deliveryTypes={deliveryTypes}/>
      </Provider>)
       const selectElement = screen.getByTestId('selectId')
       fireEvent.click(selectElement)
      const dropdown = screen.getByTestId('dropdown')
       expect(dropdown).toBeVisible()
  });
  test("testing whether the header is rendering correct or not",async ()=>{
    await  render(<Provider store={store}>
     <DeliveryDropdown items={data.chooseCrypto}  deliveryTypes={deliveryTypes}/>
     </Provider>)
    const dropDown=screen.getByLabelText("Without label")
    fireEvent.mouseDown(dropDown)
    const items=screen.getAllByTestId("menuItems")
     expect(items).toHaveLength(3)
    fireEvent.click(items[1])
   })
   test("for the case when the none menu item is chosen",async()=>{
    await  render(<Provider store={store}>
      <DeliveryDropdown items={data.chooseCrypto}  deliveryTypes={deliveryTypes}/>
      </Provider>)
     const dropDown=screen.getByLabelText("Without label")
     fireEvent.mouseDown(dropDown)
     const menuItem=screen.getByTestId("noneId")
     fireEvent.click(menuItem)
     })
     test("testing whether the header is rendering correct or not",async ()=>{
      await  render(<Provider store={store}>
       <DeliveryDropdown items={data.chooseCrypto} deliveryTypes={[...deliveryTypes,{ id:4,
        time:"None",
        type:"None"}]}/>
       </Provider>)
       const typoElement=screen.getByTestId("typo")
       expect(typoElement).toBeInTheDocument()
     })
})
