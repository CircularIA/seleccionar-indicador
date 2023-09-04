//Estilo
import './App.css'
//Componentes
import { useState } from 'react'
import Main from './pages/seleccionador/main'
import NavBar from './pages/global/navbar'
import Footer from './pages/global/footer'
//MUI
import { CssBaseline, Grid, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
function App() {
  const [theme, colorMode] = useMode();
  const [currentView, setCurrentView] = useState(0);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
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
              <Main currentView={currentView} setCurrentView={setCurrentView} />
            </Grid>
            <Grid 
              item
              xs={12}
            >
              <Footer currentView={currentView} setCurrentView={setCurrentView} />
            </Grid>
          </Grid>
          {/* <div className="content">
            <Main></Main>
            <Footer></Footer>
          </div> */}
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
