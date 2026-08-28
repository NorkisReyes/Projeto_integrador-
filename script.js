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
<div class="container">

    <h1 class="text-center">
        Acesso à Visão
    </h1>

    <p class="text-center fs-5">
        Informação, inclusão e acessibilidade para todos
    </p>


    <div
        class="d-flex justify-content-center gap-2 flex-wrap mt-3"
        aria-label="Ferramentas de acessibilidade"
    >

        <button
            type="button"
            class="btn btn-light"
            onclick="aumentarFonte()"
        >
            A+
        </button>

        <button
            type="button"
            class="btn btn-light"
            onclick="diminuirFonte()"
        >
            A-
        </button>

        <button
            type="button"
            class="btn btn-warning"
            onclick="alternarContraste()"
        >
            Alto Contraste
        </button>

        <button
            type="button"
            class="btn btn-success"
            onclick="lerPagina()"
        >
            🔊 Ouvir Página
        </button>

    </div>

</div>
font-size: 18px;

line-height: 1.7;

background-color: #ffffff;

color: #222222;

transition:
    background-color 0.3s,
    color 0.3s;
font-size: 18px;

line-height: 1.7;

background-color: #ffffff;

color: #222222;

transition:
    background-color 0.3s,
    color 0.3s;
font-size: 18px;

line-height: 1.7;

background-color: #ffffff;

color: #222222;

transition:
    background-color 0.3s,
    color 0.3s;
font-size: 18px;

line-height: 1.7;

background-color: #ffffff;

color: #222222;

transition:
    background-color 0.3s,
    color 0.3s;
font-size: 18px;

line-height: 1.7;

background-color: #ffffff;

color: #222222;

transition:
    background-color 0.3s,
    color 0.3s;
