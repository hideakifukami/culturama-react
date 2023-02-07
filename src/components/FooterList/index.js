import React from 'react'
import * as C from './styles'

const FooterList = ({ h3, itens }) => {
  return (
    <C.FooterListContainer>
        <C.FooterListItemTitle>
            <C.FooterListTitle>{h3}</C.FooterListTitle>
        </C.FooterListItemTitle>
        

    </C.FooterListContainer>
  )
}

export default FooterList