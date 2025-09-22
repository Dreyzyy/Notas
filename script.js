daviBrito()
function daviBrito () {
let botaoUm = document.getElementById('botao1');
let containerImagem = document.getElementById('containerDaImagem');

botaoUm.addEventListener('click', () => {
    const imagem = document.createElement('img');
    imagem.src = 'davi-brito-1706289291.png';
    containerImagem.appendChild(imagem);
})
}