# scripts/

Arquivos JavaScript do projeto, separados por responsabilidade. Nenhum arquivo depende do outro.

## Arquivos

### `animations.js`
Controla as animações de entrada das seções por scroll.

Usa `IntersectionObserver` para observar todos os elementos `.container`. Quando um container entra em pelo menos `10%` da viewport, a classe `.active` é adicionada, ativando a transição de `opacity` e `translateY` definida no CSS.

```js
// Threshold de 0.1 — dispara quando 10% do elemento está visível
const observer = new IntersectionObserver(callback, { threshold: 0.1 });
```

---

### `slider.js`
Controla o carrossel infinito de imagens.

**Lógica de clonagem:**
1. Lê os slides originais do `.slider-track`
2. Clona todos os slides e insere as cópias **antes** (`prepend`) e **depois** (`appendChild`) dos originais
3. Posiciona o track no primeiro slide original via `translateX`, sem animação

**Lógica de infinito:**
- O índice `current` começa em `total` (offset dos clones iniciais)
- Após cada transição (`transitionend`), verifica se chegou num clone:
  - Se passou do último → teleporta para o slide original equivalente no início, sem animação
  - Se voltou antes do primeiro → teleporta para o slide original equivalente no final, sem animação
- O `getBoundingClientRect()` força o reflow entre o `transition: none` e a restauração da transição, garantindo que o teleporte seja imperceptível

**Dots:**
- Gerados dinamicamente pelo JS com base nos slides originais
- Clique em um dot chama `goTo(i + total)` para manter o offset correto dos clones
- `updateDots()` calcula o índice real com módulo: `((current - total) % total + total) % total`

**Autoplay:** `setInterval(next, 3000)` — avança a cada 3 segundos.

---

### `faq.js`
Controla o acordeão de perguntas frequentes.

Para cada `.faq-card`, adiciona um listener de clique na `.faq-question`. Ao clicar:
1. Verifica se o card já está aberto
2. Remove a classe `.open` de todos os cards
3. Se estava fechado, adiciona `.open` no card clicado

Comportamento: apenas um card pode estar aberto por vez. Clicar no card aberto o fecha.
