const CHAVE_TEMA = "tema";

function lerTema() {
  try {
    return localStorage.getItem(CHAVE_TEMA);
  } catch (erro) {
    return null;
  }
}

function salvarTema(valor) {
  try {
    localStorage.setItem(CHAVE_TEMA, valor);
  } catch (erro) {}
}

function atualizarBotaoTema(botao) {
  const escuro = document.body.classList.contains("escuro");
  botao.setAttribute("aria-pressed", String(escuro));
}

document.addEventListener("DOMContentLoaded", () => {
  const botao = document.querySelector("#btn-modo-escuro");
  if (!botao) {
    return;
  }

  botao.addEventListener("click", () => {
    document.body.classList.toggle("escuro");
    const escuro = document.body.classList.contains("escuro");
    salvarTema(escuro ? "escuro" : "claro");
    atualizarBotaoTema(botao);
  });

  if (lerTema() === "escuro") {
    document.body.classList.add("escuro");
  }
  atualizarBotaoTema(botao);
});

function lerFavoritos() {
  try {
    const dados = localStorage.getItem("favoritos");
    const favoritos = dados ? JSON.parse(dados) : [];
    return Array.isArray(favoritos) ? favoritos : [];
  } catch (erro) {
    return [];
  }
}

function salvarFavoritos(lista) {
  try {
    localStorage.setItem("favoritos", JSON.stringify(lista));
  } catch (erro) {}
}

function alternarFavorito(pokemon) {
  const favoritos = lerFavoritos();
  const indice = favoritos.findIndex((item) => item.id === pokemon.id);

  if (indice !== -1) {
    favoritos.splice(indice, 1);
  } else {
    favoritos.push(pokemon);
  }

  salvarFavoritos(favoritos);
  return favoritos;
}

function ehFavorito(id) {
  const favoritos = lerFavoritos();
  return favoritos.find((pokemon) => pokemon.id === id) !== undefined;
}
