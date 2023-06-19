//Bibliotecas
import React, {useState} from 'react'
//Estilo
import './../css/main.css'
//Componentes
import Indicador from './indicador'
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
import { Grid } from '@mui/material'

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
            nombre: 'Flujos',
            imagen: ImagenFlujos,
            descripcion: 'Indicadores relacionados con el nivel de circularidad de los flujos de entrada y salida'
        },
        {
            nombre: 'Agua',
            imagen: ImagenAgua,
            descripcion: 'Indicadores relacionados con el nivel de agua'
        },
        {
            nombre:'Emisiones',
            imagen: ImagenEmisiones,
            descripcion: 'Indicadores relacionados con el nivel de Emisiones'
        },
        {
            nombre: 'Energia',
            imagen: ImagenEnergia,
            descripcion: 'Indicadores relacionados con el nivel de Energia'
        },
        {
            nombre: 'Eficiencia',
            imagen: ImagenEficiencia,
            descripcion: 'Indicadores relacionados con el nivel de Eficiencia'
        },
        {
            nombre: 'Organizacional',
            imagen: ImagenOrganizacional,
            descripcion: 'Indicadores relacionados con el nivel de la organizacion'
        }
    ]
    const [indicador, setIndicador] = useState(datos[0]);
    const [currentView, setCurrentView] = useState(1);

    
    const SetView = () =>{
        if (currentView == 0){
            return <div className='content'>
                    <h2>¿QUE TIPO DE INDICADOR QUIERES CONOCER</h2>
                    <div className="indicadores">
                        <Indicador descripcion={datos[0].descripcion} imagen={datos[0].imagen} setCurrentView={setCurrentView}></Indicador>
                        <Indicador descripcion={datos[1].descripcion} imagen={datos[1].imagen} setCurrentView={setCurrentView}></Indicador>
                        <Indicador descripcion={datos[2].descripcion} imagen={datos[2].imagen} setCurrentView={setCurrentView}></Indicador>
                    </div>
                    {/* <div className="titulo">
                        <span>Ambiental</span>
                        <span>Economico</span>
                        <span>Social</span>
                    </div> */}
                </div>
        } else if(currentView == 1){
            return(
                <Grid container spacing={2} >
                    <Grid item xs={4} justifyContent={'flex-end'} >
                        <span>Holi</span>
                    </Grid>

                    <div className="indicadores">
                            <Indicador nombre={datosTypes[0].nombre} descripcion={datosTypes[0].descripcion} imagen={datosTypes[0].imagen} setCurrentView={setCurrentView}></Indicador>
                            <Indicador nombre={datosTypes[1].nombre} descripcion={datosTypes[1].descripcion} imagen={datosTypes[1].imagen} setCurrentView={setCurrentView}></Indicador>
                            <Indicador nombre={datosTypes[2].nombre} descripcion={datosTypes[2].descripcion} imagen={datosTypes[2].imagen} setCurrentView={setCurrentView}></Indicador>
                            <Indicador nombre={datosTypes[3].nombre} descripcion={datosTypes[3].descripcion} imagen={datosTypes[3].imagen} setCurrentView={setCurrentView}></Indicador>
                            <Indicador nombre={datosTypes[4].nombre} descripcion={datosTypes[4].descripcion} imagen={datosTypes[4].imagen} setCurrentView={setCurrentView}></Indicador>
                            <Indicador nombre={datosTypes[5].nombre} descripcion={datosTypes[5].descripcion} imagen={datosTypes[5].imagen} setCurrentView={setCurrentView}></Indicador>
                    </div>
                </Grid>
            )   
        }
    }
    
    return (
        <SetView>
            
        </SetView>
    )
}

export default Main