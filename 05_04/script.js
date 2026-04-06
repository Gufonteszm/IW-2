var ex1="exercicio 1";
console.log("ex1");
let numero = Number(prompt("Digite um número: "));
if (numero % 2 === 0) {
    console.log("O número é par");
} 
else {
    console.log("O número é ímpar");
}



var ex2="exercicio 2";
console.log("ex2");
let idade = Number(prompt("Digite sua idade: "));
if (idade >= 18) {
    console.log("Você é maior de idade");
} 
else {
    console.log("Você é menor de idade");
}



var ex3="exercicio 3";
console.log("ex3");
for (let i = 1; i <= 10; i++) 
{
    console.log(i);
}



var ex4="exercicio 4";
console.log("ex4");
let numero2 = Number(prompt("Digite um número:"));
while (numero2 >= 0) {
    console.log(numero2);
    numero2--;
}



var ex5="exercicio 5";
console.log("ex5");
let numero3 = prompt("Digite um número: ");
for (let i = 1; i <= 10; i++) 
{
  console.log(numero3 + " x " + i + " = " + (numero3 * i));
}



var ex6="exercicio 6";
console.log("ex6");
let numero4 = Number(prompt("Digite um número:"));
let soma = 0;
for (let i = 1; i <= numero4; i++) {
  soma += i;
}
console.log("soma de 1 até " + numero4 + " é: " + soma);



var ex7="exercicio 7";
console.log("ex7");
let numero5 = Number(prompt("Digite um número: "));
let primo = true;
if (numero5 <= 1) {
  primo = false;
} else {
  for (let i = 2; i < numero5; i++) {
    if (numero5 % i == 0) {
      primo = false;
      break;
    }
  }
}
if (primo) {
  console.log("O número é primo");
} else {
  console.log("O número não é primo");
}



var ex8="exercicio 8";
console.log("ex8");
let usuarioCorreto = "adm";
let senhaCorreta = "123";
let usuario = prompt("Digite o usuário: ");
let senha = prompt("Digite a senha: ");

while (usuario !== usuarioCorreto || senha !== senhaCorreta) {
  console.log("Usuário ou senha incorretos. Tente novamente.");
  usuario = prompt("Digite o usuário: ");
  senha = prompt("Digite a senha: ");
}
console.log("Login realizado com sucesso!");



var ex9="exercicio 9";
console.log("ex9");
let soma2 = 0;
let numero6 = Number(prompt("Digite um número (0 para parar):"));

while (numero6 !== 0) {
  soma2 += numero6;
  numero6 = Number(prompt("Digite outro número (0 para parar):"));
}
console.log("Soma total: " + soma2);



var ex10="exercicio 10";
console.log("ex10");
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let chute = Number(prompt("Adivinhe o número de 1 a 10:"));

while (chute !== numeroSecreto) {
  if (chute > numeroSecreto) {
    console.log("Muito alto! Tente novamente.");
  } else {
    console.log("Muito baixo! Tente novamente.");
  }
  
  chute = Number(prompt("Tente novamente:"));
}
console.log("Parabéns! Você acertou!");



var ex11="exercicio 11";
console.log("ex11");
let numero7 = Number(prompt("Digite um número:"));
let fatorial = 1;

for (let i = 1; i <= numero7; i++) {
  fatorial *= i;
}
console.log("O fatorial de " + numero7 + " é: " + fatorial);



var ex12="exercicio 12";
console.log("ex12");
let nota = Number(prompt("Digite uma nota de 0 a 10:"));

while (nota < 0 || nota > 10) {
  console.log("Nota inválida! Tente novamente.");
  nota = Number(prompt("Digite uma nota de 0 a 10:"));
}

console.log("Nota válida: " + nota);



var ex13="exercicio 13";
console.log("ex13");
let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));
let nota3 = Number(prompt("Digite a terceira nota:"));
let media = (nota1 + nota2 + nota3) / 3;
console.log("Média: " + media);

if (media >= 7) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}



var ex14="exercicio 14";
console.log("ex14");
let valor = Number(prompt("Digite o valor a ser sacado:"));
let notas100 = Math.floor(valor / 100);
valor = valor % 100;
let notas50 = Math.floor(valor / 50);
valor = valor % 50;
let notas20 = Math.floor(valor / 20);
valor = valor % 20;
let notas10 = Math.floor(valor / 10);
valor = valor % 10;
let notas5 = Math.floor(valor / 5);
valor = valor % 5;
let notas2 = Math.floor(valor / 2);
valor = valor % 2;
let notas1 = valor;

console.log("Notas de 100: " + notas100);
console.log("Notas de 50: " + notas50);
console.log("Notas de 20: " + notas20);
console.log("Notas de 10: " + notas10);
console.log("Notas de 5: " + notas5);
console.log("Notas de 2: " + notas2);
console.log("Notas de 1: " + notas1);



var ex15="exercicio 15";
console.log("ex15");
let numero8 = Number(prompt("Digite um número:"));

for (let i = 1; i <= numero8; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}