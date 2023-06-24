//Bibliotecas
import React, { useState } from 'react'
import { styled, alpha } from '@mui/material/styles';
//Estilo
import './../css/main.css'
//Componentes
import Indicador from './indicador'
import Search from './search';
import Seleccionado from './seleccionado';
//Recursos
import ImagenAmbiental from './../img/Ambiental.svg'
import ImagenEconomico from './../img/Economico.svg'
import ImagenSocial from './../img/Social.svg'
import ImagenFlujos from './../img/Flujos.svg'
import ImagenAgua from './../img/Agua.svg'
import ImagenEmisiones from './../img/Emisiones.svg'
import ImagenEnergia from './../img/Energia.svg'
import ImagenEficiencia from './../img/Eficiencia.svg'
import ImagenOrganizacional from './../img/Organizacional.svg'


function Main() {
    const datos = [
        {
            nombre: 'Ambiental',
            descripcion: 'La capacidad de mantener la productividad y biodiversidad de los recursos naturales a lo largo del plazo',
            imagen: ImagenAmbiental
        },
        {
            nombre: 'Economico',
            descripcion: 'La capacidad del manejo economico',
            imagen: ImagenEconomico
        },
        {
            nombre: 'Social',
            descripcion: 'La capacidad de manejar los recursos humanos',
            imagen: ImagenSocial
        }
    ]

    const datosTypes = [
        {
            nombre: 'FLUJOS',
            imagen: ImagenFlujos,
            descripcion: 'Indicadores relacionados con el nivel de circularidad de los flujos de entrada y salida'
        },
        {
            nombre: 'AGUA',
            imagen: ImagenAgua,
            descripcion: 'Indicadores relacionados con el nivel de agua'
        },
        {
            nombre: 'EMISIONES',
            imagen: ImagenEmisiones,
            descripcion: 'Indicadores relacionados con el nivel de Emisiones'
        },
        {
            nombre: 'ENERGIA',
            imagen: ImagenEnergia,
            descripcion: 'Indicadores relacionados con el nivel de Energia'
        },
        {
            nombre: 'EFICIENCIA',
            imagen: ImagenEficiencia,
            descripcion: 'Indicadores relacionados con el nivel de Eficiencia'
        },
        {
            nombre: 'ORGANIZACIONAL',
            imagen: ImagenOrganizacional,
            descripcion: 'Indicadores relacionados con el nivel de la organizacion'
        }
    ]


    const [currentView, setCurrentView] = useState(0);

    const SetView = () => {
        if (currentView == 0) {
            return <div className='content'>
                <h2>¿QUE TIPO DE INDICADOR QUIERES CONOCER</h2>
                <div className="indicadores">
                    {datos.map((indicador, index) => {
                        return <Indicador key={index} descripcion={indicador.descripcion} imagen={indicador.imagen} setCurrentView={setCurrentView}></Indicador>
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
                    <div className="indicadores indicadoresCard">
                        {datosTypes.map((indicador, index) => {
                            return <Indicador key={index} nombre={indicador.nombre} descripcion={indicador.descripcion} imagen={indicador.imagen} setCurrentView={setCurrentView}></Indicador>
                        })}
                    </div>
                </div>
            )
        }
    }

    return (
        <SetView>

        </SetView>
    )
}

export default Main