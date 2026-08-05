let tamanho = 20;

function aumentarFonte(){

tamanho += 2;

document.body.style.fontSize = tamanho + "px";

}

function diminuirFonte(){

if(tamanho > 12){

tamanho -= 2;

document.body.style.fontSize = tamanho + "px";

}

}

function altoContraste(){

document.body.classList.toggle("altoContraste");

}

function lerPagina(){

let texto = document.body.innerText;

let fala = new SpeechSynthesisUtterance(texto);

fala.lang = "pt-BR";

speechSynthesis.cancel();

speechSynthesis.speak(fala);

}let tamanho = 20;

function aumentarFonte(){

tamanho += 2;

document.body.style.fontSize = tamanho + "px";

}

function diminuirFonte(){

if(tamanho>14){

tamanho -=2;

document.body.style.fontSize=tamanho+"px";

}

}

function contraste(){

document.body.classList.toggle("altoContraste");

}

function lerPagina(){

let texto=document.body.innerText;

let fala=new SpeechSynthesisUtterance(texto);

fala.lang="pt-BR";

speechSynthesis.cancel();

speechSynthesis.speak(fala);

}