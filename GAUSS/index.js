var a = new Array(3);
var a1 = new Array(3);

var multiplicador;
var coluna = 0;
var linha = 0;
var pivo;
var conta


a[0] = [1, 2, 3]
a[1] = [2, 3, 4]
a[2] = [5, 6, 7]


// var ml=  a[1][0]/a[0][0]
// var  conta = a[1][0] - a[0][0] * ml
// console.log(conta)

for (coluna; coluna < a.length; coluna++) {
    var aux = new Array()
    pivo = a[0][0]
    for (linha; linha < a[coluna].length; linha++) {
        multiplicador = a[coluna + 1][linha] / pivo
        conta = a[coluna + 1][linha] - a[coluna][linha] * multiplicador
        aux.push(conta)
    }
}