import {render,screen,fireEvent} from "@testing-library/react"
import DropDown from "."
import React from "react"

test("dropdown runs correctly",()=>{
    render(<DropDown />)
    fireEvent.click(screen.getByRole("button"))
    fireEvent.click(screen.getByRole('menuitem', {
        name: /logout/i
      }))
})