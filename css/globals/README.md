# css/globals/

Configurações base do projeto. Estes arquivos afetam o comportamento global de todos os elementos.

## Arquivos

### `main.css`
Ponto de entrada do CSS. Não contém estilos próprios — apenas importa todos os outros arquivos na ordem correta. É o único arquivo linkado diretamente no HTML.

### `reset.css`
Normaliza os estilos padrão dos browsers. Inclui:
- `box-sizing: border-box` em todos os elementos
- Remoção de margin e padding padrão
- `scroll-behavior: smooth` no `html`
- Suavização de fonte com `-webkit-font-smoothing`
- Reset de `button` e `a`

### `variables.css`
Tokens de design do projeto via custom properties CSS. Centraliza todas as decisões visuais:

| Grupo | Variáveis |
|---|---|
| Cores | `--color-primary`, `--color-secondary`, `--color-card`, `--color-box-shadow`, `--color-text`, `--color-secondary-hover`, `--color-wpp`, `--color-bg`, `--color-text-muted` |
| Tipografia | `--font-primary` (Cormorant Garamond), `--font-secondary` (DM Sans) |
| Font sizes | `--fs-header`, `--fs-p`, `--fs-title`, `--fs-subtitle` — todos com `clamp()` para responsividade automática |
| Espaçamentos | `--spacing-s`, `--spacing-m`, `--spacing-l`, `--spacing-xl` |
| Outros | `--radius`, `--radius-card`, `--header-height`, `--shadow-card`, `--shadow-btn` |

### `utilities.css`
Classes utilitárias de uso geral:

| Classe | Uso |
|---|---|
| `.icon` | Ajusta tamanho de ícones Font Awesome |
| `.tag` | Pílula de categoria/label acima de títulos |
| `.section-title` | Título principal de seção |
| `.section-subtitle` | Subtítulo/descrição de seção |
| `.text-center` | Alinhamento de texto |
| `.w-full` | Largura 100% |
