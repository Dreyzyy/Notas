let notasID = document.getElementById('notas');
notasID.addEventListener('input', armazenamentoLocal) ;
    
/* let tituloID = document.getElementById('areaDoTítulo');
tituloID.addEventListener('input', armazenamentoLocal) 

INTERDITADO ATÉ TIRAR O FORM DO TITULO  

 tituloID.value = localStorage.getItem('Titulo') || ''; */
 notasID.value = localStorage.getItem('notas') || '';
   


function armazenamentoLocal() {
    /* let titulo = tituloID.value 
    
    INTERDITADO ATÉ TIRAR O FORM DO TITULO
    
    let armazemTitulo = localStorage.setItem('Titulo', titulo);
     */
    let notas = notasID.value;
    let armazemNota = localStorage.setItem('notas', notas);
}

