const track = document.querySelector('.slider-track');
const dotsContainer = document.querySelector('.slider-dots');

const originalSlides = Array.from(track.children);
const total = originalSlides.length;

const firstClones = originalSlides.map(s => s.cloneNode(true));
const lastClones  = originalSlides.map(s => s.cloneNode(true));

lastClones.forEach(clone => track.prepend(clone));
firstClones.forEach(clone => track.appendChild(clone));

let current = total; 
let isTransitioning = false;

function setPosition(index, animate = true) {
    if (!animate) track.style.transition = 'none';
    else track.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    track.style.transform = `translateX(-${index * 100}%)`;
}

setPosition(current, false);

originalSlides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('slider-dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goTo(i + total));
    dotsContainer.appendChild(dot);
});

function updateDots() {
    const realIndex = ((current - total) % total + total) % total;
    document.querySelectorAll('.slider-dot').forEach((d, i) => {
        d.classList.toggle('active', i === realIndex);
    });
}

function goTo(index) {
    if (isTransitioning) return;
    isTransitioning = true;
    current = index;
    setPosition(current);
    updateDots();
}

function next() {
    goTo(current + 1);
}

// Quando a transição termina, verifica se precisa "teleportar"
track.addEventListener('transitionend', () => {
    isTransitioning = false;

    if (current >= total * 2) {
        current = total;
        setPosition(current, false);
    }

    if (current < total) {
        current = total * 2 - 1;
        setPosition(current, false);
    }

    // Força reflow pra garantir que o transition: none foi aplicado
    track.getBoundingClientRect();
    track.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
});

// Autoplay
setInterval(next, 3000);