document.getElementById("add").addEventListener("click", mudaVisbilidade);

var form = document.forms['demo'];

function mudaVisbilidade() {
    form.style.display = "block";
}

document.getElementById("cancelar")function () {
    document.getElementsByClassName("none")[0].style.display = 'none';
    let r = confirm("Tem Certeza que deseja cancelar ?");
    if (r == true) {
        txt = "You pressed OK!";
    } 
    document.getElementById("demo").reset();
}

document.getElementById("save-btn").onclick = () => {
    let data = new FormData(document.forms['demo'])
    user = {}
    
    for (var pair of data.entries()) {
        user[pair[0]] = pair[1];
      }
      addUserToTable();
      document.getElementById("demo").reset();
      document.getElementsByClassName("none")[0].style.display = 'none';
  }

  function addUserToTable() {
      let tbody = document.getElementsByTagName("tbody")[0]
      let newTableRow = document.createElement('tr');
      for (key in user) {
          let newTableDivision = document.createElement ("td");
          newTableDivision.textContent = user[key];
          newTableRow.appendChild(newTableDivision);
      }
      tbody.appendChild(newTableRow);
  }

 /*function resetForm() {
      document.Forms['myForm'].reset();
      document.getElementsByClassName("demo")[0].classList.addUserToTable
  }*/
