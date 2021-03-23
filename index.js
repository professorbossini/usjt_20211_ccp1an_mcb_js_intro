// let calculadora = {
//   soma: (a, b) => a + b,
//   subtracao: function (a, b) {return a - b},
//   pi: 3.14,
//   fazUmFor: function (){
//     for (let i = 0; i < 10; i++){
//       console.log ('Estou apenas iterando')
//     }
//   }
// }

// const funcao = () => {return 2};

// const valor = funcao();
// console.log(valor)



console.log(calculadora.soma(2, 3))
console.log(calculadora.subtracao(2,3))
console.log(calculadora.fazUmFor())



let concessionaria = {
  cnpj: '0099880001-10',
  endereco: {
    logradouro: 'Rua A',
    numero: 10,
    bairro: "Vila J"
  },
  veiculos: [
    {
      marca: 'Ford',
      modelo : 'Ecosport',
      anoDeFabricacao: 2018
    }, 
    {
      marca: 'Chevrolet',
      modelo: 'Onix',
      anoDeFabricacao:2020
    }, 
    {
      marca: "Volkswagen",
      modelo: 'Nivus',
      anoDeFabricacao:2021
    }
  ]
}

for (let veiculo of concessionaria.veiculos){
  console.log(`
    Marca: ${veiculo.marca}
  `)
}



// let pessoa = {
//   nome: 'Maria',
//   idade: '21',
//   endereco: {
//     logradouro: 'Rua B',
//     numero: 121
//   }
// }
// console.log(`
//   Sou ${pessoa.nome},
//   tenho ${pessoa['idade']},
//   e moro na rua ${pessoa['endereco'].logradouro},
//   número ${pessoa['endereco']['numero']}
// `)

// let pessoa = {
//   nome: 'João',
//   idade: 17
// }

// for (prop in pessoa){
//   console.log(prop)
//   console.log(pessoa[prop])
// }

// console.log (pessoa.nome)
// console.log(pessoa['idade'])


// const nomes = ["Ana Maria", "Antonio", 'Rodrigo', "Alex", "Cristina"]
// const apenasComA = nomes.filter((elemento) => elemento.startsWith('A') )
// console.log(apenasComA)
// const eAgora = nomes.filter((elemento) => {return elemento.startsWith("A")})
// console.log(eAgora)
// const res = nomes.map ((elemento) => elemento.charAt(0))
// console.log(res)
// const todosComecamComA = nomes.every((elemento) => elemento.startsWith("A"))
// console.log(todosComecamComA)
// const valores = [1, 2, 3, 4]
// const soma = valores.reduce((ac, valor) => ac + valor)
// console.log(soma)

// console.log ('Ana Maria'.charAt(4))
// //arrow functions
// const hello = () => console.log("Hello")
// hello()
// const dobro = (valor) => valor * 2
// console.log (dobro(5))
// const triplo = valor => valor * 3
// console.log (triplo(1))
// const ehPar = (valor) => {
//   return valor % 2 === 0
// }
// console.log (ehPar(2))
// const ehImpar = (valor) => {
//   return valor % 2 === 1
// }
// console.log(ehImpar())



// const triplo = function (n = 5){
//   return 3 * n
// }

// let res = triplo(7);
// console.log(res)
// res = triplo()
// console.log(res)

// const dobro = function (n){
//   return n * 2
// }
// const res = dobro (5)
// console.log (res)


// function soma (a, b){
//   if (a > b)
//     return a + b
// }
// const res = soma (2, 3)
// console.log(res)

// function hello (){
//   console.log('Oi')
// }
// hello()
// function hello (nome){
//   console.log('Oi, ' + nome)
// }
// hello('Ana Maria')


// const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex", "Cristina"]


// const v1 = []
// v1[0] = 3.4
// v1[10] = true
// v1[2] = "ABC"
// console.log(v1.length)
// const v2 = [1, "ABC", true]
// console.log(v2)
// for (let i = 0; i < v2.length; i++){
//   console.log(v2[i])
// }
// v2[1] = true
// console.log(v2)
// v2 = []

// console.log(1 == 1)
// console.log(1 == "1")
// console.log(1 === 1)
// console.log (1 === '1')
// console.log(true == 1)
// console.log (1 == [1])
// console.log(1 == [2])
// console.log (null == null)
// console.log (null == undefined)
// console.log ([] == false)
// console.log ([] == [])
// const n1 = 2
// const n2 = '3'
// const n3  = n1 + n2
// console.log(n3)
// const n4 = n1 + Number(n2)
// console.log(n4)



// let idade = 18
// let nome = 'João'
// console.log('Oi, ' + nome)
// if (idade >= 18) {
//   console.log("Parabéns, " + nome + '. Você pode dirigir')
// }
// console.log('Tchau, ' + nome)

// var idade = 18
// console.log ('Oi, ' + nome)
// if (idade >= 18){
//   var nome = 'João'
//   console.log ("Parabéns, " + nome + '. Você pode dirigir')
// }
// console.log('Tchau, ' + nome)

// var linguagem = "Javascript"
// console.log ('Aprendendo ' + linguagem)
// var linguagem = 'Java'
// console.log('Aprendendo ' + linguagem)


// const nome = 'José'
// console.log(nome)
// const endereco = "Rua C, 120"
// const sobrenome = `Silva`

// let a = 2
// a = 3
// let b = "abc"
// let c
// c = 4

// var soma = 2 + 3
// var j = "abc"
// soma = 4 + 5
