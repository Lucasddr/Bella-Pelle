const faqCards = document.querySelectorAll('.faq-card');

faqCards.forEach(card => {
    const question = card.querySelector('.faq-question');

    question.addEventListener('click', () => {
        const isOpen = card.classList.contains('open');

        // Fecha todos
        faqCards.forEach(c => c.classList.remove('open'));

        // Abre o clicado se estava fechado
        if (!isOpen) {
            card.classList.add('open');
        }
    });
});
