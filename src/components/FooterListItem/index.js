import React from 'react'
import * as C from './styles'

const FooterListItem = ({ value }) => {
  return (
    <>
      <C.FooterListItem>{value.item1}</C.FooterListItem>
      <C.FooterListItem>{value.item2}</C.FooterListItem>
      <C.FooterListItem>{value.item3}</C.FooterListItem>
      <C.FooterListItem>{value.item4}</C.FooterListItem>
      <C.FooterListItem>{value.item5}</C.FooterListItem>
      <C.FooterListItem>{value.item6}</C.FooterListItem>
      <C.FooterListItem>{value.item7}</C.FooterListItem>
      <C.FooterListItem>{value.item8}</C.FooterListItem>
    </>
  )
}

export default FooterListItem