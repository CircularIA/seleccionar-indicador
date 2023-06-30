import {useState, useRef, useContext} from 'react'

import './../css/seleccionado.css'

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
    return (
        <div className=" seleccionado">
            <div>
                <h4 >{currentIndicator}</h4>
                <hr ref={refLinea}></hr>
            </div>
            <div className="botones" ref={refBotones} >
                <button className="boton ambiental active" onClick={changeSeleccionado}>AMBIENTAL</button>
                <button className="boton economico" onClick={changeSeleccionado}>ECONÓMICO</button>
                <button className="boton social" onClick={changeSeleccionado}>SOCIAL</button>
            </div>
        </div>
    )
}

export default Seleccionado