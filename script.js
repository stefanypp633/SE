const mensagens = document.querySelectorAll(".mensagem");
const botaoSim = document.getElementById("sim");
const botaoNao = document.getElementById("nao");
const pedido = document.getElementById("pedido");

let index = 0;

// Esconde todas as mensagens e pedido no início
mensagens.forEach(m => m.style.display = "none");
if (pedido) pedido.style.display = "none";

// Mostra a primeira mensagem
if (mensagens.length > 0) {
  mensagens[0].style.display = "block";
}

// Botões "Próximo" para avançar mensagens
document.querySelectorAll(".proximo").forEach((btn, i) => {
  btn.addEventListener("click", () => {
    mensagens[i].style.display = "none";
    if (i + 1 < mensagens.length) {
      mensagens[i + 1].style.display = "block";
    } else {
      if (pedido) pedido.style.display = "block";
    }
  });
});

// Botão "Não" foge
if (botaoNao) {
  botaoNao.addEventListener("mouseover", () => {
    const largura = window.innerWidth - botaoNao.offsetWidth;
    const altura = window.innerHeight - botaoNao.offsetHeight;
    const x = Math.random() * largura;
    const y = Math.random() * altura;
    botaoNao.style.position = "absolute";
    botaoNao.style.left = `${x}px`;
    botaoNao.style.top = `${y}px`;
  });
}

// Botão "Sim" mostra apenas a frase final
if (botaoSim) {
  botaoSim.addEventListener("click", () => {
    // Esconde os botões
    botaoSim.style.display = "none";
    botaoNao.style.display = "none";

    // Cria a frase final
    const fraseFinal = document.createElement("p");
    fraseFinal.textContent = "Obrigada por aceitar, você tem um ótimo gosto :)";
    fraseFinal.style.fontSize = "22px";
    fraseFinal.style.color = "#800080";
    fraseFinal.style.fontWeight = "bold";
    fraseFinal.style.marginTop = "20px";

    if (pedido) {
      pedido.appendChild(fraseFinal);
    }
  });
}
