import styled from "styled-components";
import { fontData } from "../../data";

export const ScheduleContainer = styled.section`
`

export const ScheduleTitle = styled.h2`
    font-size: 20px;
    text-transform: uppercase;
    font-family: ${fontData.fonteSecundaria};
    margin-top: 1.5rem;
    margin-bottom: 1rem;
`

export const ScheduleList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    column-gap: 1.5rem;
    row-gap: 1rem;
    justify-content: center;

    @media (min-width: 720px) {
        justify-content: end;
    }
 
    @media (min-width: 1440px) {
        justify-content: center;
    }
`