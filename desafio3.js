//## desafio3.js
//Crie um convesor de temperatura entre as escalas Celsius, Fahrenheit e Kelvin. O usuário deve digitar a temperatura a ser convertida, a escala da temperatura e a escala para o qual valor deve ser convertido.
//** Entradas: (3)**Valor atual da temperatura e a escala para o qual o valor deve ser convertido.


//**Formulas:**
//De          | Para       | Fórmula
//Celsius     | Fahrenheit |tF = (tC * 9/5) + 32
//Celsius     | Kelvin     |tK = tC + 273.15
//Fahrenheit  | Celsius    |tC = (tF - 32) * 5/9
//Fahrenheit  | Kelvin     |tK = (tF - 32) * 5/9 + 273.15
//Kelvin      | Fahrenheit |tC = tK - 273.15
//Kelvin      | Celsius    |tF = (tK - 273.15) * 9/5 + 32
function converteTemperatura(temperaturaAtual, escalaAtual, escalaConversao) {
let temperaturaConvertida, msgErro = 'OK';

  if (!isNaN(temperaturaAtual)) {

    escalaAtual = escalaAtual.toUpperCase();
    escalaConversao = escalaConversao.toUpperCase();

      if (escalaAtual === 'C') {
  
          if (escalaConversao === 'K') {
            temperaturaConvertida = temperaturaAtual + 273.15
  
          } else if (escalaConversao === 'F') {
            temperaturaConvertida = (temperaturaAtual * 9 / 5) + 32;
  
          } else if (escalaConversao === 'C') {
            msgErro =`ERRO: Escala Selecionada: ${escalaConversao}. Selecione uma escala de CONVERSÃO diferente da ATUAL.`;
  
          } else {
            msgErro =`ERRO: Escala Selecionada: ${escalaConversao}. Essa escala não existe ou não está disponível neste programa.`;
          }
  
      } else if (escalaAtual === 'F') {
  
          if (escalaConversao === 'K') {
            temperaturaConvertida = (temperaturaAtual + 459.67) * 5 / 9;
  
          } else if (escalaConversao === 'C') {
            temperaturaConvertida =(temperaturaAtual - 32) * 5 / 9;
  
          } else if (escalaConversao === 'F') {
            msgErro =`ERRO: Escala Selecionada: ${escalaConversao}. Selecione uma escala de CONVERSÃO diferente da ATUAL.`;
  
          } else {
            msgErro =`ERRO: Escala Selecionada: ${escalaConversao}. Essa escala não existe ou não está disponível neste programa.`;
          }
  
      } else if (escalaAtual === 'K') {
  
          if (escalaConversao === 'C') {
            temperaturaConvertida =`${temperaturaAtual} em ${escalaAtual} -> ${temperaturaAtual - 273.15} em ${escalaConversao}`;
  
          } else if (escalaConversao === 'F') {
            temperaturaConvertida =`${temperaturaAtual} em ${escalaAtual} -> ${temperaturaAtual * 9 / 5 - 459.67} em ${escalaConversao}`;
  
          } else if (escalaConversao === 'K') {
            msgErro =`ERRO: Escala Selecionada: ${escalaConversao}. Selecione uma escala de CONVERSÃO diferente da ATUAL.`;
  
          } else {
            msgErro =`ERRO: Escala Selecionada: ${escalaConversao}. Essa escala não existe ou não está disponível neste programa.`;
          }
  
      } else {
        msgErro =`ERRO: Escala Selecionada: ${escalaConversao}. Essa escala não existe ou não está disponível neste programa.`;
      }
  
  } else {
    mensagem ='O número digitado para conversão não é um número válido.';
  }
//retornadndo em json = javascript object notation
  return {
  temperaturaAtual: temperaturaAtual, 
  temperaturaConvertida:temperaturaConvertida, 
  escalaAtual: escalaAtual, 
  escalaConversao: escalaConversao, 
  msgErro: msgErro
}
}
//array é um conjunto de dados englobados em uma variavel só, pode ser chamado de vetor unidimensional e é uma lista de informações.