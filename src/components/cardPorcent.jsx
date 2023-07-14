import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { ColorModeContext, tokens } from "../theme";
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { styled } from 'styled-components';
//Table
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const CardShadow = styled(CardContent)`
    border-radius: 10px;
    border: 1px solid #989898;
    background: #FFF;
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.25);
`

function createData(name, toneladas) {
    return { name, toneladas };
}

const rows = [
    createData('Residuos genedaros totales', 159),
    createData('Residuos recuperados biologicos', 237),
    createData('Residuos recuperados técnicos', 262),
];


function CardPorcent({ source, type, metric, dats, form }) {
    //Styles
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Grid columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} >
                <Box
                    display='flex'
                    flexDirection='row'
                    justifyContent='space-between'
                    gap={4}
                >
                    <CardShadow
                        sx={{
                            flexGrow: 1,
                        }}
                    >
                        <Typography variant='h2' >
                            Fuente
                        </Typography>
                        <Typography variant='h4' >
                            {source}
                        </Typography>
                    </CardShadow>
                    <CardShadow
                        sx={{
                            flexGrow: 1,
                        }}
                    >
                        <Typography variant='h2' >
                            TIPO
                        </Typography>
                        <Typography variant='h4' >
                            {type}
                        </Typography>
                    </CardShadow>
                </Box>
            </Grid>
            <Grid
                item xs={12}
                sx={{
                    marginTop: '20px',
                }}
            >
                <CardShadow>
                    <Typography variant='h2' >
                        QUE MIDE
                    </Typography>
                    <Typography variant='h4' >
                        {metric}
                    </Typography>
                </CardShadow>
            </Grid>
            <Grid
                item xs={12}
                sx={{
                    marginTop: '20px',
                }}
            >
                <CardShadow>
                    <Typography variant='h2' >
                        PORCENTAJE DE RECUPERACIÓN REAL
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>DATOS</TableCell>
                                    <TableCell align="right">UNIDAD</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.toneladas}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    {/* Table */}
                </CardShadow>
            </Grid>
            <Grid item xs={12}>
                <Button
                    sx={{
                        borderRadius: '10px',
                        background: colors.primary[500],
                        boxShadow: '4px 4px 10px 0px rgba(0, 0, 0, 0.25)',
                        width: '100%',
                        marginTop: '5%',
                        paddingY: '1%',
                    }}
                >
                    <Typography
                        variant='h2'
                        color='#FFF'
                    >
                        VER FÓRMULA
                    </Typography>
                </Button>
            </Grid>
        </Grid>
    )
}

export default CardPorcent