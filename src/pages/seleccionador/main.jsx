//Bibliotecas
import { useContext } from 'react'
//Componentes
import Indicador from '../../components/indicador'
import Search from '../../components/search';
import Seleccionado from '../../components/seleccionado';
import IndicadorValor from '../../components/indicadorValor';
//Styles
import { Content, H2, IndicadoresFlex, SearchBox, IndicadoresBox } from '../../styles/Content.js'
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { ColorModeContext, tokens } from "../../theme";
import Grid from '@mui/material/Grid';
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

import BarChart from '../../components/barChart';
import PieChart from '../../components/pieChart';

function Main() {
    //Styles
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    //Context
    const { currentView } = useContext(Context);

    if (currentView == 0) {
        return <Content>
            <Typography variant="h2" component="h2">
                ¿QUE TIPO DE INDICADOR QUIERES CONOCER?
            </Typography>
            <IndicadoresFlex>
                {datos.map((indicador, index) => {
                    return <Indicador key={index} descripcion={indicador.descripcion}
                        imagen={indicador.imagen}
                        titulo={indicador.titulo} >
                    </Indicador>
                })}
            </IndicadoresFlex>
        </Content>
    } else if (currentView == 1) {
        return (
            <Content second="true">
                <SearchBox>
                    <Search></Search>
                </SearchBox>
                <IndicadoresBox>
                    <Seleccionado></Seleccionado>
                </IndicadoresBox>
                <IndicadoresFlex>
                    {tiposAmbiental.map((indicador, index) => {
                        return <Indicador key={index} nombre={indicador.nombre} descripcion={indicador.descripcion} imagen={indicador.imagen} ></Indicador>
                    })}
                </IndicadoresFlex>
            </Content>
        )
    } else if (currentView == 2) {
        return (
            <Content second="true">
                <SearchBox>
                    <Search></Search>
                </SearchBox>
                <IndicadoresBox>
                    <Filters tiposAmbiental={tiposAmbiental} tiposEconomico={tiposEconomico} tiposSocial={tiposSocial} ></Filters>
                </IndicadoresBox>
                <IndicadoresFlex>
                    {/* {datosGeneral.filter((item) => {
                        item.tipo === 'Flujos'
                    })} */}
                    <IndicadorValor datos={datosGeneral[0]} />
                    <IndicadorValor datos={datosGeneral[1]} />
                    <IndicadorValor datos={datosGeneral[2]} />
                    <IndicadorValor datos={datosGeneral[3]} calc="true" />
                </IndicadoresFlex>
            </Content>
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
                                        height='300px'
                                        width='90%'
                                    >
                                        <BarChart></BarChart>
                                    </Box>
                                    <Box
                                        height='200px'
                                        display='flex'
                                        flexDirection='row'
                                    >
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