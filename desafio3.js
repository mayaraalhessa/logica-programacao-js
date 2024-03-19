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

const temperatura = window.prompt('digite a temperatura atual:'),
      atual = window.prompt('Informe a unidade de temperatura atual para converter:C, F ou K'),
      conversao = window.prompt('informe para qual escala você deseja converter: C, F ou K');
      
      const 
      CF = (temperatura * 9/5) + 32,
      CK = temperatura + 273.15,
      FC = (temperatura - 32) * 5/9,
      FK = (temperatura + 459.67) * 5/9,
      KC = temperatura + 273.15,
      KF = temperatura * 9/5 - 459.67;

      if  ( atual == "C" ||  "c" && conversao == "F" ||  "f"){ 
        window.alert (`temperatura = ${CF} `); 
        }
        else if ( atual == "C" ||  "c" && conversao == "K" || "k" ){ 
          window.alert (`temperatura = ${CK}`);
      }
        else if ( atual == "F" ||  "f" && conversao == "C" ||  "c"){
           window.alert (`temperatura = ${FC}`);
        }
        else if ( atual == "F" ||  "f" && conversao == "K" ||  "k"){
          window.alert (`temperatura = ${FK}`);
        }
        else if (atual == "K" ||  "k" && conversao == "C" ||  "c"){
          window.alert (`temperatura = ${KC}`);
        }
        else if ( atual == "K" ||  "k" && conversao == "F" ||  "f" ){
          window.alert (`temperatura = ${KF}`);
        }
        else {
          window.alert (` Temperatura não reconhecida`);
        }
        console.log(`O valor não é NAN: $(!ISnAn(TEMPERATURA)})`);