let matrix = initializeMatrix(4,4);
let matrixClave = initializeMatrix(4,4);

const mod27 = {
    "a" : 0,
    "b" : 1,
    "c" : 2,
    "d" : 3,    
    "e" : 4,
    "f" : 5,
    "g" : 6,                 
    "h" : 7,
    "i" : 8,
    "j" : 9,
    "k" : 10,   
    "l" : 11,
    "m" : 12,       
    "n" : 13,
    "ñ" : 14,
    "o" : 15,
    "p" : 16,
    "q" : 17,
    "r" : 18,
    "s" : 19,
    "t" : 20,
    "u" : 21,
    "v" : 22,
    "w" : 23,
    "x" : 24,
    "y" : 25,
    "z" : 26,
    " " : 27

};
const mod27Inv = {
    
    "0": "a",
    "1": "b",
    "2": "c",
    "3": "d",
    "4": "e",
    "5": "f",
    "6": "g",
    "7": "h",
    "8": "i",
    "9": "j",
    "10": "k",
    "11": "l",
    "12": "m",
    "13": "n",
    "14": "ñ",
    "15": "o",
    "16": "p",
    "17": "q",
    "18": "r",
    "19": "s",
    "20": "t",
    "21": "u",
    "22": "v",
    "23": "w",
    "24": "x",
    "25": "y",
    "26": "z",
    "27": " "
      
}

printInput(4, 4);
const text = document.querySelector('#input')
const btn = document.querySelector('.submit')

btn.addEventListener('click', () =>{
    const divi = document.querySelector('.operation')
    const inputs = document.querySelectorAll('.ingresarClave')

    let validar= true;

    inputs.forEach(function(input) {
        if (input.value === '') {
            console.log(input.value);
            validar = false;
        }}
        )

    if (divi !== null || text.value ==""|| validar==false)
        {
        alert("Algo salio mal")
    }else{
        createMatrix(text.value);
        printMatrix(matrix.length,4, matrix,'.matrix');
        printMatrix(4,4,convertNumber(matrix),'.matrix');
    
        let matrixConvert1 = [];
        let matrixConvert2 = [];
        let matrixConvert3 = [];
        let matrixConvert4 = [];
    
            
            
            matrixClave = readMatrixKey();
            printMatrix(4,4,matrixClave,'.multiply1');
            operaciones("*",'.multiply1')
            const matrixColumn = createMatrixColumn(0,matrix,'.multiply1');
            operaciones("=",'.multiply1')
            const matrixMultiply1 = multiply(0,matrixColumn,matrixClave);
            printMatrix(4,4,matrixMultiply1,'.multiply1');
            operaciones("→ mod(27)",'.multiply1')
            const matrixmod1 = modear27(0,matrixMultiply1)
            printMatrix(4,4,matrixmod1,'.multiply1')
            operaciones("=",'.multiply1')
            matrixConvert1 = convertText(matrixmod1);
            printMatrix(4,4,matrixConvert1,'.multiply1')
            
        
        if (text.value.length>4){
            printMatrix(4,4,matrixClave,'.multiply2');
            operaciones("*",'.multiply2')
            createMatrixColumn(1,matrix,'.multiply2');
            operaciones("=",'.multiply2')
            const matrixMultiply2 = multiply(1,matrixColumn,matrixClave)
            printMatrix(4,4,matrixMultiply2,'.multiply2');
            operaciones("→ mod(27)",'.multiply2')
            const matrixmod2 = modear27(1,matrixMultiply2);
            printMatrix(4,4,matrixmod2,'.multiply2')
            operaciones("=",'.multiply2')
            matrixConvert2 = convertText(matrixmod2);
            printMatrix(4,4,matrixConvert2,'.multiply2')
            
        }
        if (text.value.length>8){
            printMatrix(4,4,matrixClave,'.multiply3');
            operaciones("*",'.multiply3')
            createMatrixColumn(2,matrix,'.multiply3');
            operaciones("=",'.multiply3')
            const matrixMultiply3 = multiply(2,matrixColumn,matrixClave);
            printMatrix(4,4,matrixMultiply3,'.multiply3');
            operaciones("→ mod(27)",'.multiply3')
            const matrixmod3 = modear27(2,matrixMultiply3);
            printMatrix(4,4,matrixmod3,'.multiply3');
            operaciones("=",'.multiply3')
            matrixConvert3 = convertText(matrixmod3);
            printMatrix(4,4,matrixConvert3,'.multiply3')
            
        }
        if (text.value.length>12){
            printMatrix(4,4,matrixClave,'.multiply4');
            operaciones("*",'.multiply4')
            createMatrixColumn(3,matrix,'.multiply4');
            operaciones("=",'.multiply4')
            const matrixMultiply4 = multiply(3,matrixColumn,matrixClave);
            printMatrix(4,4,matrixMultiply4,'.multiply4');
            operaciones("→ mod(27)",'.multiply4')
            const matrixmod4 = modear27(3,matrixMultiply4);
            printMatrix(4,4,matrixmod4,'.multiply4')
            operaciones("=",'.multiply4')
            matrixConvert4 = convertText(matrixmod4)
            printMatrix(4,4,matrixConvert4,'.multiply4')
            
        }
        const container = document.querySelector('.result')
        const resultado = document.createElement('h2');
        resultado.textContent = concatenarMatrices(matrixConvert1,matrixConvert2,matrixConvert3,matrixConvert4);
        container.appendChild(resultado)
        

    }

    

    


    
    
})

function createMatrix(array) {
    
    let count = 0;
    for(let i = 0; i<array.length/4; i++){
        for(let j = 0; j<4; j++){
            matrix[j][i]= array.charAt(count);
            count++;
        }
    }
    return matrix;
}

function convertNumber(mat) {
    mat = this.matrix;
    for (let i = 0; i<matrix.length; i++){
        
        for (let j = 0; j<4; j++){
            let key = matrix[i][j]   
            matrix[i][j] = mod27[key]
        }
    }
    return matrix;
}

function showMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        //console.log(matrix[i].join('\t')); // Une los elementos de la fila con un tabulador
    }
}

function initializeMatrix(rows, columns) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
        for (let j = 0; j<columns; j++){
            matrix[i][j] = null;
        }
    }
    return matrix;
}
function printMatrix(rows, columns, mat,div){
    
    const table = document.createElement('table')
    const container = document.querySelector(div)
    

    for (let i = 0; i < rows; i++) {
        const fila = document.createElement('tr');

        for (let j = 0; j < columns; j++) {
            const celda = document.createElement('td');
            celda.textContent = mat[i][j];
            fila.appendChild(celda);
        }

        table.appendChild(fila);
    }
    container.appendChild(table);
}

function printInput(rows, columns){
    
    const table = document.createElement('table')
    const container = document.querySelector('div')


    for (let i = 0; i < rows; i++) {
        const fila = document.createElement('tr');

        for (let j = 0; j < columns; j++) {
            const celda = document.createElement('td');
            const input = document.createElement('input');
            input.className = 'ingresarClave';
            celda.appendChild(input)
            fila.appendChild(celda);
        }

        table.appendChild(fila);
    }
    container.appendChild(table);
}

function readMatrixKey() {
    const inputs = document.querySelectorAll('.ingresarClave')
    let contador = 0;
    let arrayInput = [];
    inputs.forEach((input)=>{
        let valor = input.value;
        if (valor == null){
            arrayInput.push(" ")
        }else{
            arrayInput.push(valor)
        }
        
    })
    for (let i = 0; i<4;i++){

        matrixClave[i] = [];
        for (let j = 0; j<4; j++){
            matrixClave[i][j] = arrayInput[contador];
            contador++;
        }
    }
    return matrixClave;
}
function createMatrixColumn(column, mat,div){
    const table = document.createElement('table')
    table.className = 'column';
    const container = document.querySelector(div)
    
    for (let i = 0; i < 4; i++){
        const fila = document.createElement('tr');
        const celda = document.createElement('td');
        celda.textContent = mat[i][column];
        if(mat[i][column] === undefined){
            celda.textContent = "27";
        }

        fila.appendChild(celda);
        table.appendChild(fila);
        
    }
    container.appendChild(table);
    return mat;
}

function multiply(column, mat, matKey){
    let matrixEncrypted = initializeMatrix(4, 4);
    

    for (let i = 0; i<4; i++){
        let temporal = 0;
        let matrixtemp = initializeMatrix(4,4)
        for (let j = 0; j<4; j++){
            matrixtemp[j][i]= (mat[j][column]  * parseInt(matKey[i][j]));
            temporal += matrixtemp[j][i];
        }
        matrixEncrypted[i][column] = temporal;

    }
    return matrixEncrypted;
}
function modear27(column, mat) {
    for (let i = 0; i<4; i++){
        if (mat[i][column] % 27<0){
            mat[i][column] = 27+(mat[i][column] % 27);
        } else{
            mat[i][column] = mat[i][column] % 27;
        }

    }
    return mat;
}
function convertText(mat){

        for (let i = 0; i<matrix.length; i++){
            
            for (let j = 0; j<4; j++){
                let key = mat[i][j]   
                mat[i][j] = mod27Inv[key]
            }
        }
        return mat;
    
}
function concatenarMatrices(...matrices) {

    let resultado ="";

    matrices.forEach(matriz => {
        let filas = (matriz.join()).toString();
            filas = filas.split(',').join('');
            resultado += filas;
      });

      

    return "Resultado: "+resultado;
  }
  function operaciones(string, node){
    const container = document.querySelector(node);
    const symbol = document.createElement('h3')
    symbol.textContent = string;
    symbol.className = 'operation'
    container.appendChild(symbol);
  }