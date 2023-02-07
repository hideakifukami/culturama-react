import React from 'react'
import * as C from './styles'

const ScheduleItem = ({ src, alt, h6}) => {

    const h3 = "agosto"
    const h4 = "08 (sexta)"
    const h5 = "20:30"
    const button = "Avise-me"

  return (
    <C.ScheduleItemList>
        <C.ScheduleItemImage src={src} alt={alt} />
        <C.ScheduleItemInfo>
            <C.ScheduleItemH3>{h3}</C.ScheduleItemH3>
            <C.ScheduleItemH4>{h4}</C.ScheduleItemH4>
            <C.ScheduleItemH5>{h5}</C.ScheduleItemH5>
        </C.ScheduleItemInfo>
        <C.ScheduleItemAttraction>
            <C.ScheduleItemH6>{h6}</C.ScheduleItemH6>
            <C.ScheduleItemButton>{button}</C.ScheduleItemButton>
        </C.ScheduleItemAttraction>
    </C.ScheduleItemList>
  )
}

export default ScheduleItem