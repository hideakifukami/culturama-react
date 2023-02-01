import React from 'react'
import MenuLink from '../MenuLink'
import MenuSearch from '../MenuSearch'
import MenuTitle from '../MenuTitle'
import * as C from './styles'

const MenuItens = () => {
  return (
    <>
      <C.ListItem>
        <MenuTitle />
      </C.ListItem>
      <C.ListItem>
        <MenuLink href='#' value='Programação' />
      </C.ListItem>
      <C.ListItem>
        <MenuLink href='#' value='Categorias' />
      </C.ListItem>
      <C.ListItem>
        <MenuLink href='#' value='Seu local' />
      </C.ListItem>
      <C.SearchItem>
        <MenuSearch />
      </C.SearchItem>
    </>
    )
}

export default MenuItens