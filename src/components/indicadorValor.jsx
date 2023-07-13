import { CardPorcent } from '../styles/CardPorcent';
import ProgressBar from "@ramonak/react-progress-bar";
//Context
import { useContext } from 'react'
import { Context } from '../context/context';

function IndicadorValor({ datos, calc }) {
    const {setCurrentView} = useContext(Context);
    const nextView = () =>{
        setCurrentView((e) =>
            e + 1
        )
    }
    return (
        <CardPorcent onClick={nextView} >
            <CardPorcent.Header calc={calc}>{datos.nombre}</CardPorcent.Header>
            <CardPorcent.Body>
                <CardPorcent.Text>
                    {datos.descripcion}
                </CardPorcent.Text>
                <ProgressBar completed={datos.porcentajeRR.total} bgColor="green" animateOnRender={true} />
            </CardPorcent.Body>
        </CardPorcent>
    )
}

export default IndicadorValor