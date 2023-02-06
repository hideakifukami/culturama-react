import React from 'react'
import * as C from './styles'

const EventItem = (props) => {
  return (
    <C.ItemList>
        <C.ItemImg src={props.eventSrc} alt={props.eventAlt} />
        <C.ItemH3>{props.eventH3}</C.ItemH3>
        <C.ItemH4>{props.eventH4}</C.ItemH4>
        <C.ItemH5>{props.eventH5}</C.ItemH5>
        <C.ItemButton>Ver</C.ItemButton>
    </C.ItemList>
  )
}

export default EventItem