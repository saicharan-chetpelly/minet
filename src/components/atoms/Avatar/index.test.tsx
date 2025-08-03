import  {render,screen} from "@testing-library/react"
import AvatarComponent from "."
import React from 'react'
import '@testing-library/jest-dom'

describe("Avatar component tests correctly",()=>{
    test("Avatar tests correctly with src",()=>{
        render(<AvatarComponent src="../assets/images/profile.svg"/>)
        const avatar=screen.getByRole('img');
        expect(avatar).toBeInTheDocument();
    })
    test("Avatar tests correctly with children",()=>{
        render(<AvatarComponent children="N" />)
    })
})