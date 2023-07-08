//Bibliotecas
import { useContext} from 'react'
//Componentes
import Indicador from './indicador'
import Search from './search';
import Seleccionado from './seleccionado';
import IndicadorValor from './indicadorValor';
//Styles
import {Content, H2, IndicadoresFlex, SearchBox, IndicadoresBox} from './../styles/Content.js'
//Recursos
import { datos, tiposAmbiental, tiposEconomico, tiposSocial, datosGeneral} from '../constants/datos';
//Context
import { Context } from '../context/context';
import Filters from './filters';

function Main() {
    //Contexto
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
                <IndicadoresFlex>
                    {tiposAmbiental.map((indicador, index) => {
                        return <Indicador key={index} nombre={indicador.nombre} descripcion={indicador.descripcion} imagen={indicador.imagen} ></Indicador>
                    })}
                </IndicadoresFlex>
            </Content>
        )
    } else if (currentView == 2){
        return (
            <Content second="true">
                <SearchBox>
                    <Search></Search>
                </SearchBox>
                <IndicadoresBox>
                    <Filters tiposAmbiental={tiposAmbiental} tiposEconomico={tiposEconomico} tiposSocial = {tiposSocial} ></Filters>
                </IndicadoresBox>
                <IndicadoresFlex>
                    {/* {datosGeneral.filter((item) => {
                        item.tipo === 'Flujos'
                    })} */}
                    <IndicadorValor datos={datosGeneral[0]} />
                    <IndicadorValor datos={datosGeneral[1]} />
                    <IndicadorValor datos={datosGeneral[2]} />
                    <IndicadorValor datos={datosGeneral[3]} calc="true"/>
                </IndicadoresFlex>
            </Content>
        )
    }
}

export default Main