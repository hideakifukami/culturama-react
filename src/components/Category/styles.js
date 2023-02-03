import styled from "styled-components";
import { categoryImageData, fontData } from "../../data";

export const CategorySection = styled.section`
    margin-top: 1.5rem;

    @media(min-width: 1440px) {
        margin-bottom: 1.5rem;
        display: grid;
        grid-template-areas: 
            "titulo titulo"
            "lista destaque"
            "lista imagem";
        row-gap: 1rem;
        column-gap: 1.5rem;
        grid-template-columns: calc(50% - 0.75rem);
        grid-template-rows: auto 1fr auto;
    }
`

export const CategoryTitle = styled.h2`
    margin-bottom: 1rem;
    font-size: 20px;
    text-transform: uppercase;
    font-family: ${fontData.fonteSecundaria};

    @media(min-width: 1440px) {
        margin-bottom: 0;
        grid-area: titulo;

    }
`

export const CategoryList = styled.ul`
    text-align: center;
    color: white;
    display: flex;
    flex-direction: column;
    row-gap: .5rem;

    
    @media(min-width: 720px) {
        height: 304px;
        flex-wrap: wrap;
        column-gap: 1.5rem;
        row-gap: 1rem;
    }
    
    @media(min-width: 1440px) {
        grid-area: lista;
    }
`
export const CategoryEmphasis = styled.div`
    @media (min-width: 1440px) {
        grid-area: destaque;
    }
`


export const CategoryImage = styled.div`

    background-image: url(${categoryImageData.destaque360});
    height: 271px;
    background-repeat: no-repeat;
    margin-bottom: 1.5rem;
    background-size: cover;
    background-position: center;
    opacity: 1;
    transition: 0.5s;
    
    :hover {
        opacity: 0.7;
    }

    @media(min-width: 720px) {
        background-image: url(${categoryImageData.apresentacao720});
    }

    @media (min-width: 1440px) {
        grid-area: imagem;
        height: 224px;
        margin-bottom: 0;
        background-position-y: bottom;
    }
`