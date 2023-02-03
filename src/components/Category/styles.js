import styled from "styled-components";
import { fontData } from "../../data";

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
        grid-template-columns: calc(50% - 075rem);
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