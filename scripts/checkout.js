import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
// import '../data/cart-class.js';
// import '../data/backend-practice.js';
import {loadProducts,loadProductsFetch} from '../data/products.js';
import {loadCart} from '../data/cart.js';

async function loadPage(){
    try{
    await loadProductsFetch();
        await new Promise((resolve,reject) => {
            loadCart(() => {
                // reject(); // to throw an error
                resolve();
            });
        });
    }catch(error){
        console.log('unexpected error try again');
    }
    renderOrderSummary();
    renderPaymentSummary();
}
loadPage();
/*
Promise.all([
    // new Promise((resolve) => {
    //     loadProducts(()=>{
    //         resolve('one');
    //     });
    // })
    loadProductsFetch(),
    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    })
]).then((val) => {
    console.log(val);
    renderOrderSummary();
    renderPaymentSummary();
});
*/
/*
// Added cart with promise
new Promise((resolve) => {
    loadProducts(()=>{
        resolve();
    });
}).then(()=>{
    return new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    });
}).then(() =>{
    renderOrderSummary();
    renderPaymentSummary();
})
*/
/*
// Added Cart
loadProducts(()=>{
    loadCart(()=>{
        renderOrderSummary();
        renderPaymentSummary();
    })
})
*/
/*
// Using Promise
new Promise((resolve)=>{
    loadProducts(()=>{
        resolve('store in val');
    })
}).then((val) => {
    console.log(val);
    renderOrderSummary();
    renderPaymentSummary();
})
*/
// Using call back
/*
loadProducts(()=>{
    renderOrderSummary();
    renderPaymentSummary();
});
*/