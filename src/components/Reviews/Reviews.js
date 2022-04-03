import React from 'react';
import useProducts from '../../hooks/useProducts';
import Product from '../Product/Product';
import './Reviews.css'
const Reviews = () => {
    const[products,setProducts] = useProducts([])
    return (
        <div className='products-item'>
                {
                    products.map(product => <Product
                    key={product.id}
                    product={product}
                    ></Product>)
                }
            </div>
    );
};

export default Reviews;