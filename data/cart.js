export let cart = JSON.parse(localStorage.getItem('cart')) || [
    {
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity : 2 , 
        deliveryOptionId : '1'
    },
    {
        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity : 3,
        deliveryOptionId : '2'
    }
]
// console.log(cart);
export function addToCart(productId){
    let matchingItem = '';
    cart.forEach((cartItem)=>{
        if(cartItem.productId === productId){
            matchingItem = cartItem;
        }
    });
    if(matchingItem){
        matchingItem.quantity+= 1;
    }
    else{
        cart.push({
            productId,
            quantity : 1,
            deliveryOptionId : '1'
        });
    }
    saveStorage();
}

export function removeFromCart(productId){
    // let newCart = [];
    cart.forEach((product,idx) => {
        if(product.productId === productId){
            // newCart.push(product);
            cart.splice(idx,1);
        }
    });
    // cart = newCart;
        
    saveStorage();
}

function saveStorage(){
    localStorage.setItem('cart',JSON.stringify(cart));
}
export function updateDeliveryOption(productId,deliveryOptionId){
    let matchingItem = '';
    cart.forEach((cartItem)=>{
        if(cartItem.productId === productId){
            matchingItem = cartItem;
        }
    });
    matchingItem.deliveryOptionId = deliveryOptionId;
    saveStorage();
}

export function loadCart(fun){
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load',()=>{
    console.log(xhr.response);
    fun();
  })
  xhr.open('GET','https://supersimplebackend.dev/cart');
  xhr.send();
}