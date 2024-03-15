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

const nota1 = 6;
const nota2 = 5;
const nota3 = 5;
const media  = (nota1 + nota2 + nota3) /3;
if (media>=7) {
    console.log('Aprovado');
    }
    else if (media>=5) {
    console.log('Exame');
    }
    else {
        console.log('Reprovado');
        }