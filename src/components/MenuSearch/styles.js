import styled from "styled-components";
import icone from '../../img/icone-busca.png'

export const Label = styled.label`

`
export const Input = styled.input`
    color: white;
    background-color: black;
    background-image: url(${icone});
    background-repeat: no-repeat;
    background-position: right;
    font-size: 16px;
    border: none;
    outline: none;
    width: 98%;
    line-height: 25px;
    padding-left: 5px;
`

