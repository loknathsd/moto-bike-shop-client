import React from 'react';
import banner from '../../../images/banner-bike.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs, faMotorcycle } from '@fortawesome/free-solid-svg-icons'

const HeaderMain = () => {
    return (
        <section id='home' className='mt-5 py-5 bg-light'>
            <div className="container">
                <div className="row mt-5 ">
                    <div className="col-md-6">
                        <h1 style={{color:'#333' ,fontSize:'60px',fontWeight: '700',marginBottom:'25px'}}>World most <br /> powerful bike</h1>
                        <p className='text-secondary'>Wondering which BMW bike you should buy? We are here to help you purchase best bike as per your budget and needs. We provide you the genuine user reviews from the real bike owners, latest prices, updated specifications,best available offers for all BMW bike models of 2022</p>
                        <div className='row my-4'>
                           <div className="col-md d-flex">
                              <span><FontAwesomeIcon icon={faMotorcycle} size="3x" /></span>
                              <div className='ms-3'>
                                  <h4>Engine Power</h4>
                                  <small>205hp(151kw)</small>
                              </div>
                           </div>
                           <div className="col d-flex">
                           <span><FontAwesomeIcon icon={faCogs} size="3x" /></span>
                              <div className='ms-3'>
                                  <h4>Engine type</h4>
                                  <small>4-Stroke Cylinder</small>
                              </div>

                           </div>
                        
                        </div>
                        <div className='ms-5 ps-5'>
                        <a style={{padding:'8px 50px',borderRadius: '40px',fontSize:'25px'}}  href='#products' className='btn btn-outline-dark mt-4'>Buy Now</a>
                        </div>
                    </div>
                    <div className="col-md-6 mt-3">
                        <img  className='img-fluid' src={banner} alt="" />

                    </div>
                </div>
            </div>

        </section>
    );
};

export default HeaderMain;