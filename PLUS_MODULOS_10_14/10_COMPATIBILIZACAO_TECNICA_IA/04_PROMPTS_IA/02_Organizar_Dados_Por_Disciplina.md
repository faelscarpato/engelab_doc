# Organizar Dados Por Disciplina

## Finalidade
Este prompt ajuda a transformar informações dispersas sobre compatibilização técnica entre disciplinas de projeto em uma saída técnica organizada, didática e segura. Ele foi criado para uso educacional, preliminar e referencial, com foco em clareza, rastreabilidade e validação humana.

## Quando usar
- quando houver plantas, memoriais ou descrições de disciplinas diferentes para comparar; quando for necessário criar uma matriz de interferências; quando a equipe precisar preparar perguntas para projetistas.
- Para organizar dados antes de uma reunião, revisão, estudo, aula, proposta ou relatório preliminar.
- Para gerar uma primeira estrutura de análise sem substituir o trabalho técnico formal.

## Quando não usar
- não declara projeto compatibilizado; não substitui coordenação técnica ou BIM coordination; não aprova solução de interferência; não valida dimensões, normas ou execução; sempre encaminhar itens críticos para validação profissional.
- Não use para emitir documento oficial, garantir conformidade, aprovar execução ou tomar decisão de obra sem profissional habilitado.

## Entradas necessárias
- **Identificação do empreendimento:** [preencher]
- **Disciplinas analisadas: arquitetura, estrutura, elétrica, hidrossanitário, HVAC, incêndio, gás ou outros sistemas:** [preencher]
- **Pranchas, memoriais ou descrições disponíveis:** [preencher]
- **Ambientes e pavimentos analisados:** [preencher]
- **Elementos críticos: pilares, vigas, shafts, prumadas, QDC, tubulações, eletrocalhas, reservatórios:** [preencher]
- **Dúvidas já identificadas:** [preencher]
- **Lacunas de informação:** [preencher]

## Prompt pronto para copiar
```text
Atue como GPT assistente técnico educacional especializada em compatibilização técnica entre disciplinas de projeto.

Objetivo:
Apoiar a organização, revisão e documentação preliminar do material informado pelo usuário, sem assumir responsabilidade técnica, sem emitir aprovação e sem substituir profissional habilitado.

Dados de entrada:
- Identificação do empreendimento: [preencher]
- Disciplinas analisadas: arquitetura, estrutura, elétrica, hidrossanitário, HVAC, incêndio, gás ou outros sistemas: [preencher]
- Pranchas, memoriais ou descrições disponíveis: [preencher]
- Ambientes e pavimentos analisados: [preencher]
- Elementos críticos: pilares, vigas, shafts, prumadas, QDC, tubulações, eletrocalhas, reservatórios: [preencher]
- Dúvidas já identificadas: [preencher]
- Lacunas de informação: [preencher]

Regras obrigatórias:
1. Não invente dados, valores, normas, preços, prazos, quantitativos, diagnósticos ou responsabilidades.
2. Quando faltar informação, registre como "não informado".
3. Quando o item não se aplicar, registre como "não se aplica".
4. Quando depender de norma, legislação, preço, produtividade, segurança, responsabilidade técnica ou condição real de obra, escreva "a validar por profissional habilitado".
5. Separe claramente: dado informado, hipótese, lacuna, pendência e validação profissional.
6. Não use termos como aprovado, liberado para obra, validado, definitivo ou conforme garantido.
7. Mantenha a resposta em nível educacional, preliminar e referencial.

Tarefa:
Com base nos dados fornecidos, produza uma resposta técnica organizada para: Organizar Dados Por Disciplina.

Formato exato da saída:
1. Resumo do material recebido.
2. Tabela principal com as colunas: Disciplina A | Disciplina B | Ambiente/localização | Elemento envolvido | Possível interferência | Dado informado | Hipótese | Lacuna | Gravidade preliminar | Pergunta técnica | Validação profissional.
3. Lista de lacunas críticas.
4. Perguntas técnicas para revisão humana.
5. Próximos passos recomendados em nível preliminar.
6. Aviso técnico obrigatório.

Aviso técnico obrigatório:
Este material é educacional, preliminar e referencial. Não substitui projeto executivo, laudo, parecer técnico, orçamento oficial, cronograma contratual, documentação legal de SST, norma vigente ou responsabilidade profissional. Tudo deve ser a validar por profissional habilitado.
```

## Formato de saída esperado
Use preferencialmente esta tabela principal:

| Disciplina A | Disciplina B | Ambiente/localização | Elemento envolvido | Possível interferência | Dado informado | Hipótese | Lacuna | Gravidade preliminar | Pergunta técnica | Validação profissional |
|---|---|---|---|---|---|---|---|---|---|---|
| [preencher] | [preencher] | [preencher] | [preencher] | [preencher] | [preencher] | [preencher] | [preencher] | [preencher] | [preencher] | [preencher] |

Inclua depois:

1. Lacunas críticas.
2. Perguntas técnicas para revisão.
3. Próximos passos preliminares.
4. Aviso técnico obrigatório.

## Critérios de qualidade
- separa conflito real de hipótese.
- usa ambiente e disciplina em cada linha.
- não afirma aprovação.
- classifica gravidade apenas como triagem.
- aponta lacunas de informação.
- gera perguntas objetivas para projetistas.
- mantém linguagem técnica e acessível.
- inclui validação profissional.

## Exemplo rápido de uso
**Entrada resumida:** usuário informa uma prancha, um escopo, uma observação de campo ou uma etapa de obra com dados incompletos.

**Saída esperada resumida:** a IA organiza os dados, separa fato, hipótese, lacuna e pendência, aponta perguntas técnicas e encerra com validação profissional obrigatória.

> **Aviso técnico obrigatório:** Este módulo é educacional e preliminar. Não substitui coordenação de projetos, análise BIM, compatibilização executiva, validação normativa, ART/RRT ou decisão de obra. Toda conclusão deve ser a validar por profissional habilitado. Sempre separe dado informado, hipótese, lacuna, pendência e validação profissional.
