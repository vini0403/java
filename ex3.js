import PromptSync from "prompt-sync";

const prompt = PromptSync();


//1. Imprimir números de 1 a 10 utilizando o loop for


export function funcao(params) {
console.log("1. Imprimir números de 1 a 10 utilizando o loop for")
    for (let contador = 1; contador <= 10; contador ++) {
        console.log(contador);
  
  }
}

//2. Imprimir números pares de 1 a 10.

export function funcao2(params) {
    console.log("2. Imprimir números pares de 1 a 10.")
    for (let contador = 2; contador <= 10; contador += 2) {
        console.log(contador); 
          }
}

//3. Faça um programa que imprima os números impares de 0 a 50
 
export function funcao3(params) {
    console.log("3. Faça um programa que imprima os números impares de 0 a 50")
    for (let contador = 1; contador <= 50; contador += 2) {
        console.log(contador); 
    }
}


//4. Faça um programa que imprima na tela a tabuada de um número
// qualquer escolhido pelo usuário até o 10.

export function funcao4(params) {
    console.log("4. Faça um programa que imprima na tela a tabuada de um número qualquer escolhido pelo usuário até o 10.")
    let numerodigitado = parseInt(prompt("digite o numero para a tabuada: "))
    for (let contador = 0; contador <= 10; contador ++) {
        console.log(`${numerodigitado} x ${contador} = ${numerodigitado*contador}`);
    
          }
}

// 5. Imprimir os primeiros 10 números da sequência de Fibonacci.

export function funcao5(params) {
    console.log("5. Imprimir os primeiros 10 números da sequência de Fibonacci.")
    let numanterior = 0
let numatual = 1
for (let contador = 0; contador <= 10; contador ++) {
     let proximonumero = numanterior + numatual;
     
     console.log(proximonumero)

     numanterior = numatual;
     numatual = proximonumero;

    }
}

      //6.Imprimir números pares de 0 a 20 utilizando o loop while
      
      export function funcao6(params) {
        console.log("6.Imprimir números pares de 0 a 20 utilizando o loop while")
        let contador = 0
      while (contador <= 20) {
          console.log(contador);
          contador += 2
      }
      }

      //7. Calcular a soma dos números de 1 a 100 utilizando a estrutura
//while.

// let contador = 0
// let soma = 1;
// while (contador <= 100) {
//     soma  = contador + soma
//     contador ++
//     }
//     console.log(soma);

//     8. Faça um programa que receba a idade do usuário, enquanto a
// resposta do usuário for menor que 18 anos continue a solicitar a
// idade e mostre uma mensagem quando a idade do usuário for
// maior que 18.

// let idade
// do {
//      idade = parseInt(prompt("Digite sua idade"))
// } while (idade < 18);

// console.log("maior que 18 anos");

//9. Faça um programa que receba um número do usuário e mostre
// no console a contagem regressiva até 0.

// numero = require(`prompt-sync`)()
// let numero = parseInt(prompt("digite um numero: "))

// while (numero > 0) {
//     console.log(numero);
//     numero--;
// }

//menu para escolher qual exercicio o usuario escolhe

// let exercicio;
// let continuar;

// do {

//     exercicio = parseInt(prompt("digite um numero que represente um exercicio de 1 a 6: "));

// switch (exercicio) {
//     case 1:
//         //chamando funcao helloworld()
//         helloworld("hello world!!");
    
//     case 2:
//         //objeto
//         let aluno = {
//             nome:"rebeca",
//             idade: 19,
//             hardSkills: ["Figma", "HTML", "CSS", "Web Responsive"]
//         }

        //acessando objeto pela propriedade
        // console.log(aluno.nome, aluno.idade, aluno.hardSkills);
        // exibindo objeto inteiro
        //console

//         break;//finalizar

//     default:
//         console.log("digite um numero de 1 a 4!!!");
//         break;
// }

// continuar = prompt("deseja continuar ver outros exercicios? digite s para sim e digite n para não: ").toLocaleLowerCase();
// //toLocaleLowerCase transforma o texto em minusculo

// }while (continuar === "s");

// function helloworld(frase){
//     console.log(frase);
// }
