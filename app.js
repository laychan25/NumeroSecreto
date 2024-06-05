let listaDeNumeroSorteados = [];
let numeroLimite = 100
let numeroSecreto = geraNumeroAleatorio();
let tentativas = 1

exibirMensagemInicial()

function exibirTextoNaTela(tag , texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{
        rate: 1.2});
}


function exibirMensagemInicial(){

    exibirTextoNaTela('h1','Jogo do numero secreto ')
    exibirTextoNaTela('p', 'Escolha um numero entre 1 a 100' )

}

function verificarChute(){
    let chute = document.querySelector('input').value
   if(chute== numeroSecreto){
    exibirTextoNaTela('h1', 'Acertou!');
    let palavraTentativa = tentativas == 1 ? 'tentativa' : "tentativas"
    let mensagem = `voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}! `
    exibirTextoNaTela('p', mensagem);
    document.getElementById('reiniciar').removeAttribute('disabled');
   }else{
    if(chute > numeroSecreto){
        exibirTextoNaTela('p', 'O numero secreto é menor');
    }else{
        exibirTextoNaTela('p', 'o numero secreto é maior');
    }
    tentativas++;
    limparCampo();
   }
}

function geraNumeroAleatorio (){
    let numeroEscolhido = parseInt(Math.random()* numeroLimite +1);
    let quantidadeDeElementosNaLista = listaDeNumeroSorteados.length

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumeroSorteados = [];
    }

    if(listaDeNumeroSorteados.includes(numeroEscolhido)){
        return geraNumeroAleatorio();
    }else{
        listaDeNumeroSorteados.push(numeroEscolhido)
        return numeroEscolhido;
    }
    
}

function limparCampo(){
    chute = document.querySelector('input')
    chute.value = '';
}

function recaregarPagina(){
  numeroSecreto = geraNumeroAleatorio();
  tentativas = 1;
  limparCampo()
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true)
  
}