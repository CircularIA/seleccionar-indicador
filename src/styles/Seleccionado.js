import styled from 'styled-components'

export const Seleccionado = styled.div `
    display: flex;
    flex-direction: column;
    align-items: start;
`
export const Botones = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const Boton = styled.button`
    margin: 1%;
    padding: 2% 5% 2% 5%;
    border-radius: 0.9rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
    overflow: hidden;
    min-height: max-content;
    min-width: max-content;
    text-align: start;
    background-color: white;
    color: black;
    border: 2px solid;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    font-size: medium;
`
