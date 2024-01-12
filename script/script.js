
function voltar(stage) {
    if (stage == 1) {
        var containervolta = document.getElementById('one')
        var stage_name = document.getElementById('two')

        containervolta.classList.remove('esconde');
        stage_name.classList.add('esconde');
    }
}

function avancar(stage) {
    if (stage == 1) {
        var container = document.getElementById('start');
        var stage_one = document.getElementById('one');

        container.classList.add('esconde');
        stage_one.classList.remove('esconde');

        setTimeout(function () {
            stage_one.classList.add('esconde');
            avancar(2);
        }, 15000)
    }
    else if (stage == 2) {
        var container2 = document.getElementById('one');
        var stage_two = document.getElementById('two')

        container2.classList.add('esconde');
        stage_two.classList.remove('esconde');
    }
    else if (stage == 3) {
        var container3 = document.getElementById('two');
        var stage_tree = document.getElementById('tree')

        container3.classList.add('esconde');
        stage_tree.classList.remove('esconde');
    } 
    else if(stage == 4){
        var container4 = document.getElementById('tree');
        var stage_four = document.getElementById('four')

        container4.classList.add('esconde');
        stage_four.classList.remove('esconde');
    }
}
// var Info = {
//     nome:'Pedro',
//     pontons:22,
//     idade:21
// };
// localStorage.setItem('Jogador2', 'Pedro');
// localStorage.setItem('Pontos', 22);
// var resultado = localStorage.getItem('Jogador');
// console.log(resultado);


//inicio jogo, final jogo direciona para o jogar novamente => sim? mesmo player? => direciona para o jogo novamente se nao o msm player => nome user 
// varios jogadores ranking de quem acertou em menos tentativas 

function boas_vindas() {
    var botaoproxnome = document.getElementById('disabledprox');
    var nomeusuario = document.getElementById('inputnomedouser').value;
    var msgnome = document.getElementById('msgheader');

    var nomeuser = !isNaN(nomeusuario);

    if (nomeusuario === "") {
        msgnome.innerHTML = "NÃO DEIXE O CAMPO VAZIO";
    } else if (nomeuser) {
        msgnome.innerHTML = "NÃO DIGITE APENAS NÚMEROS";

    } else {
        msgnome.innerHTML = `SEJA BEM VINDO(A) ${nomeusuario},TENHA UM BOM JOGO!!`;
        botaoproxnome.disabled = false;
    }
    // true or false --> nomeuser ? msgnome.innerHTML= `SEJA BEM VINDO(A) ${nomeusuario}, TENHA UM BOM JOGO!!` : msgnome.innerHTML="NÃO DIGITE NÚMEROS";
}


var numeroaleatorio = parseInt(Math.random() * 100) + 1;

var saidajogo;
var chuteusuario;
var msgnumtentados;
var msgtentativasusuario;
var numerosjatentados = [];
var tentativauser = 7;


function jogo() {

    chuteusuario = document.getElementById('chuteinput').value;
    saidajogo = document.getElementById('msgjogo');

    numerosuario = parseInt(chuteusuario);

    if (isNaN(numerosuario) || numerosuario < 1 || numerosuario > 100) {
        saidajogo.innerHTML = "chute Inválido!!";
    } else {

        if (numerosjatentados.includes(numerosuario)) {
            saidajogo.innerHTML = "Você já tentou este número. Escolha outro para o seu chute!";

        } else {
            msgnumtentados = document.getElementById('numtentados');
            numerosjatentados.push(numerosuario);
            msgnumtentados.innerHTML = `FORAM DIGITADOS: ${numerosjatentados}`;

            msgtentativasusuario = document.getElementById('msgtentativas');
            msgtentativasusuario.innerHTML = `TENTATIVAS: ${tentativauser}`;

            if (tentativauser > 0) {

                if (numeroaleatorio == chuteusuario) {
                    saidajogo.innerHTML = "PARABÉNS!!! VOCÊ ACERTOU O NÚMERO!"
                    return chutebotao.disabled = true;
                } else if (numeroaleatorio < chuteusuario) {
                    saidajogo.innerHTML = "O CHUTE TEM QUE SER UM NÚMERO MENOR QUE O ANTERIOR";
                } else if (numeroaleatorio > chuteusuario) {
                    saidajogo.innerHTML = "O CHUTE TEM QUE SER UM NÚMERO MAIOR QUE O ANTERIOR";
                }

                tentativauser--;

                if (tentativauser == 0) {
                    saidajogo.innerHTML = `TENTATIVAS ESGOTADAS!! O NÚMERO ERA: ${numeroaleatorio}`;
                    return chutebotao.disabled = true;
                }
            }
        }
    }
}



//final do jogo

// const radio = document.querySelectorAll('[name="opcoes"]');
// radio.forEach(radio => {
//     radio.onclick = function () {
//         radio.forEach(r => r.checked = false);  // Desmarca todos os botões de rádio
//         this.checked = true; // Marca apenas o botão de rádio clicado
//     }
// });

// SO VAI AVANCAR PARA ESSE ESTAGIO APOS O TERMINO DO JOGO, SEJA POR ESGOTAR TT OU GANHAR
function jogar_novamente() {

    var btn_sim = document.getElementById('sim');

    if (btn_sim) {
        var container4 = document.getElementById('four');
        var stage_treevolta = document.getElementById('tree');

        container4.classList.add('esconde');
        stage_treevolta.classList.remove('esconde');
    }
}
 function naojogar_novamente(){

    var btn_nao = document.getElementById('nao');

     if(btn_nao) {
        var container5 = document.getElementById('four');
        var stage_start = document.getElementById('start');

        container5.classList.add('esconde');
        stage_start.classList.remove('esconde');
    }

 }
