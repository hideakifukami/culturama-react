import styled from "styled-components";
import { headerData } from "../../data";

export const Ul = styled.ul`
    background-color: black;
    font-family: 'Fjalla One', sans-serif;
    font-size: 16px;
    height: 258px;
    padding: 0 1.5rem;
    white-space: nowrap;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    column-gap: 33px;

        @media (min-width: 720px) {
            column-gap: 75px;
            height: 217px;
        }

        
        @media (min-width: 1440px) {
            column-gap: 100px;
            flex-wrap: nowrap;
            height: 100px;
            font-size: 20px;
            padding: 0 7.5rem;
        }
`

export const ListItem = styled.li`
    :nth-child(4)::before {
        padding-right: 8px;
        content: url(${headerData.iconeGPS});
        cursor: pointer;
        transition: 3.3s;
    }

    :nth-child(4)::after {
        content: url(${headerData.iconeSeta});
        padding-left: 8px;
        cursor: pointer;
        transition: 3.3s;
    }

    :nth-child(4)::after:hover, :nth-child(4)::before:hover {
        background-color:  #FFC756;
    }   

    :nth-child(5) {
        width: 100%;
        height: 40px;
        border: 2px solid white;
        border-radius: 10px;
        padding-top: 5px;
        margin-bottom: 10px;
    }

        @media (min-width: 720px) {
            :nth-child(5) {
                width: 312px;
            }
        }

        @media (min-width: 1440px) {
            :nth-child(1) {
                order: 1;
            }

            :nth-child(2) {
                order: 3;
            }

            :nth-child(3) {
                order: 4;
            }

            :nth-child(4) {
                order: 5;
            }

            :nth-child(5) {
                order: 2;
                width: 384px;
                margin-bottom: 0;
            }
        }
`

export const Title = styled.h1`
    background-image: url(${headerData.logoMaior});
    background-repeat: no-repeat;
    background-position: center;
    padding: 40px 100px;
    width: 100%;
    cursor: pointer;
        
        @media (min-width: 720px) {
            width: auto;
            padding: 40px 55px;
        }

        @media (min-width: 1440px) {
            background-image: url(${headerData.logoMenor});
            padding: 43px 55px;
        }
`

export const Link = styled.a`
    transition: .5s;
    text-decoration: none;
    color: white;

    :hover {
        color: #FFC756;
    }
`

export const Label = styled.label`

`
export const Input = styled.input`
    color: white;
    background-color: black;
    background-image: url(${headerData.iconeBusca});
    background-repeat: no-repeat;
    background-position: right;
    font-size: 16px;
    border: none;
    outline: none;
    width: 98%;
    line-height: 25px;
    padding-left: 5px;

    @media (min-width: 1440px) {
            padding-left: 15px;
        }
`

