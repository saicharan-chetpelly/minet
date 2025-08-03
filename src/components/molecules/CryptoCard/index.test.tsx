import React from 'react'
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import { ChooseCrypto } from '.'
describe('CryptoCard tests', () => {
  test('Testing whether for the  image ', () => {
    render(<ChooseCrypto  imageSource= "assest/images/bitcoin.svg"
        imageAlt= "bitcoin"
        cryptoText= "Bitcoin"
        cryptoPayment= "$3,406,069.54"/>)
        const imageElement=screen.getByAltText("Bitcoin")
      expect(imageElement).toBeInTheDocument()
  })
  
})