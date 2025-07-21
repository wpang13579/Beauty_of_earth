if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready()
}


function ready(){
    var sidecartBtn = document.getElementsByClassName("sidecart")
    for(var i = 0; i < sidecartBtn.length; i++){
        var buttons = sidecartBtn[i];
        buttons.addEventListener("click", displaySideCart)
    }
}

function displaySideCart(event){
    var inputSide = JSON.parse(localStorage.getItem("Cart"));//string

    for(var i = 0; i < inputSide.length; i++){

        var sideRow = document.createElement("li")
        sideRow.classList.add("siderows")
        var sideItems = document.getElementsByClassName("cart-list")[0]

        var siderowcontents = `
        <a href="#" class="photo"><img src="${inputSide[i].img}" class="cart-thumb side-img" alt="" /></a>
        <h6><a href="#" class="side-food">${inputSide[i].name}</a></h6>
        <span class="side-price">${inputSide[i].price}</span></p>
    `
    sideRow.innerHTML = siderowcontents
    sideItems.append(sideRow)  
    }
}