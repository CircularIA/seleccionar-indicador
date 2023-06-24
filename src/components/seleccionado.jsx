import React,{useState, useRef} from 'react'

import './../css/seleccionado.css'

function Seleccionado() {

    const [seleccionado, setSeleccionado] = useState('AMBIENTAL');

    const refBotones = useRef()

    const removeActive = () =>{
        refBotones.current.childNodes.forEach((e)=>{
            e.classList.remove('active')
        })
    }
    const changeSeleccionado = (e) => {
        if (!e.target.className.includes('active')) {
            setSeleccionado(e.target.innerText);
            removeActive();
            e.target.classList.add('active');
        }
    }
    return (
        <div className="seleccionado">
            <div>
                <h4>{seleccionado}</h4>
            </div>
            <div className="botones" ref={refBotones}>
                <button className="boton ambiental active" onClick={changeSeleccionado} >AMBIENTAL</button>
                <button className="boton economico" onClick={changeSeleccionado}>ECONÓMICO</button>
                <button className="boton social" onClick={changeSeleccionado}>SOCIAL</button>
            </div>
        </div>
    )
}

export default Seleccionado