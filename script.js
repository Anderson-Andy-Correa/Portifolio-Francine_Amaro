/* =========================================
   1. BANCO DE DADOS DOS PROJETOS
   ========================================= */
const dadosProjetos = [
    // PROJETO 0 (Camélia)
    {
        titulo: "Casa Camélia",
        subtitulo: "Arquitetura Orgânica & Conforto Bioclimático",
        corDestaque: "#d4a373", 
        conceito: "Um espaço desenhado para evocar a união indissociável da Camélia, servindo de palco para a gastronomia, memórias de viagem e os três gatos do casal.",
        inspiracoes: [
            "assets/Camelia/Inspiração_Camelia.jpeg", 
            "assets/Camelia/Inspiração_Camelia2.jpeg",
            "assets/Camelia/Inspiração_Camelia3.jpeg",
            "assets/Camelia/Inspiração_Camelia4.jpeg"
        ],
        imagemCapa: "assets/Camelia/Render_Tarde_Externo.jpeg",
        ano: "2025 (4º Semestre)",
        tipologia: "Residencial Unifamiliar",
        softwares: ["Revit", "AutoCAD", "Lumion"],
        desafio: "Projetar um refúgio para um casal jovem (Zona Bioclimática 3), equilibrando espaços intimistas com áreas sociais. O grande desafio técnico foi materializar uma morfologia orgânica — inspirada no abraço das pétalas da flor Camélia — enquanto se mitigava o efeito de ilha de calor do entorno e se garantia o conforto térmico.",
        solucao: "A edificação foi verticalizada em três pavimentos, garantindo mais de 63% de permeabilidade do solo. Utilizou-se modelagem paramétrica no Revit para racionalizar as curvas da alvenaria e da escada central, que atua como exaustor natural (ventilação em chaminé). A eficiência térmica foi garantida com teto verde, vidros Low-E e marquises de proteção.",
        imagensGaleria: [
            "assets/Camelia/Apresentacao_Camelia.pdf", 
            "assets/Camelia/Sintese_das_estrategias_bioclimaticas_camelia.pdf",
            "assets/Camelia/Atelie_4-Pavimento_Terreo-1_150-A3-420x297.pdf",
            "assets/Camelia/Atelie_4-Pavimento_Superior-1_150-A3-420x297.pdf",
            "assets/Camelia/Atelie_4-Pavimento_Inferior-1_150-A3-420x297.pdf",
            "assets/Camelia/Render_Dia_Externo.jpeg", 
            "assets/Camelia/Render_Dia_Externo_Lateral.jpeg", 
            "assets/Camelia/Render_Noite_Externo.jpeg", 
            "assets/Camelia/Render_Noite_Externo_Lateral.jpeg", 
            "assets/Camelia/Render_Tarde_Externo.jpeg"
        ]
    },
    // PROJETO 1 (Arquitetura, Romance e Tijolo)
    {
        titulo: "Arquitetura, Romance e Tijolo",
        subtitulo: "Alvenaria Estrutural & Modulação Cerâmica",
        corDestaque: "#c15c3d", 
        conceito: "Um refúgio que resgata a solidez milenar da alvenaria cerâmica, moldado em uma estrutura modular geométrica que se abre para a contemplação da paisagem e o romance.",
        inspiracoes: [
            "assets/Tijolo/Inspiracao_Tijolo.jpg", 
            "assets/Tijolo/Inspiracao_Tijolo2.jpg",    
            "assets/Tijolo/Inspiracao_Tijolo3.jpg"   
        ],
        imagemCapa: "assets/Tijolo-hero.jpg", 
        ano: "2025 (4° Semestre - Sistemas Construtivos)",
        tipologia: "Residencial / Cabana",
        softwares: ["Revit", "AutoCAD", "Lumion"],
        desafio: "Projetar uma edificação residencial utilizando alvenaria convencional de forma sustentável e supereficiente. O desafio central foi mitigar o impacto ambiental clássico desse método construtivo — como a geração de entulho — garantindo ao mesmo tempo uma estética sofisticada que integrasse o Tijolo Aparente Colonial Palha com panos de vidro e uma cobertura de forte inclinação geométrica.",
        solucao: "O projeto foi inteiramente fundamentado no cálculo de modulação. Adotou-se o bloco cerâmico estrutural de 14x19x29 cm, ajustando os vãos e dimensões gerais da planta em múltiplos exatos, considerando a junta de argamassa de 1 cm. Inspirando-se no rigor técnico de Márcio Kogan e na sustentabilidade climática de Francis Kéré, esse cuidado milimétrico evitou cortes e perdas no canteiro de obras, reduzindo o desperício e criando um sistema construtivo otimizado e limpo.",
        imagensGaleria: [
            "assets/Tijolo-perspectiva.jpg", 
            "assets/Tijolo-planta-baixa.jpg", 
            "assets/Tijolo-cortes.jpg",      
            "assets/Tijolo/Caderno_Tijolos.pdf"     
        ]
    },
    // PROJETO 2 (Refúgio Tropical)
    {
        titulo: "Refúgio Tropical & Urbanismo",
        subtitulo: "Comercial, Paisagismo e Maquete Física",
        corDestaque: "#2d6a4f", 
        conceito: "Um oásis de brasilidade no centro urbano. O projeto explora a escala do lote com um bistrô aconchegante e se expande para a escala da via, valorizando o pedestre através do paisagismo tátil.",
        inspiracoes: [
            "assets/maquete-pergolado.jpg", 
            "assets/maquete-fonte.jpg",     
            "assets/maquete-parquinho.jpg"  
        ],
        imagemCapa: "assets/refugio-hero.jpg", 
        ano: "2024 (3º Semestre / Ateliê II)",
        tipologia: "Comercial / Intervenção Urbana",
        softwares: ["AutoCAD", "Maquete Física", "Trabalho em Equipe"],
        desafio: "O ateliê exigiu duas abordagens complementares. A primeira foi projetar o 'Refúgio Tropical', um bistrô de 95,57m² na Rua Dr. Amadeu da Luz, lidando com restrições de sombreamento no inverno geradas pelos edifícios vizinhos. A segunda etapa foi um esforço colaborativo para construir a maquete física de revitalização de toda a via, adaptando o paisagismo para dialogar com a proposta comercial eleita pela turma como diretriz do masterplan.",
        solucao: "Para o bistrô, a implantação utilizou um percurso sinuoso em deck de madeira, materiais naturais (pedra e bambu) e telhado verde para mitigação térmica no verão. Na macroescala, a maquete física construída em equipe materializou o novo perfil viário: inserção de parklets, pergolados floridos, iluminação em escala de pedestre e mobiliário de permanência, devolvendo a rua às pessoas.",
        imagensGaleria: [
            "assets/refugio-planta-baixa.jpg", 
            "assets/refugio-cortes.jpg",
            "assets/maquete-visao-geral.jpg",  
            "assets/prancha-refugio.pdf"       
        ]
    }
];

/* =========================================
   2. VARIÁVEIS GLOBAIS E SCROLL
   ========================================= */
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

// Variáveis do Carrossel Infinito
let indiceCarrossel = 0;
let cartoesCarrossel = [];

/* =========================================
   3. INICIALIZAÇÃO ÚNICA (MOTOR DO SITE)
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

    // --- B. INICIALIZAÇÃO DO CARROSSEL INFINITO ---
    cartoesCarrossel = document.querySelectorAll('.project-card');
    if(cartoesCarrossel.length > 0) {
        atualizarCarrossel();
    }

    // --- C. SUPORTE A DESLIZE (SWIPE) NO CELULAR ---
    let toqueInicioX = 0;
    let toqueFimX = 0;
    const trilhaCarrossel = document.getElementById('meu-carrossel');

    if(trilhaCarrossel) {
        trilhaCarrossel.addEventListener('touchstart', e => {
            toqueInicioX = e.changedTouches[0].screenX;
        }, {passive: true});
        
        trilhaCarrossel.addEventListener('touchend', e => {
            toqueFimX = e.changedTouches[0].screenX;
            if (toqueFimX < toqueInicioX - 50) moverCarrossel(1); 
            if (toqueFimX > toqueInicioX + 50) moverCarrossel(-1); 
        }, {passive: true});
    }
});

/* =========================================
   4. FUNÇÕES GLOBAIS DO CARROSSEL
   ========================================= */
function moverCarrossel(passo) {
    const total = cartoesCarrossel.length;
    indiceCarrossel = (indiceCarrossel + passo + total) % total;
    atualizarCarrossel();
}

function atualizarCarrossel() {
    const total = cartoesCarrossel.length;
    
    // Limpa todas as classes
    cartoesCarrossel.forEach(card => card.classList.remove('active', 'prev', 'next'));

    // Define o Central (Active)
    const cardAtivo = cartoesCarrossel[indiceCarrossel];
    cardAtivo.classList.add('active');

    // Muda a cor de fundo dinamicamente
    const sectionDinamica = document.getElementById('projetos-dinamicos');
    const bg = cardAtivo.getAttribute('data-bg');
    const txt = cardAtivo.getAttribute('data-text');
    if(sectionDinamica && bg && txt) {
        sectionDinamica.style.setProperty('--dynamic-bg', bg);
        sectionDinamica.style.setProperty('--dynamic-text', txt);
    }

    // Define o da Esquerda (Prev)
    const indicePrev = (indiceCarrossel - 1 + total) % total;
    cartoesCarrossel[indicePrev].classList.add('prev');

    // Define o da Direita (Next)
    const indiceNext = (indiceCarrossel + 1) % total;
    cartoesCarrossel[indiceNext].classList.add('next');
}

/* NOVA FUNÇÃO BLINDADA COM O 'this' */
function abrirSeAtivo(indexProjeto, elementoClicado) {
    if (elementoClicado.classList.contains('active')) {
        abrirProjeto(indexProjeto); 
    } else if (elementoClicado.classList.contains('prev')) {
        moverCarrossel(-1); 
    } else if (elementoClicado.classList.contains('next')) {
        moverCarrossel(1); 
    }
}

/* =========================================
   5. FUNÇÕES GLOBAIS (OVERLAY E LIGHTBOX)
   ========================================= */
function abrirProjeto(index) {
    if (!dadosProjetos[index]) return;
    const projeto = dadosProjetos[index];
    const overlay = document.getElementById('project-overlay');

    const corSelecionada = projeto.corDestaque || '#64ffda';
    overlay.style.setProperty('--overlay-accent', corSelecionada);

    document.getElementById('overlay-titulo').innerText = projeto.titulo;
    document.getElementById('overlay-subtitulo').innerText = projeto.subtitulo;
    document.getElementById('overlay-ano').innerText = projeto.ano;
    document.getElementById('overlay-tipo').innerText = projeto.tipologia;
    document.getElementById('overlay-desafio').innerText = projeto.desafio;
    document.getElementById('overlay-solucao').innerText = projeto.solucao;
    
    const imgElement = document.getElementById('overlay-img');
    if (imgElement) imgElement.src = projeto.imagemCapa;

    const blockquoteConceito = document.getElementById('overlay-conceito');
    if (projeto.conceito) {
        blockquoteConceito.innerText = `"${projeto.conceito}"`;
        blockquoteConceito.style.display = 'block';
    } else {
        blockquoteConceito.style.display = 'none';
    }

    const divMoodboard = document.getElementById('overlay-moodboard');
    const containerMoodboard = document.getElementById('container-moodboard');
    
    if (projeto.inspiracoes && projeto.inspiracoes.length > 0) {
        divMoodboard.innerHTML = '';
        projeto.inspiracoes.forEach(imgSrc => {
            divMoodboard.innerHTML += `<img src="${imgSrc}" alt="Inspiração de Projeto">`;
        });
        containerMoodboard.style.display = 'block';
    } else {
        containerMoodboard.style.display = 'none';
    }

    const divSoftwares = document.getElementById('overlay-softwares');
    if (divSoftwares) {
        divSoftwares.innerHTML = '';
        projeto.softwares.forEach(software => {
            divSoftwares.innerHTML += `<span class="tag" style="border-color: ${corSelecionada}; color: ${corSelecionada}">${software}</span>`;
        });
    }

    const divGaleria = document.getElementById('overlay-galeria');
    if (divGaleria) {
        divGaleria.innerHTML = '';
        
        projeto.imagensGaleria.forEach(link => {
            let htmlItem = '';
            const linkMinusculo = link.toLowerCase();

            if (linkMinusculo.endsWith('.pdf')) {
                htmlItem = `
                    <a href="${link}" target="_blank" class="gallery-item media-card">
                        <img src="${link.substring(0, link.lastIndexOf('.'))}.jpg" style="width:100%; height:100%; object-fit:cover; border-radius:4px; transition: 0.3s;" onmouseover="this.style.opacity=0.7" onmouseout="this.style.opacity=1" onerror="this.src='assets/placeholder.png';">    
                    </a>`;
            } else if (linkMinusculo.endsWith('.mp4')) {
                htmlItem = `
                    <div class="gallery-item">
                        <video src="${link}" controls style="width:100%; height:100%; object-fit:cover; border-radius:4px;"></video>
                    </div>`;
            } else if (linkMinusculo.includes('youtube.com') || linkMinusculo.includes('youtu.be')) {
                htmlItem = `
                    <a href="${link}" target="_blank" class="gallery-item media-card">
                        <span class="media-card-icon">▶️</span>
                        <span style="font-size: 0.9rem;">Assistir Vídeo</span>
                    </a>`;
            } else {
                htmlItem = `
                    <div class="gallery-item" style="cursor: zoom-in;" onclick="abrirLightbox('${link}')">
                        <img src="${link}" style="width:100%; height:100%; object-fit:cover; border-radius:4px; transition: 0.3s;" onmouseover="this.style.opacity=0.7" onmouseout="this.style.opacity=1">
                    </div>`;
            }

            divGaleria.innerHTML += htmlItem;
        });
    }

    if (overlay) {
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function fecharProjeto() {
    const overlay = document.getElementById('project-overlay');
    if (overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function abrirLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = src;
    lightbox.classList.add('active');
}

function fecharLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}