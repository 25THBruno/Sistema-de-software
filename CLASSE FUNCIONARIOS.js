// Faça um script que leia os dados de vários funcionários de uma empresa. 
// Para cada funcionário, o programa deverá ler o nome, o cargo e o salário. 
// Após o término do cadastro, o programa deverá imprimir os dados dos funcionários 
// que recebem salário maior ou igual a R$ 3000, mostrando o nome, o cargo e o salário de cada um deles.


const prompt = require("prompt-sync")();

let funcionarios = [];

let continuar = 1;

// Cadastro dos funcionários
while (continuar) {

    let nome = prompt("Digite o nome do funcionário: ");
    let cargo = prompt("Digite o cargo do funcionário: ");
    let salario = Number(
        prompt("Digite o salário do funcionário: ")
    );

    // Criando objeto
    let funcionario = {
        nome: nome,
        cargo: cargo,
        salario: salario
    };

    // Adicionando no array
    funcionarios.push(funcionario);

    continuar = Number(
        prompt("Deseja cadastrar outro funcionário? (1 = sim, 0 = não): ")
    );
}

console.log("\nFuncionários com salário maior ou igual a R$ 3000:\n");

let i = 0;

while (i < funcionarios.length) {

    if (funcionarios[i].salario >= 3000) {

        console.log("Nome:", funcionarios[i].nome);
        console.log("Cargo:", funcionarios[i].cargo);
        console.log("Salário: R$", funcionarios[i].salario);

        console.log("---------------------------");
    }

    i++;
}