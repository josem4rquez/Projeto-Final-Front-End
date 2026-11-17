// explorar.js (Pessoa 2)
// Arquivo carregado só em explorar.html, depois do script.js.
// Busca na PokéAPI a lista com todos os Pokémon (só nomes) e mostra os cartões
// aos poucos: os detalhes (tipo, peso, altura, sprite) são pedidos só dos Pokémon
// que aparecem na tela. A busca por nome vale para todos eles.
// As tags (tipo, categoria e geração) filtram essa mesma lista e se combinam com a busca.

// ===== CONSTANTES =====
// Endereço da API: lista com todos os Pokémon (só nome e url de cada um).
const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=10000";

// Quantos cartões aparecem por vez (e quantos mais vêm a cada clique em "Carregar mais").
const POKEMONS_POR_PAGINA = 30;

// Nomes dos tipos em português. A chave é o nome que a API devolve.
const NOMES_DOS_TIPOS = {
  normal: "Normal",
  fire: "Fogo",
  water: "Água",
  grass: "Planta",
  electric: "Elétrico",
  ice: "Gelo",
  fighting: "Lutador",
  poison: "Venenoso",
  ground: "Terrestre",
  flying: "Voador",
  psychic: "Psíquico",
  bug: "Inseto",
  rock: "Pedra",
  ghost: "Fantasma",
  dragon: "Dragão",
  dark: "Sombrio",
  steel: "Aço",
  fairy: "Fada"
};

// Mostra números com vírgula e uma casa decimal (6,9), como no Brasil.
const FORMATADOR_DECIMAL = new Intl.NumberFormat("pt-BR", {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1
});

// ===== TAGS (FILTROS) =====
// Endereço dos Pokémon de um tipo: .../type/fire devolve só os Pokémon do tipo fogo.
const TIPO_URL = "https://pokeapi.co/api/v2/type/";

// Nenhum Pokémon tem mais de 2 tipos, então marcar um terceiro nunca acharia nada.
const MAXIMO_DE_TIPOS = 2;

// Gerações. Cada uma ocupa uma faixa seguida de números: do primeiro ao último.
const GERACOES = [
  { numero: 1, rotulo: "I · Kanto", primeiro: 1, ultimo: 151 },
  { numero: 2, rotulo: "II · Johto", primeiro: 152, ultimo: 251 },
  { numero: 3, rotulo: "III · Hoenn", primeiro: 252, ultimo: 386 },
  { numero: 4, rotulo: "IV · Sinnoh", primeiro: 387, ultimo: 493 },
  { numero: 5, rotulo: "V · Unova", primeiro: 494, ultimo: 649 },
  { numero: 6, rotulo: "VI · Kalos", primeiro: 650, ultimo: 721 },
  { numero: 7, rotulo: "VII · Alola", primeiro: 722, ultimo: 809 },
  { numero: 8, rotulo: "VIII · Galar", primeiro: 810, ultimo: 905 },
  { numero: 9, rotulo: "IX · Paldea", primeiro: 906, ultimo: 1025 }
];

// Categorias. A PokéAPI não tem uma lista pronta de lendários, míticos e bebês: essa informação
// só aparece na página de cada espécie (is_legendary, is_mythical e is_baby em /pokemon-species/{id}),
// e seriam 1.025 chamadas. Por isso os números abaixo foram copiados desses campos uma única vez,
// em 17/11/2026. Se a API ganhar espécies novas, é só atualizar estas listas.
const CATEGORIAS = [
  {
    chave: "lendario",
    nome: "Lendário",
    ids: new Set([
      144, 145, 146, 150, 243, 244, 245, 249, 250, 377, 378, 379, 380, 381, 382, 383, 384, 480, 481,
      482, 483, 484, 485, 486, 487, 488, 638, 639, 640, 641, 642, 643, 644, 645, 646, 716, 717, 718,
      772, 773, 785, 786, 787, 788, 789, 790, 791, 792, 800, 888, 889, 890, 891, 892, 894, 895, 896,
      897, 898, 905, 1001, 1002, 1003, 1004, 1007, 1008, 1014, 1015, 1016, 1017, 1024
    ])
  },
  {
    chave: "mitico",
    nome: "Mítico",
    ids: new Set([
      151, 251, 385, 386, 489, 490, 491, 492, 493, 494, 647, 648, 649, 719, 720, 721, 801, 802, 807,
      808, 809, 893, 1025
    ])
  },
  {
    chave: "bebe",
    nome: "Bebê",
    ids: new Set([172, 173, 174, 175, 236, 238, 239, 240, 298, 360, 406, 433, 438, 439, 440, 446, 447, 458, 848])
  }
];

// ===== DADOS E ELEMENTOS DA PÁGINA =====
// Todos os Pokémon da API: { name, url, id }. Nome e url vêm numa única chamada;
// o id é tirado do fim da url (ver pegarIdDaUrl).
let indiceDePokemons = [];

// Os Pokémon que já tiveram os detalhes carregados. Cada item tem o formato
// combinado com a Pessoa 3: { id, nome, tipo, peso, altura, imagem }.
// O campo extra tipos (todos os tipos) é usado só nos cartões daqui.
let listaDePokemons = [];

// Tags marcadas: até 2 tipos, quantas categorias quiser e no máximo uma geração.
let tiposMarcados = [];
let categoriasMarcadas = [];
let geracaoMarcada = null;

// Números dos Pokémon de cada tipo, guardados depois da primeira consulta: { fire: Set }.
// Assim marcar o mesmo tipo de novo não pede nada à API.
const idsPorTipo = {};

// Conta os filtros iniciados, para uma resposta antiga da API não sobrescrever a nova.
let numeroDoFiltro = 0;

// Fica true quando a consulta de um tipo falhou: o "Tentar de novo" refaz o filtro.
let filtroFalhou = false;

// Os itens do índice que combinam com a busca, e quantos deles aparecem na tela.
let resultadoDaBusca = [];
let quantidadeVisivel = POKEMONS_POR_PAGINA;

// Conta as atualizações da tela. Se o usuário digitar de novo antes de a resposta
// chegar, a resposta antiga é ignorada e não sobrescreve a nova.
let numeroDaAtualizacao = 0;

const campoBusca = document.querySelector("#campo-busca");
const contador = document.querySelector("#contador");
const areaCarregando = document.querySelector("#area-carregando");
const areaErro = document.querySelector("#area-erro");
const textoErro = document.querySelector("#texto-erro");
const botaoTentarDeNovo = document.querySelector("#btn-tentar-de-novo");
const areaVazio = document.querySelector("#area-vazio");
const listaCartoes = document.querySelector("#lista-cartoes");
const botaoCarregarMais = document.querySelector("#btn-carregar-mais");
const areaEtiquetas = document.querySelector("#area-etiquetas");
const botaoLimparFiltros = document.querySelector("#btn-limpar-filtros");

// ===== BUSCAR DADOS NA API =====
// Faz o fetch de uma URL e devolve o JSON. Toda resposta passa pelo
// if (!resposta.ok) antes do .json(): sem ele, um erro 404 ou 500
// seria tratado como se tivesse dado certo.
async function buscarJson(url) {
  const resposta = await fetch(url);
  if (!resposta.ok) {
    throw new Error("A PokéAPI respondeu com o código " + resposta.status);
  }
  return await resposta.json();
}

// Tira o número do fim de uma url da API: ".../pokemon/25/" vira 25.
function pegarIdDaUrl(url) {
  const partes = url.split("/").filter((parte) => parte !== "");
  return Number(partes[partes.length - 1]);
}

// Pega só o que interessa do JSON gigante de um Pokémon.
// tipo é o primeiro tipo (é o que os favoritos guardam); tipos tem todos, para o cartão mostrar os dois.
// peso e altura ficam nas unidades da API; a conversão é feita ao mostrar.
// imagem é a sprite em pixel art (front_default). Em poucas formas especiais ela vem vazia (null).
function montarPokemon(dados) {
  return {
    id: dados.id,
    nome: dados.name,
    tipo: dados.types[0].type.name,
    tipos: dados.types.map((item) => item.type.name),
    peso: dados.weight,
    altura: dados.height,
    imagem: dados.sprites.front_default
  };
}

// Procura, entre os já carregados, o Pokémon com esse nome.
function acharPokemon(nome) {
  return listaDePokemons.find((pokemon) => pokemon.nome === nome);
}

// Pede os detalhes dos itens que ainda não foram carregados, todos ao mesmo tempo.
// Promise.all espera todos terminarem; se um falhar, o erro sobe para quem chamou.
async function carregarDetalhes(itens) {
  const faltando = itens.filter((item) => !acharPokemon(item.name));
  const detalhes = await Promise.all(faltando.map((item) => buscarJson(item.url)));

  detalhes.forEach((dados) => {
    // Duas buscas seguidas podem pedir o mesmo Pokémon; só guarda se ainda não estiver na lista.
    if (!acharPokemon(dados.name)) {
      listaDePokemons.push(montarPokemon(dados));
    }
  });
}

// Devolve o conjunto com os números dos Pokémon de um tipo. Só chama a API na primeira vez;
// depois usa o que ficou guardado em idsPorTipo.
async function carregarIdsDoTipo(tipo) {
  if (!idsPorTipo[tipo]) {
    const dados = await buscarJson(TIPO_URL + tipo);
    idsPorTipo[tipo] = new Set(dados.pokemon.map((item) => pegarIdDaUrl(item.pokemon.url)));
  }
  return idsPorTipo[tipo];
}

// Mostra a mensagem de erro na própria página, para quem está usando o site.
function mostrarErro() {
  textoErro.textContent = "Não foi possível carregar os Pokémon. Confira sua conexão e tente de novo.";
  areaVazio.hidden = true;
  areaErro.hidden = false;
}

// Carrega a lista com o nome de todos os Pokémon e mostra a primeira página.
async function carregarPokemons() {
  areaErro.hidden = true;
  areaCarregando.hidden = false;

  try {
    const lista = await buscarJson(API_URL);
    indiceDePokemons = lista.results.map((item) => ({
      name: item.name,
      url: item.url,
      id: pegarIdDaUrl(item.url)
    }));
  } catch (erro) {
    mostrarErro();
  } finally {
    // Roda sempre, com sucesso ou com erro: o "Carregando..." some.
    areaCarregando.hidden = true;
  }

  // Se a lista não chegou, não há o que mostrar (filtrarPokemons já trata isso).
  filtrarPokemons();
}

// ===== FORMATAÇÃO =====
// "bulbasaur" vira "Bulbasaur".
function formatarNome(nome) {
  return nome.charAt(0).toUpperCase() + nome.slice(1);
}

// 25 vira "Nº 0025".
function formatarNumero(id) {
  return "Nº " + String(id).padStart(4, "0");
}

// A API guarda o peso em hectogramas: 69 vira "6,9 kg".
function formatarPeso(peso) {
  return FORMATADOR_DECIMAL.format(peso / 10) + " kg";
}

// A API guarda a altura em decímetros: 7 vira "0,7 m".
function formatarAltura(altura) {
  return FORMATADOR_DECIMAL.format(altura / 10) + " m";
}

// ===== CARTÕES =====
// Cria um elemento com classe e texto. O texto entra por textContent,
// então nunca é interpretado como HTML.
function criarElemento(tag, classe, texto) {
  const elemento = document.createElement(tag);
  if (classe) {
    elemento.className = classe;
  }
  if (texto !== undefined) {
    elemento.textContent = texto;
  }
  return elemento;
}

// Cria uma linha da lista de medidas: rótulo (dt) e valor (dd).
function criarMedida(rotulo, valor) {
  const medida = criarElemento("div", "cartao__medida");
  medida.appendChild(criarElemento("dt", "rotulo", rotulo));
  medida.appendChild(criarElemento("dd", "cartao__valor", valor));
  return medida;
}

// Nomes em português de todos os tipos do Pokémon: ["Fogo", "Voador"].
function nomesDosTipos(pokemon) {
  return pokemon.tipos.map((tipo) => NOMES_DOS_TIPOS[tipo] || formatarNome(tipo));
}

// Cria a figura do cartão com a sprite em pixel art (96 x 96).
// Se a API não trouxer a sprite, mostra um aviso.
function criarFigura(pokemon, nomes) {
  const figura = criarElemento("figure", "cartao__arte");

  if (pokemon.imagem) {
    const imagem = document.createElement("img");
    const frase = nomes.length > 1 ? "dos tipos " : "do tipo ";
    imagem.src = pokemon.imagem;
    imagem.alt = "Sprite de " + formatarNome(pokemon.nome) + ", Pokémon " + frase + nomes.join(" e ") + ".";
    imagem.width = 96;
    imagem.height = 96;
    imagem.loading = "lazy";
    figura.appendChild(imagem);
  } else {
    figura.classList.add("cartao__arte--vazia");
    figura.appendChild(criarElemento("figcaption", "nota", "Sem sprite"));
  }

  return figura;
}

// Deixa o botão de favoritar igual ao estado salvo.
// As funções ehFavorito e alternarFavorito são da Pessoa 3 (script.js).
// Se ainda não existirem, o botão aparece, mas nada é marcado e nada quebra.
function atualizarBotaoFavorito(botao, pokemon) {
  const favoritosProntos = typeof ehFavorito === "function";
  const favorito = favoritosProntos && ehFavorito(pokemon.id);

  botao.classList.toggle("favorito", favorito);
  botao.setAttribute("aria-pressed", String(favorito));
  botao.textContent = favorito ? "Favoritado" : "Favoritar";
}

// Cria o botão de favoritar de um cartão.
function criarBotaoFavorito(pokemon) {
  const botao = criarElemento("button", "botao botao--secundario cartao__favoritar");
  botao.type = "button";
  atualizarBotaoFavorito(botao, pokemon);

  botao.addEventListener("click", () => {
    if (typeof alternarFavorito === "function") {
      alternarFavorito(pokemon);
    }
    atualizarBotaoFavorito(botao, pokemon);
  });

  return botao;
}

// Monta o cartão completo de um Pokémon: sprite, nome, tipos, peso, altura e botão.
function criarCartao(pokemon) {
  const nomes = nomesDosTipos(pokemon);
  const cartao = criarElemento("article", "cartao");

  cartao.appendChild(criarFigura(pokemon, nomes));
  cartao.appendChild(criarElemento("p", "dado-sm", formatarNumero(pokemon.id)));
  cartao.appendChild(criarElemento("h3", "titulo-sm", formatarNome(pokemon.nome)));

  // Chaves de tipo do design system, uma por tipo: quadradinho colorido (pelo data-tipo) + nome.
  const chavesDeTipo = criarElemento("p", "chaves-tipo");
  pokemon.tipos.forEach((tipo, posicao) => {
    const chaveTipo = criarElemento("span", "chave-tipo");
    const amostra = criarElemento("span", "amostra-tipo");
    amostra.dataset.tipo = tipo;
    amostra.setAttribute("aria-hidden", "true");
    chaveTipo.appendChild(amostra);
    chaveTipo.appendChild(document.createTextNode(nomes[posicao]));
    chavesDeTipo.appendChild(chaveTipo);
  });
  cartao.appendChild(chavesDeTipo);

  const medidas = criarElemento("dl", "cartao__medidas");
  medidas.appendChild(criarMedida("Peso", formatarPeso(pokemon.peso)));
  medidas.appendChild(criarMedida("Altura", formatarAltura(pokemon.altura)));
  cartao.appendChild(medidas);

  cartao.appendChild(criarBotaoFavorito(pokemon));
  return cartao;
}

// Mostra na tela os cartões da lista recebida. Apaga os antigos e cria os novos.
function mostrarCartoes(lista) {
  listaCartoes.textContent = "";

  lista.forEach((pokemon) => {
    listaCartoes.appendChild(criarCartao(pokemon));
  });

  // Sem resultado, aparece "Nenhum Pokémon encontrado".
  areaVazio.hidden = lista.length !== 0;
}

// Escreve "Mostrando 30 de 1.351 Pokémon" e esconde o "Carregar mais" quando já mostrou tudo.
function atualizarRodapeDaLista(mostrados, total) {
  contador.textContent = "Mostrando " + mostrados.toLocaleString("pt-BR") + " de " + total.toLocaleString("pt-BR") + " Pokémon";
  botaoCarregarMais.hidden = mostrados >= total;
}

// Mostra a página atual dos resultados: pede os detalhes que faltam e cria os cartões.
async function mostrarPagina() {
  numeroDaAtualizacao++;
  const minhaAtualizacao = numeroDaAtualizacao;
  const visiveis = resultadoDaBusca.slice(0, quantidadeVisivel);

  areaErro.hidden = true;
  areaCarregando.hidden = false;

  try {
    await carregarDetalhes(visiveis);

    // Chegou uma atualização mais nova enquanto esta esperava a API: esta é descartada.
    if (minhaAtualizacao !== numeroDaAtualizacao) {
      return;
    }

    mostrarCartoes(visiveis.map((item) => acharPokemon(item.name)));
    atualizarRodapeDaLista(visiveis.length, resultadoDaBusca.length);
  } catch (erro) {
    if (minhaAtualizacao === numeroDaAtualizacao) {
      mostrarErro();
    }
  } finally {
    if (minhaAtualizacao === numeroDaAtualizacao) {
      areaCarregando.hidden = true;
    }
  }
}

// ===== BUSCA E TAGS =====
// Filtra todos os Pokémon pelo que foi digitado (sem diferenciar maiúscula de minúscula)
// e pelas tags marcadas. Cada filtro tira Pokémon da lista; só fica quem passa em todos:
//   - tipos: o Pokémon precisa ter todos os tipos marcados (fogo + voador acha o Charizard);
//   - categorias: basta estar em uma das marcadas (lendário + mítico junta os dois grupos);
//   - geração: o número do Pokémon precisa estar na faixa da geração.
// As categorias e a geração valem para espécies. As formas alternativas (Mega, Gigantamax,
// regionais, números acima de 10000) só entram quando o filtro é por tipo ou por nome.
// É async porque a lista de um tipo pode precisar ser pedida à API.
async function filtrarPokemons() {
  // Enquanto a lista de nomes não chegou, não há o que filtrar (evita o aviso de "nenhum" durante o carregamento).
  if (indiceDePokemons.length === 0) {
    return;
  }

  numeroDoFiltro++;
  const meuFiltro = numeroDoFiltro;
  const termo = campoBusca.value.trim().toLowerCase();
  const categorias = CATEGORIAS.filter((categoria) => categoriasMarcadas.includes(categoria.chave));
  const geracao = GERACOES.find((item) => item.numero === geracaoMarcada);

  filtroFalhou = false;
  areaErro.hidden = true;
  areaCarregando.hidden = false;

  try {
    const idsDosTipos = await Promise.all(tiposMarcados.map(carregarIdsDoTipo));

    // O usuário mexeu em outro filtro enquanto a API respondia: este resultado é descartado.
    if (meuFiltro !== numeroDoFiltro) {
      return;
    }

    resultadoDaBusca = indiceDePokemons.filter((item) => {
      if (!item.name.toLowerCase().includes(termo)) {
        return false;
      }
      if (!idsDosTipos.every((ids) => ids.has(item.id))) {
        return false;
      }
      if (categorias.length > 0 && !categorias.some((categoria) => categoria.ids.has(item.id))) {
        return false;
      }
      if (geracao && (item.id < geracao.primeiro || item.id > geracao.ultimo)) {
        return false;
      }
      return true;
    });
    quantidadeVisivel = POKEMONS_POR_PAGINA;
    mostrarPagina();
  } catch (erro) {
    if (meuFiltro === numeroDoFiltro) {
      filtroFalhou = true;
      areaCarregando.hidden = true;
      mostrarErro();
    }
  }
}

// Mostra mais uma página de cartões da busca atual.
function carregarMais() {
  quantidadeVisivel += POKEMONS_POR_PAGINA;
  mostrarPagina();
}

// Tenta de novo: se a lista de nomes nunca chegou, pede ela; se foi o filtro que falhou,
// refaz o filtro; senão, repete a página atual.
function tentarDeNovo() {
  if (indiceDePokemons.length === 0) {
    carregarPokemons();
  } else if (filtroFalhou) {
    filtrarPokemons();
  } else {
    mostrarPagina();
  }
}

// ===== TAGS: BOTÕES =====
// Cria o ícone ✓ que aparece dentro da tag marcada (nunca só a cor mostra a seleção).
function criarIconeMarca() {
  const espaco = "http://www.w3.org/2000/svg";
  const icone = document.createElementNS(espaco, "svg");
  icone.setAttribute("class", "icone icone--inline marca");
  icone.setAttribute("viewBox", "0 0 24 24");
  icone.setAttribute("aria-hidden", "true");

  const tracado = document.createElementNS(espaco, "path");
  tracado.setAttribute("d", "M20 6 9 17l-5-5");
  icone.appendChild(tracado);
  return icone;
}

// Cria uma tag: um botão que liga e desliga. grupo é "tipo", "categoria" ou "geracao"
// e valor diz qual delas é (o aoClicarNaEtiqueta lê os dois). Só as tags de tipo levam o quadradinho colorido.
function criarEtiqueta(grupo, valor, texto) {
  const botao = criarElemento("button", "etiqueta");
  botao.type = "button";
  botao.dataset.grupo = grupo;
  botao.dataset.valor = valor;
  botao.setAttribute("aria-pressed", "false");

  if (grupo === "tipo") {
    const amostra = criarElemento("span", "amostra-tipo");
    amostra.dataset.tipo = valor;
    amostra.setAttribute("aria-hidden", "true");
    botao.appendChild(amostra);
  }

  botao.appendChild(criarElemento("span", "", texto));
  botao.appendChild(criarIconeMarca());
  return botao;
}

// Cria as tags de todos os grupos dentro das áreas que já estão no HTML.
function montarEtiquetas() {
  const areaDeTipos = document.querySelector("#etiquetas-tipo");
  const areaDeCategorias = document.querySelector("#etiquetas-categoria");
  const areaDeGeracoes = document.querySelector("#etiquetas-geracao");

  Object.keys(NOMES_DOS_TIPOS).forEach((tipo) => {
    areaDeTipos.appendChild(criarEtiqueta("tipo", tipo, NOMES_DOS_TIPOS[tipo]));
  });
  CATEGORIAS.forEach((categoria) => {
    areaDeCategorias.appendChild(criarEtiqueta("categoria", categoria.chave, categoria.nome));
  });
  GERACOES.forEach((geracao) => {
    areaDeGeracoes.appendChild(criarEtiqueta("geracao", geracao.numero, geracao.rotulo));
  });
}

// Liga ou desliga um valor de uma lista, sem mexer na lista original:
// se já está lá, tira; se não está, põe no fim.
function alternarNaLista(lista, valor) {
  if (lista.includes(valor)) {
    return lista.filter((item) => item !== valor);
  }
  return [...lista, valor];
}

// Deixa todas as tags iguais ao que está marcado: aria-pressed (o CSS mostra o ✓ e a aguada),
// tags de tipo desativadas quando já há 2 marcadas, e "Limpar filtros" só aparece se há algo marcado.
function atualizarEtiquetas() {
  areaEtiquetas.querySelectorAll(".etiqueta").forEach((botao) => {
    const grupo = botao.dataset.grupo;
    const valor = botao.dataset.valor;
    let marcada = false;

    if (grupo === "tipo") {
      marcada = tiposMarcados.includes(valor);
    } else if (grupo === "categoria") {
      marcada = categoriasMarcadas.includes(valor);
    } else {
      marcada = geracaoMarcada === Number(valor);
    }

    botao.setAttribute("aria-pressed", String(marcada));
    botao.disabled = grupo === "tipo" && !marcada && tiposMarcados.length >= MAXIMO_DE_TIPOS;
  });

  const algumaMarcada = tiposMarcados.length > 0 || categoriasMarcadas.length > 0 || geracaoMarcada !== null;
  botaoLimparFiltros.hidden = !algumaMarcada;
}

// Um único ouvinte para todas as tags (o clique "sobe" do botão até a área).
function aoClicarNaEtiqueta(evento) {
  const botao = evento.target.closest(".etiqueta");
  if (!botao || botao.disabled) {
    return;
  }

  const grupo = botao.dataset.grupo;
  const valor = botao.dataset.valor;

  if (grupo === "tipo") {
    tiposMarcados = alternarNaLista(tiposMarcados, valor);
  } else if (grupo === "categoria") {
    categoriasMarcadas = alternarNaLista(categoriasMarcadas, valor);
  } else {
    // Geração é escolha única: clicar na marcada desmarca, clicar em outra troca.
    const numero = Number(valor);
    geracaoMarcada = geracaoMarcada === numero ? null : numero;
  }

  atualizarEtiquetas();
  filtrarPokemons();
}

// Desmarca todas as tags. O texto da busca continua como está.
function limparFiltros() {
  tiposMarcados = [];
  categoriasMarcadas = [];
  geracaoMarcada = null;

  atualizarEtiquetas();
  filtrarPokemons();
}

// ===== INÍCIO =====
// A cada letra digitada a lista é filtrada de novo (busca em tempo real).
campoBusca.addEventListener("input", filtrarPokemons);
areaEtiquetas.addEventListener("click", aoClicarNaEtiqueta);
botaoLimparFiltros.addEventListener("click", limparFiltros);
botaoCarregarMais.addEventListener("click", carregarMais);
botaoTentarDeNovo.addEventListener("click", tentarDeNovo);

montarEtiquetas();

carregarPokemons();
