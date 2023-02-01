import React from 'react'
import * as C from './styles'

const MenuLink = (props) => {
  return (
    <C.Link href={props.href}>
      {props.value}
    </C.Link>
    )
}

export default MenuLink