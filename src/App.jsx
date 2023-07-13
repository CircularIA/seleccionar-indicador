//Estilo
import './App.css'
//Recurso Bootstrap
import Container from 'react-bootstrap/Container';
//Componentes
import Main from './pages/seleccionador/main'
import NavBar from './pages/global/navbar'
import Footer from './pages/global/footer'
import { Datos } from './context/context';
//MUI
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Datos>
          <div className='app'>
            <NavBar></NavBar>
            <div className="content">
              <Main></Main>
            </div>
            <Footer></Footer>
          </div>
        </Datos>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
