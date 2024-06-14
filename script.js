const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que é IA? ",
        alternativas: [
            "É uma inteligência artificial.",
            "alternativa 2"
        ]
    },
    {
        enunciado: "Quando iniciou o novo ensino médio nos deparamos com uma nova realidade, muita tecnologia inovadora nas novas matérias. Qual foi a sensação de estamos diante dessa situação? ",
        alternativas: [
            "Que desespero como vamos nos adaptar com tantas tecnologias.",
            "Isso é super interessante, finalmente iremos ter contato com as novas tecnologias."
        ]
    },
    {
        enunciado: "Como utilizar IA da forma correta para fazer um  trabalho gerando imagens? ",
        alternativas: [
            "Você irá ",
            "alternativa 2"
        ]
    },
    {
        enunciado: "",
        alternativas: [
            "alternativa 1",
            "alternativa 2"
        ]
    },
    {
        enunciado: "",
        alternativas: [
            "alternativa 1",
            "alternativa 2"
        ]
    }


];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}




mostraPergunta();