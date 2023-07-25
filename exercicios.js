import PromptSync from "prompt-sync";

const prompt = PromptSync();



export function verificarMaiordeIdade() {
    console.log("Faça um programa que receba a idade do usuário, enquanto a\
    resposta do usuário for menor que 18 anos continue a solicitar a\
    idade e mostre uma mensagem quando a idade do usuário for\
    maior que 18");
    
    let pessoa = {
        nome: "",
        idade: 0
    }


    console.log("Sua idade deve ser maior que 18.");
    

    do{
        pessoa.idade = parseInt(prompt("Digite sua idade: "));
        pessoa.nome = prompt("Digite seu nome: ");
    
    }while (pessoa.idade < 18);
    console.log("idade valida!");
    console.log("Objeto:", pessoa);
    console.log(`${pessoa.nome}, sua idade ${pessoa.idade}, é válida!`);

}