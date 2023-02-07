import styled from "styled-components";
import { colorData, fontData } from "../../data";

export const EventsContainer = styled.section`
`

export const EventsTitle = styled.h2`
    margin-bottom: 1rem;
    font-size: 20px;
    text-transform: uppercase;
    font-family: ${fontData.fonteSecundaria};
`

export const EventsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    column-gap: 1.5rem;
    row-gap: 1rem;
    justify-content: center;

    @media (min-width: 720px) {
        justify-content: end;
    }

`
