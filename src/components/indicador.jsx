import { useContext } from 'react'

import { Context } from '../context/context';

import CardView, {DivCard} from './../styles/Card.js'

function Indicador({ nombre, descripcion, imagen, titulo = '' }) {
  const { setCurrentView, currentIndicator,  setCurrentIndicator } = useContext(Context);
  const nextView = () => {
    setCurrentView((e) =>
      e + 1
    )
    titulo ? setCurrentIndicator(titulo.toUpperCase()) : setCurrentIndicator(nombre.toUpperCase());
  }
  console.log(currentIndicator)
  return (
    <DivCard>
      <CardView onClick={nextView} nombre={nombre} currentindicator={currentIndicator}>
        <CardView.Header nombre={nombre} > {nombre}</CardView.Header>
        <CardView.Body>
          <CardView.Img src={imagen} nombre={nombre}></CardView.Img>
          <CardView.Text nombre={nombre} titulo={titulo} >{descripcion}</CardView.Text>
        </CardView.Body>
      </CardView>
      <CardView.Footer nombre={nombre} titulo={titulo} >{titulo}</CardView.Footer>
    </DivCard>
  )
}

Indicador.defaultProps = {
  descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  nombre: ''
}
export default Indicador