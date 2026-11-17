// ==========================================================================
// script.js: código comum às 4 páginas
// Cada pessoa mexe só no seu bloco.
// ==========================================================================

// ===== MODO ESCURO (Pessoa 1) =====
const CHAVE_TEMA = "tema";

// Lê a preferência salva. O try/catch evita que o site quebre se o
// navegador bloquear o localStorage (modo privado, cookies bloqueados).
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
  } catch (erro) {
    // sem armazenamento: o tema vale só até recarregar a página
  }
}

// Mantém o botão em sincronia com a classe do body (aria-pressed mostra o estado)
function atualizarBotaoTema(botao) {
  const escuro = document.body.classList.contains("escuro");
  botao.setAttribute("aria-pressed", String(escuro));
}

document.addEventListener("DOMContentLoaded", () => {
  const botao = document.querySelector("#btn-modo-escuro");
  if (!botao) {
    return;
  }

  // O clique é ligado primeiro, para funcionar mesmo se o resto falhar
  botao.addEventListener("click", () => {
    document.body.classList.toggle("escuro");
    const escuro = document.body.classList.contains("escuro");
    salvarTema(escuro ? "escuro" : "claro");
    atualizarBotaoTema(botao);
  });

  // Aplica a preferência salva assim que a página carrega
  if (lerTema() === "escuro") {
    document.body.classList.add("escuro");
  }
  atualizarBotaoTema(botao);
});

// ===== FAVORITOS (Pessoa 3) =====
// Lê os favoritos salvos no navegador.
function lerFavoritos() {
  try {
    const dados = localStorage.getItem("favoritos");
    const favoritos = dados ? JSON.parse(dados) : [];
    return Array.isArray(favoritos) ? favoritos : [];
  } catch (erro) {
    return [];
  }
}

// Salva a lista completa de favoritos no localStorage.
function salvarFavoritos(lista) {
  try {
    localStorage.setItem("favoritos", JSON.stringify(lista));
  } catch (erro) {
    // Se o navegador bloquear o armazenamento, o restante do site continua funcionando.
  }
}

// Adiciona o Pokémon se ainda não for favorito ou remove se já estiver salvo.
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

// Informa se um Pokémon já está na lista de favoritos.
function ehFavorito(id) {
  const favoritos = lerFavoritos();
  return favoritos.find((pokemon) => pokemon.id === id) !== undefined;
}
