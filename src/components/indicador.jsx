import { useContext, useState } from 'react'

import { Context } from '../context/context';

import {CardView} from './../styles/Card.js'

function Indicador({ nombre, descripcion, imagen, titulo = '' }) {
  const { setCurrentView, setCurrentIndicator } = useContext(Context);
  const nextView = () => {
    setCurrentView((e) =>
      e + 1
    )
    if (titulo) {
      setCurrentIndicator(titulo.toUpperCase())
    }
  }
  
  return (
    <CardView onClick={nextView} nombre={nombre}>
      <CardView.Body>
        <CardView.Header nombre={nombre} > {nombre}</CardView.Header>
        <CardView.Img src={imagen} nombre={nombre}></CardView.Img>
        <CardView.Text nombre={nombre} >{descripcion}</CardView.Text>
      </CardView.Body>
    </CardView>
  )
}

Indicador.defaultProps = {
  descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  nombre: ''
}
export default Indicador