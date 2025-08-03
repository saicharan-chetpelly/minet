import { fireEvent, render,screen } from "@testing-library/react";
import MuiButton from ".";
import React from 'react'
import '@testing-library/jest-dom'

test('renders correctly',()=>{
    render(<MuiButton>name</MuiButton>)
    const textElement = screen.getByRole('button', { name: /name/i });
    expect(textElement).toBeInTheDocument()
}) 

test('onclick event check',()=>{
    render(<MuiButton  />)
    const textElement = screen.getByRole('button');
    fireEvent.click(textElement);

})