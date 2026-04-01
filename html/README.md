# html/

Contém os arquivos HTML do projeto.

## Arquivos

### `index.html`

Página principal do site. Estruturada em seções semânticas:

| Elemento | ID | Descrição |
|---|---|---|
| `<header>` | `hero-header` | Cabeçalho fixo com logo e navegação |
| `<section>` | `hero-section` | Seção principal com blobs animados e chamada para ação |
| `<section>` | `slider-section` | Carrossel infinito de imagens |
| `<section>` | `about-section` | Seção sobre a clínica com card de estatísticas |
| `<section>` | `services-section` | Grid de cards com os serviços oferecidos |
| `<section>` | `faq-section` | Acordeão de perguntas frequentes |
| `<section>` | `contact-section` | Seção de contato com botão de WhatsApp |
| `<footer>` | — | Rodapé com links e créditos |

## Observações

- O carrossel **não usa radio inputs** — os slides e clones são controlados inteiramente pelo `slider.js` via `translateX`.
- As seções usam as classes `.section` e `.container` do layout para herdar o comportamento de animação de entrada por scroll.
- O botão flutuante de WhatsApp (`.wpp-float`) é fixo na tela e independente das seções.
