const AGENTS = [
  {
    "name": "CapyLanding GPT",
    "slug": "capylanding-gpt",
    "initials": "LP",
    "category": "Produto & Interface",
    "group": "produto",
    "status": "active",
    "url": "https://chatgpt.com/g/g-6a0ca2d5d4648191af29e54add8b7581-capylanding-gpt",
    "source": "Prompt analisado",
    "headline": "Landing pages claras, estratégicas e orientadas à conversão.",
    "description": "Estrutura ofertas, hero sections, copy, CTAs, FAQ, blocos de prova e wireframes textuais para produtos digitais, serviços, SaaS, portfólios e agentes de IA.",
    "bestFor": [
      "Páginas de venda",
      "Ofertas digitais",
      "Serviços e SaaS"
    ],
    "outputs": [
      "Estrutura da página",
      "Copy por seção",
      "Checklist de conversão"
    ],
    "tags": [
      "landing page",
      "copy",
      "conversão",
      "oferta"
    ]
  },
  {
    "name": "CapyUX GPT",
    "slug": "capyux-gpt",
    "initials": "UX",
    "category": "Produto & Interface",
    "group": "produto",
    "status": "active",
    "url": "https://chatgpt.com/g/g-6a0ca3629f788191bf774cef122d6fe1-capyux-gpt",
    "source": "Prompt analisado",
    "headline": "Diagnóstico de UX/UI para telas, fluxos e produtos digitais.",
    "description": "Analisa hierarquia visual, navegação, clareza, acessibilidade, responsividade e conversão para sugerir melhorias práticas sem redesenhar tudo sem necessidade.",
    "bestFor": [
      "Revisão de telas",
      "Sistemas web",
      "Fluxos de usuário"
    ],
    "outputs": [
      "Problema, impacto e solução",
      "Wireframe textual",
      "Priorização por impacto"
    ],
    "tags": [
      "ux",
      "ui",
      "usabilidade",
      "produto"
    ]
  },
  {
    "name": "CapyDashboard GPT",
    "slug": "capydashboard-gpt",
    "initials": "BI",
    "category": "Produto & Interface",
    "group": "produto",
    "status": "active",
    "url": "https://chatgpt.com/g/g-6a0ca3ee135081918512cfe08f6e6631-capydashboard-gpt",
    "source": "Prompt analisado",
    "headline": "Dashboards úteis, limpos e orientados à decisão.",
    "description": "Transforma dados, processos e ideias de sistema em painéis com métricas, cards, filtros, tabelas, gráficos, estados vazios e regras de UX de dados.",
    "bestFor": [
      "Painéis administrativos",
      "KPIs gerenciais",
      "Sistemas internos"
    ],
    "outputs": [
      "Métricas principais",
      "Layout do painel",
      "Estrutura de dados"
    ],
    "tags": [
      "dashboard",
      "dados",
      "kpis",
      "ux de dados"
    ]
  },
  {
    "name": "CapyGPT Front-End SaaS",
    "slug": "capygpt-front-end-saas",
    "initials": "FE",
    "category": "Produto & Interface",
    "group": "produto",
    "status": "active",
    "url": "https://chatgpt.com/g/g-6a0ca04032b08191bd88bcc54f6cf207-capygpt-front-end-saas",
    "source": "Prompt analisado",
    "headline": "Arquitetura front-end, interfaces e sistemas SaaS.",
    "description": "Ajuda a planejar, criar e revisar projetos web com React, Next.js, Vite, TypeScript, Tailwind, autenticação, APIs, componentes reutilizáveis e design systems.",
    "bestFor": [
      "MVPs SaaS",
      "Dashboards web",
      "Correção de código"
    ],
    "outputs": [
      "Arquitetura recomendada",
      "Rotas e componentes",
      "Plano de implementação"
    ],
    "tags": [
      "frontend",
      "saas",
      "react",
      "typescript"
    ]
  },
  {
    "name": "CapyBio GPT",
    "slug": "capybio-gpt",
    "initials": "BIO",
    "category": "Produto & Interface",
    "group": "produto",
    "status": "planned",
    "url": "",
    "source": "Prompt analisado",
    "headline": "Biolinks inteligentes que funcionam como mini-portfólios.",
    "description": "Cria páginas pessoais, bios com IA, apresentações profissionais, cards de serviços, links organizados e CTAs sem parecer apenas uma lista genérica.",
    "bestFor": [
      "Perfis profissionais",
      "Portfólios compactos",
      "Páginas pessoais"
    ],
    "outputs": [
      "Headline",
      "Estrutura da bio",
      "Ordem dos links"
    ],
    "tags": [
      "bio",
      "portfolio",
      "posicionamento",
      "links"
    ]
  },
  {
    "name": "GPT Logotipos e Marcas",
    "slug": "gpt-logotipos-e-marcas",
    "initials": "BR",
    "category": "Marca & Comunicação",
    "group": "marca",
    "status": "active",
    "url": "https://chatgpt.com/g/g-6a0c9e8c71888191bd96bff84c02ccfb-gpt-logotipos-e-marcas",
    "source": "Prompt analisado",
    "headline": "Direção de marca, naming, identidade visual e logo.",
    "description": "Ajuda a criar, revisar ou reposicionar marcas com diagnóstico, personalidade visual, conceito, paleta, tipografia, slogans e mini-brandbook conceitual.",
    "bestFor": [
      "Naming",
      "Identidade visual",
      "Direção criativa"
    ],
    "outputs": [
      "Conceito principal",
      "Paleta e tipografia",
      "Prompt visual para logo"
    ],
    "tags": [
      "branding",
      "logo",
      "naming",
      "marca"
    ]
  },
  {
    "name": "CapyCopy GPT",
    "slug": "capycopy-gpt",
    "initials": "CP",
    "category": "Marca & Comunicação",
    "group": "marca",
    "status": "planned",
    "url": "",
    "source": "Prompt analisado",
    "headline": "Copywriting comercial claro, humano e sem exagero.",
    "description": "Transforma ofertas, serviços e ideias em headlines, anúncios, posts, mensagens de WhatsApp, CTAs e respostas a objeções com persuasão ética.",
    "bestFor": [
      "WhatsApp",
      "Anúncios",
      "Páginas e posts"
    ],
    "outputs": [
      "Headline",
      "Texto curto/médio/longo",
      "Objeções e respostas"
    ],
    "tags": [
      "copywriting",
      "vendas",
      "whatsapp",
      "texto"
    ]
  },
  {
    "name": "CapyVendas GPT",
    "slug": "capyvendas-gpt",
    "initials": "VD",
    "category": "Marca & Comunicação",
    "group": "marca",
    "status": "planned",
    "url": "",
    "source": "Prompt analisado",
    "headline": "Estratégia comercial, pitch, atendimento e objeções.",
    "description": "Organiza a abordagem de venda para produtos, serviços, materiais técnicos e soluções digitais com scripts, follow-ups, argumentos e CTAs sem pressão falsa.",
    "bestFor": [
      "Prospecção",
      "Atendimento",
      "Propostas comerciais"
    ],
    "outputs": [
      "Pitch curto e médio",
      "Script de venda",
      "Follow-up"
    ],
    "tags": [
      "vendas",
      "pitch",
      "objeções",
      "prospecção"
    ]
  },
  {
    "name": "Designer de Ofertas GPT",
    "slug": "designer-de-ofertas-gpt",
    "initials": "OF",
    "category": "Marca & Comunicação",
    "group": "marca",
    "status": "planned",
    "url": "",
    "source": "Prompt analisado",
    "headline": "Artes promocionais legíveis para comércio local.",
    "description": "Organiza produtos, preços, datas, fotos e mensagens para ofertas de supermercados, açougues, hortifrutis, padarias e comércios de bairro.",
    "bestFor": [
      "Feed e stories",
      "WhatsApp",
      "Campanhas semanais"
    ],
    "outputs": [
      "Texto da campanha",
      "Organização dos produtos",
      "Prompt visual"
    ],
    "tags": [
      "ofertas",
      "varejo",
      "design",
      "whatsapp"
    ]
  },
  {
    "name": "CapyBússola",
    "slug": "capybussola",
    "initials": "CB",
    "category": "Estratégia & Decisão",
    "group": "estrategia",
    "status": "active",
    "url": "https://chatgpt.com/g/g-6a0ba247461c8191b29938d3374116ff-capybussola",
    "source": "Prompt analisado",
    "headline": "Decisões difíceis transformadas em critérios, cenários e próximos passos.",
    "description": "Ajuda a separar fatos, suposições, opções, riscos e consequências para decisões pessoais, profissionais, comerciais ou técnicas.",
    "bestFor": [
      "Dilemas",
      "Priorização",
      "Comparação de opções"
    ],
    "outputs": [
      "Matriz comparativa",
      "Riscos e mitigações",
      "Próximo passo simples"
    ],
    "tags": [
      "decisão",
      "clareza",
      "priorização",
      "estratégia"
    ]
  },
  {
    "name": "CapyEstratégia GPT",
    "slug": "capyestrategia-gpt",
    "initials": "ES",
    "category": "Estratégia & Decisão",
    "group": "estrategia",
    "status": "planned",
    "url": "",
    "source": "Prompt analisado",
    "headline": "Planejamento estratégico simples, claro e executável.",
    "description": "Organiza ideias, oportunidades, riscos, prioridades, roadmap, plano de ação, métricas e próximos passos sem criar complexidade desnecessária.",
    "bestFor": [
      "Ideias de negócio",
      "Lançamentos",
      "Roadmaps"
    ],
    "outputs": [
      "Diagnóstico",
      "Plano de ação",
      "Roadmap"
    ],
    "tags": [
      "estratégia",
      "roadmap",
      "negócios",
      "prioridades"
    ]
  },
  {
    "name": "CapyUniverse GPT",
    "slug": "capyuniverse-gpt",
    "initials": "UV",
    "category": "Estratégia & Decisão",
    "group": "estrategia",
    "status": "planned",
    "url": "",
    "source": "Prompt analisado",
    "headline": "Ecossistemas de agentes, produtos e marcas digitais.",
    "description": "Mapeia verticais, funções, relações, jornada do usuário, modelo comercial, roadmap e priorização para um universo coerente de soluções.",
    "bestFor": [
      "Portfólio de agentes",
      "Ecossistema de produtos",
      "Expansão de verticais"
    ],
    "outputs": [
      "Mapa por verticais",
      "Jornada do usuário",
      "Roadmap"
    ],
    "tags": [
      "ecossistema",
      "portfólio",
      "produtos",
      "agentes"
    ]
  },
  {
    "name": "CapyFleet GPT",
    "slug": "capyfleet-gpt",
    "initials": "FL",
    "category": "Estratégia & Decisão",
    "group": "estrategia",
    "status": "planned",
    "url": "",
    "source": "Prompt analisado",
    "headline": "Arquitetura de frotas de agentes IA especializados.",
    "description": "Define nicho, função, público, entradas, saídas, prompt master, limites, cards de apresentação, integração e roadmap de criação de agentes.",
    "bestFor": [
      "Novos GPTs",
      "Frotas de agentes",
      "Prompt master"
    ],
    "outputs": [
      "Ficha do agente",
      "Prompt master",
      "Roadmap de criação"
    ],
    "tags": [
      "agentes",
      "prompts",
      "arquitetura",
      "ia"
    ]
  },
  {
    "name": "CapyProduto GPT",
    "slug": "capyproduto-gpt",
    "initials": "PR",
    "category": "Produto & Oferta",
    "group": "oferta",
    "status": "planned",
    "url": "",
    "source": "Prompt analisado",
    "headline": "Transforma ideias e materiais soltos em produtos vendáveis.",
    "description": "Estrutura produtos digitais, serviços, bibliotecas, cursos, kits, templates e ofertas com público, proposta de valor, módulos, entregáveis e plano de ação.",
    "bestFor": [
      "Produto digital",
      "Oferta comercial",
      "MVP"
    ],
    "outputs": [
      "Posicionamento",
      "Estrutura e módulos",
      "Plano de ação"
    ],
    "tags": [
      "produto",
      "oferta",
      "módulos",
      "mvp"
    ]
  },
  {
    "name": "CapyAula GPT",
    "slug": "capyaula-gpt",
    "initials": "AU",
    "category": "Educação & Documentação",
    "group": "educacao",
    "status": "planned",
    "url": "",
    "source": "Prompt analisado",
    "headline": "Aulas, minicursos, apostilas e trilhas de aprendizagem.",
    "description": "Transforma conhecimento técnico, produtos, bibliotecas e temas em conteúdo didático com objetivo, roteiro, exemplos, exercícios e perguntas de fixação.",
    "bestFor": [
      "Aulas",
      "Cursos",
      "Apostilas"
    ],
    "outputs": [
      "Roteiro da aula",
      "Exercícios",
      "Material de apoio"
    ],
    "tags": [
      "aula",
      "curso",
      "didática",
      "aprendizagem"
    ]
  },
  {
    "name": "CapyDoc GPT",
    "slug": "capydoc-gpt",
    "initials": "DOC",
    "category": "Educação & Documentação",
    "group": "educacao",
    "status": "planned",
    "url": "",
    "source": "Prompt analisado",
    "headline": "Documentos, guias, manuais e relatórios profissionais.",
    "description": "Transforma informações soltas em documentação clara, organizada e fácil de consultar para produtos, sistemas, relatórios, manuais e materiais explicativos.",
    "bestFor": [
      "Manuais",
      "READMEs",
      "Relatórios"
    ],
    "outputs": [
      "Resumo executivo",
      "Sumário",
      "Checklists"
    ],
    "tags": [
      "documentação",
      "manual",
      "relatório",
      "guia"
    ]
  },
  {
    "name": "CapyPrompt GPT",
    "slug": "capyprompt-gpt",
    "initials": "PM",
    "category": "Educação & Documentação",
    "group": "educacao",
    "status": "planned",
    "url": "",
    "source": "Prompt analisado",
    "headline": "Prompts robustos, reutilizáveis e orientados a resultado.",
    "description": "Melhora pedidos simples ou confusos em prompts para agentes, imagens, análises, fluxos, automações e instruções com regras, contexto e formato de saída.",
    "bestFor": [
      "Prompt master",
      "Prompt de imagem",
      "Agentes GPT"
    ],
    "outputs": [
      "Prompt otimizado",
      "Versão curta",
      "Checklist de qualidade"
    ],
    "tags": [
      "prompt",
      "ia",
      "automação",
      "agentes"
    ]
  },
  {
    "name": "EngenLab IA",
    "slug": "engenlab-ia",
    "initials": "EN",
    "category": "Engenharia & Arquitetura",
    "group": "engenharia",
    "status": "planned",
    "url": "",
    "source": "Prompt analisado",
    "headline": "Engenharia civil aplicada com IA, com foco educacional e produtivo.",
    "description": "Organiza estudos, prompts técnicos, checklists preliminares, relatórios, documentação e roteiros de análise sem substituir responsável técnico.",
    "bestFor": [
      "Estudos técnicos",
      "Checklists",
      "Documentação preliminar"
    ],
    "outputs": [
      "Resumo técnico",
      "Prompt de apoio",
      "Avisos de responsabilidade"
    ],
    "tags": [
      "engenharia civil",
      "ia",
      "checklist",
      "educacional"
    ]
  },
  {
    "name": "Biblioteca 50 Projetos GPT",
    "slug": "biblioteca-50-projetos-gpt",
    "initials": "50",
    "category": "Engenharia & Arquitetura",
    "group": "engenharia",
    "status": "planned",
    "url": "",
    "source": "Prompt analisado",
    "headline": "Guia de uso para projetos-modelo de engenharia com IA.",
    "description": "Ajuda a navegar, estudar e aplicar a Biblioteca 50 Projetos-Modelo com roteiros, checklists, prompts e cuidados técnicos responsáveis.",
    "bestFor": [
      "Bibliotecas técnicas",
      "Trilhas de estudo",
      "Projetos-modelo"
    ],
    "outputs": [
      "Guia de uso",
      "Checklist de interpretação",
      "Prompts sugeridos"
    ],
    "tags": [
      "biblioteca",
      "projetos",
      "engenharia",
      "estudo"
    ]
  },
  {
    "name": "Módulo Estruturas IA",
    "slug": "modulo-estruturas-ia",
    "initials": "ME",
    "category": "Engenharia & Arquitetura",
    "group": "engenharia",
    "status": "planned",
    "url": "",
    "source": "Prompt analisado",
    "headline": "Materiais educacionais sobre estruturas, pranchas e checklists.",
    "description": "Estrutura conteúdos sobre vigas, pilares, lajes, fundações, muros, metálicas, madeira e patologias com linguagem de estudo e referência.",
    "bestFor": [
      "Pranchas conceituais",
      "Checklists técnicos",
      "Estudo estrutural"
    ],
    "outputs": [
      "Conteúdo da prancha",
      "Tabela sugerida",
      "Dados a verificar"
    ],
    "tags": [
      "estruturas",
      "pranchas",
      "engenharia",
      "checklist"
    ]
  },
  {
    "name": "GPT Arquiteto de Interior",
    "slug": "gpt-arquiteto-de-interior",
    "initials": "AI",
    "category": "Engenharia & Arquitetura",
    "group": "engenharia",
    "status": "active",
    "url": "https://chatgpt.com/g/g-69fb74db76188191bb41d82962ac2da7-gpt-arquiteto-de-interior",
    "source": "Descrição inferida pelo nome",
    "headline": "Conceitos de interiores, ambientes, layout e composição visual.",
    "description": "Apoia ideias de decoração, reforma, paleta, materiais, moodboard, distribuição de espaço e apresentação de conceito para ambientes.",
    "bestFor": [
      "Interiores",
      "Reforma",
      "Moodboards"
    ],
    "outputs": [
      "Conceito do ambiente",
      "Paleta e materiais",
      "Layout textual"
    ],
    "tags": [
      "interiores",
      "arquitetura",
      "moodboard",
      "decoração"
    ]
  },
  {
    "name": "GPT CAD/BIM Técnico",
    "slug": "gpt-cad-bim-tecnico",
    "initials": "CAD",
    "category": "Engenharia & Arquitetura",
    "group": "engenharia",
    "status": "active",
    "url": "https://chatgpt.com/g/g-6a0b03a185788191a88010590368df66-gpt-cad-bim-tecnico",
    "source": "Descrição inferida pelo nome",
    "headline": "Organização técnica para CAD, BIM e documentação de projeto.",
    "description": "Apoia nomenclatura, layers, padrões, checklists, documentação e fluxos CAD/BIM para organizar projetos técnicos com mais consistência.",
    "bestFor": [
      "CAD",
      "BIM",
      "Documentação técnica"
    ],
    "outputs": [
      "Checklist técnico",
      "Padrões de organização",
      "Fluxo de projeto"
    ],
    "tags": [
      "cad",
      "bim",
      "documentação",
      "técnico"
    ]
  },
  {
    "name": "GPT Desenrola",
    "slug": "gpt-desenrola",
    "initials": "D",
    "category": "Execução Rápida",
    "group": "execucao",
    "status": "active",
    "url": "https://chatgpt.com/g/g-69fa186904c0819193afb59fcae5b464-gpt-desenrola",
    "source": "Descrição inferida pelo nome",
    "headline": "Destrava demandas, organiza ideias e transforma confusão em ação.",
    "description": "Um agente direto para resolver tarefas do dia a dia: resumir, reescrever, estruturar, planejar, organizar prioridades e criar próximos passos práticos.",
    "bestFor": [
      "Tarefas rápidas",
      "Ideias soltas",
      "Organização diária"
    ],
    "outputs": [
      "Resumo",
      "Checklist",
      "Plano de ação"
    ],
    "tags": [
      "produtividade",
      "tarefas",
      "organização",
      "execução"
    ]
  }
];

const CATEGORY_COPY = {
  "Produto & Interface": {
    text: "Landing pages, UX, dashboards, front-end SaaS e experiências digitais.",
    order: 1
  },
  "Marca & Comunicação": {
    text: "Identidade visual, copy, vendas e peças comerciais para divulgação.",
    order: 2
  },
  "Estratégia & Decisão": {
    text: "Clareza estratégica, ecossistemas, frotas de agentes e priorização.",
    order: 3
  },
  "Produto & Oferta": {
    text: "Estruturação de produtos digitais, serviços, módulos e entregáveis.",
    order: 4
  },
  "Educação & Documentação": {
    text: "Aulas, documentos, guias, prompts e materiais explicativos.",
    order: 5
  },
  "Engenharia & Arquitetura": {
    text: "Engenharia civil, CAD/BIM, interiores, estruturas e projetos-modelo.",
    order: 6
  },
  "Execução Rápida": {
    text: "Demandas imediatas, tarefas soltas, organização e próximos passos.",
    order: 7
  }
};

const state = {
  category: "all",
  status: "all",
  query: ""
};

const grid = document.querySelector("#agentGrid");
const categoryFilters = document.querySelector("#categoryFilters");
const categoryBento = document.querySelector("#categoryBento");
const searchInput = document.querySelector("#searchInput");
const resultSummary = document.querySelector("#resultSummary");
const emptyState = document.querySelector("#emptyState");
const clearFilters = document.querySelector("#clearFilters");
const header = document.querySelector("[data-header]");
const dialog = document.querySelector("#agentDialog");

document.querySelector("#totalAgents").textContent = AGENTS.length;
document.querySelector("#activeAgents").textContent = AGENTS.filter(agent => agent.status === "active").length;

const normalize = (value) =>
  value
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

function getCategories() {
  return [...new Set(AGENTS.map(agent => agent.category))]
    .sort((a, b) => (CATEGORY_COPY[a]?.order || 99) - (CATEGORY_COPY[b]?.order || 99));
}

function createCategoryFilters() {
  const categories = getCategories();
  categoryFilters.innerHTML = "";

  const allButton = document.createElement("button");
  allButton.type = "button";
  allButton.className = "filter-pill is-active";
  allButton.dataset.category = "all";
  allButton.textContent = "Todas";
  categoryFilters.appendChild(allButton);

  categories.forEach(category => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "filter-pill";
    button.dataset.category = category;
    const count = AGENTS.filter(agent => agent.category === category).length;
    button.textContent = `${category} (${count})`;
    categoryFilters.appendChild(button);
  });
}

function createCategoryBento() {
  categoryBento.innerHTML = "";
  getCategories().forEach(category => {
    const count = AGENTS.filter(agent => agent.category === category).length;
    const card = document.createElement("article");
    card.className = "category-card";
    card.innerHTML = `
      <span class="category-count">${count}</span>
      <h3>${category}</h3>
      <p>${CATEGORY_COPY[category]?.text || "Agentes especializados para uma área específica."}</p>
      <button type="button" data-category-jump="${category}">Ver agentes</button>
    `;
    categoryBento.appendChild(card);
  });
}

function matchesAgent(agent) {
  const query = normalize(state.query.trim());
  const content = normalize([
    agent.name,
    agent.category,
    agent.headline,
    agent.description,
    agent.source,
    agent.bestFor.join(" "),
    agent.outputs.join(" "),
    agent.tags.join(" ")
  ].join(" "));

  const categoryMatch = state.category === "all" || agent.category === state.category;
  const statusMatch = state.status === "all" || agent.status === state.status;
  const queryMatch = !query || query.split(/\s+/).every(term => content.includes(term));

  return categoryMatch && statusMatch && queryMatch;
}

function renderAgents() {
  const filtered = AGENTS.filter(matchesAgent);
  grid.innerHTML = "";

  filtered.forEach((agent, index) => {
    const card = document.createElement("article");
    card.className = "agent-card reveal";
    card.style.animationDelay = `${Math.min(index * 0.025, 0.22)}s`;

    const statusLabel = agent.status === "active" ? "Link ativo" : "Link pendente";
    const button = agent.status === "active"
      ? `<a class="btn primary" href="${agent.url}" target="_blank" rel="noopener">Abrir agente</a>`
      : `<span class="btn primary disabled" aria-disabled="true">Link em breve</span>`;

    card.innerHTML = `
      <div class="card-top">
        <span class="agent-avatar">${agent.initials}</span>
        <div class="card-meta">
          <span class="badge ${agent.status}">${statusLabel}</span>
          <span class="badge">${agent.source}</span>
        </div>
      </div>

      <div>
        <h3>${agent.name}</h3>
      </div>

      <p class="headline">${agent.headline}</p>
      <p class="description">${agent.description}</p>

      <div class="card-section">
        <strong>Ideal para</strong>
        <div class="chip-row">
          ${agent.bestFor.map(item => `<span class="chip">${item}</span>`).join("")}
        </div>
      </div>

      <div class="card-section">
        <strong>Entregas</strong>
        <div class="chip-row">
          ${agent.outputs.map(item => `<span class="chip">${item}</span>`).join("")}
        </div>
      </div>

      <div class="card-actions">
        ${button}
        <button class="details-button" type="button" data-details="${agent.slug}" aria-label="Ver detalhes de ${agent.name}">Detalhes</button>
      </div>
    `;

    grid.appendChild(card);
  });

  const total = AGENTS.length;
  const count = filtered.length;
  const categoryText = state.category === "all" ? "todas as categorias" : state.category;
  const statusText = state.status === "active" ? "com link ativo" : state.status === "planned" ? "sem link ainda" : "todos os status";
  resultSummary.textContent = `${count} de ${total} agentes · ${categoryText} · ${statusText}.`;
  emptyState.hidden = count > 0;
}

function setActiveButton(selector, dataKey, value) {
  document.querySelectorAll(selector).forEach(button => {
    button.classList.toggle("is-active", button.dataset[dataKey] === value);
  });
}

function applyCategory(category) {
  state.category = category;
  setActiveButton("[data-category]", "category", category);
  renderAgents();
}

function applyStatus(status) {
  state.status = status;
  setActiveButton("[data-status]", "status", status);
  renderAgents();
}

function openDetails(slug) {
  const agent = AGENTS.find(item => item.slug === slug);
  if (!agent) return;

  document.querySelector("#dialogInitials").textContent = agent.initials;
  document.querySelector("#dialogCategory").textContent = `${agent.category} · ${agent.source}`;
  document.querySelector("#dialogTitle").textContent = agent.name;
  document.querySelector("#dialogHeadline").textContent = agent.headline;
  document.querySelector("#dialogDescription").textContent = agent.description;

  const bestFor = document.querySelector("#dialogBestFor");
  const outputs = document.querySelector("#dialogOutputs");
  bestFor.innerHTML = agent.bestFor.map(item => `<li>${item}</li>`).join("");
  outputs.innerHTML = agent.outputs.map(item => `<li>${item}</li>`).join("");

  const link = document.querySelector("#dialogLink");
  if (agent.status === "active") {
    link.href = agent.url;
    link.textContent = "Abrir agente";
    link.classList.remove("disabled");
    link.setAttribute("aria-disabled", "false");
  } else {
    link.removeAttribute("href");
    link.textContent = "Link em breve";
    link.classList.add("disabled");
    link.setAttribute("aria-disabled", "true");
  }

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }
}

function closeDetails() {
  dialog.close?.();
  dialog.removeAttribute("open");
}

categoryFilters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  applyCategory(button.dataset.category);
});

document.querySelector(".status-filters").addEventListener("click", (event) => {
  const button = event.target.closest("[data-status]");
  if (!button) return;
  applyStatus(button.dataset.status);
});

categoryBento.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category-jump]");
  if (!button) return;
  applyCategory(button.dataset.categoryJump);
  document.querySelector("#catalogo").scrollIntoView({ behavior: "smooth", block: "start" });
});

grid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-details]");
  if (!button) return;
  openDetails(button.dataset.details);
});

document.querySelectorAll("[data-close-dialog]").forEach(button => {
  button.addEventListener("click", closeDetails);
});

dialog.addEventListener("click", (event) => {
  const shell = event.target.closest(".dialog-shell");
  if (!shell) closeDetails();
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderAgents();
});

document.querySelector("#useCaseList").addEventListener("click", (event) => {
  const button = event.target.closest("[data-query]");
  if (!button) return;
  state.query = button.dataset.query;
  searchInput.value = state.query;
  applyCategory("all");
  applyStatus("all");
  document.querySelector("#catalogo").scrollIntoView({ behavior: "smooth", block: "start" });
});

clearFilters.addEventListener("click", () => {
  state.category = "all";
  state.status = "all";
  state.query = "";
  searchInput.value = "";
  setActiveButton("[data-category]", "category", "all");
  setActiveButton("[data-status]", "status", "all");
  renderAgents();
});

window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 10);
}, { passive: true });

createCategoryFilters();
createCategoryBento();
renderAgents();
