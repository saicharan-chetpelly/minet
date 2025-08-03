import {render,screen} from "@testing-library/react"
import TypographyComponent from "."
import React from 'react'
import '@testing-library/jest-dom'

describe("Typography component tests correctly",()=>{
    test("Typograpghy tests correctly with textId",()=>{
        render(<TypographyComponent variant="heading6" children="Hello"/>)
        expect(screen.getByText(/hello/i)).toBeInTheDocument();
    })
})