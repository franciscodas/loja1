var btn = document.querySelector('.mouseShow');
var container = document.querySelector('.menu1');

btn.addEventListener('click', function(){
    if(container.style.display === 'block'){
        container.style.display = 'none';
    } else{
        container.style.display = 'block';
    }
});
function clicar(){
    var a = document.querySelector(".botao-sessao")
    a.innerText = "clicado"
}