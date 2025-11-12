// Seleciona todos os elementos e botões principais
const mensagens = document.querySelectorAll(".mensagem");
const botaoSim = document.getElementById("sim");
const botaoNao = document.getElementById("nao");
const pedido = document.getElementById("pedido");

let index = 0;

// Oculta tudo no início
mensagens.forEach(m => m.style.display = "none");
if (pedido) pedido.style.display = "none";

// Mostra apenas a primeira mensagem
if (mensagens.length > 0) {
  mensagens[0].style.display = "block";
  mensagens[0].classList.add("active");
}

// Avança com o botão "Próximo"
document.querySelectorAll(".proximo").forEach((btn, i) => {
  btn.addEventListener("click", () => {
    mensagens[i].style.display = "none"; // esconde atual
    if (i + 1 < mensagens.length) {
      mensagens[i + 1].style.display = "block"; // mostra próxima
    } else {
      // Se acabou, mostra o pedido final
      if (pedido) pedido.style.display = "block";
    }
  });
});

// Faz o botão "Não" fugir quando o mouse passa
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

// Faz os gatinhos caírem quando clica no "Sim"
if (botaoSim) {
  botaoSim.addEventListener("click", () => {
    for (let i = 0; i < 20; i++) {
      const gatinho = document.createElement("img");
      gatinho.src = "https://i.postimg.cc/ZK0m6WBr/cute-cat.png";
      gatinho.className = "gatinho";
      gatinho.style.left = Math.random() * window.innerWidth + "px";
      gatinho.style.animationDuration = 3 + Math.random() * 3 + "s";
      document.body.appendChild(gatinho);
      setTimeout(() => gatinho.remove(), 6000);
    }
  });
}

