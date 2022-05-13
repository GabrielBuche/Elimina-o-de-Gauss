const N_linha = 3;
let a = new Array(N_linha); // array que amazena a matrix
let x = new Array(N_linha); // array que amazena a matrix


a[0] = [2, 4, 1, 7];
a[1] = [3, 2, 8, 13];
a[2] = [6, 2, -1, 7];


// popular a matrix x
for (i = 0; i < N_linha; i++) {
    x[i] = 0
}



function calc() {


    // executa as etapas da eleminação de gauss
    for (var k = 0; k < N_linha - 1; k++) {
        var pivot = a[k][k] // candidato a pivot
        //assume um valor para o pivot
        for (var linha = k + 1; linha < N_linha; linha++) {
            if (Math.abs(a[linha][k]) > Math.abs(pivot)) {

                var linha_pivot = linha;
                pivot = a[linha][k] // assume um novo valor para pivot
                var aux = a[k]
                a[k] = a[linha_pivot]// substitui a linha do pivot
                a[linha_pivot] = aux;
            }
        }

        //calculo para triangularização da matrix
        for (var linha = k + 1; linha < N_linha; linha++) {
            multiplicador = a[linha][k] / pivot
            for (var coluna = 0; coluna < a[0].length; coluna++) {
                a[linha][coluna] = (a[linha][coluna] - multiplicador * a[k][coluna])
            }
        }
    }


    //calculador valores para x atraves da retrosubstituição
    for (var i = 0; x.legnth > i; i++) {
        x.push(0);
    }
    x[N_linha - 1] = a[N_linha - 1][N_linha] / a[N_linha - 1][N_linha - 1]

    for (var linha = N_linha - 2; linha >= 0; linha--) {
        var aux1 = 0;
        for (var coluna = N_linha - 1; coluna >= 0; coluna--) {
            aux1 += x[coluna] * a[linha][coluna]
        }
        x[linha] = (a[linha][N_linha] - aux1) / a[linha][linha]
        aux1 = 0;

    }
    console.log(x)
}
calc()





