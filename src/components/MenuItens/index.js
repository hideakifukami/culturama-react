import React from 'react'
import * as C from './styles'

const MenuItens = (props) => {
  return (
    <C.Ul>
      <C.ListItem>
        <C.Title />
      </C.ListItem>
      <C.ListItem>
        <C.Link href={props.href}>{props.valueLink1}</C.Link> 
      </C.ListItem>
      <C.ListItem>
        <C.Link href={props.href}>{props.valueLink2}</C.Link> 
      </C.ListItem>
      <C.ListItem>
        <C.Link href={props.href}>{props.valueLink3}</C.Link> 
      </C.ListItem>
      <C.ListItem>
        <C.Label for='search'>
          <C.Input type='search' name='' placeholder='O que você procura?' id='search' />
        </C.Label>
      </C.ListItem>
    </C.Ul>
  )
}

export default MenuItens