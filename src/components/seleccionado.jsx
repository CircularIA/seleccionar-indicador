import {useRef, useContext, useEffect} from 'react'

import './../css/seleccionado.css'
import {H4, HR} from "../styles/Seleccionado";
import { Context } from '../context/context';
//Styles from material ui
import { Box } from '@mui/system';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import { ColorModeContext, tokens } from "../theme";

function Seleccionado() {
    // const [seleccionado, setSeleccionado] = useState('AMBIENTAL');
    const {currentIndicator, setCurrentIndicator} = useContext(Context);
    const refBotones = useRef();
    // const refLinea = useRef();
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const removeActive = () =>{
        refBotones.current.childNodes.forEach((e)=>{
            e.classList.remove('active')
        })
        // refLinea.current.className = '';
    }
    const changeSeleccionado = (e) => {
        if (!e.target.className.includes('active')) {
            setCurrentIndicator(e.target.innerText);
            removeActive();
            e.target.classList.add('active');
            // refLinea.current.className = 'linea-'+e.target.innerText.toLowerCase();
        }
    }
    //Setear actual configuracion activa}
    useEffect(() => {
        refBotones.current.childNodes.forEach((e)=>{
            if (e.innerText === currentIndicator) {
                e.classList.add('active');
                // refLinea.current.className = 'linea-'+e.innerText.toLowerCase();
            }
        })
    },[])
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
            }}
        >
            
            <H4>{currentIndicator}</H4>
            <Divider 
                sx={{
                    width: '100%',
                    backgroundColor: colors.primary[500],  
                }}
            />
            
            <div className="botones" ref={refBotones} >
                <button className="boton ambiental" onClick={changeSeleccionado}>AMBIENTAL</button>
                <button className="boton economico" onClick={changeSeleccionado}>ECONÓMICO</button>
                <button className="boton social" onClick={changeSeleccionado}>SOCIAL</button>
            </div>
        </Box>
    )
}

export default Seleccionado