import React from 'react';
import banner from "../../../images/mainbanner.png"

const Main = () => {
    return (
        <div style={{backgroundColor:'#001232'}} className='pt-3 pb-2'>
            <div className="container ">
                <div className="row ">
                    <div className="col-md-6">
                        <img  className='img-fluid' src={banner} alt="" />
                    </div>
                    <div className="col-md-6 text-white mt-5 pt-3">
                        <h3>Go as Curiosity takes you</h3>
                        <p className='my-3'>The Complete Titanium exhaust system performance made by akrapovice is the best result of collaboration</p>
                        <button className='btn btn-outline-light'>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;