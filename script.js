/* =========================================
   1. BANCO DE DADOS DOS PROJETOS
   ========================================= */
const dadosProjetos = [
    // PROJETO 0 (Camélia)
    {
        titulo: "Casa Camélia",
        subtitulo: "Arquitetura Orgânica & Conforto Bioclimático",
        
        // NOVA COR DINÂMICA (Ex: Um tom acobreado/rose da flor)
        corDestaque: "#d4a373", 
        
        // NOVO CONCEITO
        conceito: "Um espaço desenhado para evocar a união indissociável da Camélia, servindo de palco para a gastronomia, memórias de viagem e os três gatos do casal.",
        
        // NOVAS INSPIRAÇÕES (Coloque os nomes corretos das imagens que for salvar)
        inspiracoes: [
            "assets/Camelia/Inspiração_Camelia.jpeg", 
            "assets/Camelia/Inspiração_Camelia2.jpeg",
            "assets/Camelia/Inspiração_Camelia3.jpeg",
            "assets/Camelia/Inspiração_Camelia4.jpeg",
        ],
        
        imagemCapa: "assets/Camelia/Render_Tarde_Externo.jpeg",
        ano: "2025 (4º Semestre)",
        tipologia: "Residencial Unifamiliar",
        softwares: [
            "Revit", 
            "AutoCAD", 
            "Lumion"
        ],
        desafio: "Projetar um refúgio para um casal jovem (Zona Bioclimática 3), equilibrando espaços intimistas com áreas sociais. O grande desafio técnico foi materializar uma morfologia orgânica — inspirada no abraço das pétalas da flor Camélia — enquanto se mitigava o efeito de ilha de calor do entorno e se garantia o conforto térmico.",
        solucao: "A edificação foi verticalizada em três pavimentos, garantindo mais de 63% de permeabilidade do solo. Utilizou-se modelagem paramétrica no Revit para racionalizar as curvas da alvenaria e da escada central, que atua como exaustor natural (ventilação em chaminé). A eficiência térmica foi garantida com teto verde, vidros Low-E e marquises de proteção.",
        imagensGaleria: [
            "assets/Camelia/Apresentacao_Camelia.pdf", 
            "assets/Camelia/Sintese_das_estrategias_bioclimaticas_camelia.pdf", 
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
        
        // COR DINÂMICA: Um tom Terracota/Tijolo elegante
        corDestaque: "#c15c3d", 
        
        // CONCEITO: Unindo a robustez do tijolo à leveza do chalé
        conceito: "Um refúgio que resgata a solidez milenar da alvenaria cerâmica, moldado em uma estrutura modular geométrica que se abre para a contemplação da paisagem e o romance.",
        
        // INSPIRAÇÕES: Texturas e referências usadas no PDF
        inspiracoes: [
            "assets/insp-tijolo-aparente.jpg", // Foto de uma parede de tijolinhos
            "assets/insp-marcio-kogan.jpg",    // Referência à Casa Paraty/Kogan (integração vidro/madeira/tijolo)
            "assets/insp-chale-natureza.jpg"   // Referência visual da cabana na cachoeira
        ],
        
        imagemCapa: "assets/tijolo-hero.jpg", // Render da fachada principal (página 14 do seu PDF)
        ano: "2025 (4° Semestre - Sistemas Construtivos)",
        tipologia: "Residencial / Cabana",
        softwares: [
            "Revit", 
            "AutoCAD", 
            "Lumion"
        ],
        
        // DESAFIO: Foco no que o PDF aborda sobre impacto ambiental e precisão
        desafio: "Projetar uma edificação residencial utilizando alvenaria convencional de forma sustentável e supereficiente. O desafio central foi mitigar o impacto ambiental clássico desse método construtivo — como a geração de entulho — garantindo ao mesmo tempo uma estética sofisticada que integrasse o Tijolo Aparente Colonial Palha com panos de vidro e uma cobertura de forte inclinação geométrica.",
        
        // SOLUÇÃO: Foco na Modulação e referências
        solucao: "O projeto foi inteiramente fundamentado no cálculo de modulação. Adotou-se o bloco cerâmico estrutural de 14x19x29 cm, ajustando os vãos e dimensões gerais da planta em múltiplos exatos, considerando a junta de argamassa de 1 cm. Inspirando-se no rigor técnico de Márcio Kogan e na sustentabilidade climática de Francis Kéré, esse cuidado milimétrico evitou cortes e perdas no canteiro de obras, reduzindo o desperdício e criando um sistema construtivo otimizado e limpo.",
        
        // GALERIA: Plantas, Cortes e PDFs
        imagensGaleria: [
            "assets/Tijolo-perspectiva.jpg", // Render da página 14
            "assets/Tijolo-planta-baixa.jpg", // Planta baixa página 14
            "assets/Tijolo-cortes.jpg",      // Cortes técnicos página 14 e 15
            "assets/Tijolo/Caderno_Tijolos.pdf"     // Se quiser disponibilizar a pesquisa completa em PDF
        ]
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
    if (!dadosProjetos[index]) return;
    const projeto = dadosProjetos[index];

    const overlay = document.getElementById('project-overlay');

    // 1. APLICA A COR DINÂMICA
    // Se o projeto tiver uma cor, ele usa. Se não, usa o ciano padrão.
    const corSelecionada = projeto.corDestaque || '#64ffda';
    overlay.style.setProperty('--overlay-accent', corSelecionada);

    // 2. PREENCHE TEXTOS BÁSICOS
    document.getElementById('overlay-titulo').innerText = projeto.titulo;
    document.getElementById('overlay-subtitulo').innerText = projeto.subtitulo;
    document.getElementById('overlay-ano').innerText = projeto.ano;
    document.getElementById('overlay-tipo').innerText = projeto.tipologia;
    document.getElementById('overlay-desafio').innerText = projeto.desafio;
    document.getElementById('overlay-solucao').innerText = projeto.solucao;
    
    // Imagem de Capa
    const imgElement = document.getElementById('overlay-img');
    if (imgElement) imgElement.src = projeto.imagemCapa;

    // 3. PREENCHE O CONCEITO (Esconde se não existir)
    const blockquoteConceito = document.getElementById('overlay-conceito');
    if (projeto.conceito) {
        blockquoteConceito.innerText = `"${projeto.conceito}"`;
        blockquoteConceito.style.display = 'block';
    } else {
        blockquoteConceito.style.display = 'none';
    }

    // 4. PREENCHE AS INSPIRAÇÕES / MOODBOARD (Esconde se não existir)
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

    // 5. GERA TAGS (Softwares)
    const divSoftwares = document.getElementById('overlay-softwares');
    if (divSoftwares) {
        divSoftwares.innerHTML = '';
        projeto.softwares.forEach(software => {
            // A borda da tag também pega a cor dinâmica!
            divSoftwares.innerHTML += `<span class="tag" style="border-color: ${corSelecionada}; color: ${corSelecionada}">${software}</span>`;
        });
    }

    // 6. GERA A GALERIA FINAL (Com suporte a Imagem, PDF e Vídeo)
    const divGaleria = document.getElementById('overlay-galeria');
    if (divGaleria) {
        divGaleria.innerHTML = '';
        
        projeto.imagensGaleria.forEach(link => {
            let htmlItem = '';
            const linkMinusculo = link.toLowerCase();

            // Verifica se é um PDF
            if (linkMinusculo.endsWith('.pdf')) {
                htmlItem = `
                    <a href="${link}" target="_blank" class="gallery-item media-card">
                        <img src="${link.substring(0, link.lastIndexOf('.'))}.jpg" style="width:100%; height:100%; object-fit:cover; border-radius:4px; transition: 0.3s;" onmouseover="this.style.opacity=0.7" onmouseout="this.style.opacity=1">    
                    </a>`;
            } 
            // Verifica se é um arquivo de vídeo direto (.mp4)
            else if (linkMinusculo.endsWith('.mp4')) {
                htmlItem = `
                    <div class="gallery-item">
                        <video src="${link}" controls style="width:100%; height:100%; object-fit:cover; border-radius:4px;"></video>
                    </div>`;
            } 
            // Verifica se é um link do YouTube
            else if (linkMinusculo.includes('youtube.com') || linkMinusculo.includes('youtu.be')) {
                htmlItem = `
                    <a href="${link}" target="_blank" class="gallery-item media-card">
                        <span class="media-card-icon">▶️</span>
                        <span style="font-size: 0.9rem;">Assistir Vídeo</span>
                    </a>`;
            } 
            // Se não for nenhum dos anteriores, assume que é uma IMAGEM
            else {
                htmlItem = `
                    <div class="gallery-item" style="cursor: zoom-in;" onclick="abrirLightbox('${link}')">
                        <img src="${link}" style="width:100%; height:100%; object-fit:cover; border-radius:4px; transition: 0.3s;" onmouseover="this.style.opacity=0.7" onmouseout="this.style.opacity=1">
                    </div>`;
            }

            divGaleria.innerHTML += htmlItem;
        });
    }

    // Abre o Overlay
    if (overlay) {
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function fecharProjeto() {
    const overlay = document.getElementById('project-overlay');
    if (overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto'; // Destrava a rolagem
    }
}

// --- FUNÇÕES DO LIGHTBOX (ZOOM) ---
function abrirLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = src; // Coloca a imagem clicada no telão
    lightbox.classList.add('active');
}

function fecharLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}