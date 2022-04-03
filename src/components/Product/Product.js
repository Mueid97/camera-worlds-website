import React from 'react';
import './Product.css';
const Product = (props) => {
    const { imgs, name, reating } = props.product;
    return (
        <div className='review-item'>
            <div>
                <img src={imgs} alt="" />
                <h4>Name: {name}</h4>
                <p>reating: {reating}</p>
            </div>

        </div>
    );
};

export default Product;