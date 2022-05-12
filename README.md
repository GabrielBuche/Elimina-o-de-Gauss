# Elimina-o-de-Gauss

O método da Eliminação de Gauss consiste em transformar um sistema linear em um sistema linear triangular superior equivalente, pois um sistema dessa forma pode ser resolvido diretamente com a resolução retroativa.

Assim, o método resume-se em aplicar sucessivas operações elementares em um sistema linear para o transformar num sistema de mais fácil resolução, tendo este as mesmas soluções que o original.

- De começo executa "K" etapas até  o Número de linha - 1 ( que da a quantidade de iterações possiveis)

- ele seta o primeiro cadidato a pivot como a[1][1]
e faz uma varredura em busca de um pivot maior que ele, a[2][1], a[3][1]... ate encontrar um elemento maior que ele, ao encontrar ele troca de lugar, criando um novo pivot.

-Na terceira etapa ele triangulariza a mmatriz, criando um número constante para multiplicação e linha( multiplicador de linha 2 = a[2][1] / pivot (a[1][1]) ,  multiplicador de linha 3 = a[3][1] /pivot (a[1][1])...)
    logo em seguida ele realiza o calculo de para escalonamento da matriz, 
    a[2][1] = (a[2][1] - a[2][1] / pivot) * a[1][1] 
    a[2][2] = (a[2][2] - a[2][1] / pivot) * a[1][2] ...
    (assim suctivamente)




