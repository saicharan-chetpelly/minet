import {  render,screen, waitForElementToBeRemoved } from "@testing-library/react";
import PaymentAndDetailsCard from ".";
import React from "react"
import "@testing-library/jest-dom";
import { server } from "../../../mocks/server";
import { rest } from "msw";

describe("checking for the PaymentAndDetails Card component that ", () => {
  const props = {
    title: "Payment Method",
  };
  test("tests whether the data is loading or not", async ()=>{
    render(<PaymentAndDetailsCard {...props} />)
      const users =  screen.getByText("Loading...")
        expect(users).toBeInTheDocument()
      })
test("Rendering the images of the my portfolio data", async ()=>{
    render(<PaymentAndDetailsCard {...props} />)
          await waitForElementToBeRemoved( 
              screen.getByText("Loading...")
        );
          const imageElement =  screen.getByAltText("USDCoin")
          expect(imageElement).toBeInTheDocument()
        })
  test("renders errors", async () => {
    server.use(
      rest.get(
        "http://localhost:3001/wallets",
         (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );
    render(<PaymentAndDetailsCard  {...props} />)
    await waitForElementToBeRemoved( 
        screen.getByText("Loading...")
      );
   const error =  await screen.getByTestId("para1");
    expect(error).toBeInTheDocument();
  });
});