//Bibliotecas
import React, { useContext, useState } from 'react'
//Estilo
import './../css/main.css'
//Componentes
import Indicador from './indicador'
import Search from './search';
import Seleccionado from './seleccionado';
import {Content, H2, IndicadoresFlex, SearchBox, IndicadoresBox} from './../styles/Content.js'
//Recursos
import { datos, datosTypes } from '../constants/datos';
//Context
import { Context } from '../context/context';

function Main() {
    
    const {currentView} = useContext(Context);
    if (currentView == 0) {
        return <Content>
            <H2>¿QUE TIPO DE INDICADOR QUIERES CONOCER</H2>
            <IndicadoresFlex>
                {datos.map((indicador, index) => {
                    return <Indicador key={index} descripcion={indicador.descripcion} 
                        imagen={indicador.imagen} 
                        titulo={indicador.titulo} >
                        </Indicador> 
                })}
            </IndicadoresFlex>
        </Content>
    } else if (currentView == 1) {
        return (
            <Content second="true">
                <SearchBox>
                    <Search></Search>
                </SearchBox>
                <IndicadoresBox>
                    <Seleccionado></Seleccionado>
                </IndicadoresBox>
                <IndicadoresFlex second="true">
                    {datosTypes.map((indicador, index) => {
                        return <Indicador key={index} nombre={indicador.nombre} descripcion={indicador.descripcion} imagen={indicador.imagen} ></Indicador>
                    })}
                </IndicadoresFlex>
            </Content>
        )
    } else if (currentView == 2){
        return (
            <div className="thirdView">
                <h2>Tercera vista</h2>
            </div>
        )
    }
}

export default Main