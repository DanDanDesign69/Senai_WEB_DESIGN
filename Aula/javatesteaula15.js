var formulario=document.forms["meuform"]

function validaform() {
    validacampo("nome");
    validacampo("idade");
    validacampo("celular");
    validacampo("genero");
}
/*function validacampo() {
     for(elementoImput in formulario){
        validacampo(elementoImput.name);
     }
}*/

function validacampo(campo){
    if(formulario[campo].type==="text"){
        validacampotexto(campo);
    }
    if(formulario[campo].type==="number"){
        validacampotexto(campo);
    }
    if(formulario[campo].type==="radio"){
        validacampotexto(campo);
    }
}

function validacampotexto(campo){
    if (!formulario[campo].value){
        alert("Campo " + campo + " falta de dados")
    }
}
