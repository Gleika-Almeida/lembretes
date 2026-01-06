const input = document.getElementById("lembreteInput");
const botao = document.getElementById("adicionar");
const lista = document.getElementById("lista");

let lembretes = JSON.parse(localStorage.getItem("lembretes")) || [];

// Carregar lembretes salvos
function renderizar() {
  lista.innerHTML = "";

  lembretes.forEach((texto, index) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.innerText = texto;

    const remover = document.createElement("button");
    remover.innerText = "✕";
    remover.className = "remover";

    remover.addEventListener("click", () => {
      lembretes.splice(index, 1);
      salvar();
      renderizar();
    });

    li.appendChild(span);
    li.appendChild(remover);
    lista.appendChild(li);
  });
}

function salvar() {
  localStorage.setItem("lembretes", JSON.stringify(lembretes));
}

botao.addEventListener("click", () => {
  if (input.value.trim() === "") return;

  lembretes.push(input.value);
  input.value = "";
  salvar();
  renderizar();
});

renderizar();
