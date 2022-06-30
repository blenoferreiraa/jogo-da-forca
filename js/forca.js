let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;
const palavras = [

    palavra001 = {
        nome: "FLAMENGO",
        categoria:"TIME DE FUTEBOL"
    },

    palavra002 = {
        nome: "FLUMINENSE",
        categoria:"TIME DE FUTEBOL"
    },

    palavra003 = {
        nome: "VASCO",
        categoria:"TIME DE FUTEBOL"
    
    },

    palavra004 = {
        nome: "BOTAFOGO",
        categoria:"TIME DE FUTEBOL"
    },

    palavra005 = {
        nome: "CORINTHIANS",
        categoria:"TIME DE FUTEBOL"
    },

    palavra006 = {
        nome: "SAOPAULO",
        categoria:"TIME DE FUTEBOL"
    },

    palavra007 = {
        nome: "PALMEIRAS",
        categoria:"TIME DE FUTEBOL"
    },

    palavra008 = {
        nome: "SANTOS",
        categoria:"TIME DE FUTEBOL"
    },

    palavra009 = {
        nome: "IRLANDA",
        categoria:"LUGARES"
    },

    palavra010 = {
        nome: "RIODEJANEIRO",
        categoria:"LUGARES"
    },

    palavra011 = {
        nome: "BRASIL",
        categoria:"LUGARES"
    },

    palavra012 = {
        nome: "FRANCA",
        categoria:"LUGARES"
    },
    palavra013 = {
        nome: "ESPIRITOSANTO",
        categoria:"LUGARES"
    },

    palavra014 = {
        nome: "PORTOALEGRE",
        categoria:"LUGARES"
    },

    palavra015 = {
        nome: "NOVAZELANDIA",
        categoria:"LUGARES"
    },

    palavra016 = {
        nome: "ESPANHA",
        categoria:"LUGARES"
    },
    
    palavra017 = {
        nome: "CROACIA",
        categoria:"LUGARES"
    },

    palavra018 = {
        nome: "PORTODEGALINHAS",
        categoria:"LUGARES"
    },

    palavra019 = {
        nome: "COPACABANA",
        categoria:"LUGARES"
    },

    palavra020 = {
        nome: "MINASGERAIS",
        categoria:"LUGARES"
    },

    palavra021 = {
        nome: "FACA",
        categoria:"OBJETO"
    },

    palavra022 = {
        nome: "DADO",
        categoria:"OBJETO"
    },

    palavra023 = {
        nome: "LIVRO",
        categoria:"OBJETO"
    },

    palavra024 = {
        nome: "CADERNO",
        categoria:"OBJETO"
    },

    palavra025 = {
        nome: "CAIXA",
        categoria:"OBJETO"
    },

    palavra026 = {
        nome: "MOUSE",
        categoria:"OBJETO"
    },

    palavra027 = {
        nome: "CADEIRA",
        categoria:"OBJETO"
    },

    palavra028 = {
        nome: "SAPATO",
        categoria:"OBJETO"
    },

    palavra029 = {
        nome: "GARFO",
        categoria:"OBJETO"
    },

    palavra030 = {
        nome: "GARRAFA",
        categoria:"OBJETO"
    },

    palavra031 = {
        nome: "ARROZ",
        categoria:"COMIDA"
    },

    palavra032 = {
        nome: "FEIJAO",
        categoria:"COMIDA"
    },

    palavra033 = {
        nome: "MACARRAO",
        categoria:"COMIDA"
    },

    palavra034 = {
        nome: "BATATA",
        categoria:"COMIDA"
    },

    palavra035 = {
        nome: "FAROFA",
        categoria:"COMIDA"
    },

    palavra036 = {
        nome: "LASANHA",
        categoria:"COMIDA"
    },

    palavra037 = {
        nome: "SOPA",
        categoria:"COMIDA"
    },

    palavra038 = {
        nome: "PAO",
        categoria:"COMIDA"
    },

    palavra039 = {
        nome: "BOLO",
        categoria:"COMIDA"
    },

    palavra040 = {
        nome: "PIZZA",
        categoria:"COMIDA"
    },

    palavra041 = {
        nome: "APPLE",
        categoria:"MARCA"
    },

    palavra042 = {
        nome: "MOTOROLA",
        categoria:"MARCA"
    },

    palavra043 = {
        nome: "MONDIAL",
        categoria:"MARCA"
    },

    palavra044 = {
        nome: "VIGOR",
        categoria:"MARCA"
    },

    palavra045 = {
        nome: "NESTLE",
        categoria:"MARCA"
    },

    palavra046 = {
        nome: "LACTA",
        categoria:"MARCA"
    },

    palavra047 = {
        nome: "VOLVO",
        categoria:"MARCA"
    },

    palavra048 = {
        nome: "VOLKSWAGEN",
        categoria:"MARCA"
    },

    palavra049 = {
        nome: "FORD",
        categoria:"MARCA"
    },

    palavra050 = {
        nome: "COCACOLA",
        categoria:"MARCA"
    },

    palavra051 = {
        nome: "COBRA",
        categoria:"ANIMAL"
    },

    palavra052 = {
        nome: "VACA",
        categoria:"ANIMAL"
    },

    palavra053 = {
        nome: "ELEFANTE",
        categoria:"ANIMAL"
    },

    palavra054 = {
        nome: "CACHORRO",
        categoria:"ANIMAL"
    },

    palavra055 = {
        nome: "GATO",
        categoria:"ANIMAL"
    },

    palavra056 = {
        nome: "CAVALO",
        categoria:"ANIMAL"
    },

    palavra057 = {
        nome: "HIPOPOTAMO",
        categoria:"ANIMAL"
    },

    palavra058 = {
        nome: "TARTARUGA",
        categoria:"ANIMAL"
    },

    palavra059 = {
        nome: "LEAO",
        categoria:"ANIMAL"
    },

    palavra060 = {
        nome: "TIGRE",
        categoria:"ANIMAL"
    },

    palavra061 = {
        nome: "LIQUIDIFICADOR",
        categoria:"ELETROPORTATEIS"
    },

];

//Gerar palavra aleatoria

criarPalavraSecreta();
function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length)
    
    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
}

//Montar Palavra na Tela

montarPalavraNaTela();
function montarPalavraNaTela(){
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";
   
    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(listaDinamica[i] == undefined){
            listaDinamica[i] = "&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
        else{
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
    }
}

function verificaLetraEscolhida(letra){
    document.getElementById("tecla-" + letra).disabled = true;
    if(tentativas > 0)
    {
        mudarStyleLetra("tecla-" + letra);
        comparalistas(letra);
        montarPalavraNaTela();
    }    
}

function mudarStyleLetra(tecla){
    document.getElementById(tecla).style.background = "#C71585";
    document.getElementById(tecla).style.color = "#ffffff";
}

function comparalistas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra)
    if(pos < 0){
        tentativas--
        carregaImagemForca();

        if(tentativas == 0){
            abreModal("OPS!", "Não foi dessa vez ... A palavra secreta era <br>" + palavraSecretaSorteada);
        }
    }
    else{
        for(i = 0; i < palavraSecretaSorteada.length; i++){
            if(palavraSecretaSorteada[i] == letra){
                listaDinamica[i] = letra;
            }
        }
    }
    
    let vitoria = true;
    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria = false;
        }
    }

    if(vitoria == true)
    {
        abreModal("PARABÉNS!", "Você venceu...");
        tentativas = 0;
    }
}

function carregaImagemForca(){
    switch(tentativas){
        case 5:
            document.getElementById("imagem").style.background  = "url('./img/forca01.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background  = "url('./img/forca02.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background  = "url('./img/forca03.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background  = "url('./img/forca04.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background  = "url('./img/forca05.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background  = "url('./img/forca06.png')";
            break;
        default:
            document.getElementById("imagem").style.background  = "url('./img/forca.png')";
            break;
    }
}

function abreModal(titulo, mensagem){
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    });
}

//Botão de Recomeçar

let bntReiniciar = document.querySelector("#btnReiniciar")
bntReiniciar.addEventListener("click", function(){
    location.reload();
});




