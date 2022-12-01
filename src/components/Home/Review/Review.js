import React from 'react';
import { Rating } from 'react-simple-star-rating';
import userIcon from '../../../images/userIcon.png';

const Review = ({reviewInfo}) => {
    const {name,review,rate} = reviewInfo;
    return (
        <div className='col-md-6 col-lg-4 my-2'>
            <div style={{height:'250px',width:'350px'}} className="card">
                <div className="card-body">
                <Rating  ratingValue={rate} size='25' />
                    <p className='my-4'>{review}</p>
                    <div className='d-flex'>
                       <img style={{height:'50px'}} src={userIcon} alt="" />
                       <h3 className='ms-3'>{name}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;