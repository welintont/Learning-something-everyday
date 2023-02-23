 //Botão abrir e fechar menu com jQUERY
 //$('.menu-principal__btn').click(function(){
 //   $('.menu-principal').toggleClass('menu-principal--fechado');
//});

// Isso aqui está em JQuery 
$(document).ready(function(){
    //Botão abrir e fechar menu com JavaScript puro
    let botao =document.querySelector('.menu-principal__btn');
    let menuPrincipal = document.querySelector('.menu-principal');
    
    botao.addEventListener("click", abreFechaMenu);
    
    function abreFechaMenu(evento){
        menuPrincipal.classList.toggle('menu-principal--fechado');
    }
    // Validação do formulário de contato
    $('.formulario').validate({
        rules: {
            nome:{
                required: true,
                maxlength: 50
            },
            email: {
                required: true,
                email: true
            },
            mensagem: 'required'
        },
        messages: {
            nome: {
                required: "*Por favor,  preencha o campo nome",
                maxlength: "*Por favor, não preencha com mais de 50 caracteres"
            },
            email: {
                required: "*Por favor,  preencha o campo e-mail",
                email: "*Por favor,  preencha com um e-mail válido",
            },
            mensagem: {
                required: "*Por favor, digite sua mensagem"
            }
        },
    })
   
})
// Isso aqui está em JQuery 


// TESTES JAVASCRIPT
function gritar(){
    alert("aahhhhhhhhhhhsdfsdfd");
};

function perguntar(){
    var nome;
    nome = prompt("Qual é o seu nome?");
    alert("Olá " + nome);
};

function muda_texto(){
    var h1 = document.getElementsByTagName("li");
    li[0].innerText = "Testando JavaScript";
};





