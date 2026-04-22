# Continuação — Atividades HTML + CSS

## Atividades (continuação)

**5.** Qual tag para lista não ordenada?
```html
<ul>
  <li>...</li>
  <li>...</li>
</ul>
```

---

# CSS

**Cascading Style Sheets** — controla cores, tamanhos, fontes, espaçamento, posicionamento e efeitos visuais dos elementos na página.

## Como fazer:

**1.** Dentro do HTML, na tag `<head>`, adicione:
```html
<link rel="stylesheet" href="arquivo.css">
```

**2.** Como conectar as tags no CSS?
> Existe várias maneiras de conectar, porém vamos focar na mais simples.

Selecionando elementos diretamente pelo nome da tag:

```css
p {
  /* estilo para parágrafos */
}

h1 {
  /* estilo para títulos */
}

img {
  /* estilo para imagens */
}

ul {
  /* estilo para listas */
}

li {
  /* estilo para itens da lista */
}
```

---

## Propriedades CSS

| Propriedade        | Valores      | Descrição                    |
|--------------------|--------------|------------------------------|
| `width`            | `%` / `px`   | Largura do elemento          |
| `padding`          | `px`         | Espaço dentro do elemento    |
| `text-align`       | —            | Alinhar texto                |
| `background-color` | —            | Cor do fundo                 |
| `height`           | `%` / `px`   | Altura do elemento           |
| `font-size`        | `px`         | Tamanho da letra             |

> 💡 **Complemento:** Além de `px` e `%`, unidades como `em`, `rem` e `vw/vh` são muito usadas em projetos modernos para responsividade.