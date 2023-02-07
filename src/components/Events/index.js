import React from 'react'
import * as C from './styles'
import { eventsData } from '../../data'
import EventItem from '../EventItem'
import ButtonMais from '../ButtonMais'

const Events = () => {

    const h4 = "14/08/22"
    const h5 = "São Paulo | SP"

    const eventItemData = [
        {
            src: eventsData.evento1,
            alt: "Velas em fundo preto.",
            h3: "Festival das Luzes",
            h4: h4,
            h5: h5,
            button: "Ver"
        },

        {
            src: eventsData.evento2,
            alt: "Pessoas em uma festa",
            h3: "Festa Latina",
            h4: h4,
            h5: h5,
            button: "Ver"
        },

        {
            src: eventsData.evento3,
            alt: "Sala de cinema",
            h3: "Festival de Cinema",
            h4: h4,
            h5: h5,
            button: "Ver"
        },

        {
            src: eventsData.evento4,
            alt: "Corrida de bicicleta",
            h3: "Corrida pela Saúde",
            h4: h4,
            h5: h5,
            button: "Ver"
        },

        {
            src: eventsData.evento5,
            alt: "Pikachu gigante",
            h3: "Feira de animes",
            h4: h4,
            h5: h5,
            button: "Ver"
        },

        {
            src: eventsData.evento6,
            alt: "Show a céu aberto",
            h3: "Festival Multicores",
            h4: h4,
            h5: h5,
            button: "Ver"
        },

        {
            src: eventsData.evento7,
            alt: "Festival de balões",
            h3: "Dia de Balonismo",
            h4: h4,
            h5: h5,
            button: "Ver"
        },

        {
            src: eventsData.evento8,
            alt: "Sala de cinema",
            h3: "Quinta 3D",
            h4: h4,
            h5: h5,
            button: "Ver"
        }
    ]

  return (
    <C.EventsContainer>
        <C.EventsTitle>Próximos Eventos</C.EventsTitle>
        <C.EventsList>
            {eventItemData.map((item, index) => (
                <EventItem  src={item.src} alt={item.alt} h3={item.h3} h4={item.h4} h5={item.h5} button={item.button} /> 
            ))}     
            <ButtonMais />   
        </C.EventsList>
    </C.EventsContainer>
  )
}

export default Events