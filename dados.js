/* =========================================
   1. BANCO DE DADOS DOS PROJETOS
   ========================================= */
const dadosProjetos = [
    // PROJETO 0 (Camélia)
    {
        titulo: "Casa Camélia",
        subtitulo: "Arquitetura Orgânica & Conforto Bioclimático",
        corDestaque: "#e9b2bd",
        corFundo: "#5c3e46",
        corTexto: "#fcedf0",
        conceito: 'Um refúgio para almas jovens e notívagas. Um espaço que vibra entre a tranquilidade íntima e o calor das festas de família. \n\n"De um traço nasce a arquitetura. E quando ele é bonito e cria surpresa, ela pode atingir, sendo bem conduzida, o nível superior de uma obra de arte. "Oscar Niemeyer',
        imagemMoodboard: "assets/Camelia/Inspiracao_Camelia.jpeg",
        imagemCapa: "assets/Camelia/Render_Tarde_Externo.jpeg",
        ano: "2025 (4º Semestre)",
        tipologia: "Edificação de Uso Misto com foco no uso residencial unifamiliar.",
        softwares: [
            "SketchUp", 
            "AutoCAD", 
            "Gemini"
        ],
        desafio: "Projetar um residencial unifamiliar com alguma utilização de uso misto, com enfoque em projetos integrados ao Conforto, Bioclimatismo e Sustentabilidade Ambiental.",
        inspiracao: "Símbolo de admiração e perfeição, a Camélia empresta suas curvas para dar forma a este lar. A planta circular evoca o abraço das pétalas, enquanto a integridade da estrutura reflete a característica única da flor: a união indissociável entre pétala e cálice. Um espaço de ternura desenhado para um casal cuja essência é, acima de tudo, permanecer juntos.",
        solucao: "A Casa Camélia harmoniza a estética orgânica com a eficiência bioclimática exigida para a Zona 3. Através de estratégias passivas como o teto verde, a ventilação cruzada e a alta permeabilidade do solo, o projeto garante conforto térmico superior e sustentabilidade, criando um refúgio que une tecnologia, natureza e afeto em total simbiose com o clima local.",
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
        corDestaque: "#c29674",
        corFundo: "#7a3a23",
        corTexto: "#f7f0eb",
        conceito: "Onde o tempo desacelera entre texturas rústicas e o horizonte catarinense. Um convite para almas que buscam o silêncio do inverno no calor de um abrigo esculpido à mão. \n\n \"Cada material tem as suas características específicas que temos de entender se os queremos usar. Por outras palavras, nenhum design é possível até que todos os materiais que você projeta sejam totalmente compreendidos.\" Luwig Mies Van Der Rohe.",
        imagemMoodboard: "assets/Tijolo/Inspiracao_Tijolo.jpg",
        imagemCapa: "assets/Tijolo/Render_Dia_Frontal.jpeg", 
        ano: "2025 (4° Semestre - Sistemas Construtivos)",
        tipologia: "Residencial - Hospedagem",
        softwares: [
            "SketchUp", 
            "AutoCAD", 
            "Lumion"
        ],
        desafio: "Projetar uma edificação modular de 40m² utilizando especificamente o tijolo cerâmico como material construtivo.",
        inspiracao: " Inspirado na honestidade da alvenaria convencional, o projeto nasce do estudo profundo da fabricação do tijolo cerâmico para transformar o rigor técnico em um elemento de conforto térmico e expressão estética.",
        solucao: "O projeto foi executado com o uso de bloco cerâmico estrutural, otimizando a montagem através de uma malha modular que minimiza desperdícios e organiza o canteiro de obras. A base de alvenaria aproveita a resistência do material para sustentar o sistema de telhado A-frame autoportante, que integra estrutura e fechamento, dispensando pilares internos e reforçando a geometria da cabana. A escolha do barro cozido garante alta inércia térmica, solução passiva fundamental para o conforto interno diante do rigor climático da Serra Catarinense.",
        imagensGaleria: [
            "assets/Tijolo/Planta_Baixa.jpg", 
            "assets/Tijolo/Planta_Cobertura.jpg", 
            "assets/Tijolo/corteAA.jpg",
            "assets/Tijolo/corteBB.jpg",
            "assets/Tijolo/corteBB2.jpg",
            "assets/Tijolo/Fachada_Frontal.jpg",
            "assets/Tijolo/Fachada_Lateral_Direita.jpg",
            "assets/Tijolo/Fachada_Lateral_Esquerda.jpg",
            "assets/Tijolo/Fachada_Posterior.jpg",
            "assets/Tijolo/Caderno_Tijolos.pdf",
            "assets/Tijolo/Render_Dia_Frontal.jpeg",
            "assets/Tijolo/Render_Dia_Lateral_Direita_Perspectiva.jpeg",
            "assets/Tijolo/Render_Dia_Lateral_Esquerda_Perspectiva.jpeg",
            "assets/Tijolo/Render_Dia_Traseiro.jpeg",
            "assets/Tijolo/Render_Neve_Frontal.jpeg",
            "assets/Tijolo/Render_Noite_Frontal.jpeg",
        ]
    },
    // PROJETO 2 (Refúgio Tropical)
    {
        titulo: "Refúgio Tropical & Urbanismo",
        subtitulo: "Comercial, Paisagismo e Maquete Física",
        corDestaque: "#628f31",
        corFundo: "#131b0a",
        corTexto: "#eaf4df",
        conceito: "Um oásis de brasilidade no centro urbano. O projeto explora a escala do lote com um bistrô aconchegante e se expande para a escala da via, valorizando o pedestre através do paisagismo tátil.",
        imagemMoodboard: "assets/Tropical/Inspiracao_Tropical.jpeg",
        imagemCapa: "assets/Tropical/Render_Fundos.jpg", 
        ano: "2024 (3º Semestre / Ateliê II)",
        tipologia: "Comercial / Intervenção Urbana",
        softwares: [
            "AutoCAD", 
            "Maquete Física", 
            "Trabalho em Equipe"
        ],
        desafio: "O ateliê exigiu duas abordagens complementares. A primeira foi projetar o 'Refúgio Tropical', um bistrô de 95,57m² na Rua Dr. Amadeu da Luz, lidando com restrições de sombreamento no inverno geradas pelos edifícios vizinhos. A segunda etapa foi um esforço colaborativo para construir a maquete física de revitalização de toda a via, adaptando o paisagismo para dialogar com a proposta comercial eleita pela turma como diretriz do masterplan.",
        solucao: "Para o bistrô, a implantação utilizou um percurso sinuoso em deck de madeira, materiais naturais (pedra e bambu) e telhado verde para mitigação térmica no verão. Na macroescala, a maquete física construída em equipe materializou o novo perfil viário: inserção de parklets, pergolados floridos, iluminação em escala de pedestre e mobiliário de permanência, devolvendo a rua às pessoas.",
        imagensGaleria: [
            "assets/Tropical/Apresentacao_Atelie_03.pdf",
            "assets/Tropical/Render_Capa.jpg", 
            "assets/Tropical/Render_Entrada_Lateral.jpg",
            "assets/Tropical/Render_Fundos.jpg",
            "assets/Tropical/Render_Entrada_Fundos.jpg",
            "assets/Tropical/Render_Entrada.jpg",            
            "assets/Tropical/Maquete_Rua_01.jpeg", 
            "assets/Tropical/Maquete_Rua_02.jpeg",
            "assets/Tropical/Maquete_Rua_03.jpeg",  
            "assets/Tropical/Maquete_Rua_04.jpeg",     
            "assets/Tropical/Maquete_Rua_05.jpeg",    
            "assets/Tropical/Maquete_Rua_06.jpeg",    
            "assets/Tropical/Maquete_Rua_07.jpeg"   
        ]
    },
    // PROJETO 3 (Topologia e Terraplenagem)
    {
        titulo: "Topologia & Terraplenagem",
        subtitulo: "Estudo de Relevo, Corte, Aterro e Maquete Física",
        
        // KIT DE CORES TROPICAL/TERRENO (Inspirado nas curvas de nível verdes da maquete)
        corDestaque: "#1b994b", // Verde esmeralda/folha vibrante
        corFundo: "#141c16",    // Fundo verde muito escuro (quase preto, cor de floresta densa)
        corTexto: "#e6f2eb",    // Branco esverdeado suave para leitura
        
        conceito: "A materialização do território. Compreender a terra não como uma tela em branco, mas como um volume vivo que dita as regras, os limites e as possibilidades da implantação arquitetônica.",
        
        // MOODBOARD: Uma foto focada nos detalhes das curvas cortadas a laser
        imagemMoodboard: "assets/Topografia/Topografia_mood.jpg",
        
        // CAPA: A foto geral da maquete vista de cima/diagonal
        imagemCapa: "assets/Topografia/maquete-Capa.jpeg", 
        
        ano: "2025 (4º Semestre)",
        tipologia: "Estudo Topográfico",
        softwares: [
            "AutoCAD", 
            "Corte a Laser", 
            "Trabalho Manual"
        ],
        
        desafio: "O desafio proposto foi dominar a modificação do relevo natural. Foi necessário selecionar um terreno acidentado no município de Blumenau (área superior a 1.000 m²) e projetar a implantação de uma plataforma plana que ocupasse no mínimo 20% da área. O maior rigor técnico exigido foi o cálculo exato para gerar alturas semelhantes entre os volumes de corte e de aterro, garantindo eficiência e economia na movimentação de terra.",
        
        solucao: "A partir do levantamento aerofotogramétrico, o terreno foi modelado no AutoCAD. As curvas de nível foram retificadas, definindo com precisão as cristas de corte e pés de aterro. Para a representação, optou-se pela maquete física: o arquivo digital foi rigorosamente preparado, separando as curvas e as linhas de guia (impressão e corte) em 'layers' distintos para a máquina de corte a laser. A montagem em chapas sobrepostas e a pintura em degradê transformaram dados topográficos áridos em uma representação tátil impressionante.",
        
        imagensGaleria: [
            "assets/Topografia/maquete-angulo1.jpeg", 
            "assets/Topografia/maquete-angulo2.jpeg",
            "assets/Topografia/maquete-superior.jpeg",
            "assets/Topografia/maquete-Capa.jpeg",  
        ]
    }
];