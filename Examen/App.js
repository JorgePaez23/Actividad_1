function verificarAprobacion(nota) {
    let resultado;
    
    switch (true) {
        case (nota >= 60):
            resultado = ' Aprobo la Materia ';
            break;
        default:
            resultado = ' Reprobo la Materia ';
            break;
    }
    
    return resultado;
}


const nota = 59;
console.log(`El alumno ${verificarAprobacion(nota)}`); 

