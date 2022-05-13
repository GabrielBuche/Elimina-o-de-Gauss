 # Metodo de eliminação de gauss
 ## descrição do codigo
 
O método da Eliminação de Gauss consiste em transformar um sistema linear em um sistema linear triangular superior equivalente, pois um sistema dessa forma pode ser resolvido diretamente com a resolução retroativa.

Assim, o método resume-se em aplicar sucessivas operações elementares em um sistema linear para o transformar num sistema de mais fácil resolução, tendo este as mesmas soluções que o original.

- De começo executa "K" etapas até  o Número de linha - 1 ( que da a quantidade de iterações possiveis)

- ele seta o primeiro cadidato a pivot como a[1][1]
e faz uma varredura em busca de um pivot maior que ele, a[2][1], a[3][1]... ate encontrar um elemento maior que ele, ao encontrar ele troca de lugar, criando um novo pivot.

- Na terceira etapa ele triangulariza a mmatriz, criando um número constante para multiplicação e linha( multiplicador de linha 2 = a[2][1] / pivot (a[1][1]) ,  multiplicador de linha 3 = a[3][1] /pivot (a[1][1])...)
    logo em seguida ele realiza o calculo de para escalonamento da matriz, 
    **a[2][1] = (a[2][1] - a[2][1] / pivot) * a[1][1]** 
    **a[2][2] = (a[2][2] - a[2][1] / pivot) * a[1][2]**...
    (assim suctivamente)

- Na ultima etapa o codigo substitui os valores possiveis de Xn, pelo metodo de retrosubstituição 
onde substitui os valores de X e calcula o resultado de tras para frente, pois a ultima linha ao ser triangulariza, ela terá somente o X3 que poderá ser usado para calcular o X2 e assim succeestivamente,

para teste foi utilizado  a matrix

| 2 	| 4 	| 1  	| 7  	|
|---	|---	|----	|----	|
| 3 	| 2 	| 8  	| 13 	|
| 6 	| 2 	| -1 	| 7  	|

que está no livro de calculo númerico
resolução da matrixa => R: **[1, 1, 1]**


obs: devido a forma com que o JS e o computador operam os números de pontos 
flutuantes algumas das matrix inseridas podem apresentar uma inprecisão...

## fucntions

*addMatrix* => função acionada ao clickar no botão criar, adiciona as linhas e colunas da matrix para que possa ser inserido valores

*calc* => calcula o resultado da matrix

## variaveis
**N_lines** => numero de linhas da matrix 
**a array** => que arrmazena a matrix
**results** => resultado da matrix
**lines** => numero de linhas da matrix
**columns** => numero de colunas da matrix
**inputMatrix** => armazena o valo inserido
**ViewResults** => variavel que armazena e exibe os resultados

execução: para execução abra o codigo html.html com um navegador,
ou para execuçao do codigó direto, use uma extensão do vs code, code Run que permite executar linguagem compiladas.
