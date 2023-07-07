let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let raqueteComprimento = 10;
let raqueteAltura = 90;

let raqueteComprimentoOp = 10;
let raqueteAlturaOp = 90;
let velocidadeYOp ;
//var raquete
let xRaquete = 1;
let yRaquete = 150;

let colidiu = false;

let xRaqueteOp = 587;
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
  mostreRaqueteOponente(xRaqueteOp, yRaqueteOp);
  movimentaMinhaRaquete();
  verificaColisaoRaquete();
  colisaoMinhaRaquteBiblioteca();
movimentaRaqueteOp ();  

  
}                          
function mostraBolinha(){
  circle(xBolinha,yBolinha, diametro);
}
function movimentoBolinha(){
    xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}
function verificaColisaoBorda(){
 if (xBolinha > width ||
     xBolinha < 0){
    velocidadeXBolinha *= -1;
    }
  if (yBolinha > height ||
     yBolinha < 0){
    velocidadeYBolinha *= -1;
      }
  
}
function mostraRaquete(x, y){
  rect(x, y, raqueteComprimento, raqueteAltura);
}
function mostreRaqueteOponente(){
  rect(xRaqueteOp, yRaqueteOp, raqueteComprimentoOp, raqueteAlturaOp);
}
function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}


function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
  }
}


function colisaoMinhaRaquteBiblioteca(){
  colidiu = 
  collideRectCircle(xRaquete, yRaquete, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadeXbolinha*= -1;
  }
}
function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
  }
}

function movimentaRaqueteOp(){
  velocidadeYOp = yBolinha -yRaqueteOp - raqueteComprimento / 2 - 30;
  yRaqueteOp += velocidadeYOp 
}