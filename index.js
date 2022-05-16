var N_lines;
var a;
var results;
var lines;
var columns;

// adiciona linha e colunas para ser inserido os valores da matrix
function addMatrix() {

    lines = document.getElementById("getLines").value;
    columns = document.getElementById("getColumns").value;

    N_lines = lines

    a = new Array(); // array que amazena a matrix
    results = new Array(lines); // array que amazena a matrix

    let inputMatrix = document.getElementById("inputMatrix");

    while (inputMatrix.hasChildNodes()) {
        inputMatrix.removeChild(inputMatrix.lastChild);
    }

    for (let i = 0; i <= lines; i++) {
        const rowElement = document.createElement("tr")

        for (let j = 0; j <= columns; j++) {
            const dataElement = document.createElement("td")
            let numInput = document.createElement("input");

            numInput.style = "height: 60px; width: 60px; text-align: center;"
            numInput.name = "line" + i + "column" + j;
            numInput.id = "line" + i + "column" + j;

            if (numInput.id === "line0column0") {
                dataElement.innerHTML = ""
            } else if (numInput.id === `line0column${columns}`) {
                dataElement.innerHTML = "Resultado"
            } else if (numInput.id === "line0column" + j) {
                dataElement.innerHTML = "Coluna " + j
            } else if (numInput.id === "line" + i + "column0") {
                dataElement.innerHTML = "Linha " + i
            } else {
                dataElement.appendChild(numInput)
            }
            rowElement.appendChild(dataElement)
        }

        inputMatrix.appendChild(rowElement)
        inputMatrix.style = " text-align: center; margin-left: auto; margin-right: auto;"
    }
}


function calc() {

    //popular array
    for (var i = 0; i < N_lines; i++) {
        results[i] = 0;
    }

    //popula a  matrix
    for (var i = 0; i < N_lines; i++) {
        let auxA = new Array;
        for (var j = 0; j < columns; j++) {
            auxA.push(document.getElementById(`line${i + 1}column${j + 1}`).value)
        }
        a[i] = auxA;
    }

    // executa as etapas da eleminação de gauss
    for (var k = 0; k < N_lines - 1; k++) {

        var pivot = a[k][k] // candidato a pivot

        //assume um valor para o pivot
        for (var line = k + 1; line < N_lines; line++) {
            if (Math.abs(a[line][k]) > Math.abs(pivot)) {

                var line_pivot = line;
                pivot = a[line][k] // assume um novo valor para pivot
                var aux = a[k]
                a[k] = a[line_pivot]// substitui a line do pivot
                a[line_pivot] = aux;
            }
        }

        //calculo para triangularização da matrix
        for (var line = k + 1; line < N_lines; line++) {
            multiplicador = a[line][k] / pivot
            for (var coluna = 0; coluna < a[0].length; coluna++) {
                a[line][coluna] = (a[line][coluna] - multiplicador * a[k][coluna])
            }
        }
    }

    //calculador valores para results atraves da retrosubstituição
    for (var i = 0; results.legnth > i; i++) {
        results.push(0);
    }
    results[N_lines - 1] = a[N_lines - 1][N_lines] / a[N_lines - 1][N_lines - 1]

    for (var line = N_lines - 2; line >= 0; line--) {
        var aux1 = 0;
        for (var coluna = N_lines - 1; coluna >= 0; coluna--) {
            aux1 += results[coluna] * a[line][coluna]
        }
        results[line] = (a[line][N_lines] - aux1) / a[line][line]
        aux1 = 0;
    }
    console.log(results)

    // mostra o resultado
    let ViewResults = document.getElementById("ViewResults")

    while (ViewResults.hasChildNodes()) {
        ViewResults.removeChild(ViewResults.lastChild);
    }

    ViewResults.style = "text-align: center; margin-left: auto; margin-right: auto; margin-top: 2rem; padding: 0.5rem;"
    ViewResults.innerHTML = results
}

