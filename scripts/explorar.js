// explorar.js (Pessoa 2)
// Arquivo carregado só em explorar.html, depois do script.js.
// Busca 50 Pokémon na PokéAPI, mostra um cartão para cada um e filtra pela busca.

// ===== CONSTANTES =====
// Endereço da API: lista com 50 Pokémon (só nome e url de cada um).
const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=50";

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

// ===== DADOS E ELEMENTOS DA PÁGINA =====
// Todos os Pokémon já carregados. Cada item tem o formato combinado com a Pessoa 3:
// { id, nome, tipo, peso, altura, imagem }
let listaDePokemons = [];

const campoBusca = document.querySelector("#campo-busca");
const contador = document.querySelector("#contador");
const areaCarregando = document.querySelector("#area-carregando");
const areaErro = document.querySelector("#area-erro");
const textoErro = document.querySelector("#texto-erro");
const botaoTentarDeNovo = document.querySelector("#btn-tentar-de-novo");
const areaVazio = document.querySelector("#area-vazio");
const listaCartoes = document.querySelector("#lista-cartoes");

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

// Pega só o que interessa do JSON gigante de um Pokémon.
// peso e altura ficam nas unidades da API; a conversão é feita ao mostrar.
function montarPokemon(dados) {
  return {
    id: dados.id,
    nome: dados.name,
    tipo: dados.types[0].type.name,
    peso: dados.weight,
    altura: dados.height,
    imagem: dados.sprites.other["official-artwork"].front_default
  };
}

// Carrega a lista, depois os detalhes de cada Pokémon, e mostra os cartões.
async function carregarPokemons() {
  areaErro.hidden = true;
  areaCarregando.hidden = false;

  try {
    const lista = await buscarJson(API_URL);
    // Um fetch por Pokémon, todos ao mesmo tempo; Promise.all espera os 50 terminarem.
    const detalhes = await Promise.all(
      lista.results.map((item) => buscarJson(item.url))
    );
    listaDePokemons = detalhes.map(montarPokemon);
    filtrarPokemons();
  } catch (erro) {
    // O erro aparece na própria página, para quem está usando o site.
    textoErro.textContent = "Não foi possível carregar os Pokémon. Confira sua conexão e tente de novo.";
    areaErro.hidden = false;
  } finally {
    // Roda sempre, com sucesso ou com erro: o "Carregando..." some.
    areaCarregando.hidden = true;
  }
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

// Cria a figura do cartão. Se a API não trouxer imagem, mostra um aviso.
function criarFigura(pokemon, nomeDoTipo) {
  const figura = criarElemento("figure", "cartao__arte");

  if (pokemon.imagem) {
    const imagem = document.createElement("img");
    imagem.src = pokemon.imagem;
    imagem.alt = "Arte oficial de " + formatarNome(pokemon.nome) + ", Pokémon do tipo " + nomeDoTipo + ".";
    imagem.width = 475;
    imagem.height = 475;
    imagem.loading = "lazy";
    figura.appendChild(imagem);
  } else {
    figura.classList.add("cartao__arte--vazia");
    figura.appendChild(criarElemento("figcaption", "nota", "Sem arte oficial"));
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

// Monta o cartão completo de um Pokémon: imagem, nome, tipo, peso, altura e botão.
function criarCartao(pokemon) {
  const nomeDoTipo = NOMES_DOS_TIPOS[pokemon.tipo] || formatarNome(pokemon.tipo);
  const cartao = criarElemento("article", "cartao");

  cartao.appendChild(criarFigura(pokemon, nomeDoTipo));
  cartao.appendChild(criarElemento("p", "dado-sm", formatarNumero(pokemon.id)));
  cartao.appendChild(criarElemento("h3", "titulo-sm", formatarNome(pokemon.nome)));

  // Chave de tipo do design system: quadradinho colorido (pelo data-tipo) + nome.
  const chaveTipo = criarElemento("p", "chave-tipo");
  const amostra = criarElemento("span", "amostra-tipo");
  amostra.dataset.tipo = pokemon.tipo;
  amostra.setAttribute("aria-hidden", "true");
  chaveTipo.appendChild(amostra);
  chaveTipo.appendChild(document.createTextNode(nomeDoTipo));
  cartao.appendChild(chaveTipo);

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
  contador.textContent = lista.length + (lista.length === 1 ? " espécie" : " espécies");
}

// ===== BUSCA =====
// Filtra a lista pelo que foi digitado, sem diferenciar maiúscula de minúscula.
function filtrarPokemons() {
  // Enquanto nada foi carregado, não há o que filtrar (evita o aviso de "nenhum" durante o carregamento).
  if (listaDePokemons.length === 0) {
    return;
  }

  const termo = campoBusca.value.trim().toLowerCase();
  const filtrados = listaDePokemons.filter((pokemon) => pokemon.nome.toLowerCase().includes(termo));
  mostrarCartoes(filtrados);
}

// ===== INÍCIO =====
// A cada letra digitada a lista é filtrada de novo (busca em tempo real).
campoBusca.addEventListener("input", filtrarPokemons);
botaoTentarDeNovo.addEventListener("click", carregarPokemons);

carregarPokemons();
