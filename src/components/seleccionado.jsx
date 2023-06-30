import React,{useState, useRef} from 'react'

import './../css/seleccionado.css'

//Componentes
import { Button } from 'bootstrap';
import { Card } from 'react-bootstrap';

function Seleccionado() {

    const [seleccionado, setSeleccionado] = useState('AMBIENTAL');

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
            setSeleccionado(e.target.innerText);
            removeActive();
            e.target.classList.add('active');
            refLinea.current.className = 'linea-'+e.target.innerText.toLowerCase();
        }
    }
    return (
        <div className=" seleccionado">
            <div>
                <h4 >{seleccionado}</h4>
                <hr ref={refLinea}></hr>
            </div>
            <div className="botones">
                <button className="boton ambiental" onClick={changeSeleccionado}>AMBIENTAL</button>
                <button className="boton economico" onClick={changeSeleccionado}>ECONÓMICO</button>
                <button className="boton social" onClick={changeSeleccionado}>SOCIAL</button>
            </div>
        </div>
    )
}

export default Seleccionado