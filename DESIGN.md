---
version: alpha
name: Guia de Campo
description: Pokédex web sobre a PokeAPI, desenhada como um guia de campo naturalista — índice de espécies, pranchas de detalhe e linhagens evolutivas.

colors:
  primary: "#6F3F22"
  primary-strong: "#552B16"
  primary-wash: "#F1D9C7"
  secondary: "#686259"
  neutral: "#EEE6D9"
  surface: "#F6F2E8"
  on-surface: "#1C1F18"
  border: "#D5CDBE"
  error: "#9B411E"
  type-normal: "#AFA38C"
  type-fire: "#DA6425"
  type-water: "#3B6EB9"
  type-grass: "#609B4A"
  type-electric: "#EEC743"
  type-ice: "#92D1D8"
  type-fighting: "#953037"
  type-poison: "#8F4A93"
  type-ground: "#D6A960"
  type-flying: "#929FCE"
  type-psychic: "#D05386"
  type-bug: "#8F9F3D"
  type-rock: "#917552"
  type-ghost: "#725D92"
  type-dragon: "#3C46A3"
  type-dark: "#4F3E33"
  type-steel: "#7C8F9D"
  type-fairy: "#E4A6C0"

typography:
  display:
    fontFamily: Source Serif 4
    fontSize: 64px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: -0.025em
    fontVariation: "'opsz' 60"
  headline-lg:
    fontFamily: Source Serif 4
    fontSize: 36px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: -0.015em
    fontVariation: "'opsz' 36"
  headline-md:
    fontFamily: Source Serif 4
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Source Serif 4
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.2
  taxon-italic:
    fontFamily: Source Serif 4
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.35
  body-lg:
    fontFamily: Source Serif 4
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontFamily: Source Serif 4
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.55
  caption:
    fontFamily: Source Serif 4
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.4
  label-lg:
    fontFamily: Archivo Narrow
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.06em
    fontFeature: "'case' 1"
  label-caps:
    fontFamily: Archivo Narrow
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.1em
    fontFeature: "'case' 1"
  ui-md:
    fontFamily: Archivo Narrow
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.4
  data-lg:
    fontFamily: Archivo Narrow
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: 0.02em
    fontFeature: "'tnum' 1"
  data-md:
    fontFamily: Archivo Narrow
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.4
    fontFeature: "'tnum' 1"
  data-sm:
    fontFamily: Archivo Narrow
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: 0.02em
    fontFeature: "'tnum' 1"

rounded:
  none: 0px
  sm: 2px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  xxl: 96px
  gutter: 24px
  margin: 48px
  margin-mobile: 16px
  columns: 12
  cell-min: 168px

components:
  page:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
  divider:
    backgroundColor: "{colors.border}"
    height: 1px
  chapter-title:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.headline-lg}"
  kicker:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.secondary}"
    typography: "{typography.label-caps}"
  specimen-cell:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.headline-sm}"
    rounded: "{rounded.none}"
    padding: "{spacing.md}"
  specimen-cell-hover:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
  specimen-number:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.secondary}"
    typography: "{typography.data-sm}"
  plate:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  plate-number:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    typography: "{typography.data-lg}"
  plate-caption:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.secondary}"
    typography: "{typography.caption}"
  species-name:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.display}"
  taxon:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.secondary}"
    typography: "{typography.taxon-italic}"
  flavor-text:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-lg}"
  section-heading:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.headline-md}"
  caption:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.secondary}"
    typography: "{typography.caption}"
  link:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
  link-hover:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary-strong}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md}"
    height: 44px
  button-primary-hover:
    backgroundColor: "{colors.primary-strong}"
    textColor: "{colors.surface}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md}"
    height: 44px
  button-secondary-hover:
    backgroundColor: "{colors.primary-wash}"
    textColor: "{colors.primary-strong}"
  input-search:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.ui-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
    height: 44px
  input-placeholder:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.secondary}"
    typography: "{typography.ui-md}"
  input-error:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.error}"
    typography: "{typography.ui-md}"
  error-message:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.error}"
    typography: "{typography.body-md}"
  filter-option:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.ui-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs}"
  filter-option-selected:
    backgroundColor: "{colors.primary-wash}"
    textColor: "{colors.on-surface}"
    typography: "{typography.ui-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs}"
  filter-option-disabled:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.secondary}"
    typography: "{typography.ui-md}"
  type-key:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-caps}"
  type-swatch-normal:
    backgroundColor: "{colors.type-normal}"
    size: 10px
    rounded: "{rounded.none}"
  type-swatch-fire:
    backgroundColor: "{colors.type-fire}"
    size: 10px
    rounded: "{rounded.none}"
  type-swatch-water:
    backgroundColor: "{colors.type-water}"
    size: 10px
    rounded: "{rounded.none}"
  type-swatch-grass:
    backgroundColor: "{colors.type-grass}"
    size: 10px
    rounded: "{rounded.none}"
  type-swatch-electric:
    backgroundColor: "{colors.type-electric}"
    size: 10px
    rounded: "{rounded.none}"
  type-swatch-ice:
    backgroundColor: "{colors.type-ice}"
    size: 10px
    rounded: "{rounded.none}"
  type-swatch-fighting:
    backgroundColor: "{colors.type-fighting}"
    size: 10px
    rounded: "{rounded.none}"
  type-swatch-poison:
    backgroundColor: "{colors.type-poison}"
    size: 10px
    rounded: "{rounded.none}"
  type-swatch-ground:
    backgroundColor: "{colors.type-ground}"
    size: 10px
    rounded: "{rounded.none}"
  type-swatch-flying:
    backgroundColor: "{colors.type-flying}"
    size: 10px
    rounded: "{rounded.none}"
  type-swatch-psychic:
    backgroundColor: "{colors.type-psychic}"
    size: 10px
    rounded: "{rounded.none}"
  type-swatch-bug:
    backgroundColor: "{colors.type-bug}"
    size: 10px
    rounded: "{rounded.none}"
  type-swatch-rock:
    backgroundColor: "{colors.type-rock}"
    size: 10px
    rounded: "{rounded.none}"
  type-swatch-ghost:
    backgroundColor: "{colors.type-ghost}"
    size: 10px
    rounded: "{rounded.none}"
  type-swatch-dragon:
    backgroundColor: "{colors.type-dragon}"
    size: 10px
    rounded: "{rounded.none}"
  type-swatch-dark:
    backgroundColor: "{colors.type-dark}"
    size: 10px
    rounded: "{rounded.none}"
  type-swatch-steel:
    backgroundColor: "{colors.type-steel}"
    size: 10px
    rounded: "{rounded.none}"
  type-swatch-fairy:
    backgroundColor: "{colors.type-fairy}"
    size: 10px
    rounded: "{rounded.none}"
  stat-label:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.secondary}"
    typography: "{typography.label-caps}"
  stat-value:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.data-md}"
  stat-total:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.data-lg}"
  stat-track:
    backgroundColor: "{colors.border}"
    height: 4px
  stat-fill:
    backgroundColor: "{colors.on-surface}"
    height: 4px
  evolution-stage:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.headline-sm}"
    padding: "{spacing.sm}"
  evolution-stage-current:
    backgroundColor: "{colors.primary-wash}"
    textColor: "{colors.on-surface}"
    typography: "{typography.headline-sm}"
    padding: "{spacing.sm}"
  evolution-condition:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.secondary}"
    typography: "{typography.data-sm}"
  skeleton:
    backgroundColor: "{colors.neutral}"
    rounded: "{rounded.none}"
  tooltip:
    backgroundColor: "{colors.on-surface}"
    textColor: "{colors.surface}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
---

# Guia de Campo

## Overview

Esta Pokédex é tratada como um **guia de campo naturalista**, não como um aparelho de jogo. A referência é a tradição dos guias de identificação: as pranchas de Audubon, os guias Peterson, as cartas topográficas do USGS. Nesses livros cada espécie recebe uma prancha numerada, uma legenda curta e medidas exatas, e o leitor aprende a reconhecer comparando. Os dados da PokeAPI já têm esse formato (número nacional, gênero, altura, peso, linhagem) e o design só precisa assumir isso.

**Quem usa e como.** Há dois perfis. O primeiro é o fã que chega sabendo o que procura, com um nome ou número na cabeça, e quer a prancha em dois toques. O segundo é o curioso que folheia o índice por geração ou tipo. A sessão típica alterna entre varrer o índice depressa e parar numa prancha para ler com calma, e por isso o sistema tem duas densidades deliberadamente diferentes (ver Layout).

**As três tintas.** O sistema inteiro se organiza em três camadas, e essa é a regra mais importante do arquivo:

1. **Impresso:** tinta preta-esverdeada (`on-surface`) para todo texto e todo dado. É o livro em si.
2. **Anotado à mão:** tinta ferrogálica envelhecida (`primary`) para tudo que é clicável. Se é marrom, responde ao toque. Se não é clicável, não pode ser marrom.
3. **Aquarela:** os 18 pigmentos de tipo, que aparecem *apenas* como chaves de legenda: um quadrado de 10px contornado em tinta ao lado do nome do tipo, como na legenda de um mapa.

Quase toda a saturação da tela vem das próprias criaturas, ou seja, da arte oficial sobre papel creme. A interface ao redor é deliberadamente quieta para não competir com ela.

**O que esta direção abandona:** a energia vibrante "de jogo". Não há fundos coloridos por tipo, gradientes, Pokébola nem barras de status que se enchem com animação. Quem espera o visual de aplicativo oficial vai achar o site sóbrio, e essa é a troca. Em compensação o sistema ganha legibilidade, uma identidade que não se confunde com os milhares de tutoriais de Pokédex e distância da identidade visual registrada da franquia, que importa num projeto de fã.

**Modo: apenas claro.** Papel não tem modo escuro. Os pigmentos foram calibrados para fundo creme e não sobrevivem invertidos. Não implemente `prefers-color-scheme: dark`.

## Colors

Cada cor foi amostrada de um material real de quem desenha e imprime história natural: papel, grafite, tinta de escrever, pigmento de aquarela. As escalas foram construídas em OKLCH, com os neutros todos aquecidos (matiz ≈ 78–88, croma entre 0,014 e 0,022). Nenhum valor do sistema tem R = G = B, e não há `#FFFFFF` nem `#000000` em lugar nenhum.

### Papel e tinta

- **Surface (#F6F2E8):** *papel de trapo envelhecido.* O fundo de todas as páginas. Creme com um traço de amarelo, como o miolo de um livro de campo que já pegou sol.
- **Neutral (#EEE6D9):** *papel de prancha.* Meio passo mais escuro e um pouco mais quente. Nos livros antigos as pranchas ilustradas eram impressas num papel mais encorpado e coladas ao miolo, e aqui é a mesma coisa: a prancha de detalhe e o hover das células do índice usam este tom. É o único recurso de "elevação" do sistema.
- **Border (#D5CDBE):** *fio de pauta.* Linhas finas de 1px que separam células, linhas de tabela e seções. É decorativo, com 1,4:1 contra o papel, e por isso nunca serve de borda de controle (ver Shapes).
- **Secondary (#686259):** *grafite.* Metadados, números de espécie no índice, legendas, rótulos de atributo, placeholder e bordas de campo de busca. Passa 5,4:1 no papel e 4,9:1 na prancha.
- **On-surface (#1C1F18):** *tinta de impressão.* Quase preto, com um traço de verde-oliva que o assenta no papel creme em vez de parecer colado por cima. Todo texto impresso, as barras de atributo e os traços da árvore de evolução. É também o fundo do tooltip, a única inversão do sistema.

### Tinta ferrogálica: a camada interativa

- **Primary (#6F3F22):** *tinta ferrogálica envelhecida.* É a tinta dos cadernos de campo do século XIX: sai quase preta da pena e oxida para esse marrom com os anos. Tem **um único trabalho**: marcar o que é clicável (links, botões, nomes de espécie na árvore de evolução e o anel de foco). Contraste de 7,8:1 no papel, então serve como texto e como fundo de botão sem precisar de variante.
- **Primary-strong (#552B16):** a mesma tinta mais carregada. Só existe para hover e estado pressionado.
- **Primary-wash (#F1D9C7):** *aguada de ferrogálica.* A tinta diluída em água. Marca **seleção**: filtro ativo, estágio atual na cadeia de evolução e hover do botão secundário. Nunca é usada como decoração.

### Erro

- **Error (#9B411E):** *corrosão de tinta.* Tinta ferrogálica mal balanceada corrói o papel e deixa um halo de ferrugem. O erro vem do mesmo ferro da camada interativa e não de uma paleta de alerta genérica. Aparece apenas como texto (5,9:1) e como borda de campo inválido, sempre acompanhado de ícone e mensagem.

### Pigmentos de tipo

Os 18 tipos são uma **paleta categórica**, não acentos. Cada um foi derivado de um pigmento de aquarela real, mantendo a família de matiz que os fãs já reconhecem (fogo é laranja, água é azul), mas com croma de aquarela e não de néon. Não são as "cores de tipo" que circulam pela internet. O sufixo de cada token é exatamente o slug que a API devolve em `types[].type.name`, então a cor de um tipo é sempre `type-${slug}`.

| Token | Tipo (pt-BR) | Pigmento de referência | Hex |
|---|---|---|---|
| `type-normal` | Normal | linho cru | #AFA38C |
| `type-fire` | Fogo | laranja de cádmio | #DA6425 |
| `type-water` | Água | azul ultramar | #3B6EB9 |
| `type-grass` | Planta | verde-seiva | #609B4A |
| `type-electric` | Elétrico | goma-guta | #EEC743 |
| `type-ice` | Gelo | cerúleo claro | #92D1D8 |
| `type-fighting` | Lutador | garança escura | #953037 |
| `type-poison` | Venenoso | violeta de cobalto | #8F4A93 |
| `type-ground` | Terrestre | ocre amarelo | #D6A960 |
| `type-flying` | Voador | esmalte (smalt) | #929FCE |
| `type-psychic` | Psíquico | carmim de cochonilha | #D05386 |
| `type-bug` | Inseto | terra verde | #8F9F3D |
| `type-rock` | Pedra | úmbria crua | #917552 |
| `type-ghost` | Fantasma | malva de Perkin | #725D92 |
| `type-dragon` | Dragão | índigo natural | #3C46A3 |
| `type-dark` | Sombrio | sépia (tinta de siba) | #4F3E33 |
| `type-steel` | Aço | cinza de Payne | #7C8F9D |
| `type-fairy` | Fada | rosa garança | #E4A6C0 |

A luminosidade dos pigmentos varia de propósito (L 0,38 a 0,84). Pigmentos reais têm valores diferentes (a goma-guta é clara, a sépia é escura), e numa paleta categórica a variação de valor é o que ajuda a distinguir 18 itens. O preço é que os pigmentos claros quase somem no papel: a goma-guta fica em 1,46:1. Por isso **todo swatch leva contorno de 1px em `on-surface`**, exatamente como as caixas de legenda de um mapa. Com o contorno, cada swatch tem pelo menos 3:1 de borda, seja do pigmento contra o papel, seja da tinta contra o pigmento.

Os pigmentos **nunca carregam texto** e **nunca são fundo de área**. O tipo é sempre comunicado pelo nome escrito ao lado do swatch, então a cor reforça a informação mas não a carrega sozinha.

## Typography

Duas famílias, divididas por função e não por tamanho. É a mesma divisão da cartografia e dos guias de campo: serifa para o texto que se lê, sans condensada para os rótulos que se consultam.

**Source Serif 4** é a voz: nomes de espécie, títulos, o texto da Pokédex, legendas. É uma serifa de transição na linhagem de Fournier, o desenho tipográfico da época das grandes enciclopédias de história natural, e por isso se encaixa no registro de livro científico sem virar fantasia de época. É variável, com eixo de tamanho óptico (`opsz` 8–60). Em tamanho de exibição o contraste dos traços aumenta e o espacejamento aperta, o que faz o nome da espécie a 64px parecer desenhado para aquele tamanho e não ampliado. Mantenha `font-optical-sizing: auto` no corpo. Os tokens de título fixam o `opsz` explicitamente. Fallback: `"Source Serif 4", "Source Serif Pro", Georgia, serif`.

**Archivo Narrow** é o aparato: números de espécie, atributos, medidas, rótulos de tipo, botões, campos e filtros. Sans condensada é o registro histórico dos rótulos de mapa, porque cabe muita informação numa linha estreita sem perder clareza. Isso é útil aqui, já que uma célula do índice de 168px precisa mostrar número, nome e dois tipos. Todos os tokens `data-*` ligam algarismos tabulares (`'tnum' 1`) para as colunas de atributos alinharem. Os rótulos em caixa-alta ligam `'case' 1` e levam tracking positivo. Fallback: `"Archivo Narrow", "Arial Narrow", "Roboto Condensed", sans-serif`.

As duas são SIL Open Font License. Sirva pelo Google Fonts com `display=swap` ou hospede localmente com subset latino. Carregue o itálico de Source Serif 4 (é um arquivo separado: não deixe o navegador sintetizar o itálico).

**O nome científico.** O campo `genus` da espécie ("Seed Pokémon", "Mouse Pokémon") é composto em itálico, logo abaixo do nome, no lugar onde um guia de campo poria o binômio latino. O token `taxon-italic` **sempre** usa o corte itálico (`font-style: italic`). O formato DESIGN.md não tem propriedade de estilo, e por isso a regra fica registrada aqui. É o único uso de itálico no sistema, junto com o estado vazio (ver Components).

**Escala.** Terça maior (1,25) a partir de 16px, arredondada: 12 · 13 · 14 · 16 · 18 · 20 · 24 · 36, e então **quebrada** para 64px no nome da espécie. O salto de 36 para 64 é intencional: a prancha tem um único elemento dominante. Tracking óptico: −0,025em no display, −0,015em e −0,01em nos títulos, zero no corpo, +0,06em e +0,1em nos rótulos em caixa-alta. A entrelinha cai à medida que o tamanho sobe: 1,0 no display, 1,6 no texto da Pokédex.

**Abaixo de 640px**, o nome da espécie desce de `display` (64px) para `headline-lg` (36px). Os outros níveis não mudam.

**Pesos: apenas 400 e 700**, nas duas famílias. Não existe 500 nem 600. A hierarquia vem da família e do tamanho: o nome a 64px é 400 e ainda assim é a coisa mais forte da tela.

## Layout

**Grade.** 12 colunas, calha de 24px, conteúdo com no máximo 1280px, margens externas de 48px no desktop e 16px no celular. Base de espaçamento de **8px**, com meio passo de 4px usado só dentro de chaves de tipo e linhas de filtro. Nada fica fora da escala.

**Duas densidades.** É o principal recurso de orientação do site: só pela densidade, antes de ler qualquer palavra, o usuário sabe se está no índice ou numa prancha.

- **Índice: denso.** Células de no mínimo 168px (`repeat(auto-fill, minmax(168px, 1fr))`), legenda colada à arte, 16px de padding. Funciona como uma prancha de comparação, com muitas espécies lado a lado.
- **Prancha: generosa.** Ritmo vertical de 48px entre seções e 96px antes da figura de evolução. É uma página para ler.

**Índice.** Layout assimétrico. A **legenda** (filtros de tipo e de geração) ocupa as colunas 1–3, fixa (`position: sticky`) com rolagem própria. O índice ocupa as colunas 4–12. As células formam uma grade separada por fios de 1px em `border`, como uma gaveta de espécimes, sem caixa nem cartão ao redor de cada uma. O índice é dividido em **capítulos por geração**: fio de largura total, 48px acima, kicker `GERAÇÃO I`, título `Kanto` em `headline-lg` e o intervalo `Nº 0001–0151` em `data-sm`. As espécies carregam em lotes de **30** (divisível por 2, 3, 5 e 6 colunas, então a última linha fecha), com um botão "Carregar mais 30" no fim. Não use rolagem infinita, porque o rodapé com os créditos precisa ser alcançável.

**Prancha (detalhe).** Também assimétrica, como uma página dupla de guia de campo: a **prancha** (arte oficial sobre `neutral`) fica nas colunas 1–5, fixa no topo durante a rolagem, e o **texto** ocupa as colunas 7–12, com a coluna 6 vazia. A ordem do texto é kicker com número, nome, nome científico, chaves de tipo, texto da Pokédex, Medidas, Atributos base. Abaixo da página dupla, ocupando as 12 colunas, vem a **figura de evolução**, porque linhagens ramificadas como a de Eevee precisam da largura toda. No topo e no rodapé ficam os links de virar página: `← Nº 0024 Arbok` à esquerda, `Nº 0026 Raichu →` à direita.

**Medida.** O texto da Pokédex vai até **60ch** (`max-width: 60ch`). Todo texto é alinhado à esquerda, com margem direita irregular. Nenhum texto é centralizado, nem estados vazios nem títulos. A única coisa centralizada no sistema é a arte dentro da sua área quadrada.

**Breakpoints.**
- `< 640px`: índice em 2 colunas, legenda vira um bloco recolhível "Legenda" acima do índice (inline, sem gaveta nem sobreposição). Na prancha, tudo em coluna única, nesta ordem: número, nome, nome científico, tipos, arte, texto, medidas, atributos, evolução. A evolução vira lista vertical.
- `640–1023px`: índice em 3–4 colunas, legenda ainda recolhível. A prancha continua em coluna única.
- `≥ 1024px`: legenda lateral fixa e prancha em página dupla.

## Elevation & Depth

O sistema é **plano**. Não há sombra em lugar nenhum, nem em botão, nem em hover de célula, nem no tooltip.

A profundidade vem de três recursos, nesta ordem de preferência:

1. **Espaço.** Itens relacionados ficam a 8px, grupos distintos a 48px. A maioria dos problemas de "falta profundidade" é na verdade problema de agrupamento, e deve ser resolvida aqui primeiro.
2. **Troca de papel.** O meio passo entre `surface` (#F6F2E8) e `neutral` (#EEE6D9). A prancha de detalhe não flutua: é um papel diferente colado na página. O hover de uma célula do índice troca o fundo para `neutral`, como se a prancha fosse puxada para perto.
3. **Fios de 1px** em `border` para *dividir* linhas, células e seções, e não para cercar conteúdo.

O cabeçalho fixo do índice (com a busca) fica sobre `surface` com um fio inferior, sem sombra e sem desfoque. O tooltip é a única inversão de cor (`on-surface` com texto `surface`) e o único elemento sobreposto do sistema. **Não existem modais**: no celular a legenda abre inline, empurrando o índice para baixo.

## Shapes

A linguagem de forma separa **conteúdo** de **controle**:

- **Conteúdo é retangular, raio 0:** células do índice, a prancha, swatches de tipo, áreas de arte, esqueletos de carregamento. São papel e pigmento, e papel cortado não tem canto arredondado.
- **Controles têm raio de 2px:** botões, campo de busca, linhas de filtro, tooltip. É o suficiente para o dedo e o olho reconhecerem "isto é tocável" sem virar um aplicativo genérico.

Não existe outro raio. Nada é pílula, nada é círculo, e as chaves de tipo são quadradas.

**Bordas** (o formato não tem token de cor de borda, então os valores abaixo são normativos):
- Fio divisor: 1px sólido `border`.
- Campo de busca: 1px sólido `secondary` em repouso (5,4:1, que passa o mínimo de 3:1 para limite de controle), 1px sólido `error` quando inválido.
- Botão secundário: 1px sólido `primary`.
- Swatch de tipo: 1px sólido `on-surface`, desenhado por dentro (`box-shadow: inset 0 0 0 1px` ou `outline-offset: -1px`), para o quadrado continuar com 10px.
- **Foco:** anel de 2px sólido `primary` com 2px de afastamento, em todo elemento focável, inclusive células do índice. Dá 7,8:1 contra o papel. Nunca remova o `outline` sem pôr isso no lugar.

## Components

**Cabeçalho e rodapé do site.** O nome do site fica em `headline-sm` à esquerda, como texto, sem logotipo nem ícone. A busca ocupa as colunas 4–12, alinhada ao índice, e um fio inferior em `border` fecha o cabeçalho. Na prancha o cabeçalho mantém a busca, que leva ao índice filtrado. O rodapé abre com um fio em `border` e traz os créditos em `caption`.

**Célula do índice (`specimen-cell`).** Sem caixa. De cima para baixo: a arte oficial quadrada (`aspect-ratio: 1`, imagem a 85% da largura, `loading="lazy"`, `width`/`height` explícitos para não deslocar o layout), o número `Nº 0025` em `data-sm` grafite, o nome em `headline-sm` e a linha de chaves de tipo. A célula inteira é um único link para a prancha. O nome **não** fica marrom, porque a célula toda é o alvo e o hover em `neutral` já sinaliza isso. Essa é a única exceção à regra da tinta ferrogálica, e só vale para a célula.

**Chave de tipo (`type-key` + `type-swatch-*`).** Swatch de 10×10px contornado, 6px de espaço, nome do tipo em pt-BR em `label-caps` (`FOGO`, `VOADOR`). Duas chaves lado a lado com 12px entre elas. É o único lugar onde os pigmentos aparecem, além da fita da prancha.

**Fita da prancha.** Na borda esquerda da prancha de detalhe, uma faixa vertical de 6px na altura total, no pigmento do **primeiro** tipo da espécie. É a aba colorida que os guias de campo põem na margem para separar famílias. Não leva texto. Não use o segundo tipo, não use gradiente entre os dois tipos.

**Prancha (`plate`).** Fundo `neutral`, padding de 48px, a arte oficial centralizada na área (até 400px), e embaixo a legenda da figura em `plate-caption`: "Fig. Nº 0025 — Pikachu, arte oficial." Número da prancha em `plate-number` no canto superior esquerdo.

**Cabeçalho da espécie.** Kicker `PRANCHA Nº 0025` em `label-caps` grafite, nome em `display`, nome científico em `taxon-italic` grafite, chaves de tipo. Em seguida, o texto da Pokédex em `body-lg`, limitado a 60ch.

**Medidas.** Lista de definição em duas colunas: rótulo em `label-caps` grafite (`ALTURA`, `PESO`, `HABILIDADES`), valor em `data-md`. Habilidades ocultas levam "(oculta)" em `caption`.

**Atributos base: régua.** Seis linhas: rótulo (`PS`, `ATAQUE`, `DEFESA`, `AT. ESP.`, `DEF. ESP.`, `VELOCIDADE`) em `stat-label` numa coluna de 96px, valor em `stat-value` alinhado à direita em 3ch, e a régua ocupando o resto. A régua é um trilho `stat-track` (4px, `border`) com preenchimento `stat-fill` (4px, `on-surface`) proporcional a **255**, o máximo possível, e não ao maior atributo da espécie. Marcas de 1×4px em `border` a cada 50 pontos, abaixo do trilho. Por último, uma linha `TOTAL` com o valor em `stat-total`. As barras são **monocromáticas**: não há verde para alto nem vermelho para baixo. O número carrega o valor, e a régua carrega a proporção.

**Figura de evolução (cladograma).** Desenhada como uma árvore filogenética, não como uma fileira de cartões. Cada estágio tem a arte a 96px, `Nº` em `data-sm` e o nome em `evolution-stage` (marrom, porque é link). O **estágio atual** usa `evolution-stage-current`: fundo em aguada, nome em tinta de impressão, sem link. Os conectores são linhas de 1px em `on-surface`, porque carregam significado e por isso não usam `border`. A condição fica sobre o conector em `evolution-condition`. Ramificações (Eevee, Tyrogue, Wurmple) se empilham verticalmente a partir do mesmo nó. Embaixo vai a legenda em `caption`: "Fig. — Linhagem de Eevee." Espécie sem linhagem: só uma frase em `caption`, "Nº 0128 não evolui nem descende de outra espécie.", sem figura vazia.

**Busca (`input-search`).** No cabeçalho fixo do índice, com 44px de altura, ícone de lupa à esquerda e botão de limpar (×) à direita quando há texto. Aceita nome ou número (`pika`, `25`, `025`). Placeholder em `input-placeholder`: "Nome ou número". O texto fica em 16px no mínimo para o iOS não dar zoom. Com busca ativa, um contador em `data-sm` aparece acima do índice: "12 espécies".

**Legenda / filtros (`filter-option`).** O filtro de tipo **é** a legenda do mapa: 18 linhas com swatch, nome e contagem em `data-sm`. Selecionado (`filter-option-selected`): fundo em aguada mais um ✓ à direita, com `aria-pressed="true"`. Nunca indique seleção só pela cor. No máximo **2 tipos** (nenhuma espécie tem 3), combinados com **E**: Fogo + Voador mostra Charizard. Com 2 selecionados, os outros 16 ficam em `filter-option-disabled`: texto grafite e swatch só com o contorno, sem preenchimento. O filtro de geração é de escolha única: `I · Kanto · 0001–0151`. Filtros e busca vivem na query string (`?tipo=fire&geracao=1&q=char`) para qualquer estado do índice ter link próprio.

**Botões.** Primário: preenchimento ferrogálico, texto em papel, `label-lg` em caixa-alta, 44px de altura. Use no máximo um por tela ("Tentar de novo", "Carregar mais 30"). Secundário: fundo papel, texto e borda de 1px ferrogálicos, com hover em aguada. Não há botão fantasma nem terciário: navegação é link.

**Links (`link`).** Texto ferrogálico sublinhado (`text-underline-offset: 0.2em`, espessura de 1px). No hover, `primary-strong`. Links de virar página usam `ui-md` com o número em `data-sm`.

**Tooltip.** Fundo em tinta de impressão, texto em papel, `caption`, raio de 2px. Aparece com 300ms de atraso e some sem atraso. Uso principal: mostrar a condição completa de evolução quando o rótulo foi abreviado.

### Estados

- **Carregando:** `skeleton` estático, com um quadrado `neutral` no lugar da arte e duas barras curtas `neutral` no lugar da legenda. Sem shimmer e sem pulsação.
- **Vazio:** frase em `body-md` itálico, alinhada à esquerda, mais um link de saída. Exemplo: "Nenhuma espécie corresponde a *‘pikachuu’*." seguido de "Limpar busca".
- **Erro de rede:** ícone de alerta e mensagem em `error-message` ("A prancha não pôde ser carregada."), mais "Tentar de novo" em botão primário. Erro de uma imagem afeta só a célula, erro da lista afeta a página. A PokeAPI é um serviço gratuito e pode falhar ou limitar requisições, então trate isso como estado normal e não como exceção.
- **Sem arte oficial** (algumas formas regionais e variantes): área `neutral` com "Sem arte oficial" em `caption` grafite. Nunca troque pelo sprite de pixel.

### Movimento

O movimento existe só para evitar saltos visuais, não para enfeitar.

- **120ms ease-out:** troca de fundo no hover de célula, botão e filtro.
- **200ms ease-out:** opacidade 0→1 da arte quando a imagem termina de carregar, para evitar o "estalo".
- **Nada mais anima.** As barras de atributo não crescem do zero. Células não sobem nem crescem no hover, a arte não gira nem aumenta, as seções não entram com fade ao rolar e não há transição entre páginas.
- Com `prefers-reduced-motion: reduce`, até o fade da arte é removido.

### Iconografia

Poucos ícones, todos de linha: Lucide com `stroke-width: 1.5`, 16px dentro de texto e 20px em controles, sempre em `currentColor`. O conjunto completo é lupa, ×, setas ← →, ✓ e triângulo de alerta. Tipos **não** têm ícone (a chave de legenda faz esse trabalho) e não se usam símbolos de tipo dos jogos.

### Regras de dados (PokeAPI → tela)

- **Número:** sempre com 4 dígitos e o sinal de número: `Nº 0001` a `Nº 1025`. Use o `id` da espécie.
- **Nome:** use `species.names` (idioma `en`), nunca o slug. O slug dá `mr-mime` e `nidoran-f`, os nomes corretos são "Mr. Mime" e "Nidoran♀".
- **Medidas:** `height` vem em decímetros e `weight` em hectogramas. Divida os dois por 10 e mostre com vírgula decimal e unidade: `0,4 m`, `6,0 kg`. Use `Intl.NumberFormat('pt-BR')`.
- **Texto da Pokédex:** a API não tem `pt-br` para `flavor_text_entries` nem para `genera`. Use a entrada `en` **mais recente**, porque as antigas vêm em caixa-alta ("POKéMON"). Normalize antes de exibir: troque `\n`, `\f` e `­` por espaço e junte espaços repetidos.
- **Tipos e atributos:** nomes em pt-BR na interface (tabela em Colors), slug da API nos tokens.
- **Arte:** apenas `sprites.other["official-artwork"].front_default`. Um guia de campo usa um único estilo de ilustração.
- **Busca:** a API não tem endpoint de busca. Baixe o índice `/pokemon-species?limit=1025` uma vez (nome e URL, de onde sai o `id`) e filtre no cliente com debounce de 150ms.
- **Filtro de tipo:** `/type/{slug}` lista os Pokémon (não as espécies) daquele tipo. Ignore entradas com `id > 10000`, que são formas alternativas e não espécies do índice.
- **Condições de evolução:** `min_level` vira `Nv. 16`, `trigger: trade` vira `Troca`, `min_happiness` vira `Amizade`, `time_of_day` vira `de dia`/`à noite` e `item` usa o nome do item. Combine com ` · `. Qualquer caso mais complexo vira `Condição especial`, com os detalhes no tooltip.
- **Créditos (rodapé, `caption`):** "Dados: PokéAPI (pokeapi.co). Pokémon e seus nomes são marcas de Nintendo, Creatures Inc. e GAME FREAK. Projeto de fã, sem fins lucrativos."

## Do's and Don'ts

- **Do** use `primary` (#6F3F22) somente no que é clicável. Se um elemento é marrom e não responde ao clique, ou é clicável e não é marrom, está errado (a única exceção é a célula inteira do índice).
- **Don't** use pigmento de tipo como fundo de cartão, de célula, de cabeçalho ou de página. O tipo aparece como swatch de 10px contornado mais o nome, e a única outra aparição é a fita de 6px da prancha.
- **Don't** escreva texto sobre um pigmento de tipo. Metade deles não tem contraste para isso, e o sistema não tenta.
- **Do** derive a cor de um tipo do slug da API (`type-${slug}`). Não crie mapas de cor paralelos no código.
- **Don't** use Pokébola, o visual de aparelho vermelho e branco, logotipos oficiais nem ícones de tipo dos jogos. Além do risco de marca registrada, é exatamente o clichê de que este sistema se afasta.
- **Do** use apenas a arte oficial. Não misture com sprites de pixel, modelos 3D ou artes "shiny" no índice.
- **Don't** anime as barras de atributo nem as pinte de verde/amarelo/vermelho. A régua é monocromática e proporcional a 255.
- **Do** componha todo número (`Nº`, atributos, medidas, contagens) em Archivo Narrow com algarismos tabulares. Um número em Source Serif no meio de uma tabela desalinha a coluna.
- **Don't** adicione um terceiro peso. Se algo precisa de mais destaque, dê mais espaço acima dele ou suba um nível na escala.
- **Don't** use sombra, gradiente, desfoque/vidro ou raio maior que 2px. Profundidade vem de espaço, da troca de papel `surface`/`neutral` e de fios de 1px.
- **Do** mantenha tudo alinhado à esquerda, inclusive estados vazios, mensagens de erro e o nome na prancha.
- **Don't** use `error` (#9B411E) e `type-fighting` (#953037) no lugar um do outro. Erro é sempre texto com ícone, e pigmento nunca é texto.
- **Do** acompanhe toda seleção e todo erro de um sinal que não seja cor: ✓ e `aria-pressed` no filtro, ícone e mensagem no erro, fundo em aguada mais texto não-link no estágio atual da evolução.
- **Don't** use `#FFFFFF` nem `#000000`, nem atrás da arte oficial. As artes têm fundo transparente e devem pousar direto no papel.
- **Do** normalize o `flavor_text` e converta as unidades antes de exibir. Texto com quebras de linha do Game Boy e "69 hg" no meio de uma prancha quebram a ilusão de livro na hora.
