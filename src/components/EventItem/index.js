import React from 'react'
import * as C from './styles'

const EventItem = ({ src, alt, h3, h4, h5, button}) => {
  return (
    <C.ItemList>
        <C.ItemImg src={src} alt={alt} />
        <C.ItemH3>{h3}</C.ItemH3>
        <C.ItemH4>{h4}</C.ItemH4>
        <C.ItemH5>{h5}</C.ItemH5>
        <C.ItemButton>{button}</C.ItemButton>
    </C.ItemList>
  )
}

export default EventItem