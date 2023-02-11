import React from 'react'
import FooterListItem from '../FooterListItem'
import * as C from './styles'

const FooterList = ({ h3, itens }) => {

  return (
    <C.FooterListContainer>
        <C.FooterListItemTitle>
            <C.FooterListTitle>{h3}</C.FooterListTitle>
        </C.FooterListItemTitle>
        <FooterListItem value={itens} />
    </C.FooterListContainer>
  )
}

export default FooterList