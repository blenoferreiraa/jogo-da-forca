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
        nome: "CURITIBA",
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
        nome: "FLORIANOPOLIS",
        categoria:"LUGARES"
    },

    palavra014 = {
        nome: "RESENDE",
        categoria:"LUGARES"
    },

    palavra015 = {
        nome: "FERNANDOPOLIS",
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
        nome: "SALVADOR",
        categoria:"LUGARES"
    },

    palavra019 = {
        nome: "CARIACICA",
        categoria:"LUGARES"
    },

    palavra020 = {
        nome: "MARINGA",
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

    palavra062 = {
        nome: "TRINDADE",
        categoria:"LUGARES"
    },

    palavra063 = {
        nome: "FORTALEZA",
        categoria:"LUGARES"
    },

    palavra064 = {
        nome: "GUARULHOS",
        categoria:"LUGARES"
    },

    palavra065 = {
        nome: "OSASCO",
        categoria:"LUGARES"
    },

    palavra066 = {
        nome: "UBERLANDIA",
        categoria:"LUGARES"
    },

    palavra067 = {
        nome: "ITURAMA",
        categoria:"LUGARES"
    },

    palavra068 = {
        nome: "CAMPINAS",
        categoria:"LUGARES"
    },

    palavra069 = {
        nome: "BEIJINHO",
        categoria:"DOCE"
    },

    palavra070 = {
        nome: "BRIGADEIRO",
        categoria:"DOCE"
    },

    palavra071 = {
        nome: "PIRULITO",
        categoria:"DOCE"
    },

    palavra072 = {
        nome: "MEDICO",
        categoria:"PROFISSÕES"
    },

    palavra073 = {
        nome: "ENGENHEIRO",
        categoria:"PROFISSÕES"
    },

    palavra074 = {
        nome: "ADVOGADO",
        categoria:"PROFISSÕES"
    },

    palavra075 = {
        nome: "PSICOLOGO",
        categoria:"PROFISSÕES"
    },

    palavra076 = {
        nome: "PROFESSORA",
        categoria:"PROFISSÕES"
    },

    palavra077 = {
        nome: "PROGRAMADOR",
        categoria:"PROFISSÕES"
    },

    palavra078 = {
        nome: "ENFERMEIRO",
        categoria:"PROFISSÕES"
    },

    palavra079 = {
        nome: "POLICIAL",
        categoria:"PROFISSÕES"
    },

    palavra080 = {
        nome: "TAXISTA",
        categoria:"PROFISSÕES"
    },
    
    palavra081 = {
        nome: "BRENO",
        categoria:"NOME"
    },

    palavra082 = {
        nome: "GIULIA",
        categoria:"NOME"
    },

    palavra083 = {
        nome: "ALEX",
        categoria:"NOME"
    },

    palavra084 = {
        nome: "CAROLINE",
        categoria:"NOME"
    },

    palavra085 = {
        nome: "JOAO",
        categoria:"NOME"
    },

    palavra086 = {
        nome: "MICHEL",
        categoria:"NOME"
    },

    palavra087 = {
        nome: "PIETRA",
        categoria:"NOME"
    },

    palavra088 = {
        nome: "LARISSA",
        categoria:"NOME"
    },

    palavra089 = {
        nome: "VANESSA",
        categoria:"NOME"
    },

    palavra090 = {
        nome: "VITORIA",
        categoria:"NOME"
    },

    palavra091 = {
        nome: "LOUISE",
        categoria:"NOME"
    },

    palavra092 = {
        nome: "GABRIELA",
        categoria:"NOME"
    },

    palavra093 = {
        nome: "ARTHUR",
        categoria:"NOME"
    },

    palavra094 = {
        nome: "DIOGO",
        categoria:"NOME"
    },

    palavra095 = {
        nome: "FELIPE",
        categoria:"NOME"
    },

    palavra096 = {
        nome: "FERNANDO",
        categoria:"NOME"
    },

    palavra097 = {
        nome: "VAGNER",
        categoria:"NOME"
    },

    palavra098 = {
        nome: "JULIANA",
        categoria:"NOME"
    },

    palavra099 = {
        nome: "PAULO",
        categoria:"NOME"
    },

    palavra100 = {
        nome: "HENRIQUE",
        categoria:"NOME"
    },

    palavra101 = {
        nome: "LUCAS",
        categoria:"NOME"
    },

    palavra102 = {
        nome: "MARCELO",
        categoria:"NOME"
    },

    palavra103 = {
        nome: "BRUNO",
        categoria:"NOME"
    },

    palavra104 = {
        nome: "VICENTE",
        categoria:"NOME"
    },

    palavra105 = {
        nome: "LUCIANO",
        categoria:"NOME"
    },

    palavra106 = {
        nome: "RENATO",
        categoria:"NOME"
    },

    palavra107 = {
        nome: "AUGUSTO",
        categoria:"NOME"
    },

    palavra108 = {
        nome: "GABRIEL",
        categoria:"NOME"
    },

    palavra109 = {
        nome: "PORTUGUES",
        categoria:"MATERIA ESCOLA"
    },

    palavra110 = {
        nome: "MATEMATICA",
        categoria:"MATERIA ESCOLA"
    },

    palavra111 = {
        nome: "HISTORIA",
        categoria:"MATERIA ESCOLA"
    },

    palavra112 = {
        nome: "GEOGRAFIA",
        categoria:"MATERIA ESCOLA"
    },

    palavra113 = {
        nome: "CIENCIAS",
        categoria:"MATERIA ESCOLA"
    },

    palavra114 = {
        nome: "FISICA",
        categoria:"MATERIA ESCOLA"
    },

    palavra115 = {
        nome: "FILOSOFIA",
        categoria:"MATERIA ESCOLA"
    },

    palavra117 = {
        nome: "BIOLOGIA",
        categoria:"MATERIA ESCOLA"
    },

    palavra118 = {
        nome: "QUIMICA",
        categoria:"MATERIA ESCOLA"
    },

    palavra119 = {
        nome: "JANEIRO",
        categoria:"MES DO ANO"
    },

    palavra120 = {
        nome: "FEVEREIRO",
        categoria:"MES DO ANO"
    },

    palavra121 = {
        nome: "MARCO",
        categoria:"MES DO ANO"
    },

    palavra122 = {
        nome: "ABRIL",
        categoria:"MES DO ANO"
    },

    palavra123 = {
        nome: "MAIO",
        categoria:"MES DO ANO"
    },

    palavra124 = {
        nome: "JUNHO",
        categoria:"MES DO ANO"
    },

    palavra125 = {
        nome: "JULHO",
        categoria:"MES DO ANO"
    },

    palavra126 = {
        nome: "AGOSTO",
        categoria:"MES DO ANO"
    },

    palavra127 = {
        nome: "SETEMBRO",
        categoria:"MES DO ANO"
    },

    palavra128 = {
        nome: "OUTUBRO",
        categoria:"MES DO ANO"
    },

    palavra129 = {
        nome: "NOVEMBRO",
        categoria:"MES DO ANO"
    },

    palavra130 = {
        nome: "DESEMBRO",
        categoria:"MES DO ANO"
    },

    palavra131 = {
        nome: "BRASILEIRO",
        categoria:"NACIONALIDADE"
    },

    palavra132 = {
        nome: "URUGUAIO",
        categoria:"NACIONALIDADE"
    },

    palavra133 = {
        nome: "ARGENTINO",
        categoria:"NACIONALIDADE"
    },

    palavra134 = {
        nome: "FRANCES",
        categoria:"NACIONALIDADE"
    },

    palavra135 = {
        nome: "COLOMBIANO",
        categoria:"NACIONALIDADE"
    },

    palavra136 = {
        nome: "PERUANO",
        categoria:"NACIONALIDADE"
    },

    palavra137 = {
        nome: "VENEZUELANO",
        categoria:"NACIONALIDADE"
    },

    palavra138 = {
        nome: "CHILENO",
        categoria:"NACIONALIDADE"
    },

    palavra139 = {
        nome: "PORTUGUES",
        categoria:"NACIONALIDADE"
    },

    palavra140 = {
        nome: "CANADENSE",
        categoria:"NACIONALIDADE"
    },

    palavra141 = {
        nome: "RUSSO",
        categoria:"NACIONALIDADE"
    },

    palavra142 = {
        nome: "JOGAR",
        categoria:"VERBOS"
    },

    palavra143 = {
        nome: "APRENDER",
        categoria:"VERBOS"
    },

    palavra144 = {
        nome: "DORMIR",
        categoria:"VERBOS"
    },

    palavra145 = {
        nome: "CHORAR",
        categoria:"VERBOS"
    },

    palavra146 = {
        nome: "TORCER",
        categoria:"VERBOS"
    },

    palavra147 = {
        nome: "ESTUDAR",
        categoria:"VERBOS"
    },

    palavra148 = {
        nome: "VIAJAR",
        categoria:"VERBOS"
    },

    palavra149 = {
        nome: "COMER",
        categoria:"VERBOS"
    },
    
    palavra150 = {
        nome: "COMPREENDER",
        categoria:"VERBOS"
    },

    palavra151 = {
        nome: "ESCREVER",
        categoria:"VERBOS"
    },

    palavra152 = {
        nome: "SIMULAR",
        categoria:"VERBOS"
    },

    palavra153 = {
        nome: "PLANTAR",
        categoria:"VERBOS"
    },

    palavra154 = {
        nome: "CORRER",
        categoria:"VERBOS"
    },

    palavra155 = {
        nome: "DESORGANIZAR",
        categoria:"VERBOS"
    },

    palavra156 = {
        nome: "DESENHHAR",
        categoria:"VERBOS"
    },

    palavra157 = {
        nome: "SOLTAR",
        categoria:"VERBOS"
    },

    palavra158 = {
        nome: "PRENDER",
        categoria:"VERBOS"
    },

    palavra159 = {
        nome: "ARREPIAR",
        categoria:"VERBOS"
    },

    palavra160 = {
        nome: "ARRANHAR",
        categoria:"VERBOS"
    },

    palavra161 = {
        nome: "DESTRUIR",
        categoria:"VERBOS"
    },

    palavra162 = {
        nome: "CONSTRUIR",
        categoria:"VERBOS"
    },

    palavra163 = {
        nome: "TRABALHAR",
        categoria:"VERBOS"
    },

    palavra164 = {
        nome: "LIMPAR",
        categoria:"VERBOS"
    },

    palavra165 = {
        nome: "VENDER",
        categoria:"VERBOS"
    },

    palavra166 = {
        nome: "COMPRAR",
        categoria:"VERBOS"
    },

    palavra167 = {
        nome: "MACHUCAR",
        categoria:"VERBOS"
    },

    palavra168 = {
        nome: "VIAJAR",
        categoria:"VERBOS"
    },

    palavra169 = {
        nome: "TRANSFERIR",
        categoria:"VERBOS"
    },

    palavra170  = {
        nome: "ALFABETIZAR",
        categoria:"VERBOS"
    },

    palavra171 = {
        nome: "IDENTIFICAR",
        categoria:"VERBOS"
    },

    palavra172 = {
        nome: "IDOLATRAR",
        categoria:"VERBOS"
    },

    palavra173 = {
        nome: "IRLANDA",
        categoria:"LUGARES"
    },
    palavra174 = {
        nome: "EQUADOR",
        categoria:"LUGARES"
    },
    palavra175 = {
        nome: "CHILE",
        categoria:"LUGARES"
    },
    palavra175 = {
        nome: "INDONESIA",
        categoria:"LUGARES"
    },
    palavra176 = {
        nome: "MALDIVAS",
        categoria:"LUGARES"
    },
    palavra177 = {
        nome: "INGLATERRA",
        categoria:"LUGARES"
    },
    palavra178 = {
        nome: "GROELANDIA",
        categoria:"LUGARES"
    },
    palavra179 = {
        nome: "UZBEQUISTAO",
        categoria:"LUGARES"
    },
    palavra180 = {
        nome: "INDONESIA",
        categoria:"LUGARES"
    },
    palavra181 = {
        nome: "CREGUENHEM",
        categoria:"LUGARES"
    },
    palavra182 = {
        nome: "BICICLETA",
        categoria:"TRANSPORTE"
    },
    palavra183 = {
        nome: "LANCHA",
        categoria:"TRANSPORTE"
    },
    palavra184 = {
        nome: "NAVIO",
        categoria:"TRANSPORTE"
    },
    palavra185 = {
        nome: "TELEFERICO",
        categoria:"TRANSPORTE"
    },
    palavra186 = {
        nome: "MOTOCICLETA",
        categoria:"TRANSPORTE"
    },
    palavra187 = {
        nome: "BARCO",
        categoria:"TRANSPORTE"
    },
    palavra188 = {
        nome: "AERONAVE",
        categoria:"TRANSPORTE"
    },
    palavra189 = {
        nome: "TREM",
        categoria:"TRANSPORTE"
    },
    palavra190 = {
        nome: "CAIAQUE",
        categoria:"TRANSPORTE"
    },
    palavra191 = {
        nome: "FUNICULAR",
        categoria:"TRANSPORTE"
    },
    palavra192 = {
        nome: "XICARA",
        categoria:"OBJETOS"
    },
    palavra193 = {
        nome: "MOEDA",
        categoria:"OBJETOS"
    },
    palavra194 = {
        nome: "ESPARADRAPO",
        categoria:"OBJETOS"
    },
    palavra195 = {
        nome: "SINO",
        categoria:"OBJETOS"
    },
    palavra196 = {
        nome: "CHUVEIRO",
        categoria:"OBJETOS"
    },
    palavra197 = {
        nome: "TAMBORETE",
        categoria:"OBJETOS"
    },
    palavra198 = {
        nome: "LAMPADA",
        categoria:"OBJETOS"
    },
    palavra199 = {
        nome: "BOCAL",
        categoria:"OBJETOS"
    },
    palavra200 = {
        nome: "CORTINA",
        categoria:"OBJETOS"
    },
    palavra201 = {
        nome: "LAPIS",
        categoria:"OBJETOS"
    },
    palavra202 = {
        nome: "MELANCIA",
        categoria:"ALIMENTOS"
    },
    palavra203 = {
        nome: "AMENDOIM",
        categoria:"ALIMENTOS"
    },
    palavra204 = {
        nome: "ESFIRRA",
        categoria:"ALIMENTOS"
    },
    palavra205 = {
        nome: "GOROROBA",
        categoria:"ALIMENTOS"
    },
    palavra206 = {
        nome: "JANTAR",
        categoria:"ALIMENTOS"
    },
    palavra207 = {
        nome: "SABOROSO",
        categoria:"ALIMENTOS"
    },
    palavra208 = {
        nome: "DESJEJUM",
        categoria:"ALIMENTOS"
    },
    palavra209 = {
        nome: "MASTIGAR",
        categoria:"ALIMENTOS"
    },
    palavra210 = {
        nome: "ENGOLIR",
        categoria:"ALIMENTOS"
    },
    palavra211 = {
        nome: "DOCERIA",
        categoria:"ALIMENTOS"
    },
    palavra212 = {
        nome: "DRAGAO",
        categoria:"ANIMAIS"
    },
    palavra213 = {
        nome: "GALINHA",
        categoria:"ANIMAIS"
    },
    palavra214 = {
        nome: "PAVAO",
        categoria:"ANIMAIS"
    },
    palavra215 = {
        nome: "CAMELO",
        categoria:"ANIMAIS"
    },
    palavra216 = {
        nome: "PERU",
        categoria:"ANIMAIS"
    },
    palavra217 = {
        nome: "ZEBRA",
        categoria:"ANIMAIS"
    },
    palavra218 = {
        nome: "DROMEDARIO",
        categoria:"ANIMAIS"
    },
    palavra219 = {
        nome: "CALANGO",
        categoria:"ANIMAIS"
    },
    palavra220 = {
        nome: "SAGUI",
        categoria:"ANIMAIS"
    },
    palavra221 = {
        nome: "LAGARTIXA",
        categoria:"ANIMAIS"
    },
    palavra222 = {
        nome: "HIPOPOTAMO",
        categoria:"ANIMAIS"
    }
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

