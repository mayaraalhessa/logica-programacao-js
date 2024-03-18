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

const
tempatual = window.prompt('Digite a temperatura atual');
escalaatual = window.prompt('Digite a escala atual sem os grau º');
escalaconvertida = window.prompt('Digite a escala que deseja');

if (escalaatual === 'C' && escalaconvertida === 'F') {
    calculo = ((tempatual * 9/5) + 32 )
    window.alert(`O resultado da conversão entre temperatura de Celsius para Fahrenheit é de : ${calculo} °F`);
    }
    if else (escalaatual === 'C' && escalaconvertida === 'K') {
        calculo = (tempatual= tC + 273.15);
        window.alert(`O resultado da conversão entre temperatura de Celsius para Kelvin é de : ${calculo} °K`);
        }
        if else (escalaatual === 'F' && escalaconvertida === 'C') {
            calculo = ((tF - 32) * (5/9));
            window.alert(`O resultado da conversão entre temperatura de Celsius para Kelvin é de : ${calculo} °K`);
            }
            if else (escalaatual === 'F' && escalaconvertida === 'K') {
                calculo = ((tF - 32) * (5/9) + 273.15);
                window.alert(`O resultado da conversão entre temperatura de Celsius para Kelvin é de : ${calculo} °K`);
                }
                if else (escalaatual === 'K' && escalaconvertida === 'C') {
                    calculo = (tempatual= tK - 273.15);
                    window.alert(`O resultado da conversão entre temperatura de Celsius para Kelvin é de : ${calculo} °K`);
                    }
                    else (escalaatual === 'K' && escalaconvertida === 'F') {
                        calculo = (tempatual= (tK - 273.15) * (9/5) + 32);
                        window.alert(`O resultado da conversão entre temperatura de Celsius para Kelvin é de : ${calculo} °K`);
                        }
                        