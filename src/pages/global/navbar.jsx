//Recursos
import Logo from './../../assets/Iconos/LogoBlanco.png'
import { Box } from '@mui/material'

function NavBar() {
    return (
        <Box
            sx ={{
                background: 'linear-gradient(rgba(0, 138, 85, 1),rgba(0, 185, 113, 1), rgba(13, 255, 110, 1))',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minWidth: '100px',
                minHeight: '100vh',
                
                paddingTop: '2%',
                paddingRight: '1%',
            }}
        >
            <img
            style={{
                maxWidth: '63px',
                maxHeight: '60px',
            }}
            src={Logo} 
            alt="IconoECI" />
        </Box>
    )
}

export default NavBar