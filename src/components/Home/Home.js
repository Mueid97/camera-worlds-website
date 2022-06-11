import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import image from '../../images/cam2-removebg-preview.png';
import Footer from '../Footer/Footer';
import Product from '../Product/Product';
import './Home.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';
const Home = () => {
    const [products, setProducts] = useProducts([]);
    let navigate = useNavigate();
    useEffect(()=>{
        AOS.init({duration: 3000});
    },[])
    return (
        <div>
            <div className='lg:px-24 '>
                <div data-aos="slide-down" class="hero min-h-screen">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                        <img src={image} class="max-w-sm rounded-lg" alt='' />
                        <div>
                            <h1 class="text-5xl font-bold">Create a new World With Camera</h1>
                            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button class="btn btn-success text-white">Get Started</button>
                        </div>
                    </div>
                </div>
                <h1 className='text-center text-bold text-success text-4xl mb-10'>Customer Reviews</h1>
                <div data-aos="zoom-in-up" className='grid sm:grid-cols-1 lg:grid-cols-3 gap-10 mb-10'>
                    {
                        products.slice(0, 3).map(product => <Product
                            key={product.id}
                            product={product}
                        ></Product>)
                    }
                </div>
                <div className='flex justify-center items-center mb-10'>
                    <button className="btn btn-success text-white" onClick={() => navigate('/reviews')}>Customer Reviews</button>
                </div>
               
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;