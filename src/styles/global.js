import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    :root {
        /*cores*/
        --amarelo: #FFC756;
        --laranja: #F66139;
        --lilas: #7F8FFE;
        --verde: #56B78C;
        --cinza-claro: #D9D9D9;
        --cinza-escuro: #959595;

        /*fontes*/
        --fonte-primaria: 'Work Sans', sans-serif;
        --fonte-secundaria: 'Fjalla One', sans-serif;
    }

    body {
        font-family: var(--fonte-primaria);
        height: 100vh;
    }
`;

export default Global;