//Para este exercicio sera necessario o conhecimento das formulas para mudar 

//Graus Fahreinheit (°F) para Kelvin (k):

//(KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15

// Graus Celsius (ºC) para Graus Fahrenheit (ºF)

//(GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32 

/* a) Calcule e mostre o valor de 77ºF em K, mostrando a unidade no console também
 b) Calcule e mostre o valor de 80ºC em ºF, mostrando a unidade no console também
 c) Calcule e mostre o valor de 30ºC em ºF e K, monstrando as unidades no console também
 d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter
 */


 //Exercício A

 let kelvin = (77 - 32)*(5/9) + 273.15
 console.log( "77ºF em Kelvin é ", kelvin)

// Exercício B 

let Fahreinheit = (80)*(9/5) + 32 
console.log( "80ºC em Fahreinheit é ", Fahreinheit)

//Exercício C 
let Fahreinheit1 = (30)*(9/5) + 32 
console.log( "30ºC em Fahreinheit é ", Fahreinheit1)

let Kelvin1 = (Fahreinheit1 - 32)*(5/9) + 273.15
console.log ( Fahreinheit1 + " ºF em Kelvin é " , Kelvin1)

//Exercício D 
let Celsius1 = parseFloat(prompt("Qual grau ºC você quer converter?"))
 
let Fahreinheit2 = (Celsius1)*(9/5) + 32
console.log(Fahreinheit2)
let Kelvin2 = (Celsius1 - 32)*(5/9) + 273.15
console.log(Kelvin2)

alert(Celsius1 + "em ºF é ", Fahreinheit2 + "e em K é " + Kelvin2) 


/* Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o consumo de energia elétrica em residências. 
Sabe-se que o quilowatt-hora de energia custa R$0.05. 
Faça um programa que receba a quantidade de quilowatts consumida por uma residência. 

a) Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora 
b) Altere o programa para receber mais um valor: a porcentagem de desconto. 
Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto. 
*/














