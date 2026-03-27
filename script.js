let vip = false;

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gerarSensi() {

  if (!vip) {
    alert("Ative o VIP para gerar sensi completa!");
    return;
  }

  const sensi = {
    geral: random(80, 200),
    redDot: random(70, 200),
    mira2x: random(60, 200),
    mira4x: random(50, 200),
    awm: random(40, 200),
    cameraLivre: random(50, 200),
    botaoAtirar: random(30, 70),
    dpi: random(400, 1000)
  };

  document.getElementById("resultado").innerHTML = `
    Geral: ${sensi.geral} <br>
    Red Dot: ${sensi.redDot} <br>
    Mira 2x: ${sensi.mira2x} <br>
    Mira 4x: ${sensi.mira4x} <br>
    AWM: ${sensi.awm} <br>
    Câmera Livre: ${sensi.cameraLivre} <br>
    Botão Atirar: ${sensi.botaoAtirar} <br>
    DPI: ${sensi.dpi}
  `;
}

function ativarVIP() {
  alert("Escaneie o PIX para ativar VIP 💎");
  vip = true;
}