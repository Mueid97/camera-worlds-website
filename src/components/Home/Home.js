import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import image from '../images/cam2.jpg';
import Product from '../Product/Product';
import './Home.css'
const Home = () => {
    const [products, setProducts] = useProducts([]);
    let navigate = useNavigate();
    return (
        <div>
            <div className='home-section'>
                <div className='title-section'>
                    <h1 className='title-1'>Create a new world With your Camera.</h1>
                    <h1><span className='title-2'>Buy Any camera , Discover the World.</span></h1>
                    <p>Camera is a most importent products for people. You discover your world.  Its helps us to store any memory if you want. So, if you store your memory buy any camera.A camera is an optical instrument that captures a visual image. At a basic level, cameras consist of sealed boxes (the camera body), with a small hole (the aperture) that allows light through to capture an image on a light-sensitive surface (usually photographic film or a digital sensor). Cameras have various mechanisms to control how the light falls onto the light-sensitive surface. Lenses focus the light entering the camera. The aperture can be narrowed or widened. A shutter mechanism determines the amount of time the photosensitive surface is exposed to light. </p>
                </div>
                <div className='img-section'>
                    <img src={image} alt="" />
                </div>
            </div>
            <h1 className='customer-title'>Customer Reviews</h1>
            <div className='products-item'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className='btn'>
                <button className='review-btn' onClick={()=>navigate('/reviews')}>Customer Reviews</button>
            </div>

        </div>
    );
};

export default Home;