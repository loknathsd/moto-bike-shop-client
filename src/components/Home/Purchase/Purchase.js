import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import { useForm } from "react-hook-form";
import { ContextUser } from '../../../App';
import Swal from 'sweetalert2';

const Purchase = () => {
    const [loggedInUser,setLoggedInUser]= useContext(ContextUser);
    const { id } = useParams();
    const [product,setProduct] = useState({});
    const history = useHistory();
    
    useEffect(()=>{
        fetch(`https://moto-bike.onrender.com/product/${id}`,{
            method:'GET',
            headers:{'Content-Type':'application/json'}
        })
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])


    
    const { register, handleSubmit,reset,  formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://moto-bike.onrender.com/addPurchase',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        .then(result=>{
          Swal.fire(
            'Successfully!',
            'Please check your email for order confirmation!',
            'success'
        )
        reset();
         history.push('/home')     
        })
        
    }


    return (
        <section className='my-5'>
            <div className="row">
                <div className="col">
                    <Navigation></Navigation>
                </div>
            </div>
            <div className='container pt-5 mt-5'>
                <div className="row ">
                    <div className="col-md-5">
                        <img className='img-fluid ms-lg-5' src={product.img} alt="" />
                    </div>
                    <div className="col-md-7 shadow p-5">
                        <div>
                            <h1 className='text-center'>{product.name}</h1>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input placeholder='Name'  defaultValue={loggedInUser.name}  className='form-control mt-3'  {...register("name")} />

                                <input placeholder='Email' defaultValue={loggedInUser.email}  className='form-control mt-3' {...register("email", { required: true })} />
                                {errors.emailRequired && <span>This field is required</span>}

                                <input placeholder='Product Name' defaultValue={product.name}  className='form-control mt-3' {...register("productName", { required: true })} />
                                {errors.productNameRequired && <span>This field is required</span>}

                                <input placeholder='Price' defaultValue={product.price}  className='form-control mt-3' {...register("price", { required: true })} />
                                {errors.priceRequired && <span>This field is required</span>}

                                <input  placeholder='Address' className='form-control mt-3' {...register("address", { required: true })} />
                                {errors.addressRequired && <span>This field is required</span>}

                                <input  placeholder='Phone number' className='form-control mt-3' {...register("phone", { required: true })} />
                                {errors.phoneRequired && <span>This field is required</span>}

                                <input className='form-control mt-3 btn btn-danger' type="submit" />
                            
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Purchase;