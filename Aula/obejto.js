var body = document.body;
var array = [user, user1];
class Usuario {
constructor(nome, numero, email){
    this.nome = nome;
    this.numero = numero;
    this.email= email;
}
 }
 var user = new Usuario('Ronald', 40328922, 'metters');
 var user1 = new Usuario('felipe', 40028922, 'marchalmetters');

 function criartabela () {
    let table = document.createElement("table")
    body.appendChild(table);
    table.classList.add('table1')
    let thead= document.createElement('thead');
    table.appendChild(thead);
    let trThead = document.createElement('tr');

    for(key of Object.keys(user)) {
        let th = document.createElement('th');
        th.textContent = key;
        trThead.appendChild(th);
    }
    thead.appendChild(trThead);
    
    let tr = document.createElement('tr');
    for(key of Object.keys(user)){
        let td = document.createElement('td')
        td.textContent = user[key];
        tr.appendChild(td);
    }
    table.appendChild(tr)
    for(array of Object.keys(user)){
        
    }
}

criartabela();