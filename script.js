/* =========================================
   2. VARIÁVEIS GLOBAIS E SCROLL
   ========================================= */
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

function renderizarProjetos() {
    const trilha = document.getElementById('meu-carrossel');
    if (!trilha) return;

    trilha.innerHTML = ''; // Garante que começa vazio

    dadosProjetos.forEach((projeto, index) => {
        // Formata o número para ter o zero na frente (ex: "01", "02")
        const numeroFormatado = String(index + 1).padStart(2, '0');

        // Cria a estrutura HTML do cartão usando crases (template string)
        const cartaoHTML = `
            <div class="project-card" onclick="abrirSeAtivo(${index}, this)">
                <div class="card-image">
                    <img src="${projeto.imagemCapa}" alt="${projeto.titulo}">
                </div>
                <div class="card-info">
                    <span>${numeroFormatado}. ${projeto.tipologia}</span>
                    <h3>${projeto.titulo}</h3>
                </div>
            </div>
        `;

        // Injeta o cartão na tela
        trilha.innerHTML += cartaoHTML;
    });
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
    renderizarProjetos(); // DESENHA OS CARTÕES PRIMEIRO
    
    cartoesCarrossel = document.querySelectorAll('.project-card'); // AGORA PEGA ELES
    if(cartoesCarrossel.length > 0) {
        atualizarCarrossel(); // LIGA A LÓGICA 3D
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
    
    // 1. Limpa todas as classes
    cartoesCarrossel.forEach(card => card.classList.remove('active', 'prev', 'next'));

    // 2. Define o Central (Active)
    const cardAtivo = cartoesCarrossel[indiceCarrossel];
    cardAtivo.classList.add('active');

    // 3. MUDA A COR DE FUNDO DINAMICAMENTE (Agora puxando do Banco de Dados!)
    const projetoAtual = dadosProjetos[indiceCarrossel];
    const sectionDinamica = document.getElementById('projetos-dinamicos');
    
    // Se o projeto existir, aplica a mesma corFundo e corTexto usadas no overlay
    if(sectionDinamica && projetoAtual) {
        sectionDinamica.style.setProperty('--dynamic-bg', projetoAtual.corFundo);
        sectionDinamica.style.setProperty('--dynamic-text', projetoAtual.corTexto);
    }

    // 4. Define o da Esquerda (Prev)
    const indicePrev = (indiceCarrossel - 1 + total) % total;
    cartoesCarrossel[indicePrev].classList.add('prev');

    // 5. Define o da Direita (Next)
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

    const corDestaque = projeto.corDestaque || '#64ffda';
    const corFundo = projeto.corFundo || '#111111';
    const corTexto = projeto.corTexto || '#dddddd';

    overlay.style.setProperty('--overlay-accent', corDestaque);
    overlay.style.setProperty('--overlay-bg', corFundo);
    overlay.style.setProperty('--overlay-text', corTexto);

    document.getElementById('overlay-titulo').innerText = projeto.titulo;
    document.getElementById('overlay-subtitulo').innerText = projeto.subtitulo;
    document.getElementById('overlay-ano').innerText = projeto.ano;
    document.getElementById('overlay-tipo').innerText = projeto.tipologia;
    document.getElementById('overlay-desafio').innerText = projeto.desafio;
    document.getElementById('overlay-inspiracao').innerText = projeto.inspiracao;
    document.getElementById('overlay-solucao').innerText = projeto.solucao;
    
    const imgElement = document.getElementById('overlay-img');
    if (imgElement) imgElement.src = projeto.imagemCapa;

    const blockquoteConceito = document.getElementById('overlay-conceito');
    if (projeto.conceito) {
        blockquoteConceito.innerText = `${projeto.conceito}`;
        blockquoteConceito.style.display = 'block';
    } else {
        blockquoteConceito.style.display = 'none';
    }

    const containerMoodboard = document.getElementById('container-moodboard');
    const imgMoodboard = document.getElementById('img-moodboard');
    
    if (projeto.imagemMoodboard) {
        imgMoodboard.src = projeto.imagemMoodboard;
        // Pinta uma borda bem sutil com a cor dinâmica do projeto
        imgMoodboard.style.borderBottom = `4px solid ${corDestaque}`; 
        containerMoodboard.style.display = 'flex'; // Usa flex para preencher o espaço
    } else {
        containerMoodboard.style.display = 'none';
    }

    const divSoftwares = document.getElementById('overlay-softwares');
    if (divSoftwares) {
        divSoftwares.innerHTML = '';
        projeto.softwares.forEach(software => {
            divSoftwares.innerHTML += `<span class="tag" style="border-color: ${corDestaque}; color: ${corDestaque}">${software}</span>`;
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
        overlay.scrollTop = 0;
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