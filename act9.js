//actividad 9
const nombreAlumno = 'Filemón'
const arrayNotas = [6, 9, 9, 8, 7]
let promedioNotF
let accNotF = 0
let evaluacionPromedio


for (let i = 0; i<arrayNotas.length; i++) {
    accNotF = accNotF+arrayNotas[i]
}


promedioNotF = accNotF/arrayNotas.length


if (promedioNotF>=7) {
    evaluacionPromedio = 'Muy bueno!'
} else if (promedioNotF>=6) {
    evaluacionPromedio = 'Bueno'
} else {
    evaluacionPromedio = 'Desaprobado'
}


console.log(`
    Nombre del alumno: ${nombreAlumno}
    Promedio: ${promedioNotF}
    Evaluación de Promedio: ${evaluacionPromedio}
`)
