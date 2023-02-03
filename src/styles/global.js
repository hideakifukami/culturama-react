import { createGlobalStyle } from "styled-components";
import { fontData } from "../data";

const Global = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        font-family: ${fontData.fontePrimaria};
        height: 100vh;
    }

    img {
        opacity: 1;
        transition: 0.5s;
    }

    img:hover {
        opacity: 0.7;
    }
`;

export default Global;