import styled from "styled-components";
import gps from '../../img/icone-gps.png'
import seta from '../../img/icone-seta.png'

export const ListItem = styled.li`
    :nth-child(4)::before {
        padding-right: 8px;
        content: url(${gps});
        cursor: pointer;
        transition: 3.3s;
    }

    :nth-child(4)::after {
        content: url(${seta});
        padding-left: 8px;
        cursor: pointer;
        transition: 3.3s;
    }

    :nth-child(4)::after:hover,
    :nth-child(4)::before:hover {
        background-color:  #FFC756;
    }   

`

export const SearchItem = styled.li`
    width: 100%;
    height: 40%;
    border: 2px solid white;
    border-radius: 10px;
    padding-top: 5px;
    margin-bottom: 10px;
`