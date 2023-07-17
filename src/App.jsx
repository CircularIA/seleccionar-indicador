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
import { CssBaseline, Grid, ThemeProvider } from "@mui/material";
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
            <Grid
              container
              padding='1% 2% 0% 4%'
              spacing={2}
              sx = {{
                background: '#F2F2F2',
                minHeight: '100vh',
              }}
            >
              <Grid 
                item xs={12} 
              >
                <Main></Main>
              </Grid>
              <Grid 
                item
                xs={12}
              >
                <Footer></Footer>
              </Grid>
            </Grid>
            {/* <div className="content">
              <Main></Main>
              <Footer></Footer>
            </div> */}
          </div>
        </Datos>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
