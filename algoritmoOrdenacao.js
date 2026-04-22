function ordenar(lista) {

    for (let i = 0; i < lista.length; i++) {
        let menorIdx = i // assume que o menor começa na posição i

        for (let j = i + 1; j < lista.length; j++) {
            if (lista[j][1] < lista[menorIdx][1]) {
                menorIdx = j // achou um menor, atualiza o índice
            }
        }

        // troca o menor encontrado com a posição i
        let temp    = lista[i]
        lista[i]     = lista[menorIdx]
        lista[menorIdx] = temp
    }

    console.log(lista)
    return lista
}

let livros = [["Go",45], ["Java",100], ["Python",30], ["Elixir",15]]




function ordem(lista){
    for(let i = 0; i <lista.length;i++){
        menor = i
        for(let j = i+1;j<lista.length;j++){
            if(lista[j][1]<lista[menor][1]){
                menor = j
            }
        }
        let temp = lista[i]
        lista[i]= lista[menor]
        lista[menor] = temp
    }
    console.log(lista)
    return lista
}

ordem(livros)