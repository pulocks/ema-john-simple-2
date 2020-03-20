import React from 'react';

const Cart = (props) => {
    const carts = props.cart;
    let total = 0;
    for(let i = 0; i < carts.length; i++) {
        const product = carts[i];
        total += product.price;
    }
    return (
        <div id="cart-container">
            <h2>Order Summary</h2>
            <h4>Items ordered: {carts.length}</h4>
            <h4>Total Price: {total}</h4>
        </div>
    );
};

export default Cart;