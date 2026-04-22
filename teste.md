# Atividade — Fundamentos de HTML
**Nome:** _______________________________________________   **Data:** _____ / _____ / _____

**Instruções:** Leia cada questão com atenção e marque um **X** na alternativa correta.

---

**1.** Analise o trecho de código abaixo e identifique o erro:

```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <h1>Meu Site</h1>
    <p>Bem-vindo ao meu site!</p>
  </head>
  <body>
    <title>Meu Site</title>
  </body>
</html>
```

( ) a) A tag `<html>` não aceita o atributo `lang`.

( ) b) O `<h1>` e o `<p>` estão no `<head>`, onde não deve haver conteúdo visível — e o `<title>` está no `<body>`, onde não deveria estar.

( ) c) A tag `<!DOCTYPE html>` está incorreta e deve ser removida.

( ) d) Não há nenhum erro, o código está correto.

---

**2.** Um aluno escreveu o seguinte código esperando exibir uma imagem com acessibilidade:

```html
<img src="" alt="">
```

Qual é o problema dessa implementação?

( ) a) A tag `<img>` deveria ter fechamento: `</img>`.

( ) b) O atributo correto para o caminho da imagem é `href`, não `src`.

( ) c) Os atributos `src` e `alt` estão vazios — sem caminho a imagem não carrega e sem texto no `alt` a acessibilidade não é garantida.

( ) d) A tag está correta e não apresenta nenhum problema.

---

**3.** Sobre a hierarquia de títulos no HTML, qual afirmação está **correta**?

( ) a) É recomendado usar vários `<h1>` na mesma página para destacar os tópicos mais importantes.

( ) b) A tag `<h6>` tem maior peso semântico que `<h1>` por ser o último da hierarquia.

( ) c) As tags de título vão de `<h1>` a `<h6>`, sendo `<h1>` reservado ao título principal e as demais usadas em subtítulos de forma hierárquica.

( ) d) Tags de título como `<h2>` e `<h3>` devem ficar dentro do `<head>` por serem informações de estrutura.

---

**4.** Qual é a principal diferença entre usar `<div>` e usar `<main>` para envolver o conteúdo central de uma página?

( ) a) Não há diferença — as duas tags funcionam exatamente da mesma forma.

( ) b) A `<div>` é mais moderna e substitui o `<main>` nas versões atuais do HTML.

( ) c) A `<div>` é um elemento genérico sem valor semântico, enquanto o `<main>` comunica ao navegador e a leitores de tela que aquele é o conteúdo principal da página.

( ) d) O `<main>` só pode ser usado dentro do `<head>`, enquanto a `<div>` fica no `<body>`.

---

**5.** Um desenvolvedor criou a estrutura abaixo para o site do livro *"4 Vidas de um Cachorro"*. Considerando semântica HTML e boas práticas, qual é o problema?

```html
<body>
  <div id="topo">
    <h1>4 Vidas de um Cachorro</h1>
  </div>
  <div id="meio">
    <p>Descrição do livro...</p>
  </div>
  <div id="rodape">
    <p>Criado por João</p>
  </div>
</body>
```

( ) a) O código está correto e segue todas as boas práticas do HTML moderno.

( ) b) O desenvolvedor usou `<div>` onde deveria usar tags semânticas como `<header>`, `<main>` e `<footer>`, perdendo valor semântico e prejudicando a acessibilidade.

( ) c) O erro está na tag `<h1>`, que não pode ficar dentro de uma `<div>`.

( ) d) A tag `<body>` não aceita `<div>` como elemento filho direto.

---

**Pontuação:** _______ / 5