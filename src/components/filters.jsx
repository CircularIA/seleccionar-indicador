import './../css/filters.css'
import { Seleccionado, H4, HR, Botones, BotonCalcular, BotonAmbiental, BotonEconomico, BotonSocial} from "../styles/Seleccionado";
//Recursos
import ImagenCalcular from '../assets/Iconos/icon_bar.svg';
import ImagenNoCalcular from '../assets/Iconos/icon_hard.svg'

function Filters({tiposAmbiental, tiposEconomico, tiposSocial}) {

    return (
        <Seleccionado>
            <div>
                <H4>INDICADORES</H4>
                <HR></HR>
            </div>
            <Botones>
                <BotonCalcular>
                    <img src={ImagenCalcular} alt=""/>
                    Calculado
                </BotonCalcular>
                <BotonCalcular>
                    <img src={ImagenNoCalcular} alt=""/>
                    No Calculado 
                </BotonCalcular>
                {tiposAmbiental.map((indicador, index) =>{
                    return <BotonAmbiental key={index} className="boton ambiental">{indicador.nombre}</BotonAmbiental>
                } )}
                {tiposEconomico.map((indicador, index) => {
                    return <BotonEconomico key={index} className="boton economico">{indicador.nombre}</BotonEconomico>
                })}
                {tiposSocial.map((indicador, index) => {
                    return <BotonSocial key={index} className="boton social">{indicador.nombre}</BotonSocial>
                })}
            </Botones>
        </Seleccionado>
    )
}

export default Filters