// contato.js (Pessoa 4)
// Arquivo carregado só em contato.html, depois do script.js.

const form = document.querySelector("#form-contato");
const resposta = document.querySelector("#resposta");
const campos = form.querySelectorAll("input, textarea");

// quando o usuário sai do campo, marca com .erro se estiver vazio ou inválido
campos.forEach((campo) => {
  campo.addEventListener("blur", () => {
    campo.classList.toggle("erro", !campo.checkValidity());
  });
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const dados = {
    nome: form.nome.value,
    email: form.email.value,
    telefone: form.telefone.value,
    idade: Number(form.idade.value),
    mensagem: form.mensagem.value
  };

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados)
    });

    if (!res.ok) {
      throw new Error("status " + res.status);
    }

    const json = await res.json();
    resposta.textContent = "Status " + res.status + ": mensagem enviada! (id " + json.id + ")";
    form.reset();
  } catch (erro) {
    resposta.textContent = "Não foi possível enviar: " + erro.message;
  }
});