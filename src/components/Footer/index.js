import React from 'react'
import FooterList from '../FooterList'
import * as C from './styles'

const Footer = () => {

    const footerListData = [
        {
            h3: "Encontre eventos",
            item1: "Esta semana",
            item2: "Este fim de semana",
            item3: "Este mês",
            item4: "Este trimestre"
        },

        {
            h3: "Cidades",
            item1: "São Paulo",
            item2: "Rio de Janeiro",
            item3: "Porto Alegre",
            item4: "Salvador"
        },

        {
            h3: "Encontre eventos",
            item1: "Esta semana",
            item2: "Este fim de semana",
            item3: "Este mês",
            item4: "Este trimestre"
        },

        {
            h3: "Categorias",
            item1: "Shows",
            item2: "Arte",
            item3: "Teatro",
            item4: "Fotografia",
            item5: "Festivais",
            item6: "Design",
            item7: "Cinema",
            item8: "Tecnologia"
        },

        {
            h3: "Sobre nós",
            item1: "Carreiras",
            item2: "História",
            item3: "Contato",
            item4: "Localização"
        },

        {
            h3: "Anuncie seu evento",
            item1: "Música e festas",
            item2: "Cursos e workshops",
            item3: "Esportivo",
            item4: "Congresso",
            item5: "Religioso",
            item6: "Online"
        }
    ]

  return (
    <C.FooterContainer>
        {footerListData.map((item, index) => (
            <FooterList h3={item.h3} />
        ))}
    </C.FooterContainer>
  )
}

export default Footer