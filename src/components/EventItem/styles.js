import styled from "styled-components";
import { colorData } from "../../data";

export const ItemList = styled.li`
    flex-grow: 1;
    max-width: 400px;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: auto repeat(2, 1fr) auto;
    grid-template-areas: 
        "imagem imagem"
        "nome nome"
        "data data"
        "local botao";
    background-color: ${colorData.cinzaClaro};
    width: 307px;
    padding-bottom: 1rem;
    height: 318px;

    @media(min-width: 1440px) {
        width: 280px;
    }
`

export const ItemImg = styled.img`
    grid-area: imagem;
    width: 100%;
`

export const ItemH3 = styled.h3`
    grid-area: nome;
    align-self: center;
    font-size: 18px;
    font-weight: 600;
    padding-left: 1rem;
`

export const ItemH4 = styled.h4`
    grid-area: data;
    font-size: 16px;
    padding-left: 1rem;
`

export const ItemH5 = styled.h5`
    grid-row-start: local;
    align-self: end;
    font-size: 16px;
    padding-left: 1rem;
`

export const ItemButton = styled.button`
    grid-area: botao;
    outline: none;
    border: none;
    background-color: black;
    color: white;
    margin-right: 1rem;
    text-align: center;
    padding: .5rem 0;
    width: 80px;
    cursor: pointer;
    transition: .5s;

    :hover {
        background-color: ${colorData.amarelo};
    }
`

