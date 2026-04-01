# Bella Pelle — Kit de Desenvolvimento Web

Site institucional para clínica estética, desenvolvido com HTML, CSS e JavaScript puros, sem dependências de frameworks.

## Estrutura do Projeto

```
bella_pelle/
├── html/
│   └── index.html
├── css/
│   ├── globals/
│   │   ├── main.css
│   │   ├── reset.css
│   │   ├── variables.css
│   │   └── utilities.css
│   ├── layout/
│   │   ├── index.css
│   │   └── layout.css
│   ├── components/
│   │   ├── index.css
│   │   ├── header.css
│   │   ├── buttons.css
│   │   ├── cards.css
│   │   ├── slider.css
│   │   ├── faq.css
│   │   └── animations.css
│   └── project.css
├── scripts/
│   ├── animations.js
│   ├── slider.js
│   └── faq.js
└── imagens/
```

## Como usar

O ponto de entrada do CSS é `css/globals/main.css`, que importa todos os outros arquivos em cascata. Basta linkar ele no `<head>` do HTML:

```html
<link rel="stylesheet" href="/css/globals/main.css">
```

Os scripts são carregados no final do `<body>`:

```html
<script src="/scripts/animations.js"></script>
<script src="/scripts/slider.js"></script>
<script src="/scripts/faq.js"></script>
```

## Fontes utilizadas

- **Cormorant Garamond** — títulos e logo (Google Fonts)
- **DM Sans** — corpo de texto, botões e navegação (Google Fonts)

## Ícones

Font Awesome 6.5.2 via CDN.

## Convenção de nomenclatura de imagens

Usar prefixos para identificar o contexto da imagem:

- `hero-` → imagens da seção principal
- `slide-` → imagens do carrossel
- `card-` → imagens dos cards de serviço
- `about-` → imagens da seção sobre
