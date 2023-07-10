let xBolinha = 300;
let yBolinha = 200;
let diametro = 30;
let raio = diametro / 2;

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let raqueteComprimento = 15;
let raqueteAltura = 90;

let raqueteComprimentoOp = 10;
let raqueteAlturaOp = 90;
let velocidadeYOp;
//var raquete
let xRaquete = 10;
let yRaquete = 150;

let colidiu = false;

let meusPonto = 0;
let pontoOp = 0;

let xRaqueteOp = 575;
let yRaqueteOp = 150;

function setup() {
  createCanvas(600, 400); //tamanho da tela
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
  //movimentaRaqueteOp();
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
  }
}


function verificaColisaoRaquete(y, x) {
  colidiu =
    collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu) {
    velocidadeXBolinha *= -1;
  }
}

function movimentaRaqueteOp() {
  velocidadeYOp = yBolinha - yRaqueteOp - raqueteComprimento / 2 - 30;
  yRaqueteOp += velocidadeYOp;
}

function incluiPlacar (){
  fill(255)
  text(meusPonto, 278, 26);
  text(pontoOp, 321, 26);
}
function mancaPonto(){
  if (xBolinha > 600){
    meusPonto += 1;
  }
  if (xBolinha < 0){
    pontoOp += 1;
  }
}