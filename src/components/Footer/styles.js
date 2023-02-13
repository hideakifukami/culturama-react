import styled from "styled-components";
import { colorData, fontData, footerData } from "../../data";

export const FooterContainer = styled.footer`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    color: ${colorData.cinzaClaro};
    background-color: black;
    margin: 1rem 0;
    font-size: 14px;
    font-family: ${fontData.fontePrimaria};
    line-height: 2;
    white-space: nowrap;

    @media(min-width: 720px) {
        padding: 0 2.5rem;
    }

    @media(min-width: 1440px) {
        padding: 0 7.5rem;
    }
`
export const FooterLogo = styled.div`
    font-size: 12px;
    align-self: end;
`

export const FooterLogoTitle = styled.h4`
    background-image: url(${footerData.logo});
    background-repeat: no-repeat;
    background-position: center;
    height: 60px;
`

export const FooterLogoP = styled.p`

`