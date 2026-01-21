document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Lógica do Aviso de Scroll (Desaparece ao rolar)
    /* No script.js */

// 1. Aviso de Scroll
const scrollHint = document.getElementById('scrollHint');

if (scrollHint) {
    window.addEventListener('scroll', () => {
        // MUDANÇA AQUI: De 50 para 10.
        // Assim que o usuário encostar no scroll, ele já começa a sumir.
        if (window.scrollY > 1) { 
            scrollHint.style.opacity = '0';
            
            // Dica Extra: Se quiser que ele suma e não volte mais (para não atrapalhar),
            // descomente a linha abaixo:
            scrollHint.style.pointerEvents = 'none'; 
        } else {
            // Só reaparece se voltar exatamente para o topo (0px)
            // Mas só vai reaparecer se a animação CSS inicial já tiver terminado.
            scrollHint.style.opacity = '1'; 
        }
    });
}

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