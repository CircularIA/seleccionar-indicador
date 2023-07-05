import { useContext } from 'react'
import { CircleFill } from 'react-bootstrap-icons'
import './../css/footer.css'
import { Context } from '../context/context';

function Footer() {
    const {currentView} = useContext(Context);
    if (currentView == 0){
        return (
            <div className="contentFooter">
                <CircleFill color='#00B971'></CircleFill>
            </div>
        )
    } else if (currentView == 1){
        return (
            <div className="contentFooter">
                <CircleFill color='#989898' className='firstCircle'></CircleFill>
                <CircleFill color='#00B971'></CircleFill>
            </div>
        )
    }
}

export default Footer