function gerarVIP() {

  let estilo = Math.random();

  let sensi;

  if (estilo < 0.33) {
    // Rushador
    sensi = {
      geral: 100,
      redDot: 95,
      mira2x: 90,
      mira4x: 80,
      awm: 70,
      dpi: 700
    };
  } 
  else if (estilo < 0.66) {
    // Capa
    sensi = {
      geral: 95,
      redDot: 100,
      mira2x: 85,
      mira4x: 75,
      awm: 65,
      dpi: 650
    };
  } 
  else {
    // Preciso
    sensi = {
      geral: 90,
      redDot: 90,
      mira2x: 95,
      mira4x: 85,
      awm: 80,
      dpi: 600
    };
  }

  document.getElementById("resultado").innerHTML = `
    ⚡ MODO INSANO ATIVADO ⚡ <br><br>
    Geral: ${sensi.geral} <br>
    Red Dot: ${sensi.redDot} <br>
    Mira 2x: ${sensi.mira2x} <br>
    Mira 4x: ${sensi.mira4x} <br>
    AWM: ${sensi.awm} <br>
    DPI: ${sensi.dpi}
  `;
}
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let letters = "01";
letters = letters.split("");

let fontSize = 14;
let columns = canvas.width / fontSize;

let drops = [];
for (let x = 0; x < columns; x++)
  drops[x] = 1;

function draw() {
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#c800ff";

  for (let i = 0; i < drops.length; i++) {
    let text = letters[Math.floor(Math.random()*letters.length)];
    ctx.fillText(text, i*fontSize, drops[i]*fontSize);

    if (drops[i]*fontSize > canvas.height && Math.random() > 0.975)
      drops[i] = 0;

    drops[i]++;
  }
}

setInterval(draw, 33);