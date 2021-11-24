document.getElementById("processar-normal").addEventListener("click", processarParagrafoNormal);

var elemento = document.getElementById("primeira-div");
var cores = ["blue" ,"red" ,"green" ,"yellow" ,"pink"];
var contadorDeCor = 0;
var contadorParagrafoNormal = 0;

function processarParagrafoNormal(){
	let elementos = document.getElementsByClassName("paragrafo-normal")
	let elemento = elementos[contadorParagrafoNormal];
	elemento.style = "background-color: " + pegarCor();
	contadorParagrafoNormal += 1;
	if(contadorParagrafoNormal >= elementos.length) {
		contadorParagrafoNormal = 0;
	}	
}

function pegarCor(){
	let cor = cores[contadorDeCor];
	contadorDeCor += 1;
	if(contadorDeCor >= cores.length){
        contadorDeCor = 0;
	}
	return cor;
}	
document.getElementById("processar-diferente").addEventListener("click", contadorParagrafoDiferente);

var elemento = document.getElementById("primeira-div");
var cores = ["blue" ,"red" ,"green" ,"yellow" ,"pink"];
var contadorDeCor = 0;
var contadorParagrafoDiferente = 0;

function contadorParagrafoDiferente(){
	let elementos = document.getElementsByClassName("paragrafo-diferente")
	let elemento = elementos[contadorParagrafoDiferente];
	elemento.style = "background-color: " + pegarCor();
	contadorParagrafoDiferente += 1;
	if(contadorParagrafoDiferente >= elementos.length) {
		contadorParagrafoDiferente = 0;
	}	
}

function pegarCor(){
	let cor = cores[contadorDeCor];
	contadorDeCor += 1;
	if(contadorDeCor >= cores.length){
        contadorDeCor = 0;
	}
	return cor;
}	