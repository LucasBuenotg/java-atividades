//Exercício 1: Manipulação Avançada de Arrays e Objetos
//Exercício de Map:
//Dado o array de números [1, 2, 3, 4, 5], use o método
//map para retornar um novo array com cada 
//número multiplicado por 2.

const numero = [1,2,3,4,5]

const numeromult = numero.map(function(pinto){
    return pinto * 2
})
console.log(numeromult);

// 2. Exercício de Filter:   
// Dado o array de números [10, 20, 30, 40, 50], 
// use o método filter 
// para retornar um novo 
// array contendo apenas os 
// números maiores que 25.

const numeroarray = [10, 20, 30, 40, 50]

const numeroala = numeroarray.filter(function(n){
return n > 25
});
console.log (numeroala);

// Exercício de Reduce:   
// Dado o array de números [5, 10, 15, 20, 25], 
// use o método 
// reduce para calcular a soma de todos 
// os números do array.

const numerotop  = [5, 10, 15, 20, 25]

const soma = numeros.reduce(function(acumulador, numero ){
    return acumulador + numero; 
},0);

console.log(soma);

// Exercício de Propriedades Dinâmicas:   
// Crie um objeto pessoa com as
// propriedades nome e idade. 
// Adicione dinamicamente a propriedade 
// profissao ao objeto e defina o valor como "programador".

const cidadao = {
    nome: 'Lucas',
    idade: 19
};
// Adicionando propriedade dinamicamente
cidadao.profissao = 'Programador';
console.log(pessoa); //só serve para printar a informação

// Modificando propriedade dinamicamente
cidadao.idade = 20;
console.log(pessoa);

//Exercício de Destruturação:   
//Dado o objeto produto com as 
//propriedades nome, 
//preco e quantidade, 
//use a desestruturação para extrair o 
//nome e o preço do produto.

const pessoa = {
    nome: 'Carlos',
    idade: 34,
    cidade: 'carapicuiba the lands between the cu e o saco'
    
};

// Destruturando objeto
const { nome, idade } = pessoa;
console.log(nome, idade); 
//A destruturação é uma maneira de extrair 
//valores de objetos e arrays e atribuí-los
// a variáveis individuais.


