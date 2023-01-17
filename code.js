// declaração de todas as variaveis universais 
const formCadastro = document.getElementById("cadastro");
const usuarioCadastro = document.getElementById("usuario-cadastro");
const emailCadastro = document.getElementById("email-cadastro");
const senhaCadastro = document.getElementById("senha-cadastro");
const confirmarSenhaCadastro = document.getElementById("confirmar-senha-cadastro");
const formLogin = document.getElementById("login");
const usuarioLogin = document.getElementById("usuario-login");
const emailLogin = document.getElementById("email-login");
const senhaLogin = document.getElementById("senha-login");
let usuarioSalvo;
let emailSalvo;
let senhaSalva;
let arr = []; // array de armazemanto dos dados de todas as contas dos usuários
// eventos da página
$("#realizar-cadastro").click( () => { // botao realizar cadastro
    $("#form-cadastro").show();
    $("#tela-inicial").hide();
})
$("#realizar-login").click( () => { // botao realizar login
    $("#form-login").show();
    $("#tela-inicial").hide();
})
$(".voltar-cadastro").click( () => {// botao voltar da tela de cadastro para a tela inicial 
    $("#form-cadastro").hide();
    $("#tela-inicial").show();
    // resetando os valores e limpando os campos de cadastro
    $("#usuario-cadastro").val("");
    $("#email-cadastro").val("");
    $("#senha-cadastro").val("");
    $("#confirmar-senha-cadastro").val("");
    limpar(usuarioCadastro);
    limpar(emailCadastro);
    limpar(senhaCadastro);
    limpar(confirmarSenhaCadastro);
})
$(".voltar-login").click( () => { // botao voltar da tela de login para a tela inicial 
    $("#form-login").hide();
    $("#tela-inicial").show();
    // resetando os valores e limpando os campos de login
    $("#usuario-login").val("");
    $("#email-login").val("");
    $("#senha-login").val("");
    limpar(usuarioLogin);
    limpar(emailLogin);
    limpar(senhaLogin);
})
formCadastro.addEventListener("submit", (e) => { // botao submit formulario de cadastro 
    e.preventDefault(); // prevenir submit padrão do form
    completarCadastro(); // chamar função de cadastro
});
formLogin.addEventListener("submit", (e) => { // botao submit formulario de login 
    e.preventDefault(); // prevenir submit padrão do form
    completarLogin(); // chamar função de login
});
$("#LogOut").click( () => { // botao logout
    $("#text").val("");
    $("#text").hide();
    $("#LogOut").hide();
    $("#inicio").show();
    // resetando os valores e limpando os campos de cadastro ou login
    $("#usuario-cadastro").val("");
    $("#email-cadastro").val("");
    $("#senha-cadastro").val("");
    $("#confirmar-senha-cadastro").val("");
    $("#usuario-login").val("");
    $("#email-login").val("");
    $("#senha-login").val("");
    limpar(usuarioCadastro);
    limpar(emailCadastro);
    limpar(senhaCadastro);
    limpar(confirmarSenhaCadastro);
    limpar(usuarioLogin);
    limpar(emailLogin);
    limpar(senhaLogin);
})
// funções da página
function completarCadastro(){ // função realizar cadastro
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
function completarLogin(){ // função realizar login
    // variaveis para pegar o valor dos inputs sem espaços
    const usuarioValue = usuarioLogin.value.trim();
    const emailValue = emailLogin.value.trim();
    const senhaValue = senhaLogin.value.trim();
    const arrUsersLenght = arr.length;
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
        for(let cont = 0; cont <= arrUsersLenght; cont++){
            if(usuarioValue == arr[cont].User ){
                let contSaver = cont;
                if(emailValue == arr[contSaver].Email && senhaValue == arr[contSaver].senha){
                    logar(arr[contSaver].User, arr[contSaver].Email);
                }else{
                    alert("Erro! usuário inexistente")
                    $("#usuario-login").val("");
                    $("#email-login").val("");
                    $("#senha-login").val("");        
                    limpar(usuarioLogin);
                    limpar(emailLogin);
                    limpar(senhaLogin);
                }
            }
        }
    }
}
function erro(item, mensagem){ // função erro nos inputs de cadastro ou login   
    const form = item.parentElement; // pegar o pai do respectivo item da DOM
    const span = form.querySelector("span");
    item.className = "erro"; // adcionar classe "erro" aos itens dos inputs
    span.innerText = mensagem; // mensagem de erro na tela
}
function sucesso(item){ // função sucesso nos inputs de cadastro ou login 
    const form = item.parentElement; // pegar o pai do respectivo item da DOM
    const span = form.querySelector("span");
    item.className = "sucesso"; // adcionar classe "sucesso" aos itens dos inputs
    span.innerHTML = "";
    validador_Geral(); // chamar função de confirmação de cadastro
}
function limpar(item){ // função limpar os campos de texto dos inputs de cadastro e login 
    const form = item.parentElement; // pegar o pai do respectivo item da DOM
    const span = form.querySelector("span");
    item.className = "";
    span.innerHTML = "";    
}
function validador_Geral(){ // função validar cadastro
    const validadorGeral = document.querySelectorAll(".sucesso"); // contador do numero de campos de cadastro corretos
    if(validadorGeral.length == 4){ // if para verificar se todos os campos de cadastro estão corretos
        // pegar o valor dos campos de cadastro removendo todos os espaços 
        usuarioSalvo = usuarioCadastro.value.trim();
        emailSalvo = emailCadastro.value.trim();
        senhaSalva = senhaCadastro.value.trim();
        arr.push({User: usuarioSalvo, Email: emailSalvo, senha: senhaSalva}); // salvando dados do usuário em um object dentro do array "arr"
        $("#tela-inicial").show();
        $("#text").show();
        $("#LogOut").show();
        $("#inicio").hide();
        $("#form-cadastro").hide();
        $("#text").html("Usuário: " + usuarioSalvo + "<br>" + emailSalvo);
    }
}
function logar(Usuario, Email){ // função realizar login 
    $("#tela-inicial").show();
    $("#text").show();
    $("#LogOut").show();
    $("#inicio").hide();
    $("#form-login").hide();
    $("#text").html("Usuário: " + Usuario + "<br>" + Email);
}