import styled from "styled-components";

export const Banner = styled.section`
    display: grid;
    gap: 1rem;

    @media (min-width: 720px) {
        grid-template-columns: calc(50% - 0.75rem) auto auto;
        column-gap: 1.5rem;
    }
`

export const BannerImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

    :nth-child(1) {
        grid-column: 1/3;

        @media (min-width: 720px) {
            grid-column: 1/2;
            grid-row: 1/3;
        }
    }

    :nth-child(4) {
        grid-column: 2/3;
        grid-row: 2/4;

        @media (min-width: 720px) {
            grid-column: 3/4;
            grid-row: 1/3;
        }
    }
    
`