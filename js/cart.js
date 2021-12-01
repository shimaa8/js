//Display products from local storage//////////////////////////
var productsBody = document.getElementById("products-tbody");
function displayInCart(){
   
    var pItems = "";
    if(localStorage.cartProducts)
    {
        cartItem = JSON.parse(localStorage.cartProducts);  //to change from string to objects
     
        for(p in cartItem)   //for(in) not for(of) becuse we need to iterate over property name of the object.
        {
            pItems+= `   <tr>
            <th scope="row"><img src="${cartItem[p].image}" class="img-table img-fluid"></th>
            <td id="product-name">${cartItem[p].name}</td>
            <td>$ ${cartItem[p].price} </td> 
            <td>  
                <button type="button" class="btn btn-sm" id="plus-btn" onclick="inc('${cartItem[p].name}')" >+</button>
                        <span class="mx-3" id="items-number">${cartItem[p].count} </span>
                <button type="button" class="btn btn-sm" id="minus-btn" onclick="dec('${cartItem[p].name}')">-</button>

             </td>
            </tr>`

           productsBody.innerHTML = pItems; 
        }

    }
}
displayInCart();
//increase product count //////////////////////////

function inc(objName){
    for(p in cartItem) {
        if(objName == cartItem[p].name)
        { 
          cartItem[p].count++;  
          localStorage.cartNumber++;
          localStorage.cartProducts = JSON.stringify(cartItem);
          displayInCart()
        }
    }
    
}

function dec(objName){
    for(p in cartItem) {
        if(objName == cartItem[p].name)
        {
            cartItem[p].count--; 
            localStorage.cartNumber--;

            if(cartItem[p].count == 0) 
                {
                    var r = confirm ("Are you sure you want to delet this item " + objName);
                      if(r)
                      {
                          delete cartItem[objName];
                      }
                      else{
                        cartItem[p].count = 1;
                      }
                }
        }
    }
    localStorage.cartProducts = JSON.stringify(cartItem);
    displayInCart()
}