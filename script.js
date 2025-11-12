// Seleciona todos os elementos de mensagem e botões
const mensagens = document.querySelectorAll(".mensagem");
const botaoSim = document.getElementById("sim");
const botaoNao = document.getElementById("nao");
const pedido = document.getElementById("pedido");

let index = 0;

// Esconde todas as mensagens no começo
mensagens.forEach(m => m.style.display = "none");
if (pedido) pedido.style.display = "none";

// Mostra a primeira mensagem
if (mensagens.length > 0) {
  mensagens[0].style.display = "block";
}

// Adiciona funcionalidade aos botões "Próximo"
document.querySelectorAll(".proximo").forEach((btn, i) => {
  btn.addEventListener("click", () => {
    // Esconde a mensagem atual
    mensagens[i].style.display = "none";
    // Mostra a próxima mensagem
    if (i + 1 < mensagens.length) {
      mensagens[i + 1].style.display = "block";
    } else {
      // Se acabou, mostra a seção final
      if (pedido) pedido.style.display = "block";
    }
  });
});

// Botão "Não" foge quando o mouse passa
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

// Gatinhos caindo ao clicar no "Sim"
if (botaoSim) {
  botaoSim.addEventListener("click", () => {
    for (let i = 0; i < 20; i++) {
      const gatinho = document.createElement("img");
      gatinho.src = "https://i.postimg.cc/ZK0m6WBr/cute-cat.png"; // URL do gatinho
      gatinho.className = "gatinho";
      gatinho.style.left = Math.random() * window.innerWidth + "px";
      gatinho.style.animationDuration = 3 + Math.random() * 3 + "s";
      document.body.appendChild(gatinho);
      setTimeout(() => gatinho.remove(), 6000);
    }
  });
}
