import React, { useState } from 'react'
import'./../css/indicador.css'

function Indicador({nombre, descripcion, imagen,setCurrentView}) {

  const nextView = () =>{
    setCurrentView((e) =>
      e + 1
    )
  }
  return (
    <button className='card' onClick={nextView} >
      {nombre ? <h2>{nombre}</h2> : null}
      <img src={imagen} className='imagen' loading='lazy'/>
      <div className='descripcion'>
        <span>{descripcion}</span>
      </div> 
    </button>
  )
}

Indicador.defaultProps = {
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    nombre: ''
}
export default Indicador