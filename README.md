# EngenLab Doc — Biblioteca de Engenharia Civil com IA

![GitHub last commit](https://img.shields.io/github/last-commit/faelscarpato/engelab_doc)
![GitHub repo size](https://img.shields.io/github/repo-size/faelscarpato/engelab_doc)
![GitHub language count](https://img.shields.io/github/languages/count/faelscarpato/engelab_doc)

Biblioteca técnica e educacional de engenharia civil com projetos-modelo, prompts de IA, checklists, matrizes de controle, materiais referenciais e um catálogo estático de agentes CapyGPTs.

> **Aviso importante:** este repositório é um material de apoio, estudo, documentação e organização técnica. Ele **não substitui** análise profissional, responsabilidade técnica, ART/RRT, validação normativa, revisão por profissional habilitado ou conferência de projeto antes de uso real em obra.

---

## Sumário

- [Visão geral](#visão-geral)
- [O que este repositório entrega](#o-que-este-repositório-entrega)
- [Público-alvo](#público-alvo)
- [Estrutura do repositório](#estrutura-do-repositório)
- [Como usar](#como-usar)
- [Catálogo CapyGPTs](#catálogo-capygpts)
- [Links principais](#links-principais)
- [Avisos técnicos e limites de uso](#avisos-técnicos-e-limites-de-uso)
- [Licença recomendada](#licença-recomendada)
- [Contribuição](#contribuição)
- [SEO e tópicos sugeridos](#seo-e-tópicos-sugeridos)

---

## Visão geral

O **EngenLab Doc** reúne materiais referenciais para apoiar estudo, organização e documentação de projetos de engenharia civil com auxílio de inteligência artificial.

O repositório combina:

- biblioteca de projetos-modelo por disciplina;
- prompts técnicos para uso com ferramentas de IA;
- checklists e memoriais conceituais;
- arquivos referenciais em PDF, imagem e DWG;
- matrizes de controle;
- módulos adicionais para cálculo estrutural, compatibilização, orçamento, planejamento, vistorias, segurança do trabalho e estruturas;
- uma landing page estática em HTML, CSS e JavaScript para o catálogo **CapyGPTs**.

O objetivo é facilitar o acesso a materiais organizados, reutilizáveis e documentados para estudo técnico responsável.

---

## O que este repositório entrega

### Biblioteca de projetos-modelo

A biblioteca está organizada em três grandes áreas:

| Área | Faixa de projetos | Conteúdo |
|---|---:|---|
| Estrutural | 01 a 20 | Projetos e materiais referenciais de estruturas |
| Elétrico | 21 a 35 | Projetos e materiais referenciais de instalações elétricas |
| Hidrossanitário | 36 a 50 | Projetos e materiais referenciais de água fria, água quente, esgoto, ventilação e sistemas relacionados |

Cada projeto-modelo segue uma organização semelhante, com pastas para:

- PDF referencial;
- imagem de prancha A3;
- DWG referencial;
- memorial descritivo conceitual;
- checklist de estudo;
- prompt de geração;
- aviso técnico.

### Prompts e IA aplicada

O repositório inclui prompts modulares para apoiar tarefas como:

- geração de documentação técnica;
- estruturação de memoriais;
- estudo de projetos;
- análise conceitual;
- compatibilização;
- apoio a cálculo estrutural;
- orçamento e quantitativos;
- planejamento de obra;
- vistorias e relatórios técnicos;
- segurança do trabalho em obras.

### Catálogo CapyGPTs

O diretório [`capygpts`](./capygpts) contém uma página estática para apresentar agentes GPT especializados, com busca, filtros, categorias e cards de agentes.

---

## Público-alvo

Este repositório pode ser útil para:

- estudantes de engenharia civil;
- engenheiros e projetistas em fase de estudo ou organização documental;
- arquitetos e profissionais técnicos que trabalham com compatibilização;
- criadores de conteúdo técnico;
- professores, mentores e instrutores;
- usuários de IA interessados em prompts aplicados à engenharia civil;
- mantenedores de bibliotecas técnicas e materiais educacionais.

---

## Estrutura do repositório

```text
engelab_doc/
├── 00_0_Manual Operacional/
├── 00_GUIA_DE_USO/
├── 00_RELATORIO_PROFISSÃO_ENGENHARIA/
├── 01_ESTRUTURAL/
├── 02_ELETRICO/
├── 03_HIDROSSANITARIO/
├── 04_PROMPTS_MODULARES/
├── 05_COMERCIAL/
├── 07_MATRIZ_E_CONTROLE/
├── 08_BONUS/
├── 09_CALCULO_ESTRUTURAL_IA/
├── PLUS_MODULOS_10_14/
├── PLUS_MODULO_15_ESTRUTURAS/
└── capygpts/
```

| Caminho | Função |
|---|---|
| [`00_0_Manual Operacional`](./00_0_Manual%20Operacional) | Materiais operacionais gerais da biblioteca |
| [`00_GUIA_DE_USO`](./00_GUIA_DE_USO) | Guias, avisos técnicos, índice, checklist e termos de uso |
| [`00_RELATORIO_PROFISSÃO_ENGENHARIA`](./00_RELATORIO_PROFISSÃO_ENGENHARIA) | Relatórios e arquivos de apoio sobre engenharia e IA |
| [`01_ESTRUTURAL`](./01_ESTRUTURAL) | Projetos-modelo estruturais 01 a 20 |
| [`02_ELETRICO`](./02_ELETRICO) | Projetos-modelo elétricos 21 a 35 |
| [`03_HIDROSSANITARIO`](./03_HIDROSSANITARIO) | Projetos-modelo hidrossanitários 36 a 50 |
| [`04_PROMPTS_MODULARES`](./04_PROMPTS_MODULARES) | Prompts técnicos por disciplina e por ferramenta |
| [`05_COMERCIAL`](./05_COMERCIAL) | Materiais comerciais e FAQ |
| [`07_MATRIZ_E_CONTROLE`](./07_MATRIZ_E_CONTROLE) | Matriz dos 50 projetos em CSV e Markdown |
| [`08_BONUS`](./08_BONUS) | Materiais extras, símbolos referenciais, checklists e prompts |
| [`09_CALCULO_ESTRUTURAL_IA`](./09_CALCULO_ESTRUTURAL_IA) | Módulo de apoio ao cálculo estrutural com IA |
| [`PLUS_MODULOS_10_14`](./PLUS_MODULOS_10_14) | Módulos adicionais de IA aplicada à engenharia e obra |
| [`PLUS_MODULO_15_ESTRUTURAS`](./PLUS_MODULO_15_ESTRUTURAS) | Módulo adicional focado em estruturas |
| [`capygpts`](./capygpts) | Landing page estática do catálogo CapyGPTs |

---

## Como usar

### 1. Clonar o repositório

```bash
git clone https://github.com/faelscarpato/engelab_doc.git
cd engelab_doc
```

### 2. Navegar pela biblioteca

Escolha uma disciplina:

```text
01_ESTRUTURAL/
02_ELETRICO/
03_HIDROSSANITARIO/
```

Depois abra o projeto desejado e consulte os materiais disponíveis.

Exemplo:

```text
01_ESTRUTURAL/01_Residencia_terrea_70_m2/
```

Estrutura típica de um projeto-modelo:

```text
01_PDF_Referencial/
02_Imagem_Prancha_A3/
03_DWG_Referencial/
04_Memorial_Descritivo_Conceitual/
05_Checklist_De_Estudo/
06_Prompt_De_Geracao/
07_Aviso_Tecnico/
```

### 3. Usar a matriz de controle

Acesse:

```text
07_MATRIZ_E_CONTROLE/Matriz_50_Projetos.csv
07_MATRIZ_E_CONTROLE/Matriz_50_Projetos.md
```

Use a matriz para localizar projetos, verificar disciplinas e manter controle do acervo.

### 4. Usar prompts técnicos

Acesse:

```text
04_PROMPTS_MODULARES/
```

Os prompts podem ser adaptados para ferramentas de IA, sempre com revisão técnica humana.

### 5. Consultar módulos adicionais

Módulos úteis para aprofundamento:

```text
09_CALCULO_ESTRUTURAL_IA/
PLUS_MODULOS_10_14/
PLUS_MODULO_15_ESTRUTURAS/
```

---

## Catálogo CapyGPTs

O diretório [`capygpts`](./capygpts) contém uma landing page estática criada com:

- HTML;
- CSS;
- JavaScript puro.

Arquivos principais:

```text
capygpts/index.html
capygpts/styles.css
capygpts/script.js
```

### Executar localmente

Opção simples com Python:

```bash
python3 -m http.server 8000 --directory capygpts
```

Depois acesse no navegador:

```text
http://localhost:8000
```

Também é possível abrir diretamente:

```text
capygpts/index.html
```

### Publicar no GitHub Pages

Uma opção recomendada é publicar o diretório `capygpts` como site estático via GitHub Pages.

Fluxo sugerido:

1. Acesse as configurações do repositório.
2. Entre em **Pages**.
3. Configure a origem de publicação.
4. Publique a pasta ou branch desejada.
5. Adicione o link publicado no campo **About** do repositório.

---

## Links principais

- [Repositório no GitHub](https://github.com/faelscarpato/engelab_doc)
- [Manual operacional](./00_0_Manual%20Operacional)
- [Guia de uso](./00_GUIA_DE_USO)
- [Projetos estruturais](./01_ESTRUTURAL)
- [Projetos elétricos](./02_ELETRICO)
- [Projetos hidrossanitários](./03_HIDROSSANITARIO)
- [Prompts modulares](./04_PROMPTS_MODULARES)
- [Matriz e controle](./07_MATRIZ_E_CONTROLE)
- [Módulo de cálculo estrutural com IA](./09_CALCULO_ESTRUTURAL_IA)
- [Módulos IA 10 a 14](./PLUS_MODULOS_10_14)
- [Módulo 15 de estruturas](./PLUS_MODULO_15_ESTRUTURAS)
- [CapyGPTs](./capygpts)

---

## Avisos técnicos e limites de uso

Este repositório deve ser utilizado com responsabilidade.

### O material é

- referência educacional;
- apoio para estudo técnico;
- apoio para organização documental;
- base para prompts e fluxos de IA;
- material auxiliar para compreensão de projetos e disciplinas.

### O material não é

- projeto executivo automaticamente aprovado;
- substituto de engenheiro responsável;
- substituto de ART/RRT;
- garantia de conformidade com normas técnicas;
- garantia de aprovação em prefeitura, concessionária ou órgão fiscalizador;
- ferramenta autônoma de cálculo, dimensionamento ou validação técnica;
- autorização para execução de obra sem revisão profissional.

### Antes de qualquer uso real

Antes de adaptar qualquer material a uma obra, cliente ou entrega profissional:

1. revise todas as informações técnicas;
2. verifique normas aplicáveis;
3. confira premissas de projeto;
4. valide cargas, dimensões, materiais e critérios;
5. consulte profissional habilitado;
6. registre responsabilidade técnica quando aplicável;
7. confirme compatibilidade com legislação, concessionárias e órgãos locais.

### Sobre uso de IA

Ferramentas de IA podem gerar respostas incompletas, imprecisas ou incompatíveis com normas técnicas. Todo conteúdo produzido com IA deve passar por revisão humana especializada.

---

## Tecnologias e formatos

Este repositório usa principalmente:

- Markdown;
- TXT;
- CSV;
- JSON;
- PDF;
- DWG;
- HTML;
- CSS;
- JavaScript.

Não há dependências de backend ou instalação obrigatória identificada para navegar pelos materiais. O site `capygpts` pode ser executado como página estática.

---

## Licença recomendada

Este repositório reúne código, documentação, prompts, PDFs, imagens, arquivos CAD e materiais educacionais. Por isso, recomenda-se avaliar uma estratégia de licenciamento separando código e conteúdo.

Sugestão prática:

| Tipo de conteúdo | Licença sugerida |
|---|---|
| Código do diretório `capygpts` | MIT License |
| Documentação, prompts, textos, checklists e matrizes | Creative Commons Attribution 4.0 International — CC BY 4.0 |
| PDFs, DWGs e imagens | Confirmar autoria e direitos antes de definir licença pública |

Alternativas possíveis:

- Apache-2.0 para código;
- CC BY-SA 4.0 para exigir compartilhamento pela mesma licença;
- CC BY-NC 4.0 se a intenção for restringir uso comercial;
- todos os direitos reservados para materiais que não possam ser reutilizados.

> Esta recomendação é técnica e prática. Ela não substitui orientação jurídica. Antes de publicar uma licença definitiva, confirme autoria, direitos de uso e origem de todos os materiais.

---

## Contribuição

Contribuições são bem-vindas quando alinhadas à organização técnica do repositório.

Sugestões de contribuição:

- correção de links quebrados;
- melhorias de documentação;
- padronização de nomes de arquivos;
- revisão de prompts;
- criação de índices navegáveis;
- validação da matriz de projetos;
- melhoria do catálogo `capygpts`;
- criação de exemplos de uso;
- revisão de avisos técnicos.

Arquivos recomendados para evolução open-source:

```text
LICENSE
CONTRIBUTING.md
SECURITY.md
CHANGELOG.md
CODE_OF_CONDUCT.md
.github/ISSUE_TEMPLATE/
.github/PULL_REQUEST_TEMPLATE.md
```

---

## Roadmap sugerido

- [ ] Definir licença do repositório.
- [ ] Publicar o catálogo `capygpts` no GitHub Pages.
- [ ] Configurar descrição, website e tópicos no GitHub.
- [ ] Criar release inicial `v1.0.0`.
- [ ] Criar índice HTML pesquisável para os 50 projetos.
- [ ] Separar dados do `capygpts` em JSON.
- [ ] Adicionar screenshots e exemplos visuais.
- [ ] Criar script de validação de links.
- [ ] Criar script de inventário entre matriz e pastas.
- [ ] Adicionar guia de contribuição.
- [ ] Adicionar política de segurança.

---

## SEO e tópicos sugeridos

### Descrição para o campo About do GitHub

```text
Biblioteca educacional de engenharia civil com 50 projetos-modelo, prompts de IA, checklists técnicos, matrizes e catálogo CapyGPTs.
```

### Tópicos sugeridos para GitHub

```text
engenharia-civil
civil-engineering
inteligencia-artificial
ai
prompts
gpt
engenharia-com-ia
projetos-modelo
calculo-estrutural
estruturas
projeto-eletrico
hidrossanitario
cad
dwg
bim
documentacao-tecnica
html-css-javascript
github-pages
open-education
checklists
```

### Palavras-chave principais

- engenharia civil com IA;
- projetos modelo engenharia civil;
- prompts engenharia civil;
- biblioteca engenharia civil;
- cálculo estrutural com IA;
- projetos estruturais modelo;
- projeto elétrico residencial modelo;
- projeto hidrossanitário modelo;
- DWG engenharia civil;
- checklists de engenharia.

### Meta title sugerido

```text
EngenLab Doc — Engenharia Civil com IA e 50 Projetos-Modelo
```

### Meta description sugerida

```text
Biblioteca educacional de engenharia civil com 50 projetos-modelo, prompts de IA, checklists, matrizes, materiais CAD/DWG e catálogo CapyGPTs para estudo técnico responsável.
```

---

## Status do projeto

O repositório está em evolução e pode conter materiais referenciais, conceituais ou em processo de organização.

Antes de usar qualquer conteúdo em contexto profissional, valide tecnicamente cada material.

---

## Autor

Repositório mantido por [faelscarpato](https://github.com/faelscarpato).
