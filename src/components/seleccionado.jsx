import {useRef, useContext, useEffect} from 'react'

import './../css/seleccionado.css'
import {H4, HR} from "../styles/Seleccionado";
import { Context } from '../context/context';

function Seleccionado() {
    // const [seleccionado, setSeleccionado] = useState('AMBIENTAL');
    const {currentIndicator, setCurrentIndicator} = useContext(Context);
    const refBotones = useRef();
    const refLinea = useRef();

    const removeActive = () =>{
        refBotones.current.childNodes.forEach((e)=>{
            e.classList.remove('active')
        })
        refLinea.current.className = '';
    }
    const changeSeleccionado = (e) => {
        if (!e.target.className.includes('active')) {
            setCurrentIndicator(e.target.innerText);
            removeActive();
            e.target.classList.add('active');
            refLinea.current.className = 'linea-'+e.target.innerText.toLowerCase();
        }
    }
    //Setear actual configuracion activa}
    useEffect(() => {
        refBotones.current.childNodes.forEach((e)=>{
            if (e.innerText === currentIndicator) {
                e.classList.add('active');
                refLinea.current.className = 'linea-'+e.innerText.toLowerCase();
            }
        })
    },[])
    return (
        <div className=" seleccionado">
            <div>
                <H4>{currentIndicator}</H4>
                <HR ref={refLinea}></HR>
            </div>
            <div className="botones" ref={refBotones} >
                <button className="boton ambiental" onClick={changeSeleccionado}>AMBIENTAL</button>
                <button className="boton economico" onClick={changeSeleccionado}>ECONÓMICO</button>
                <button className="boton social" onClick={changeSeleccionado}>SOCIAL</button>
            </div>
        </div>
    )
}

export default Seleccionado