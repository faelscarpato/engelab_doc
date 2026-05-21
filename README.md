# CapyGPTs — Central de Agentes Especializados

Landing page estática criada em HTML, CSS e JavaScript puro.

## Arquivos

- `index.html` — estrutura da página
- `styles.css` — direção visual, responsividade e componentes
- `script.js` — dados dos agentes, filtros, busca e modal de detalhes

## O que mudou nesta versão

- Categorias reorganizadas por situação de uso.
- Descrições dos agentes reescritas com base no Prompt Master enviado.
- Interface menos “template de IA”: linguagem visual editorial, cards com hierarquia real, fundo orgânico, tipografia mista e menos gradiente neon.
- Busca por palavra-chave.
- Filtros por categoria e status.
- Cards com status “Link ativo” ou “Link pendente”.
- Modal de detalhes por agente.
- Estrutura pronta para publicar em hospedagem estática.

## Como editar agentes

Abra `script.js` e edite o array `AGENTS`.

Para ativar um agente sem link:

1. Encontre o agente.
2. Mude `"status": "planned"` para `"status": "active"`.
3. Preencha `"url": "https://chatgpt.com/g/..."`.

## Observação

Os prompts completos não foram publicados na página. Eles foram usados apenas como base para criar categorias, descrições, entregas e posicionamento dos cards.
