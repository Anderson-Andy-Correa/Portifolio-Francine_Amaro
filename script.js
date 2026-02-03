/* =========================================
   1. BANCO DE DADOS DOS PROJETOS
   ========================================= */
const dadosProjetos = [
    // PROJETO 0 (Camélia)
    {
        titulo: "Casa Camélia",
        subtitulo: "Conceito Orgânico & Bioclimático",
        imagemCapa: "assets/camelia-hero.jpg",
        ano: "2025 (4º Semestre)",
        tipologia: "Residencial",
        softwares: ["Revit", "AutoCAD", "Lumion"],
        desafio: "Compatibilizar a estética orgânica inspirada na flor camélia com as normas de segurança e eficiência térmica.",
        solucao: "Uso de modelagem paramétrica no Revit para racionalizar curvas e detalhamento de esquadrias no AutoCAD.",
        imagensGaleria: ["assets/camelia-planta.jpg", "assets/camelia-corte.jpg", "assets/camelia-solar.jpg"]
    },
    // PROJETO 1 (Exemplo Urbano)
    {
        titulo: "Bairro Biofílico",
        subtitulo: "Planejamento Urbano Sustentável",
        imagemCapa: "assets/urban-hero.png",
        ano: "2025 (Urbanismo)",
        tipologia: "Urbanismo",
        softwares: ["QGIS", "SketchUp", "Photoshop"],
        desafio: "Criar um parcelamento urbano que respeitasse a hidrografia local e aumentasse a densidade verde.",
        solucao: "Implementação de parques lineares e zoneamento misto para reduzir deslocamentos.",
        imagensGaleria: ["assets/urban-mapa.png", "assets/urban-perspectiva.png"]
    },
    // PROJETO Placeholder
    {
        titulo: "Complexo Industrial",
        subtitulo: "Eficiência e Logística",
        imagemCapa: "assets/placeholder.png",
        ano: "2026",
        tipologia: "Industrial",
        softwares: ["Revit", "Navisworks"],
        desafio: "Otimizar o fluxo de produção em um terreno irregular.",
        solucao: "Nivelamento de platôs e uso de estrutura metálica modular.",
        imagensGaleria: ["assets/placeholder.png", "assets/placeholder.png", "assets/placeholder.png", "assets/placeholder.png", "assets/placeholder.png", "assets/placeholder.png", "assets/placeholder.png", "assets/placeholder.png", "assets/placeholder.png"]
    }
];

/* =========================================
   2. CONTROLE DE ROLAGEM (RESET AO CARREGAR)
   ========================================= */
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

/* =========================================
   3. INICIALIZAÇÃO ÚNICA (DOM CONTENT LOADED)
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    
    // --- A. ANIMAÇÃO DE ENTRADA (FADE UP) ---
    const observerGeneral = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15 });

    const elementsToAnimate = document.querySelectorAll('.scroll-trigger');
    elementsToAnimate.forEach(el => observerGeneral.observe(el));


    // --- B. CORES DINÂMICAS (EFEITO CAMALEÃO) ---
    const sectionDinamica = document.getElementById('projetos-dinamicos');
    
    // Verificação de segurança: Só roda se a seção existir na página
    if (sectionDinamica) {
        const cards = document.querySelectorAll('.project-card');
        
        const observerColors = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const card = entry.target;
                    const newBg = card.getAttribute('data-bg');
                    const newText = card.getAttribute('data-text');

                    // Aplica as cores suavemente
                    if (newBg && newText) {
                        sectionDinamica.style.setProperty('--dynamic-bg', newBg);
                        sectionDinamica.style.setProperty('--dynamic-text', newText);
                    }
                }
            });
        }, { threshold: 0.6 }); // Precisa de 60% do card visível para trocar a cor

        cards.forEach(card => observerColors.observe(card));
    }

    // --- C. LISTENER PARA FECHAR OVERLAY NO CLIQUE FORA ---
    const overlayElement = document.getElementById('project-overlay');
    if (overlayElement) {
        overlayElement.addEventListener('click', function(e) {
            if (e.target === this) {
                fecharProjeto();
            }
        });
    }
});

/* =========================================
   4. FUNÇÕES GLOBAIS (CHAMADAS PELO HTML)
   ========================================= */

function abrirProjeto(index) {
    // Segurança: Verifica se o índice existe
    if (!dadosProjetos[index]) return;

    const projeto = dadosProjetos[index];

    // Preenche Textos
    document.getElementById('overlay-titulo').innerText = projeto.titulo;
    document.getElementById('overlay-subtitulo').innerText = projeto.subtitulo;
    document.getElementById('overlay-ano').innerText = projeto.ano;
    document.getElementById('overlay-tipo').innerText = projeto.tipologia;
    document.getElementById('overlay-desafio').innerText = projeto.desafio;
    document.getElementById('overlay-solucao').innerText = projeto.solucao;
    
    // Troca Imagem (com fallback de segurança)
    const imgElement = document.getElementById('overlay-img');
    if (imgElement) imgElement.src = projeto.imagemCapa;

    // Gera Tags (Softwares)
    const divSoftwares = document.getElementById('overlay-softwares');
    if (divSoftwares) {
        divSoftwares.innerHTML = '';
        projeto.softwares.forEach(software => {
            divSoftwares.innerHTML += `<span class="tag">${software}</span>`;
        });
    }

    // Gera Galeria
    const divGaleria = document.getElementById('overlay-galeria');
    if (divGaleria) {
        divGaleria.innerHTML = '';
        projeto.imagensGaleria.forEach(imgSrc => {
            divGaleria.innerHTML += `
                <div class="gallery-item">
                    <img src="${imgSrc}" style="width:100%; height:100%; object-fit:cover;">
                </div>`;
        });
    }

    // Abre o Overlay
    const overlay = document.getElementById('project-overlay');
    if (overlay) {
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Trava a rolagem do fundo
    }
}

function fecharProjeto() {
    const overlay = document.getElementById('project-overlay');
    if (overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto'; // Destrava a rolagem
    }
}