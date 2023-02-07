import styled from "styled-components";
import { colorData } from "../../data";

export const ScheduleItemList = styled.li`
    display: grid;
    flex-grow: 1;
    max-width: 400px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    background-color: ${colorData.cinzaClaro};

    @media(min-width: 720px) {
        width: 308px;
    }

    @media(min-width: 1440px) {
        width: 330px;
    }

`

export const ScheduleItemImage = styled.img`
    grid-column: 1/3;
    width: 100%;
`

export const ScheduleItemInfo = styled.div`
    text-align: center;
    background-color: ${colorData.cinzaEscuro};
    color: white;
    text-transform: uppercase;
    padding-top: 1rem;
`

export const ScheduleItemH3 = styled.h3`
    font-size: 2rem;
`

export const ScheduleItemH4 = styled.h4`
    font-size: 1.5rem;
`

export const ScheduleItemH5 = styled.h5`
    font-size: 1.5rem;
`

export const ScheduleItemAttraction = styled.div`
    text-align: center;
    padding: 1rem;
`

export const ScheduleItemH6 = styled.h6`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 2rem;
`

export const ScheduleItemButton = styled.button`
    outline: none;
    border: none;
    background-color: black;
    color: white;
    padding: .5rem 0;
    width: 125px;
    cursor: pointer;
    transition: .5s;

    :hover {
        background-color: ${colorData.amarelo};
    }
`

