import Footer from '.';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import React from 'react'

describe('checking for the footer component', () => {
    test('Renders footer correctly', () => {
        render(<Footer />);
        expect(screen.getByTestId('footer')).toBeInTheDocument();
    })
})
it('renders Dashboard value text', () => {
    render(<Footer/>)
    const value = screen.getByText('Dashboard')
    expect(value).toBeInTheDocument()
  })
  it('renders Careers value text', () => {
    render(<Footer/>)
    const value1 = screen.getByText('Careers')
    expect(value1).toBeInTheDocument()
  })
  