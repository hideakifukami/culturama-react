import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        font-family: var(--fonte-primaria);
        height: 100vh;
    }
`;

export default Global;