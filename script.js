// Controle de Tamanho de Fonte
let tamanhoAtual = 16;
const limiteMaximo = 26;
const limiteMinimo = 14;

document.getElementById('btn-aumentar').addEventListener('click', () => {
    if (tamanhoAtual < limiteMaximo) {
        tamanhoAtual += 2;
        document.body.style.fontSize = tamanhoAtual + 'px';
        
        // Ajusta proporcionalmente os títulos dinâmicos
        document.querySelectorAll('h2').forEach(h2 => {
            h2.style.fontSize = (tamanhoAtual + 14) + 'px';
        });
    }
});

document.getElementById('btn-diminuir').addEventListener('click', () => {
    if (tamanhoAtual > limiteMinimo) {
        tamanhoAtual -= 2;
        document.body.style.fontSize = tamanhoAtual + 'px';
        
        // Diminui proporcionalmente os títulos
        document.querySelectorAll('h2').forEach(h2 => {
            h2.style.fontSize = (tamanhoAtual + 14) + 'px';
        });
    }
});

// Alternar Alto Contraste
document.getElementById('btn-contraste').addEventListener('click', () => {
    document.body.classList.toggle('alto-contraste');
});

// Recurso de Leitura de Tela básico (Web Speech API)
document.getElementById('btn-ouvir').addEventListener('click', () => {
    const textoParaLer = document.querySelector('.conteudo-principal').innerText;
    const utterance = new SpeechSynthesisUtterance(textoParaLer);
    utterance.lang = 'pt-BR';
    
    // Cancela se já estiver lendo, ou inicia uma nova leitura
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
    } else {
        window.speechSynthesis.speak(utterance);
    }
});
