import styled from "styled-components";
import { colorData } from "../../data";

export const ButtonLi = styled.li`

`

export const ButtonMais = styled.button`
     outline: none;
     border: none;
     background-color: black;
     color: white;
     padding: 0.75rem 0;
     width: 148px;
     cursor: pointer;
     transition: .5s;

     :hover {
        background-color: ${colorData.amarelo};
    }
`