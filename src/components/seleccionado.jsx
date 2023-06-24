import React,{useState} from 'react'

import './../css/seleccionado.css'

function Seleccionado() {

    const [seleccionado, setSeleccionado] = useState('AMBIENTAL');

    const changeSeleccionado = (e) => {
        console.log(e.target)
    }
    return (
        <div className="seleccionado">
            <div>
                <h4>{seleccionado}</h4>
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