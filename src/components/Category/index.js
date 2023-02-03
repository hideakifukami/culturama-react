import React from 'react'
import { colorData } from '../../data'
import CategoryItem from '../CategoryItem'
import Emphasis from '../Emphasis'
import { emphasisData } from '../../data'
import * as C from './styles'

const Category = () => {
    
    const categories = [
        {
        categorie: "Shows",
        color: colorData.amarelo
        },

        {
        categorie: "Teatro",
        color: colorData.laranja
        },

        {
        categorie: "Festivais",
        color: colorData.lilas
        },

        {
        categorie: "Cinema",
        color: colorData.verde
        },

        {
        categorie: "Arte",
        color: colorData.amarelo
        },

        {
        categorie: "Fotografia",
        color: colorData.laranja
        },

        {
        categorie: "Tecnologia",
        color: colorData.lilas
        },

        {
        categorie: "Design",
        color: colorData.verde
        }
    ]

    return (
        <C.CategorySection>
            <C.CategoryTitle>Categorias</C.CategoryTitle>
            <C.CategoryList>
                {categories.map((item, index) => (
                    <CategoryItem key={index} categorie={item.categorie} color={item.color} />
                ))}
            </C.CategoryList>
            <C.CategoryEmphasis>
                    <Emphasis img1={emphasisData.img1} img2={emphasisData.img2} />
            </C.CategoryEmphasis>
            <C.CategoryImage />
        </C.CategorySection>
    )
}

export default Category