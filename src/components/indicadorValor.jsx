import { CardPorcent } from '../styles/CardPorcent';

import ProgressBar from "@ramonak/react-progress-bar";

function IndicadorValor({ datos, calc }) {

    return (
        <CardPorcent>
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