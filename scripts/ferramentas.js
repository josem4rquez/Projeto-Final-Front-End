function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    return "Não é possível dividir por zero.";
  }

  return a / b;
}

function calcular(a, b, operacao) {
  return operacao(a, b);
}

const campoNumero1 = document.querySelector("#numero1");
const campoNumero2 = document.querySelector("#numero2");
const campoOperacao = document.querySelector("#operacao");
const resultadoCalculo = document.querySelector("#resultado-calculo");
const botaoCalcular = document.querySelector("#btn-calcular");

botaoCalcular.addEventListener("click", function () {
  if (campoNumero1.value.trim() === "" || campoNumero2.value.trim() === "") {
    resultadoCalculo.textContent = "Preencha os dois números para calcular.";
    return;
  }

  const a = Number(campoNumero1.value);
  const b = Number(campoNumero2.value);

  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    resultadoCalculo.textContent = "Digite números válidos.";
    return;
  }

  let resultado;

  if (campoOperacao.value === "somar") {
    resultado = calcular(a, b, somar);
  } else if (campoOperacao.value === "subtrair") {
    resultado = calcular(a, b, subtrair);
  } else if (campoOperacao.value === "multiplicar") {
    resultado = calcular(a, b, multiplicar);
  } else {
    resultado = calcular(a, b, dividir);
  }

  if (typeof resultado === "number") {
    resultadoCalculo.textContent = "Resultado: " + resultado;
  } else {
    resultadoCalculo.textContent = resultado;
  }
});

const elementoMediaPeso = document.querySelector("#media-peso");
const elementoMediaAltura = document.querySelector("#media-altura");
const elementoListaFavoritos = document.querySelector("#lista-favoritos");
const elementoMensagemFavoritos = document.querySelector("#mensagem-favoritos");
const elementoContadorFavoritos = document.querySelector("#contador-favoritos");
const botaoFiltroPeso = document.querySelector("#btn-filtro");
const botaoMostrarTodos = document.querySelector("#btn-todos");

function formatarPeso(peso) {
  return (peso / 10).toFixed(1).replace(".", ",") + " kg";
}

function formatarAltura(altura) {
  return (altura / 10).toFixed(1).replace(".", ",") + " m";
}

function formatarNome(nome) {
  if (!nome) {
    return "Nome não informado";
  }

  return nome.charAt(0).toUpperCase() + nome.slice(1);
}

function atualizarMedias() {
  const favoritos = lerFavoritos();

  if (favoritos.length === 0) {
    elementoMediaPeso.textContent = "—";
    elementoMediaAltura.textContent = "—";
    return;
  }

  const somaPesos = favoritos.reduce(
    (total, pokemon) => total + pokemon.peso,
    0,
  );
  const somaAlturas = favoritos.reduce(
    (total, pokemon) => total + pokemon.altura,
    0,
  );

  const mediaPeso = somaPesos / favoritos.length;
  const mediaAltura = somaAlturas / favoritos.length;

  elementoMediaPeso.textContent = formatarPeso(mediaPeso);
  elementoMediaAltura.textContent = formatarAltura(mediaAltura);
}

function mostrarFavoritos(favoritos) {
  elementoListaFavoritos.textContent = "";
  elementoContadorFavoritos.textContent =
    favoritos.length +
    (favoritos.length === 1 ? " Pokémon encontrado" : " Pokémon encontrados");

  if (favoritos.length === 0) {
    elementoMensagemFavoritos.hidden = false;
    return;
  }

  elementoMensagemFavoritos.hidden = true;

  favoritos.forEach((pokemon) => {
    const item = document.createElement("article");
    item.classList.add("ferramentas__item");

    if (pokemon.imagem) {
      const imagem = document.createElement("img");
      imagem.src = pokemon.imagem;
      imagem.alt = "Arte oficial de " + formatarNome(pokemon.nome);
      imagem.width = 120;
      imagem.height = 120;
      imagem.loading = "lazy";
      item.appendChild(imagem);
    } else {
      const semImagem = document.createElement("p");
      semImagem.classList.add("nota");
      semImagem.textContent = "Sem arte oficial";
      item.appendChild(semImagem);
    }

    const numero = document.createElement("p");
    numero.classList.add("dado-sm");
    numero.textContent = "Nº " + String(pokemon.id).padStart(4, "0");

    const nome = document.createElement("h3");
    nome.classList.add("titulo-sm");
    nome.textContent = formatarNome(pokemon.nome);

    const medidas = document.createElement("p");
    medidas.classList.add("dado-sm");
    medidas.textContent =
      "Peso: " +
      formatarPeso(pokemon.peso) +
      " · Altura: " +
      formatarAltura(pokemon.altura);

    item.appendChild(numero);
    item.appendChild(nome);
    item.appendChild(medidas);
    elementoListaFavoritos.appendChild(item);
  });
}

const mostrarTodos = () => {
  mostrarFavoritos(lerFavoritos());
  botaoFiltroPeso.setAttribute("aria-pressed", "false");
  botaoMostrarTodos.setAttribute("aria-pressed", "true");
};

const filtrarPorPeso = () => {
  const favoritos = lerFavoritos();
  const filtrados = favoritos.filter((pokemon) => pokemon.peso > 100);

  mostrarFavoritos(filtrados);
  botaoFiltroPeso.setAttribute("aria-pressed", "true");
  botaoMostrarTodos.setAttribute("aria-pressed", "false");
};

botaoFiltroPeso.addEventListener("click", filtrarPorPeso);
botaoMostrarTodos.addEventListener("click", mostrarTodos);

atualizarMedias();
mostrarTodos();
