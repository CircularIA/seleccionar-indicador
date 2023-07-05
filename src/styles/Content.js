import { styled, css, keyframes } from 'styled-components';

export const Content = styled.div`
    margin-top: 1%;
    max-width: 100%;
    padding-left: 2%;
    ${props => props.second &&css`
        margin-top: 2%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        align-content: flex-start;
    `}
`
export const H2 = styled.h2`
    margin: 7% 0% 3% 0%;
`
export const IndicadoresFlex = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 1% 3%;
`
export const SearchBox = styled.div`
    /* grid-column-start: 3;
    grid-column-end: 4; */
    align-self: flex-end;
    padding-right: 7.5%;
`
export const IndicadoresBox = styled.div`
    /* grid-column-start: 1;
    grid-column-end: 4; */
    /* grid-row-start: 2; */
`
