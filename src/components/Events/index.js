import React from 'react'
import * as C from './styles'
import { eventsData } from '../../data'
import EventItem from '../EventItem'

const Events = () => {

    const h4Data = "14/08/22"
    const h5Data = "São Paulo | SP"

    const itemData = [
        {
            src: eventsData.evento1,
            alt: "Velas em fundo preto.",
            h3: "Festival das Luzes",
            h4: h4Data,
            h5: h5Data
        },

        {
            src: eventsData.evento2,
            alt: "Pessoas em uma festa",
            h3: "Festa Latina",
            h4: h4Data,
            h5: h5Data
        },

        {
            src: eventsData.evento3,
            alt: "Sala de cinema",
            h3: "Festival de Cinema",
            h4: h4Data,
            h5: h5Data
        },

        {
            src: eventsData.evento4,
            alt: "Corrida de bicicleta",
            h3: "Corrida pela Saúde",
            h4: h4Data,
            h5: h5Data
        },

        {
            src: eventsData.evento5,
            alt: "Pikachu gigante",
            h3: "Feira de animes",
            h4: h4Data,
            h5: h5Data
        },

        {
            src: eventsData.evento6,
            alt: "Show a céu aberto",
            h3: "Festival Multicores",
            h4: h4Data,
            h5: h5Data
        },

        {
            src: eventsData.evento7,
            alt: "Festival de balões",
            h3: "Dia de Balonismo",
            h4: h4Data,
            h5: h5Data
        },

        {
            src: eventsData.evento8,
            alt: "Sala de cinema",
            h3: "Quinta 3D",
            h4: h4Data,
            h5: h5Data
        }
    ]

  return (
    <>
        <C.EventsTitle>Próximos Eventos</C.EventsTitle>
        <C.EventsList>
            {itemData.map((item, index) => (
                <EventItem  eventSrc={item.src} eventAlt={item.alt} eventH3={item.h3} eventH4={item.h4} eventH5={item.h5} /> 
            ))}          
        </C.EventsList>
    </>
  )
}

export default Events