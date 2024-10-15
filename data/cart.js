export let cart = JSON.parse(localStorage.getItem('cart')) || [];
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