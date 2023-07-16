import './../css/filters.css'
import { H4, HR, BotonCalcular, BotonAmbiental, BotonEconomico, BotonSocial} from "../styles/Seleccionado";
//Recursos
import ImagenCalcular from '../assets/Iconos/icon_bar.svg';
import ImagenNoCalcular from '../assets/Iconos/icon_hard.svg'
import {Box} from "@mui/material";
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import { ColorModeContext, tokens } from "../theme";

function Filters({tiposAmbiental, tiposEconomico, tiposSocial}) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
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
                <H4>INDICADORES</H4>
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
                sx = {{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    marginTop: '1%',
                    marginBottom: '1%',
                    width: '100%',
                }}            
            >
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
            </Box>
        </Box>
    )
}

export default Filters