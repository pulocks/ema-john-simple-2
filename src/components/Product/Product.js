import React from 'react';
import './Product.css';


const Product = (props) => {
    const {name, img, price, stock, seller} = props.product;
    
    return (
        <div className="product">
            <div>
                <img src={img} alt=""></img>
            </div>
            <div className="product-name">
                <h4>{name}</h4>
                <h4>by: {seller}</h4>
                <p><small>${price}</small></p>
                <p><small>$only {stock} left in stock - order soon</small></p>
                <button className="button" onClick={() => props.handleAddProduct(props.product)}>add to cart</button>
            </div>        
        </div>
        
    );
};

export default Product;