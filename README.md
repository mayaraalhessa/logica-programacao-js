# logica-programacao-js

Treinando a lógica de programação com JavaScript

## op-aritmeticos.js

~~~js
const numero1 = 20;
const numero2 = 40;
~~~

A palavra `const` é utilizada para declaração de variáveis que não vão ser reatribuídas (não permite reatribuição).

Aqui declaramos duas constantes que serão calculadas no bloco a seguir.

~~~js
console.log(`Os números das operações são: ${numero1} e ${numero2}`);
console.log(`A soma dos números é: ${numero1 + numero2}`);
console.log(`A subtração dos números é: ${numero1 - numero2}`);
console.log(`A multiplicação dos números é: ${numero1 * numero2}`);
console.log(`A divisao dos números é: ${numero1 / numero2}`);
console.log(`O resto dos números é: ${numero1 % numero2}`);
~~~

Em cada uma das operações, temos um operador aritmético:

* `+` -> Soma
* `-` -> Subtração
* `*` -> Multiplicação
* `/` -> Divisão
* `%` -> Resto

## op-atribuicao.js

~~~js

let numero = 10;
~~~

Declaramos a variável `numero` usando a palavra `let`, pois essa variável será **reatribuída** ao longo do nosso código.

Em seguida, fazemos uma série de reatribuições usando os opwradores de atribuição.

~~~js
console.log(`O número é inicialmente igual a ${numero}`);
console.log(`Após atribuir somado o número 10: ${numero +=10}`);
console.log(`Reatribuindo e subtraindo o número 10: ${numero -=10}`);
console.log(`Reatribuindo e multiplicando o número 10: ${numero *=10}`);
console.log(`Reatribuindo e dividindo o número 10: ${numero /=10}`);
console.log(`Reatribuindo para o resto da divisão por 10: ${numero = numero % 10}`);
console.log(`Incrementando o número em 1: ${++numero}`);
console.log(`Decrementando o número em 1: ${--numero}`);
console.log(`O número final é igual a ${numero}`);

~~~

Operadores de atribuição:

* `+=` -> atribuição com soma
* `-=` -> atribuição com subtração
* `*=` -> atribuição com multiplicação
* `/=` -> atribuição com divisão
* `%=` -> atribuição com resto da divisão
* `++` -> atribuição com **incremento 1** (pode ser *pré* Ex: `numero ++`ou *pós* incrementado
Ex: `++ numero`).
* `--` -> atribuição com **decremento 1** (pode ser *pré* Ex: `numero --`ou *pós* decrementado
Ex: `-- numero`)

## op-comparacao.js

Neste arquivo conhecemos os operadores de comparação e a estrtutura lógica de decisão **if-else**.
~~~js

if (condicao) {
console.log('VERDADEIRO');
}
else {
console.log('FALSO');
}
~~~

Esta estrutura exibe no console se a condição testada é `true`(verdadeira) ou `false` (falsa). A condição armazena o resultado da **comparação entre duas variáveis**, como segue:

~~~js
const a = 'a', b = 'A';
const condicao = a == b;
~~~

### Operadores de comparação:

* `===` é estritamente (identico) igual valor e tipo
* `!==` não é estritamernte igual(valor ou tipo)
* `''` delimitar texto
* `==`é igual
* `!=` não é igual
* `>` maior que 
* `<` menor que
* `>=` maior ou igual
* `<=` menor ou igual
* teste no terminal = node op-comparacao.js
*TRUE É UMA PALAVRA RESERVADA PARA O VALOR VERDADEIRO, FALSE=FALSO
*estrtutura if - else
* if (expressão para ser avaliada){código que será executado se a expressão for verdadeira}
