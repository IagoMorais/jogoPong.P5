const morais = "Morais Jogos";


let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;


let velocidadeXBolinha = 4;
let velocidadeYBolinha = 4;
let raqueteComprimento = 10;
let raqueteAltura = 90;


let raqueteComprimentoOp = 10;
let raqueteAlturaOp = 90;
let velocidadeYOp;


let xRaquete = 10;
let yRaquete = 150;

let colidiu = false;

let meusPonto = 0;
let pontoOp = 0;

let raquetada;
let ponto;
let trilha;

let xRaqueteOp = 575;
let yRaqueteOp = 150;

function preload() {
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400); //tamanho da tela
  trilha.loop();
}

function draw() {
  background(0); //alterar cor 
  mostraBolinha();
  movimentoBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOp, yRaqueteOp);
  movimentaMinhaRaquete();
  verificaColisaoRaquete(yRaquete, xRaquete);
  verificaColisaoRaquete(yRaqueteOp, xRaqueteOp);
  movimentaRaqueteOp();
  incluiPlacar();
  mancaPonto();

}
function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}
function movimentoBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}
function verificaColisaoBorda() {
  if (xBolinha > width ||
    xBolinha < 0) {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha > height ||
    yBolinha < 0) {
    velocidadeYBolinha *= -1;
  }
}
function mostraRaquete(x, y) {
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}


function verificaColisaoRaquete() {
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete) {
    velocidadeXBolinha *= -1;
    raquetda.play();
  }
}


function verificaColisaoRaquete(y, x) {
  colidiu =
    collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu) {
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function movimentaRaqueteOp() {
  velocidadeYOp = yBolinha - yRaqueteOp - raqueteComprimento / 2 - 30;
  yRaqueteOp += velocidadeYOp;
}

function incluiPlacar() {
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0))
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPonto, 170, 26);
  fill(color(255, 140, 0))
  rect(450, 10, 40, 20);
  fill(255);
  text(pontoOp, 470, 26);
  text(morais, 320, 26)

}
function mancaPonto() {
  if (xBolinha > 600) {
    meusPonto += 1;
    ponto.play();
  }
  if (xBolinha < 0) {
    pontoOp += 1;
    ponto.play();
  }
}

function bolinhaNaoFicaPresa() {
  if (XBolinha - raio < 0) {
    XBolinha = 23
  }
}
