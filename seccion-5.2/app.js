function calcularNota(nota) {

    let notaLetra = '';

    if (nota >= 90){
    notaLetra = 'A';
    } else if ( nota >= 80 ){
    notaLetra = 'B';
    } else if ( nota >= 70 ){
    notaLetra = 'C';
    } else if ( nota >= 60 ){
    notaLetra = 'D';
    } else {
    notaLetra = 'F';
    }

    console.log( nota +' es igual a la letra '+notaLetra)
}


calcularNota(100);
calcularNota(80);
calcularNota(59);
