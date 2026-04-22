//atividade relacionadas as paginas 7 a 9



// Exercício 1 — Contagem Regressiva
// O que fazer: Conte de 10 até 0 e imprima cada número no console.

//  Passo a passo:

// Crie uma variável let numero = 10
// Use um while que repete enquanto numero >= 0
// Dentro do loop, dê um console.log(numero)
// Subtraia 1 de numero a cada volta
// Quando chegar em 0, o loop para sozinho

let numero = 10;
while(numero>=0){
    console.log(numero)
    numero= numero-1
}

// Exercício 2 — Aprovado ou Reprovado (Arrow + Ternário)
//  O que fazer: Crie uma arrow function que recebe uma nota e retorna "Aprovado"
//  ou "Reprovado".

//  Passo a passo:
// Crie uma const com o nome verificarNota
// Use arrow function (nota) =>
// Em vez de if/else, use o ternário: condição ? "se verdadeiro" : "se falso"
// A condição é nota >= 6
// Chame a função com console.log()

const verificarNota = (nota)=>{
    return nota >=6?"aprovado":"reprovado"
}
console.log(verificarNota(8))

// Exercício 3 — Tabuada com For Clássico

// O que fazer: Crie uma função normal que recebe um número e imprime a 
// tabuada dele.

//  Passo a passo:
// Crie uma function tabuada(numero)
// Dentro, use for (let i = 1; i <= 10; i++) — o i++ é o mesmo que i = i + 1
// A cada volta, calcule numero * i
// Imprima usando template literal: `${numero} x ${i} = ${resultado}`
// Chame a função passando qualquer número


function tabuada(numero){
    for(let i=1;i<=10;i++){
        resultado=i*numero
        console.log(`${numero} x ${i} = ${resultado}`)
    }
}

tabuada(2)

// Exercício 4 — Percorrendo Array com For Of
//  Crie um array com 5 nomes de amigos e imprima cada um com uma mensagem.

// Passo a passo:
// Crie const amigos = ["Ana", "Leo", "João", "Maria", "Pedro"]
// Use for (let amigo of amigos) — a variável amigo vai receber cada nome automaticamente
// Dentro do loop, imprima usando template literal com a mensagem: ´Meus amigos são ${amigo}´

const amigos = ["geto,,sukuna,gojo"]
for(let amigo of amigos){
    console.log(`Meus amigos são ${amigo}`)

}

// Exercício 5 — Gerenciando uma Fila (push, pop, shift, unshift)
//  O que fazer: Simule uma fila de banco. Adicione pessoas, remova da frente e mostre a fila atualizada.

// Passo a passo:
// Crie um array fila com 3 pessoas
// Use .push() para adicionar alguém no final
// Use .unshift() para adicionar alguém na frente (prioridade)
// Use .shift() para remover quem foi primeiro atendido
// Mostre a fila com console.log e o tamanho com .length

const fila = ["Itadori","Megumi","Nobara"]
fila.push("Yuta")
fila.unshift("Gojo") // gojo atendido primeiro por esta pela metade
fila.shift()
console.log(fila,fila.length)

// Exercício 6 — Dividindo Times com slice()

// O que fazer: Você tem um array com 6 jogadores. Divida em dois times de 3 usando slice().

// Passo a passo:

// Crie const jogadores com 6 nomes
// slice(0, 3) pega do índice 0 até o 2 (não inclui o 3) — Time A
// slice(3) pega do índice 3 até o final — Time B
// Imprima os dois times

const jogadores= ["Regoko", "Uzui", "Tomioka", "Shinobu", "Mitsuri", "Obanai",]

let timeA= jogadores.slice(0,3)
let timeB= jogadores.slice(3)
console.log(`timeA vs timeB \n TimeA: ${timeA} \n TimeB: ${timeB}`)

// Exercício 7 — Substituindo Jogador com splice()
 
// O que fazer: Um jogador se machucou! Use splice() para substituí-lo no array.

// Passo a passo:
// Use o timeA do exercício anterior
// splice(início, quantidadeRemovida, novoElemento)
// Para substituir o índice 1 ("Ana"), use splice(1, 1, "Juliana") — remove 1 elemento na posição 1 e coloca "Juliana"
// Imprima o time atualizado

timeA.splice(2,1,"Sanemi")
console.log(timeA)

// Exercício 8 — Robin Hood com Arrow Function
//  O que fazer: Recrie a função Robin Hood, mas agora ela recebe um array de salários e classifica cada um.


// Passo a passo:
// Crie um array salarios com alguns valores
// Crie uma arrow function robinHood que recebe um salário e usa ternário para classificar
// Use for of para percorrer o array e chamar robinHood para cada salário
// Imprima o resultado com template literal

const salarios= [500000, 2000, 7000, 100000]
const robinHood= (s)=> {
    for(let e of s){
        if(e>=50000){
            console.log(`${e} perdeu para o robirHood`)
        }
    }
}
robinHood(salarios)

// Exercício 9 — Matriz de Notas (Array 2D)
//  O que fazer: Crie uma matriz onde cada linha é um aluno com nome e nota. Percorra e mostre se passou.


//  Passo a passo:

// Crie const turma como uma matriz — array de arrays
// Cada elemento interno tem [nome, nota]
// Use for of para percorrer — cada aluno vai ser um array ["Nome", nota]
// Acesse aluno[0] para o nome e aluno[1] para a nota
// Use ternário para dizer se foi aprovado ou reprovado

const turma= [["Heitor", 10],["Weiwei", 10], ["Gojo", 10]]
for(let e of turma){
    console.log(e)
}
