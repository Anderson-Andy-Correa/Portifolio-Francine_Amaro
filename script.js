document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Lógica do Aviso de Scroll (Desaparece ao rolar)
    const scrollHint = document.getElementById('scrollHint');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { // Se rolar mais de 50px
            scrollHint.style.opacity = '0';
        } else {
            scrollHint.style.opacity = '1';
        }
    });

    // 2. Lógica de Animação ao Rolar (Intersection Observer)
    // Isso é mais performático que ficar ouvindo o evento 'scroll' o tempo todo
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Dispara quando 15% do elemento estiver visível
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Se quiser que anime apenas uma vez, descomente a linha abaixo:
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Seleciona todos os elementos que têm a classe .scroll-trigger
    const elementsToAnimate = document.querySelectorAll('.scroll-trigger');
    elementsToAnimate.forEach(el => observer.observe(el));
});