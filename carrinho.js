var cart = [];


function pegadados(produto, preco, imagem) {
    cart.push({
        produto,
        preco,
        imagem,
    });
    console.log(cart);
    carrinho()
}

function carrinho() {
    let lista = document.getElementById("carrinho-item")
    lista.innerHTML = "";
    for (item of cart) {
        let li = document.createElement("li");
        let image = document.createElement("img");
        image.classList.add("produteros");
        image.src = item.imagem;
        li.appendChild(image);
        let prod = document.createElement("span");
        prod.innerHTML = item.produto;
        prod.classList.add("produtoz");
        let cost = document.createElement("span");
        cost.innerHTML = item.preco;
        li.appendChild(prod);
        li.appendChild(cost);
        lista.appendChild(li);
    }
}