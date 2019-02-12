import React from 'react';
import styled, {css} from 'styled-components'
import {AppContext} from '../App/AppProvider'

export const CoinHeaderGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
export const CoinSymbol = styled.div`
  justify-self: right;
`

export default function({name, symbol}) {
  return <CoinHeaderGridStyled>
    <div>{name}</div>
    <CoinSymbol>{symbol}</CoinSymbol>
  </CoinHeaderGridStyled>
}