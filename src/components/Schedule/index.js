import React from 'react'
import { scheduleData } from '../../data'
import ButtonMais from '../ButtonMais'
import ScheduleItem from '../ScheduleItem'
import * as C from './styles'

const Schedule = () => {

    const h3 = "agosto"
    const h4 = "08 (sexta)"
    const h5 = "20:30"
    const button = "Avise-me"

    const scheduleItemData = [
        {
            src: scheduleData.agenda1,
            alt: "Sala de cinema",
            h3: h3,
            h4: h4,
            h5: h5,
            h6: "Quinta 3D",
            button: button
        },

        {
            src: scheduleData.agenda2,
            alt: "Sala de cinema",
            h3: h3,
            h4: h4,
            h5: h5,
            h6: "Festival de Cinema",
            button: button
        },

        {
            src: scheduleData.agenda3,
            alt: "Festival de balões",
            h3: h3,
            h4: h4,
            h5: h5,
            h6: "Dia de Balonismo",
            button: button
        },

        {
            src: scheduleData.agenda4,
            alt: "Cantor de rock",
            h3: h3,
            h4: h4,
            h5: h5,
            h6: "Hard Rockers",
            button: button
        },

        {
            src: scheduleData.agenda5,
            alt: "Bailarinas no palco",
            h3: h3,
            h4: h4,
            h5: h5,
            h6: "Balé Municipal",
            button: button
        },

        {
            src: scheduleData.agenda6,
            alt: "Show a céu aberto",
            h3: h3,
            h4: h4,
            h5: h5,
            h6: "Festival Multicores",
            button: button
        }
    ]

  return (
    <C.ScheduleContainer>
        <C.ScheduleTitle>Coloque na sua agenda!</C.ScheduleTitle>
        <C.ScheduleList>
            {scheduleItemData.map((item, index) => (
                <ScheduleItem src={item.src} alt={item.alt} h3={item.h3} h4={item.h4} h5={item.h5} h6={item.h6} button={item.button} />
            ))}
            <ButtonMais />
        </C.ScheduleList>
    </C.ScheduleContainer>
  )
}

export default Schedule