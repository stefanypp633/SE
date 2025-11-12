const mensagens = document.querySelectorAll(".mensagem");
const botaoSim = document.getElementById("sim");
const botaoNao = document.getElementById("nao");

let index = 0;

// Inicialmente mostra a primeira mensagem
mensagens[index].classList.add("active");

// Botões "Próximo" para mostrar a próxima mensagem
document.querySelectorAll(".proximo").forEach((btn, i) => {
  btn.addEventListener("click", () => {
    mensagens[i].classList.remove("active");
    index++;
    if(index < mensagens.length) {
      mensagens[index].classList.add("active");
    } else {
      // Mostra a seção final
      document.getElementById("pedido").style.display = "block";
    }
  });
});

// Botão "Não" foge
botaoNao.addEventListener("mouseover", () => {
  const largura = window.innerWidth - botaoNao.offsetWidth;
  const altura = window.innerHeight - botaoNao.offsetHeight;
  const x = Math.random() * largura;
  const y = Math.random() * altura;
  botaoNao.style.left = `${x}px`;
  botaoNao.style.top = `${y}px`;
});

// Gatinhos caindo ao clicar no "Sim"
botaoSim.addEventListener("click", () => {
  for(let i=0; i<20; i++){
    const gatinho = document.createElement("img");
    gatinho.src = "https://i.postimg.cc/ZK0m6WBr/cute-cat.png"; 
    gatinho.className = "gatinho";
    gatinho.style.left = Math.random() * window.innerWidth + "px";
    gatinho.style.animationDuration = 3 + Math.random() * 3 + "s";
    document.body.appendChild(gatinho);
    setTimeout(() => gatinho.remove(), 6000);
  }
});
