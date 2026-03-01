/* =========================================
   1. BANCO DE DADOS DOS PROJETOS
   ========================================= */
const dadosProjetos = [
    // PROJETO 0 (Camélia)
    {
        titulo: "Casa Camélia",
        subtitulo: "Arquitetura Orgânica & Conforto Bioclimático",
        corDestaque: "#e9b2bd",
        corFundo: "#2a1c20",
        corTexto: "#fcedf0",
        conceito: "Um espaço desenhado para evocar a união indissociável da Camélia, servindo de palco para a gastronomia, memórias de viagem e os três gatos do casal.",
        imagemMoodboard: "assets/Camelia/Inspiracao_Camelia.jpeg",
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
        corFundo: "#241a13",
        corTexto: "#f7f0eb",
        conceito: "Um refúgio que resgata a solidez milenar da alvenaria cerâmica, moldado em uma estrutura modular geométrica que se abre para a contemplação da paisagem e o romance.",
        imagemMoodboard: "assets/Tijolo/Inspiracao_Tijolo.jpg",
        imagemCapa: "assets/Tijolo/Render_Noite_Frontal.jpeg", 
        ano: "2025 (4° Semestre - Sistemas Construtivos)",
        tipologia: "Residencial / Cabana",
        softwares: [
            "SketchUp", 
            "AutoCAD", 
            "Lumion"
        ],
        desafio: "Projetar uma edificação residencial utilizando alvenaria convencional de forma sustentável e supereficiente. O desafio central foi mitigar o impacto ambiental clássico desse método construtivo — como a geração de entulho — garantindo ao mesmo tempo uma estética sofisticada que integrasse o Tijolo Aparente Colonial Palha com panos de vidro e uma cobertura de forte inclinação geométrica.",
        solucao: "O projeto foi inteiramente fundamentado no cálculo de modulação. Adotou-se o bloco cerâmico estrutural de 14x19x29 cm, ajustando os vãos e dimensões gerais da planta em múltiplos exatos, considerando a junta de argamassa de 1 cm. Inspirando-se no rigor técnico de Márcio Kogan e na sustentabilidade climática de Francis Kéré, esse cuidado milimétrico evitou cortes e perdas no canteiro de obras, reduzindo o desperício e criando um sistema construtivo otimizado e limpo.",
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
    }
];