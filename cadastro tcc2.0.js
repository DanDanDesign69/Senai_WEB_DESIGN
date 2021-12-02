function validar() {
    var email = document.getElementById("email");
    var nome = document.getElementById("nome");
    var sobrenome = document.getElementById("sobrenome");
    var cep = document.getElementById("cep");
    var password = document.getElementById("password");
    var confpassword = document.getElementById("confpassword");

    if (email.value == "") {
        alert("Por favor , indique seu Email");
        email.focus();
        return;
    }

    if (nome.value == "") {
        alert("Por favor , indique seu Nome!");
        nome.focus();
        return;
    }
    

    if (sobrenome.value == "") {
        alert("Por favor , indique seu Sobrenome!");
        sobrenome.focus();
        return;
    }

    if (cep.value == "") {
        alert("Por favor , indique seu CEP!");
        cep.focus();
        return;
    }

    if (password.value == "") {
        alert("Senha não informada!");
        password.focus();
        return;
    }

    if (confpassword.value == "") {
        alert("Confirme sua senha!");
        confpassword.focus();
        return;
    }

}

document.getElementById("reset-btn").addEventListener("click", resetar)

function resetar() {
    document.getElementById("myform").reset();
}