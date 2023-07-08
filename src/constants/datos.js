//Recursos
import ImagenAmbiental from './../img/Iconos/Ambiental.svg'
import ImagenEconomico from './../img/Iconos/Economico.svg'
import ImagenSocial from './../img/Iconos/Social.svg'
import ImagenFlujos from './../img/Iconos/Flujos.svg'
import ImagenAgua from './../img/Iconos/Agua.svg'
import ImagenEmisiones from './../img/Iconos/Emisiones.svg'
import ImagenEnergia from './../img/Iconos/Energia.svg'
import ImagenEficiencia from './../img/Iconos/Eficiencia.svg'
import ImagenOrganizacional from './../img/Iconos/Organizacional.svg'

export const datos = [
    {
        titulo: 'AMBIENTAL',
        descripcion: 'La capacidad de mantener la productividad y biodiversidad de los recursos naturales a lo largo del plazo',
        imagen: ImagenAmbiental
    },
    {
        titulo: 'ECONÓMICO',
        descripcion: 'La capacidad de mantener la productividad y biodiversidad de los recursos naturales a lo largo del plazo',
        imagen: ImagenEconomico
    },
    {
        titulo: 'SOCIAL',
        descripcion: 'La capacidad de mantener la productividad y biodiversidad de los recursos naturales a lo largo del plazo',
        imagen: ImagenSocial
    }
]

export const tiposAmbiental = [
    {
        nombre: 'Flujos',
        imagen: ImagenFlujos,
        descripcion: 'Indicadores relacionados con el nivel de circularidad de los flujos de entrada y salida'
    },
    {
        nombre: 'Emisiones',
        imagen: ImagenEmisiones,
        descripcion: 'Indicadores relacionados con el nivel de circularidad de los flujos de entrada y salida'
    },
    {
        nombre: 'Energia',
        imagen: ImagenEnergia,
        descripcion: 'Indicadores relacionados con el nivel de circularidad de los flujos de entrada y salida'
    },
    {
        nombre: 'Eficiencia',
        imagen: ImagenEficiencia,
        descripcion: 'Indicadores relacionados con el nivel de circularidad de los flujos de entrada y salida'
    },
    {
        nombre: 'Agua',
        imagen: ImagenAgua,
        descripcion: 'Indicadores relacionados con el nivel de circularidad de los flujos de entrada y salida'
    },
    {
        nombre: 'Organizacional',
        imagen: ImagenOrganizacional,
        descripcion: 'Indicadores relacionados con el nivel de circularidad de los flujos de entrada y salida'
    }
]

export const datosGeneral = [
    {
        nombre: "Porcentaje de valorización ciclo biológico",
        descripcion: "Residuos que son valorizados del total de los organicos producidos",
        fuente: 'CTI',
        categoria: 'Ambiental',
        tipo: 'Flujos',
        medicion: "Porcentaje de recuperación real",
        porcentajeRR:{
            formula:{
                expresion: 'ax+by+c'
            },
            residuos:{
                generadosTotales: 30,
                recuperadosBiologicos: 50,
                recuperadosTecnicos: 70
            },
            total: 24
        }
    },
    {
        nombre: "Porcentaje de valorización ciclo técnico",
        descripcion: "Residuos que son valorizados del total de los imperecedores producidos",
        fuente: 'CTI',
        categoria: 'Ambiental',
        tipo: 'Flujos',
        medicion: "Porcentaje de recuperación real",
        porcentajeRR:{
            formula:{
                expresion: 'ax+by+c'
            },
            residuos:{
                generadosTotales: 30,
                recuperadosBiologicos: 50,
                recuperadosTecnicos: 70
            },
            total: 34
        }
    },
    {
        nombre: "Porcentaje circularidad de entrada",
        descripcion: "Materiales de origen sostenible del total de los utilizados en los procesos de la empresa",
        fuente: 'CTI',
        categoria: 'Ambiental',
        tipo: 'Flujos',
        medicion: "Porcentaje de recuperación real",
        porcentajeRR:{
            formula:{
                expresion: 'ax+by+c'
            },
            residuos:{
                generadosTotales: 30,
                recuperadosBiologicos: 50,
                recuperadosTecnicos: 70
            },
            total: 44
        }
    },
    {
        nombre: "Porcentaje circularidad de salida",
        descripcion: "Residuos que son valorizados del total de los generados en los procesos de la empresa",
        fuente: 'CTI',
        tipo: 'Flujos',
        medicion: "Porcentaje de recuperación real",
        porcentajeRR:{
            formula:{
                expresion: 'ax+by+c'
            },
            residuos:{
                generadosTotales: 30,
                recuperadosBiologicos: 50,
                recuperadosTecnicos: 70
            },
            total: 80
        }
    },
    {
        nombre: "Porcentaje circularidad de salida",
        descripcion: "Residuos que son valorizados del total de los generados en los procesos de la empresa",
        fuente: 'CTI',
        tipo: 'Flujos',
        medicion: "Porcentaje de recuperación real",
        porcentajeRR:{
            formula:{
                expresion: 'ax+by+c'
            },
            residuos:{
                generadosTotales: 30,
                recuperadosBiologicos: 50,
                recuperadosTecnicos: 70
            },
            total: 25
        }
    }
]
export const tiposEconomico = [
    {
        nombre: 'Ingreso Circ.',
        imagen: ImagenFlujos,
        descripcion: 'Indicadores relacionados con el nivel de circularidad de los flujos de entrada y salida'
    },
    {
        nombre: 'Ahorro',
        imagen: ImagenAgua,
        descripcion: 'Indicadores relacionados con el nivel de circularidad de los flujos de entrada y salida'
    },
    {
        nombre: 'Inversion Circ.',
        imagen: ImagenEmisiones,
        descripcion: 'Indicadores relacionados con el nivel de circularidad de los flujos de entrada y salida'
    }
]

export const tiposSocial = [
    {
        nombre: 'Empleos',
        imagen: ImagenFlujos,
        descripcion: 'Indicadores relacionados con el nivel de circularidad de los flujos de entrada y salida'
    },
    {
        nombre: 'Educacion',
        imagen: ImagenAgua,
        descripcion: 'Indicadores relacionados con el nivel de circularidad de los flujos de entrada y salida'
    },
    {
        nombre: 'Seguridad',
        imagen: ImagenEmisiones,
        descripcion: 'Indicadores relacionados con el nivel de circularidad de los flujos de entrada y salida'
    },
    {
        nombre: 'Sinergía',
        imagen: ImagenEmisiones,
        descripcion: 'Indicadores relacionados con el nivel de circularidad de los flujos de entrada y salida'
    },
    {
        nombre: 'Interno',
        imagen: ImagenEmisiones,
        descripcion: 'Indicadores relacionados con el nivel de circularidad de los flujos de entrada y salida'
    }
]