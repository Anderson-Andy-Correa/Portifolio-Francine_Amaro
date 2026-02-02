// Impede o navegador de restaurar a posição antiga de rolagem
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

// Força o topo assim que carregar
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

document.addEventListener('DOMContentLoaded', () => {
    // 2. Lógica de Animação ao Rolar (Intersection Observer)
    // Isso é mais performático que ficar ouvindo o evento 'scroll' o tempo todo
    const observerOptions = {
        root: null,
        rootMargin: '0px', // Dispara exatamente quando a borda entra na tela
        threshold: 0.15    // 15% do elemento precisa estar visível para ativar
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Se o elemento entrou na tela (Scroll Down ou Up)
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } 
            // Se o elemento SAIU da tela (porm cima ou por baixo)
            // else {
            //     entry.target.classList.remove('visible'); // <--- A MÁGICA DO REVERSO
            // }
        });
    }, observerOptions);

    // Seleciona todos os elementos que devem animar
    const elementsToAnimate = document.querySelectorAll('.scroll-trigger');
    elementsToAnimate.forEach(el => observer.observe(el));
});

// Função para abrir o overlay
function abrirProjeto() {
    const overlay = document.getElementById('project-overlay');
    overlay.classList.add('active'); // Adiciona a classe que muda a opacidade para 1
    document.body.style.overflow = 'hidden'; // Impede a rolagem da página de fundo
}

// Função para fechar o overlay
function fecharProjeto() {
    const overlay = document.getElementById('project-overlay');
    overlay.classList.remove('active'); // Remove a classe, voltando a opacidade para 0
    document.body.style.overflow = 'auto'; // Libera a rolagem da página
}

// Fechar se clicar fora do conteúdo (no fundo preto)
document.getElementById('project-overlay').addEventListener('click', function(e) {
    if (e.target === this) {
        fecharProjeto();
    }
});