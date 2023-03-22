/*  
Objetivo n1: Quando o usuario clicar em veja o trailer, devemos abrir o modal com o video do trailer
    -passo 1 - dar um jeito de pegar o elemento do botão na tela usando o js
    - Passo 2 - dar um jeito de idendificar quando o usuario clicar no botão
    - passo 3- dar uma jeito de pegar o elemento de fechar a modal
    -passo 4 - Abrir o midal na tela.

Objetivo n2: Quando o usuario clicar no x, devemos fechar o modal
    - passo 1 - dar um jeito de pegar o elemento de fechar a modal
    - passo 2 -  dar um jeito de identificar quando o usuario clicar no x
    - passo 3 -  Fechar o modal
*/
const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal")
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () =>{
    alternarModal()
    Video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () =>{
    alternarModal();
    video.setAttribute("src", "");
})


