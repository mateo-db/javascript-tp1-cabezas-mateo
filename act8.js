//actividad 8
const notas = [6, 4, 5, 8, 7];
let accNotas = 0
let promedioNotas


for (let i = 0; i<notas.length; i++) {
    console.log(`${accNotas = accNotas+notas[i]}`)


}


promedioNotas = accNotas/notas.length


console.log(`
    Promedio del alumno: ${promedioNotas}
    Estado: ${promedioNotas >= 6 ? 'Aprobó!' : 'No aprobó!'}
`)
