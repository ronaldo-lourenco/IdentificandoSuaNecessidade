const caixaPrincipal = document.querySelector(".caixa-principal") ;
const caixaPerguntas = document.querySelector(".caixa-perguntas") ;
const caixaAlternativas = document.querySelector(".caixa-alternativas") ;
const caixaResultado = document.querySelector(".caixa-resultado") ;
const textoResultado = document.querySelector(".texto-resultado") ;

const perguntas =[
    {
        enunciado : "Você já se sentiu discriminado(a) ou violentado(a) por causa de sua raça, gênero ou etnia?",
        alternativas : [
            {
                texto: "Sim, em algumas ocasiões.",
                afirmacao: "Procure delegacias especializadas no atendimento a mulheres, crianças e adolescentes vítimas de violência; Defensoria Pública, Centros de Referência Especializados de Assistência Social (CREAS), Conselho Municipal dos Direitos da Mulher, Conselho Municipal de Promoção da Igualdade Racial e Organizações não governamentais (ONGs)." 
            },
            {
                texto: "Não." ,
                afirmacao: ""
            }
        ]
    },
    {
        enunciado : "Você sofreu abuso e ou importunação sexual?",
        alternativas : [
            {
                texto: "Sim.",
                afirmacao: "Procure as Delegacias Especializadas de Atendimento à Mulher (DEAMs); Disque 180 - Central de Atendimento à Mulher, discar 100, procurar Centros de Referência Especializados de Assistência Social (CREAS) e Organizações não governamentais (ONGs)."
            },
            {
                texto: "Não." ,
                afirmacao: "" 
            }
        ]
    },
    {
        enunciado : "Você já se sentiu discriminado(a) por causa de sua orientação sexual ou origem?",
        alternativas : [
            {
                texto: "Sim.",
                afirmacao: "Procure as Delegacias Especializadas de Atendimento à Diversidade; Disque 100 - denúncias de violação dos direitos humanos; Procure o Ministério Público; Procure a Defensoria Pública; Procure o Conselho Municipal dos Direitos da População LGBT; Procure por Organizações não governamentais (ONGs)."
            },
            {
                texto: "Não." ,
                afirmacao: ""
            }
        ]
    },
    {
        enunciado : "Você está envolvido em acidente de trânsito?",
        alternativas : [
            {
                texto: "Sim.",
                afirmacao: "Disque 190 - Polícia Militar; Disque 193 - Corpo de Bombeiros; Disque 192 - SAMU - Serviço de Atendimento Móvel de Urgência; Procure Centros de Reabilitação."
            },
            {
                texto: "Não." ,
                afirmacao: ""
            }
        ]
    },
    {
        enunciado : "Você tem dificuldade em realizar atividades do dia a dia por causa de sentimentos de tristeza ou desânimo?",
        alternativas : [
            {
                texto: "Sim.",
                afirmacao: "Disque 188 - Centro de Valorização a Vida; Procure ajuda psicológica em Unidades Básicas de Saúde (UBS), Centros de Atenção Psicossocial (CAPS), Clínicas particulares e Organizações não governamentais (ONGs)."
            },
            {
                texto: "Não." ,
                afirmacao: ""
            }
        ]
    }
] ;

let atual = 0 ;
let perguntaAtual ;
let historiaFinal = "" ;

function mostraPerguntas(){
    if (atual >= perguntas.length){
        mostraResultado() ;
        return ;
    } ;
    perguntaAtual = perguntas[atual] ;
    caixaPerguntas.textContent = perguntaAtual.enunciado ;
    caixaAlternativas.textContent = "" ;
    textoResultado.textContent    = "" ;
    mostraAlternativas() ;
} ;

mostraPerguntas() ;

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button") ;
        botaoAlternativas.textContent = alternativa.texto ;
        botaoAlternativas.addEventListener("click", ()=>respostaFinal(alternativa)) ;
        caixaAlternativas.appendChild(botaoAlternativas) ;
    } ;
} ;

function respostaFinal(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao ;
    historiaFinal   += afirmacao + " " ;
    atual++ ;
    mostraPerguntas() ;    
} ;

function mostraResultado(){
    caixaPerguntas.textContent    = "Com base na(s) sua(s) resposta(s):" ;
    textoResultado.textContent    = historiaFinal ;
    caixaAlternativas.textContent = "" ;
}