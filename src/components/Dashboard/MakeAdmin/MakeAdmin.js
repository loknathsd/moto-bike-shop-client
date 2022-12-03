import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import Navigation from '../../Home/Navigation/Navigation';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://moto-bike-shop-server.vercel.app/makeAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(result => {
                Swal.fire(
                    'Successfully!',
                    'Admin has made!',
                    'success'
                )
                reset();
            })
    }
    return (
        <section className='mt-5 pt-5'>
            <Navigation></Navigation>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-lg-3">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-8 col-lg-9 shadow px-5 pb-5 rounded">
                        <h1 className='mt-4 text-secondary'>Make Admin</h1>
                        <hr style={{ width: '230px' }} />
                        <form className='w-50 mt-4' onSubmit={handleSubmit(onSubmit)} >
                            <input placeholder='admin@admin.com' className='form-control mt-3' {...register("email", { required: true })} />
                            {errors.emailRequired && <span>This field is required</span>}

                            <input type="submit" className='btn btn-success px-4 mt-3 ' />

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAdmin;