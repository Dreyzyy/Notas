let notasID = document.getElementById('notas');
notasID.addEventListener('input', armazenamentoLocal);
    
 let tituloID = document.getElementById('areaDoTítulo');
tituloID.addEventListener('input', armazenamentoLocal);

 tituloID.value = localStorage.getItem('Titulo') || '';
 notasID.value = localStorage.getItem('notas') || '';
   


function armazenamentoLocal() {

    let titulo = tituloID.value 
    
    let armazemTitulo = localStorage.setItem('Titulo', titulo);
     
    let notas = notasID.value;
    
    let armazemNota = localStorage.setItem('notas', notas);
}

function botaoMenu() {
    let menu = document.getElementById('menuDeOpcoes');
    menu.style.display = menu.style.display === 'inline-block' ? 'none' : 'inline-block';
}

function apertarBotao() {
    const inspiração = document.getElementById('btnInspiracao');
    inspiração.addEventListener('click', () => {
        const div = document.getElementById('foto');
        let img = div.querySelector('img');

        if(!img) {
            img = document.createElement('img');
            img.src = '/imagens/davi-brito.png';
            div.appendChild(img);
        } else {
            img.style.display = (img.style.display === 'none') ? 'block' : 'none';
        }
    })
}

apertarBotao();