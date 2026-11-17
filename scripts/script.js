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
// Contrato combinado com a Pessoa 2:
//   chave no localStorage: "favoritos"
//   pokemon: { id: 25, nome: "pikachu", tipo: "electric", peso: 60, altura: 4, imagem: "https://..." }
//
//   lerFavoritos()              devolve o array salvo (ou [])
//   salvarFavoritos(lista)      grava o array no localStorage
//   alternarFavorito(pokemon)   marca ou desmarca e salva
//   ehFavorito(id)              devolve true ou false para pintar o botão