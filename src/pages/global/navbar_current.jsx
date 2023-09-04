//Recursos
import Logo from './../../assets/icons/LogoBlanco.svg'
import { Box, Typography } from '@mui/material'
import Stack from '@mui/material/Stack';
//Iconos
import PersonIcon from './../../assets/icons/userIcon.svg';
import CategoryIcon from './../../assets/icons/categoryIcon.svg';
import TaskIcon from './../../assets/icons/taskIcon.svg';
import GroupIcon from './../../assets/icons/groupIcon.svg';
import HomeIcon from './../../assets/icons/homeIcon.svg';
import QuestionIcon from './../../assets/icons/questionIcon.svg';

const Item = ({imagen, text}) => {
    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'center'}
        >
            <img src = {imagen}  
                style = {{
                    width: '100%',
                    height: '100%',
                    maxWidth: '25px',
                    maxHeight: '25px',
                }}
            />
            <Typography  variant='h6' color='#ffff' >
                {text}
            </Typography>
        </Box>
    )
}


function NavBar() {
    return (
        <Box
            sx ={{
                background: 'linear-gradient(rgba(0, 138, 85, 1),rgba(0, 185, 113, 1), rgba(13, 255, 110, 1))',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                maxWidth: '100px',
                height: '100vh',
                justifyContent: 'space-between',
                paddingTop: '2%',
            }}
        >
            <Box>
                <img
                style={{
                    width: '100%',
                    height: '100%',
                    maxWidth: '60px',
                    maxHeight: '60px',
                }}
                src={Logo} 
                alt="IconoECI" />
            </Box>
            <Box
                display='flex'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                width='100%'
                height='100%'
                marginTop='10%'
            >
                <Stack
                    spacing={{
                        xs: 6,
                        sm: 6,
                        md: 6,
                        lg: 6,
                        xl: 14,
                    }}
                >
                    <Item imagen = {PersonIcon} text={'Perfil'} />
                    <Item imagen = {HomeIcon} text={'Dashboard'} />
                    <Item imagen = {CategoryIcon} text={'Funciones'} />
                    <Item imagen = {GroupIcon} text={'Contacto'} />
                    <Item imagen = {TaskIcon} text={'Evaluación'} />
                    <Item imagen = {QuestionIcon} text={'Ayuda'} />
                </Stack>
            </Box>
        </Box>
    )
}

export default NavBar