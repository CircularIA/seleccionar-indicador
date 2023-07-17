import './../css/filters.css'
import { H4, HR, BotonCalcular, BotonAmbiental, BotonEconomico, BotonSocial} from "../styles/Seleccionado";
//Recursos
import ImagenCalcular from '../assets/Iconos/icon_bar.svg';
import ImagenNoCalcular from '../assets/Iconos/icon_hard.svg'
import {Box, Typography} from "@mui/material";
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import { ColorModeContext, tokens } from "../theme";
import { useEffect, useRef,useContext } from 'react';
import { Context } from '../context/context';

function Filters({tiposAmbiental, tiposEconomico, tiposSocial, tipo}) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const {currentIndicator} = useContext(Context);

    const refBotones = useRef();
    useEffect(() => {
        refBotones.current.childNodes.forEach((e)=>{
            if (e.innerText.toLowerCase() === currentIndicator.toLowerCase()) {
                e.classList.add('active');
            }
        })
    }, [])
    const setActiveState = (e) => {
        e.target.classList.toggle('active');
    }
    return (
        <Box
            sx = {{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                width: '100%',
            }}
        >
            <Box
                display="flex"
                flexDirection="row"
            >
                <Typography variant= 'h4'
                    sx = {{
                        marginRight: '90%',
                    }}
                >
                    INDICADORES
                </Typography>
                <Typography variant= 'h4'>
                    TIPO
                </Typography>
            </Box>
            <Divider 
                sx={{
                    width: '100%',
                    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                    borderRadius: '20px 20px 0px 0px',
                    border: '1px solid '+ colors.primary[500],
                    background: colors.primary[500],
                }}
            />
            <Box
                ref={refBotones}
                sx = {{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    marginTop: '1%',
                    marginBottom: '1%',
                    width: '100%',
                }}            
            >
                <BotonCalcular
                    className="active"
                    onClick = {setActiveState}
                >
                    <img src={ImagenCalcular} alt=""/>
                    Calculado
                </BotonCalcular>
                <BotonCalcular
                    className="active"
                    onClick = {setActiveState}
                >
                    <img src={ImagenNoCalcular} alt=""/>
                    No Calculado 
                </BotonCalcular>
                {tiposAmbiental.map((indicador, index) =>{
                    return <BotonAmbiental key={index} 
                    onClick = {setActiveState}
                    className="boton ambiental">{indicador.nombre}</BotonAmbiental>
                } )}
                {tiposEconomico.map((indicador, index) => {
                    return <BotonEconomico key={index} 
                    onClick = {setActiveState}
                    className="boton economico">{indicador.nombre}</BotonEconomico>
                })}
                {tiposSocial.map((indicador, index) => {
                    return <BotonSocial key={index} 
                    onClick = {setActiveState}
                    className="boton social">{indicador.nombre}</BotonSocial>
                })}
            </Box>
        </Box>
    )
}

export default Filters