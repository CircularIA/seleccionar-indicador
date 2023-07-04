import { styled, css, keyframes } from 'styled-components';

export const Content = styled.div`
    margin-top: 1%;
    min-height: max-content;
    max-width: 100%;
    text-align: start;
    padding-left: 2%;
    ${props => props.second &&css`
        margin-top: 3%;
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-auto-rows: 4%;
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
    gap: 4%;
    ${props => props.second &&css`
        grid-column-start: 1;
        grid-column-end: 4;
        grid-row-start: 6;
    `}
`
export const SearchBox = styled.div`
    grid-column-start: 3;
    grid-column-end: 4;
`
export const IndicadoresBox = styled.div`
    /* grid-column-start: 1;
    grid-column-end: 4; */
    grid-row-start: 2;
`
