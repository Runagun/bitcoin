// ---------------------------------------- Variabler
let appleX = 200;
let appleY = -15;
let appleSize = 20;
let kurvY = 370;
let kurvSize = 35;
let appleSpeed = 1;
let distance;
let score = 0;

// ---------------------------------------- Setup & Draw

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  eple();
  kurv();
  poengTekst();
}

// ---------------------------------------- Eple
function eple() {
  circle(appleX, appleY, appleSize);
  appleY = appleY + appleSpeed;

  if (appleY >= 400) {
    tekst();
    appleSpeed = 1;
  }
}

// ---------------------------------------- Kurv
function kurv() {
  circle(mouseX, kurvY, kurvSize);

  distance = dist(mouseX, kurvY, appleX, appleY);

  if (distance < 25) {
    score = score + 1;
    appleY = -15;
    appleSpeed = appleSpeed + 1;
    appleX = random(15, 385);
  }
}

// ---------------------------------------- Tekst
function tekst() {
  textAlign(CENTER);
  textSize(30);
  text("GAME OVER", 200, 200);
  noLoop();
}

// ---------------------------------------- mouseClick
function mouseClicked() {
  appleY = -15;
  score = 0;
  loop();
}

// ---------------------------------------- poengTekst
function poengTekst() {
  textSize(25);
  textAlign(LEFT);
  text("Poeng: " + score, 25, 30);
}







