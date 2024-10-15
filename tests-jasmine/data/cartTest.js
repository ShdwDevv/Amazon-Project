import {addToCart,cart} from '../../data/cart.js';
describe('test suite: addToCart',()=>{
    it('add a new product to the cart',()=>{
        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(1);
    });
    it('add an existing product to the cart',()=>{
        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(1);
    });
    it('again add an new product to the cart',()=>{
        addToCart('83d4ca15-0f35-48f5-b7a3-1ea210004f2e');
        expect(cart.length).toEqual(2);
    });
});