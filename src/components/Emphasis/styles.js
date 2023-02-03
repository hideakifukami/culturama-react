import styled from "styled-components";
import { fontData } from "../../data";

export const EmphasisContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 20px;
    text-transform: uppercase;
    font-family: ${fontData.fonteSecundaria};
    padding: 30px 0 10px;
    white-space: nowrap;

    @media(min-width: 1440px) {
        padding: 0;
    }
`

export const EmphasisTitle = styled.h3`
    margin: 1rem 0;
`

export const EmphasisBar = styled.div`
    flex-grow: 1;
    width: 131px;
    height: 2px;
    background-color: black;
    
    @media(min-width: 1440px) {
        width: 416px;
    }
`

export const EmphasisDiv = styled.div`

`

export const EmphasisImage = styled.img`
    :last-of-type {
        padding-left: 10px;
    }
`