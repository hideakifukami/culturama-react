import React from 'react'
import * as C from './styles'

const CategoryItem = (props) => {
  return (
    <C.CategoryItem style={{backgroundColor: props.color}}>{props.categorie}</C.CategoryItem>
  )
}

export default CategoryItem