//Bibliotecas
import { useState, useContext } from 'react'
//Componentes
import Indicador from '../../components/indicador'
import Search from '../../components/search';
import Seleccionado from '../../components/seleccionado';
import IndicadorValor from '../../components/indicadorValor';
//Styles
import Grid from '@mui/material/Grid';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { ColorModeContext, tokens } from "../../theme";
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
//Recursos
import { datos, tiposAmbiental, tiposEconomico, tiposSocial, datosGeneral } from '../../constants/datos';
//Context
import { Context } from '../../context/context';
import Filters from '../../components/filters';
import CardPorcent from '../../components/cardPorcent';
import Card from '@mui/material/Card';
//Cards from material ui
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
//Graphics
import BarChart from '../../components/barChart';
import PieChart from '../../components/pieChart';
//Input and Select components
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Main() {
    //Hystory
    const [hystory, setHystory] = useState('');
    //Styles
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    //Context
    const { currentView } = useContext(Context);

    const handleHystory = (e) => {
        setHystory(e.target.value);
    }

    if (currentView == 0) {
        return (
            <Grid
                container
                paddingTop='6%'
                spacing={4}
            >
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                >
                    <Typography variant="h2" component="h2">
                        ¿QUE TIPO DE INDICADOR QUIERES CONOCER?
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                >
                    <Grid
                        container
                        direction='row'
                        justifyContent='flex-start'
                        spacing={4}
                    >
                        {datos.map((indicador, index) => {
                            return <Grid
                                item
                                xs={12}
                                sm={6}
                                md={4}
                                lg={4}
                                key={index}>
                                <Indicador descripcion={indicador.descripcion}
                                    imagen={indicador.imagen}
                                    titulo={indicador.titulo} >
                                </Indicador>
                            </Grid>
                        })}
                    </Grid>
                </Grid>
            </Grid>
        )
    } else if (currentView == 1) {
        return (
            <Grid
                container
                spacing={1}
            >
                <Grid 
                    item
                    xs={12}
                >
                    <Box
                        display='flex'
                        alignContent='center'
                        justifyContent='flex-end'
                    >
                        <Search></Search>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    
                >
                    <Seleccionado></Seleccionado>
                </Grid>
                <Grid
                    item
                    xs={12}
                >
                    <Grid 
                        container
                        direction='row'
                        justifyContent='flex-start'
                        spacing={4}
                    >
                        {tiposAmbiental.map((indicador, index) => {
                        return <Grid 
                                item
                                xs={12}
                                sm={6}
                                md={4}
                                lg={4}
                                key={index}
                                >
                                <Indicador  nombre={indicador.nombre} descripcion={indicador.descripcion} imagen={indicador.imagen} ></Indicador>
                            </Grid>
                    })}
                    </Grid>
                </Grid>
            </Grid>
        )
    } else if (currentView == 2) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    alignContent: 'flex-start',
                }}
            >
                <Box
                    sx={{
                        alignSelf: 'flex-end',
                    }}
                >
                    <Search></Search>
                </Box>
                <Box
                    sx={{
                        width: '100%',
                    }}
                >
                    <Filters tiposAmbiental={tiposAmbiental} tiposEconomico={tiposEconomico} tiposSocial={tiposSocial} ></Filters>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        alignContent: 'flex-start',
                        gap: '3%',
                    }}
                >
                    <IndicadorValor datos={datosGeneral[0]} />
                    <IndicadorValor datos={datosGeneral[1]} />
                    <IndicadorValor datos={datosGeneral[2]} />
                    <IndicadorValor datos={datosGeneral[3]} calc="true" />
                </Box>
            </Box>
        )
    }
    else if (currentView == 3) {
        return (
            <Box
                display='flex'
                flexDirection='column'
                alignContent='flex-start'
            >
                <Typography variant="h2" component="h2">
                    PORCENTAJE CIRCULARIDAD DE SALIDA
                </Typography>
                <Divider
                    sx={{
                        width: '100%',
                        height: '1px',
                        marginTop: '1%',
                        background: '#989898',
                        border: '1px solid #989898',
                        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
                    }}
                ></Divider>
                <Grid container
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    marginTop='2%'
                >
                    <Grid item xs={6} >
                        {/* Fuentes */}
                        <CardPorcent source='CTI'
                            type='Flujos'
                            metric='Porcentaje de recuperacion real'
                            dats={{
                                'residuosTotales': 89
                            }}
                            form='ax+by+c'
                        >
                        </CardPorcent>

                    </Grid>
                    <Grid item xs={6}>
                        {/* Graficos */}
                        <Grid item>
                            <Card
                                sx={{
                                    borderRadius: '10px',
                                    border: '1px solid #989898',
                                    background: '#FFF',
                                    boxShadow: '4px 4px 10px 0px rgba(0, 0, 0, 0.25)',
                                    textAlign: 'center',

                                }}

                            >
                                <CardHeader
                                    title='COMPORTAMIENTO HISTORICO'
                                />
                                <CardContent>
                                    <Box
                                        sx={{
                                            width: '60%',
                                            margin: 'auto',
                                            marginY: '0%',
                                        }}
                                    >
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Enero 2023</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={hystory}
                                                label="Historia"
                                                onChange={handleHystory}
                                            >
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>

                                    </Box>
                                    <Box
                                        height='300px'
                                        width='90%'
                                    >
                                        <BarChart></BarChart>
                                    </Box>
                                    <Box
                                        height='150px'
                                        display='flex'
                                        flexDirection='row'
                                        width='90%'
                                        marginTop='1px'
                                    >
                                        {/* <img src={PieGreen} alt='PieGreen' />
                                        <img src={PieRed} alt='PieRed' />
                                        <img src={PieYellow} alt='PieYellow' /> */}
                                        <PieChart></PieChart>
                                        <PieChart></PieChart>
                                        <PieChart></PieChart>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Box
                            display='flex'
                            flexDirection='row'
                        >
                            <Button
                                sx={{
                                    borderRadius: '10px',
                                    paddingY: '1%',
                                    flexGrow: 1,
                                    background: colors.primary[500],
                                    boxShadow: '4px 4px 10px 0px rgba(0, 0, 0, 0.25)',
                                }}
                            >
                                <Typography
                                    variant='h2'
                                    color='#FFF'
                                >
                                    GRÁFICO
                                </Typography>
                            </Button>
                            <Button
                                sx={{
                                    borderRadius: '10px',
                                    paddingY: '1%',
                                    flexGrow: 1,
                                    background: '#B2B2B2',
                                    boxShadow: '4px 4px 10px 0px rgba(0, 0, 0, 0.25)',
                                }}
                            >
                                <Typography
                                    variant='h2'
                                    color='#FFF'
                                >
                                    ESQUEMA
                                </Typography>
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        )
    }
}

export default Main