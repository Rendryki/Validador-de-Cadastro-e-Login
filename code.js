// declaração de todas as variaveis universais 
const realizarCadastro = document.getElementById("realizar-cadastro");
const realizarLogin = document.getElementById("realizar-login");
const voltar_Cadastro = document.querySelector(".voltar-cadastro");
const voltar_Login = document.querySelector(".voltar-login");
const formCadastro = document.getElementById("cadastro");
const usuarioCadastro = document.getElementById("usuario-cadastro");
const emailCadastro = document.getElementById("email-cadastro");
const senhaCadastro = document.getElementById("senha-cadastro");
const confirmarSenhaCadastro = document.getElementById("confirmar-senha-cadastro");
const cadastroBotao = document.getElementById("confirmar-cadastro");
const formLogin = document.getElementById("login");
const usuarioLogin = document.getElementById("usuario-login");
const emailLogin = document.getElementById("email-login");
const senhaLogin = document.getElementById("senha-login");
const sair = document.getElementById("LogOut");
let usuarioSalvo;
let emailSalvo;
let senhaSalva;

// botao realizar cadastro
realizarCadastro.addEventListener("click", (e) => {

    document.getElementById("form-cadastro").style.display = "block";
    document.getElementById("tela-inicial").style.display = "none";

});

// botao realizar login
realizarLogin.addEventListener("click", (e) => {

    document.getElementById("form-login").style.display = "block";
    document.getElementById("tela-inicial").style.display = "none";

});

// botao voltar da tela de cadastro para a tela inicial 
voltar_Cadastro.addEventListener("click", (e) => {

    document.getElementById("form-cadastro").style.display = "none";
    document.getElementById("tela-inicial").style.display = "block";

    // resetando os valores e limpando os campos de cadastro
    usuarioCadastro.value = "";
    emailCadastro.value = "";
    senhaCadastro.value = "";
    confirmarSenhaCadastro.value = "";
    limpar(usuarioCadastro);
    limpar(emailCadastro);
    limpar(senhaCadastro);
    limpar(confirmarSenhaCadastro);

});

// botao voltar da tela de login para a tela inicial 
voltar_Login.addEventListener("click", (e) => {

    document.getElementById("form-login").style.display = "none";
    document.getElementById("tela-inicial").style.display = "block";

    // resetando os valores e limpando os campos de login
    usuarioLogin.value = "";
    emailLogin.value = "";
    senhaLogin.value = "";
    limpar(usuarioLogin);
    limpar(emailLogin);
    limpar(senhaLogin);

});

// botao submit formulario de cadastro 
formCadastro.addEventListener("submit", (e) => {

    e.preventDefault(); // prevenir submit padrão do form
    completarCadastro(); // chamar função de cadastro

});

// botao submit formulario de login 
formLogin.addEventListener("submit", (e) => {

    e.preventDefault(); // prevenir submit padrão do form
    completarLogin(); // chamar função de login

});

// botao logout
sair.addEventListener("click", (e) => {

    document.getElementById("text").innerHTML = "";
    document.getElementById("text").style.display = "none";
    document.getElementById("LogOut").style.display = "none";
    document.getElementById("inicio").style.display = "block";

    // resetando os valores e limpando os campos de cadastro ou login
    usuarioCadastro.value = "";
    emailCadastro.value = "";
    senhaCadastro.value = "";
    confirmarSenhaCadastro.value = "";
    usuarioLogin.value = "";
    emailLogin.value = "";
    senhaLogin.value = "";
    limpar(usuarioCadastro);
    limpar(emailCadastro);
    limpar(senhaCadastro);
    limpar(confirmarSenhaCadastro);
    limpar(usuarioLogin);
    limpar(emailLogin);
    limpar(senhaLogin);

});

// função realizar cadastro
function completarCadastro(){

    // variaveis para pegar o valor dos inputs sem espaços
    const usuarioValue = usuarioCadastro.value.trim();
    const emailValue = emailCadastro.value.trim();
    const senhaValue = senhaCadastro.value.trim();
    const senhaConfirmarValue = confirmarSenhaCadastro.value.trim();

    // condicionais para verificação dos inputs com sucesso ou erro e chamar as respectivas funções de cada caso
    if(usuarioValue === ""){

        erro(usuarioCadastro, "Preencha este campo");

    }else{

        sucesso(usuarioCadastro);

    }

    if(emailValue === ""){

        erro(emailCadastro, "Preencha este campo");

    }else{

        sucesso(emailCadastro);

    }

    if(senhaValue === ""){

        erro(senhaCadastro, "Preencha este campo");

    }else if(senhaValue.length < 8){
        
        erro(senhaCadastro, "senha muito fraca")

    }else{

        sucesso(senhaCadastro);

    }

    if(senhaConfirmarValue === ""){

        erro(confirmarSenhaCadastro, "Preencha este campo");

    }else if(senhaValue != senhaConfirmarValue){

        erro(senhaCadastro, "As senhas não são iguais");
        erro(confirmarSenhaCadastro, "As senhas não são iguais");

    }else if(senhaValue.length < 8){
        
        erro(confirmarSenhaCadastro, "senha muito fraca")

    }else{

        sucesso(confirmarSenhaCadastro);

    }

}

// função realizar login
function completarLogin(){

    // variaveis para pegar o valor dos inputs sem espaços
    const usuarioValue = usuarioLogin.value.trim();
    const emailValue = emailLogin.value.trim();
    const senhaValue = senhaLogin.value.trim();

    // condicionais para verificação dos inputs com sucesso ou erro e chamar as respectivas funções de cada caso
    if(usuarioValue === ""){

        erro(usuarioLogin, "Preencha este campo");

    }else{

        sucesso(usuarioLogin);

    }

    if(emailValue === ""){

        erro(emailLogin, "Preencha este campo");

    }else{

        sucesso(emailLogin);

    }

    if(senhaValue === ""){

        erro(senhaLogin, "Preencha este campo");

    }else if(senhaValue.length < 8){
        
        erro(senhaLogin, "senha muito fraca")

    }else{

        sucesso(senhaLogin);

    }

    if(usuarioValue != "" && emailValue != "" && senhaValue != ""){
        if(usuarioValue != usuarioSalvo || emailValue != emailSalvo ||senhaValue  != senhaSalva){
            alert("usuário Inexistente");
            usuarioLogin.value = "";
            emailLogin.value = "";
            senhaLogin.value = "";
            limpar(usuarioLogin);
            limpar(emailLogin);
            limpar(senhaLogin);

        }else{
            logar();
        }
    }
    

}

// função erro nos inputs de cadastro ou login
function erro(item, mensagem){
    
    const form = item.parentElement; // pegar o pai do respectivo item da DOM
    const span = form.querySelector("span");
    item.className = "erro"; // adcionar classe "erro" aos itens dos inputs
    span.innerText = mensagem; // mensagem de erro na tela

}

// função sucesso nos inputs de cadastro ou login 
function sucesso(item){

    const form = item.parentElement; // pegar o pai do respectivo item da DOM
    const span = form.querySelector("span");
    item.className = "sucesso"; // adcionar classe "sucesso" aos itens dos inputs
    span.innerHTML = "";

    validador_Geral(); // chamar função de confirmação de cadastro

}

// função limpar os campos de texto dos inputs de cadastro e login 
function limpar(item){

    const form = item.parentElement; // pegar o pai do respectivo item da DOM
    const span = form.querySelector("span");
    item.className = "";
    span.innerHTML = "";

}

// função validar cadastro
function validador_Geral(){

    const validadorGeral = document.querySelectorAll(".sucesso"); // contador do numero de campos de cadastro corretos

    if(validadorGeral.length == 4){ // if para verificar se todos os campos de cadastro estão corretos
        
        // pegar o valor dos campos de cadastro removendo todos os espaços 
        usuarioSalvo = usuarioCadastro.value.trim();
        emailSalvo = emailCadastro.value.trim();
        senhaSalva = senhaCadastro.value.trim();

        document.getElementById("form-cadastro").style.display = "none";
        document.getElementById("inicio").style.display = "none";
        document.getElementById("tela-inicial").style.display = "block";
        document.getElementById("text").style.display = "block";
        document.getElementById("LogOut").style.display = "block";
        document.getElementById("text").innerHTML = "Usuário: " + usuarioSalvo + "<br>" + emailSalvo;

    }

}

// função realizar login 
function logar(){

    document.getElementById("form-login").style.display = "none";
    document.getElementById("inicio").style.display = "none";
    document.getElementById("tela-inicial").style.display = "block";
    document.getElementById("text").style.display = "block";
    document.getElementById("LogOut").style.display = "block";
    document.getElementById("text").innerHTML = "Usuário: " + usuarioSalvo + "<br>" + emailSalvo;

}