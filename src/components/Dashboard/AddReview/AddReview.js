import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Rating } from 'react-simple-star-rating';
import Swal from 'sweetalert2';
import { ContextUser } from '../../../App';
import Navigation from '../../Home/Navigation/Navigation';
import Sidebar from '../Sidebar/Sidebar';

const AddReview = () => {
    const [loggedInUser] = useContext(ContextUser);
    const [rating, setRating] = useState(0);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        data.rate = rating;
        fetch('https://moto-bike.onrender.com/addReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(result => {
                Swal.fire(
                    'Successfully!',
                    'Review Done!',
                    'success'
                )
                reset();
            });
    };
    const handleRating = (rate) => {
        setRating(rate);
    }
    return (
        <section className='mt-5 pt-5'>
            <Navigation></Navigation>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-lg-3">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-8 col-lg-9">
                        <div className='w-75 mx-auto mt-5 p-5 shadow text-center'>
                            <h3 className=' mb-5'><span className='text-success'><FontAwesomeIcon icon={faUserEdit} /> </span><br /> User feedback</h3>
                            <form onSubmit={handleSubmit(onSubmit)} >
                                <input placeholder='name' defaultValue={loggedInUser.name} className='form-control mt-3' {...register("name", { required: true })} />
                                {errors.nameRequired && <span>This field is required</span>}

                                <textarea placeholder='Your Review*' className='form-control my-3' {...register("review", { required: true })} />
                                {errors.nameRequired && <span>This field is required</span>}

                                <label className='fw-bold' htmlFor="">Rating</label><br />
                                <Rating onClick={handleRating} ratingValue={rating} size='25' /> <br />

                                <input type="submit" className='btn btn-success px-5 rounded-pill mt-4' />

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddReview;