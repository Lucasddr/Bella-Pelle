# css/layout/

Define a estrutura macro das páginas: grids, containers, seções e footer.

## Arquivos

### `index.css`
Ponto de entrada da pasta. Importa o `layout.css` e pode receber outros arquivos de layout futuramente.

### `layout.css`
Contém as classes estruturais reutilizáveis em todo o projeto:

#### Seções e containers

| Classe | Descrição |
|---|---|
| `.section` | Wrapper de seção com `min-height: 100vh`, `overflow: hidden` e flex centralizado |
| `.container` | Área de conteúdo com `max-width: 1200px`, padding lateral e animação de entrada por scroll. Começa invisível (`opacity: 0`, `translateY(-40px)`) e ativa com a classe `.active` |
| `.container.active` | Estado visível do container, ativado pelo `IntersectionObserver` do `animations.js` |

#### Grids

| Classe | Descrição |
|---|---|
| `.grid-2` | Grid de 2 colunas iguais com itens centralizados |
| `.grid-3` | Grid de 3 colunas iguais com `gap` padrão |
| `.flex-row` | Flex horizontal com `space-between`, alinhamento vertical e `flex-wrap` |
| `.flex-column` | Flex vertical com itens centralizados |

#### Footer

| Classe | Descrição |
|---|---|
| `.footer` | Rodapé com fundo `--color-primary`, flex em coluna, centralizado |
| `.footer-links` | Flex horizontal dos links do footer com wrap |

## Responsividade

Os breakpoints de `.grid-2` e `.grid-3` estão definidos aqui:
- Abaixo de `900px`: `.grid-2` colapsa para 1 coluna, `.grid-3` vai para 2 colunas
- Abaixo de `600px`: `.grid-3` colapsa para 1 coluna
