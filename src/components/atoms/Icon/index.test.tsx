import React from 'react'

import { render, screen } from '@testing-library/react'
import Icon from './index'
it('renders Icon', () => {
  render(<Icon src="assets/images/eye.svg" height="32px" width="32px" />)
  const image = screen.getByTestId('iconComponent')
  expect(image).toBeDefined()
})