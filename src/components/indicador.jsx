import { useContext, useState } from 'react'
import'./../css/indicador.css'

import { Card } from 'react-bootstrap'
import { Context } from '../context/context';

function Indicador({nombre, descripcion, imagen, titulo=''}) {
  const {setCurrentView, setCurrentIndicator} = useContext(Context);
  const nextView = () =>{
    setCurrentView((e) =>
      e + 1
    )
    if (titulo) {
      setCurrentIndicator(titulo.toUpperCase())
    }
  }
  return (
    <Card className='card' onClick={nextView}>
      <Card.Body>
        {nombre ? <Card.Header as="h2"> {nombre}</Card.Header> : null}
        {nombre ? <Card.Img  src={imagen} className='cardImage'></Card.Img> :  <Card.Img  src={imagen} className='cardImage2'></Card.Img>}
        <Card.Text className='descripcion'>
          {descripcion}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

Indicador.defaultProps = {
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    nombre: ''
}
export default Indicador