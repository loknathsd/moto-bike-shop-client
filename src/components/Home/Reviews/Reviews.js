import React, { useEffect, useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import Review from '../Review/Review';


const Reviews = () => {
    const [reviews,setReviews]=useState([])

    useEffect(()=>{
        fetch('https://moto-bike.onrender.com/reviews')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])

    return (
        <section className='py-5'>
            <div className="container ">
                <h1 className='text-center text-danger  '>REVIEWS</h1>
                <hr style={{width:'70px',height:'5px',margin: 'auto'}} />
                {reviews.length === 0 && <Loading /> }
               {reviews.length >0 && <div className='row mt-5'>
                    {
                        reviews.map(review => <Review key={review._id} reviewInfo={review} ></Review>)
                    }

                </div>}
            </div>

        </section>
    );
};

export default Reviews;

