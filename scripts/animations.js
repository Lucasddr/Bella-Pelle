const containers = document.querySelectorAll(".container");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.15) {
                entry.target.classList.add("active");
            }
        });
    },
    {
        threshold: 0.15
    }
);

containers.forEach(container => {
    observer.observe(container);
});
