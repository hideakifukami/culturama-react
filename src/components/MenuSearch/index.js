import React from 'react'
import * as C from './styles'

const MenuSearch = () => {
  return (
    <C.Label for='search'>
      <C.Input type='search' placeholder='O que você procura?' id='search'/>
    </C.Label>
    )
}

export default MenuSearch