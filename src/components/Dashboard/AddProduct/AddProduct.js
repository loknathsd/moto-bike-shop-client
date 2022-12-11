import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import Navigation from '../../Home/Navigation/Navigation';
import Sidebar from '../Sidebar/Sidebar';

const AddProduct = () => {
    const [imgURL, setImgURL] = useState()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        const productInfo = {
            name: data.name,
            price: data.price,
            description: data.description,
            img: imgURL
        }
        fetch('https://moto-bike-shop-server-production.up.railway.app/addProduct', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(productInfo)
        })
            .then(result => {

                Swal.fire(
                    'Successfully!',
                    'Add a new Product!',
                    'success'
                )
                reset();

            })

    }

    const handleFile = e => {
        const imageData = new FormData();
        imageData.set('key', '27857de30973670589e3e40a5817902c')
        imageData.append('image', e.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(res => {
                setImgURL(res.data.data.display_url)
                console.log(res.data.data.display_url);
            })
            .catch(err => console.log(err));
    }

    return (
        <section className='mt-5 pt-5'>
            <Navigation></Navigation>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-lg-3 ">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-lg-9 col-md-8 ">
                        <div className='w-75 mx-auto mt-5 p-5 shadow text-center'>

                            <h3 className=' mb-5'>Add Product</h3>
                            <form onSubmit={handleSubmit(onSubmit)} >
                                <input placeholder='Name' className='form-control mt-3' {...register("name", { required: true })} />
                                {errors.nameRequired && <span>This field is required</span>}

                                <input placeholder='Price' className='form-control mt-3' {...register("price", { required: true })} />
                                {errors.priceRequired && <span>This field is required</span>}

                                <input onChange={handleFile} type="file" placeholder='name' className='form-control mt-3' />

                                <textarea placeholder='Description*' className='form-control my-3' {...register("description", { required: true })} />
                                {errors.descriptionRequired && <span>This field is required</span>}

                                <input type="submit" className='btn btn-success px-5 rounded-pill mt-4' />

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddProduct;