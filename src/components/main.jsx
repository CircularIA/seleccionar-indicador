//Bibliotecas
import React, { useContext, useState } from 'react'
//Estilo
import './../css/main.css'
//Componentes
import Indicador from './indicador'
import Search from './search';
import Seleccionado from './seleccionado';
//Recursos
import { datos, datosTypes } from '../constants/datos';
//Context
import { Context } from '../context/context';

function Main() {
    
    const {currentView} = useContext(Context);
    if (currentView == 0) {
        return <div className='content'>
            <h2>¿QUE TIPO DE INDICADOR QUIERES CONOCER</h2>
            <div className="indicadoresFlex">
                {datos.map((indicador, index) => {
                    return <div className="tituloClass" key={index}>
                        <Indicador descripcion={indicador.descripcion} imagen={indicador.imagen} ></Indicador>
                        <span>{indicador.titulo}</span>
                    </div>
                })}
            </div>
        </div>
    } else if (currentView == 1) {
        return (
            <div className='content secondView'>
                <div className="searchBox">
                    <Search></Search>
                </div>
                <div className="indicadoresBox">
                    <Seleccionado></Seleccionado>
                </div>
                <div className="indicadoresFlex indicadoresCard">
                    {datosTypes.map((indicador, index) => {
                        return <Indicador className='childIndicador' key={index} nombre={indicador.nombre} descripcion={indicador.descripcion} imagen={indicador.imagen} ></Indicador>
                    })}
                </div>
            </div>
        )
    }
}

export default Main