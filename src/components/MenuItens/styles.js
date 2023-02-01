import styled from "styled-components";
import gps from '../../img/icone-gps.png'

export const ListItem = styled.li`
    :nth-child(4)::before {
        padding-right: 8px;
        content: url(${gps});
        cursor: pointer;
        transition: 3.3s;
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