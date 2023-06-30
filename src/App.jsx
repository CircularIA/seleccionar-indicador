//Estilo
import './App.css'
//Recurso Bootstrap
import Container from 'react-bootstrap/Container';
//Componentes
import Main from './components/main'
import NavBar from './components/navbar'
import Footer from './components/footer'
import { Datos } from './context/context';


function App() {
  return (
    <Datos>
      <Container>
        <div className="navbar">
            <NavBar></NavBar>
        </div>
        <div className="main">
          <Main></Main>
          <Footer></Footer>
        </div>
      </Container>
    </Datos>
  )
}

export default App
