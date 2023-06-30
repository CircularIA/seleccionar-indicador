import React, { useContext } from 'react'
import { CircleFill } from 'react-bootstrap-icons'
import './../css/footer.css'
import { Context } from '../context/context';

function Footer() {
    const {currentView} = useContext(Context);
    return (
        <div className="contentFooter">
            <CircleFill color='#00B971'></CircleFill>
        </div>
    )
}

export default Footer