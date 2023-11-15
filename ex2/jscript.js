// console.log('Hello Word')

//console.clear()

//let arr = ['Matheus', 174 , 80]

//for(let i = 0; i < 3; i++){
//    console.log(arr[i]);
//}

//console.clear()

//for(let elemento of arr){
//   console.log(elemento);
//}


                                        //  ARRAYS  //

//console.clear()

let arr1 = [30,15,12,17,18]
let arr2 = []
// Faz com que voce possa seleciona mais de um index dentro da const e ate aonde vc selecionou sempre 1 numero a frente! //
//console.log(arr1.slice(0,2 ))

arr2.push(10 , 14 ,15, 20, 50, 60) // ele ira adicionar dentro da variavel usando o push NO FINAL.
arr2.unshift(0) // Ele ira adicionar dentro da variavel usando o unshift no comeco da varivel.
arr2.pop() // Ele ira remover por padrao o ultimo elemento do array ,ultimo da direita.
arr2.shift() // ele ira remover por padrao o primeiro elemnto da array,pela esquerda.
arr2.concat() // Ele ira concatenar as duas arrays junta elas em um unico.
arr2.indexOf()// ira procurar dentro da array um elemnto que vc colocou no numero..
arr2.lastIndexOf() //irar procurar dentro da array um elemnto que vc colcou por ultimo...
arr2.includes() //  ira incluir valor que vc colocou no array e fala se true ou false includes(10) tiver na array true
arr2.reverse() // ele ira inverter os lados da arrays ..
console.log(arr2)

console.clear()

                                    //  FUNCOES  //

function saudacao(nome,teste) {
    console.log(` Ola ${nome},seja bem vindo ao nosso curso de ${teste}`)
}

saudacao('Matheus', 'Ronaldo')

// RETORNO DE UMA FUNÇÃO 
// Return = faz com que o n1 e o n2 sempre retornen
function soma(n1 , n2){
    return  n1 + n2
}
let resultado = soma(10 , 50)
console.log(resultado / 2)

function maiorque10(numero){
    if(numero > 50){
        return true
    }
    return false
}

console.log(maiorque10(49))

                                       // OBJETO //

// CRIANDO OBJETOS //

let pessoa = {
    nome: 'Matheus',
    idade: 25,
}

// PARA SELECIONA DENTRO DO OBJETO E SO COLOCAR pessoa.nome ou qual quer selecionar

console.log(pessoa.nome)

//IRA ADICIONAR DENTRO DO OBJETO 
pessoa.altura = 175

//DELETAR O DENTRO DO OBJETO
delete pessoa.idade

//PARA PERCORRER DENTRO DO OBJETO SELECIONANDO AS

for( let chave in pessoa){
    console.log(chave)
}

console.log(pessoa)

                                    //  BONUS  //

//ADICIONANDO JAVASCRIPT NO INDEX
