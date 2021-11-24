var body = document.body;

class Usuario{
  constructor(nome, idade, rg, cpf, ){
	this.nome = nome;
	this.idade = idade;
	this.rg = rg;
   }
}

var user = new Usuario('dandan', '19', '24321432143',);

function criaTabela(){
	let table = document.createElement("table");
	body.appendChild(table);
	let thead = document.createElement('thead');
	table.appendChild(thead);
	let trThead = document.createElement('tr');
	for (key of Object.keys(user)) {
		let th = document.createElement('th');
		th.textContent = key;
		trThead.appendChild(th);
	}
	thead.appendChild(trThead);
	
	let tr = document.createElement('tr');
	for (key of Object.keys(user)){
		let td = document.createElement('td')
		td.textContent = user[key];
		trThead.appendChild(td);
	}
	table.appendChild(tr);
}

criaTabela();