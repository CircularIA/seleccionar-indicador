import { Card } from 'react-bootstrap'
import { styled, css, keyframes } from 'styled-components';
const animacion = (distancia) =>keyframes`
    0% {
      transform: translate(0,0);
      /* transform: rotate(0deg); */
    }
    100% {
      transform: translate(0,${distancia}px);
    }
  `
const animacionText = (inicial, distancia) => keyframes`
  0% {
    transform: translate(0,${inicial}px);
  }
  100% {
    transform: translate(0, ${distancia}px );
  }
`
export const CardView = styled(Card)`
    /* Sizes */
    font-size: 0.9em;
    max-height: max-content;
    max-width: 100%;
    width: 370px;
    height: 370px;
    //Si tiene el nombre es porque es de segunda vista
    /* Position */
    padding: 0% 1% 1% 0%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    ${props => props.nombre &&
    css`
      height: 280px;
      width: minmax(370px, 100%);
      justify-content: flex-start;
      padding-top: 7%;
    `}
    /* Design */
    border-radius: 8px;
    border: 1px solid #989898;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    //Animaciones e interaccion
    cursor: pointer;
    transition: border-color 0.25s;
    &:hover{
      ${(props) => {
        if (props.currentindicator === 'SOCIAL' && props.nombre){
          return css`
            background-color: #2D7DD2;
          `
        }
        else if (props.currentindicator === 'ECONÓMICO' && props.nombre){
          return css`
            background-color: #F3A430;
          `
        }
        else{
          return css`
            background-color: #00B971;
          `
        }
      } 
      }
      /* background-color: #00B971; */
      color: white;
      justify-content: flex-start;
      ${props => props.nombre ?
      css`
        padding-top: 7%;
      ` : css`
        padding-top: 28%;
      `}
    }
    &:active{
      transform: scale(0.98);
    }
  `
export default CardView;
  CardView.Header = styled(Card.Header)`
    color: #000;
    text-align: center;
    font-size: 28px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: 2.8px;
    text-transform: uppercase;
    ${props => props.nombre &&
    css`
      margin-bottom: 10%;
      /* ${CardView}:hover & {
        margin-bottom: 4%
      } */
    `}
  `
  CardView.Img = styled(Card.Img)`
    max-width: 100%;
    max-height: 100%;
    ${CardView}:hover & {
      ${props => props.nombre ?
      css`
        animation: ${animacion(-15)} 0.3s linear;
        animation-fill-mode: forwards;
      `: css`
        animation: ${animacion(-60)} 0.3s linear;
        animation-fill-mode: forwards;
      `}
    }
  `
  CardView.Text = styled(Card.Text)`
    /* Sizes */
    margin: 0% 38px 0% 38px;
    display: none;
    color: #FFF;
    font-size: 20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: left;
    ${props => props.nombre &&
    css`
      
    `}
    ${CardView}:hover & {
      display: block;
      /* margin-top: 20%; */
      ${props => props.nombre ?
      css`
        /* margin-top: 2%;   */
        animation: ${animacionText(10, -10)} 0.3s linear;
        animation-fill-mode: forwards;
      ` :
      css`
        animation: ${animacionText(15, -15)} 0.3s linear;
        animation-fill-mode: forwards;
      `}
      ${props => props.titulo === 'Social' &&
      css`
        //Agregar animacion debido a que el texto es muy largo
        animation: ${animacionText(0, -60)} 0.5s linear;
        animation-fill-mode: forwards;
      `
      }
    }
  `
CardView.Footer = styled(Card.Footer)`
  justify-content: center;
  align-items: center;
  color: #000;
  font-size: 28px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 2.8px;
  text-transform: uppercase;
  margin-top: 5%;
`
