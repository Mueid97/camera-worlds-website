import React from 'react';
import useProducts from '../../hooks/useProducts';
import Product from '../Product/Product';

const Reviews = () => {
    const[products,setProducts] = useProducts([])
    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-10 mb-10 lg:px-24 mt-20'>
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