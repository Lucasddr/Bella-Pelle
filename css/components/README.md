# css/components/

Estilos reutilizáveis por componente. Cada arquivo é responsável por um único componente, sem dependências entre si.

## Arquivos

### `index.css`
Importa todos os componentes na ordem correta. Ao criar um novo componente, registrá-lo aqui.

---

### `header.css`
Estilos do cabeçalho fixo.

| Classe | Descrição |
|---|---|
| `.header` | Barra de navegação com fundo `--color-primary`, altura `--header-height`, `position: sticky` |
| `.header-logo` | Logo com fonte primária e ponto decorativo |
| `.logo-dot` | Círculo amarelo decorativo ao lado do nome |
| `.header-nav` | Container flex da navegação com botão de agendamento |
| `.nav-links` | Links de navegação — ocultados em mobile abaixo de `768px` |

---

### `buttons.css`
Todos os botões do projeto.

| Classe | Descrição |
|---|---|
| `.button-s` | Botão primário com fundo `--color-secondary`, bordas arredondadas e hover com sombra |
| `.button-outline` | Botão secundário com borda, fundo transparente |
| `.wpp-btn` | Botão de WhatsApp verde com ícone, usado na seção de contato |

---

### `cards.css`
Cards de serviços.

| Classe | Descrição |
|---|---|
| `.card` | Container do card com sombra, border-radius e hover de elevação |
| `.card-icon` | Ícone emoji em caixa com fundo `--color-card` |
| `.card-destach` | Pílula de categoria (ex: "Facial", "Corporal") |
| `.card-title` | Título do card em fonte primária |
| `.card-desc` | Descrição do card em cor secundária |
| `.card-footer` | Rodapé do card com separador e botão de ação |

---

### `slider.css`
Carrossel infinito de imagens.

O slider usa `translateX` para transição e clonagem de slides via JS para o efeito infinito. **Não utiliza radio inputs.**

| Classe | Descrição |
|---|---|
| `.slider` | Wrapper externo com `overflow: hidden` |
| `.slider-track-wrapper` | Camada intermediária de contenção |
| `.slider-track` | Flex container que move via `transform: translateX`. Recebe `transition` para animação suave |
| `.slide-box` | Cada slide com `min-width: 100%` para ocupar a largura total |
| `.slide-box .slide-img` | Área visual do slide com altura fixa de `480px` |
| `.slider-dots` | Container dos dots de navegação gerados pelo JS |
| `.slider-dot` | Dot individual — círculo com borda |
| `.slider-dot.active` | Dot ativo com fundo preenchido |

---

### `faq.css`
Acordeão de perguntas frequentes.

| Classe | Descrição |
|---|---|
| `.faq-list` | Container flex vertical centralizado com gap entre cards |
| `.faq-card` | Card individual do FAQ com sombra e `overflow: hidden` |
| `.faq-card.open` | Estado aberto — sombra mais pronunciada |
| `.faq-question` | Header clicável do card com pergunta e ícone chevron |
| `.faq-chevron` | Ícone que rotaciona `180deg` quando aberto |
| `.faq-content` | Área de resposta com `grid-template-rows: 0fr → 1fr` para animação de expand |
| `.faq-answer` | Texto da resposta com padding e `min-height: 0` (necessário para o grid funcionar) |

---

### `animations.css`
Classes de animação e elementos decorativos.

| Classe | Descrição |
|---|---|
| `.anim` | Transition base de `0.3s ease` para hover effects |
| `.anim-up` | Sobe `6px` no hover |
| `.anim-scale` | Escala `1.03` no hover |
| `.blob` | Forma decorativa circular com `filter: blur(60px)` para efeito de mancha de cor difusa |
| `.blob-1/2/3` | Três instâncias de blob com cores, tamanhos e posições distintas, cada uma com animação `floatBlob` em tempo diferente |
| `.fade-in` | Animação de entrada com `opacity 0→1` e `translateY 20px→0` |
| `.fade-in-1/2/3/4` | Delays escalonados de `0.1s` a `0.7s` para entrada em sequência |
