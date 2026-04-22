# Brainiac

## Resumo
Criação de um caderno realmente inteligente para ser utilizado em sala de aula e aperfeiçoamento de habilidades na área de TI.

![alt text](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExODRhM2JwZzBnanFnMTlrcnNpNzl0aXMwYmpmY2FtenluamJ1NDc2ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/U5arlnnduJ0FeR9M5T/giphy.gif)

## Introdução 

Para categorizar um caderno inteligente nada melhor do que transformalo em um sistema de arquitetura computacional. Por meio de abstrações matemáticas e  teorias de aprendizado.
Esse caderno vai possibilitar tanto uma anotação sistemática Online, quanto uma física feita manualmente com canetas e lápis. 

## Caderno Físico

### 1. Estrutura física
Cada folha é escrita frente e verso, aproveitando o espaço máximo. Cada lado da folha é uma página independente — a unidade base de endereçamento.

### 2. Hierarquia de memória
O caderno segue a mesma hierarquia de memória de um computador, cada camada tem velocidade e mutabilidade diferentes.

| Processador|
|------------|
| Sua cabeça Raciocinio Ativo| 
||

| Cache|
|------------|
| Folha do sumario, folha descartavel| 
||

| RAM|
|------------|
| Caderno atual
caneta, imutável| 
||

| HD|
|------------|
| Estante de cadernos
armazenamento permanente| 
||


### 3. Sumário — cache substituível
Folha avulsa escrita a caneta — a mutabilidade não está na escrita, está na folha em si. Quando uma página é removida, a folha inteira é descartada e reescrita.


### 4. Header — Metadados a Lápis

As primeiras 4 linhas(bit) de cada página são reservadas para metadados — escritas a lápis, mutáveis, como um header de pacote de rede.

| Bit 1|
|------------|
| Dificuldade
nível do conteúdo — atualizável| 
||

| Bit 2|
|------------|
| Exercícios
ponteiros via lista encadeada| 
||

| Bit 3|
|------------|
| Rascunho | 
||

| Bit 4|
|------------|
| Reservado
livre para uso futuro | 
||

### 5. Rollback — otimização seletiva
Custo diferente em cada lado da folha — a estratégia é aplicada onde é mais eficiente.

#### Frente
| Estratégia       | Detalhe                | Custo: remover folha |
|------------------|------------------------|-------|
| Caneta direto    | erro → joga fora       | O(1)  |

#### Verso
| Estratégia       | Detalhe                | Custo: remover folha |
|------------------|------------------------|--------|
| Lápis primeiro   | erro → ROLLBACK        | O(2n)  |


### 6. Exercícios — lista encadeada
Cada conteúdo aponta para seu exercício via ponteiro — independente da posição física, igual a nós na RAM.

### 7. UX — Padrão de Cores

| Cor     | Uso             |
|---------|-----------------|
| Vermelho| Título          |
| Azul    | Teoria / texto  |
| Preto   | Texto base      |

### 8. UX — Padrão de Cores para Código

| Cor           | Aplicação                                      |
|---------------|-----------------------------------------------|
| Vermelho claro| Palavras reservadas — let, const, if, return, =, => |
| Roxo          | Variáveis e parâmetros                        |
| Verde         | Comentários     |
| Laranja       | Números e valores                           |
| Azul claro    | Funções e métodos                           |

