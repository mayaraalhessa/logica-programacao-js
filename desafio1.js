// escreva um código em Java Script que resolva o problema descrito no livro de lógica de programação i pag , em que temso que obter a nota de 3 alunos, calcular a média e exibir se o aluno foi aprovado, reprovado ou se fico para exame. Não é necessário ler as notas, você pode defini-las como variáveis. 
//Voce precisara utilizar uma estrutura composta, como a seguir:
//if (condição)
//{
    //codigo da condição 1
//} else if (condição 2){
//codigo da condição 2
//}
//else{
  //  condigo se nenhuma for negativa
//}

const
    nota1 = 3,
    nota2 = 0,
    nota3 = 7,
    media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
    console.log(`O aluno foi APROVADO com média ${media.toFixed(2)}`);
} else if (media >= 5) {
    console.log(`O aluno está de EXAME com média ${media.toFixed(2)}`);
} else {
    console.log(`O aluno foi REPROVADO com média ${media.toFixed(2)}`);
}
        // .toFixed(n), para colocar quantas casas decimais