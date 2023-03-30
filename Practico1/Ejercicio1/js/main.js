/*
Repaso Javascript: Definir una matriz de 100 elementos x 100 
elementos y completarla con valores enteros random, y resuelva los 
siguientes incisos:

*/
let matriz=[];
for(let i=0; i<10; i++){
    matriz[i]=[];
    console.log(' ');
    for(let j=0; j<10; j++){
        matriz[i][j]=(Math.floor(Math.random()*100));//Cargamos la matriz con valores random
        process.stdout.write(matriz[i][j]+''+'\t');
    }
}
console.log(' ');

//a) Escribir una función que retorne el valor máximo de toda la matriz
let obtenerMayor=(matriz)=>{
    let maximo =0;

    for(let i=0;i<matriz.length; i++){
        for(let j=0; j<matriz[i].length; j++){
            if(matriz[i][j] > maximo){
                maximo= matriz[i][j];
            }
        }
    }
    return maximo;
}
console.log('valor mayor',obtenerMayor(matriz));
console.log(' ');

//b) Escribir una función que retorne el valor máximo contenido en las 
//filas pares y el valor mínimo en las filas impares
let obtenerMayorYMinimo=(matriz, )=>{
    let maximo = [];
    let minimo = [];

    for (let i = 0; i < matriz.length; i++) {
        if (i % 2 == 0) {
            //pares
            maximo.push(Math.max(...matriz[i]));
        } else if(i %2 !==0) {
            //impares
            minimo.push(Math.min(...matriz[i]));

        }
    }
    return {
        maximo: maximo,
        minimo: minimo
    };
}

let resultados= obtenerMayorYMinimo(matriz);
console.log('Maximos de las filas pares',resultados.maximo);
console.log('Minimos de las filas impares', resultados.minimo);
console.log(' ');

//c
let obtenerPromedio=(matriz)=>{
    let promedios=[];
   
    for(let i=0; i< matriz.length; i++){
        let contador=0;
        for(let j=0; j< matriz[i].length; j++){
            contador += matriz[i][j];
        }
        let promedio =contador/matriz[i].length;
        promedios.push(promedio);
    }
    
    return promedios; 
}
let resultadoPromedio = obtenerPromedio(matriz);
console.log('El promedio es ', resultadoPromedio);



