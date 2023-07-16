import { useContext } from 'react'

import { Context } from '../context/context';

import CardView from './../styles/Card.js'
import { Box } from '@mui/material';
function Indicador({ nombre, descripcion, imagen, titulo = '' }) {
  const { setCurrentView, currentIndicator,  setCurrentIndicator } = useContext(Context);
  const nextView = () => {
    setCurrentView((e) =>
      e + 1
    )
    titulo ? setCurrentIndicator(titulo.toUpperCase()) : setCurrentIndicator(nombre.toUpperCase());
  }
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1
        
      }}
    >
      <CardView onClick={nextView} nombre={nombre} currentindicator={currentIndicator}>
        <CardView.Header nombre={nombre} > {nombre}</CardView.Header>
        <CardView.Body>
          <CardView.Img src={imagen} nombre={nombre}></CardView.Img>
          <CardView.Text nombre={nombre} titulo={titulo} >{descripcion}</CardView.Text>
        </CardView.Body>
      </CardView>
      <CardView.Footer nombre={nombre} titulo={titulo} >{titulo}</CardView.Footer>
    </Box>
  )
}

Indicador.defaultProps = {
  descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  nombre: ''
}
export default Indicador