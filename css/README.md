# css/

Contém todos os estilos do projeto, organizados por responsabilidade.

## Estrutura e ordem de importação

O arquivo `globals/main.css` é o único linkado no HTML e importa tudo na ordem correta:

```
main.css
├── reset.css          → normalização base
├── layout/index.css   → grid, container, footer
├── variables.css      → tokens de design (cores, fontes, espaçamentos)
├── components/index.css
│   ├── header.css
│   ├── buttons.css
│   ├── cards.css
│   ├── slider.css
│   ├── faq.css
│   └── animations.css
├── project.css        → estilos específicos de cada seção
└── utilities.css      → classes utilitárias e helpers
```

## Pastas

### `globals/`
Configurações base do projeto. Deve ser alterada com cautela pois afeta tudo.

### `layout/`
Estrutura das páginas: grid, container, seções e footer.

### `components/`
Estilos reutilizáveis por componente. Cada arquivo é independente e pode ser reaproveitado em outros projetos.

### `project.css`
Overrides e estilos específicos deste projeto. É aqui que se personalizam as seções sem poluir os componentes genéricos.
