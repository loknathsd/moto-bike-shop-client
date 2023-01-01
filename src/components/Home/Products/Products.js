import React,{useState,useEffect} from 'react';
import { Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
    const [products,setProducts]= useState([]);

    useEffect(()=>{
        fetch('https://moto-bike.onrender.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);
    return (
        <section id='products' className='my-5 py-5'>
                <div className="container">
                    <h1 style={{textAlign:'center' ,color:'#333',fontWeight:'bold',marginBottom:'20px'}}>OUR COLLECTIONS</h1>
                    <hr style={{width:'70px',height:'5px',margin: 'auto'}} />
                    <Row className='mt-3'>
                        {
                            products.map(product=><Product key={product._id} product={product}></Product>)
                        }
                    </Row>
                </div>
        </section>
    );
};

export default Products;