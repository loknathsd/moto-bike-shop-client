import { faFacebookSquare, faFontAwesome, faLinkedinIn, faTwitter, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { AiFillFacebook } from 'react-icons/ai';
import React from 'react';

const Footer = () => {
    return (
        <section style={{ backgroundColor: '#212529', color: '#E6E6FA', padding: '50px 0px' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h3>Get In Touch</h3>
                        <div className='text-secondary mt-3'>
                            <h5>Address :</h5>
                            <h6 className=''>H#000(4th floor),Rood #00. <br />Mirpur, Dhaka , Bangladesh</h6>
                            <h5>Email :</h5>
                            <h6>support@gmail.com</h6>
                            <h6>support@gmail.com</h6>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h3>Services</h3>
                        <div className='text-secondary mt-3'>
                            <h6>MotorCycle repair</h6>
                            <h6>Free return</h6>
                            <h6>Discount</h6>
                            <h6>Member-ship</h6>
                            <h6>24/7 support</h6>

                        </div>
                    </div>
                    <div className="col-md-3">
                        <h3>Useful link</h3>
                        <div className='text-secondary mt-3'>
                            <h6>About</h6>
                            <h6>Products</h6>
                            <h6>Help</h6>
                        </div>

                    </div>
                    <div className="col-md-3">
                        <h3>About us</h3>
                        <p className='text-secondary mt-3'>MotoBike is the first and largest website about motorcycle in Bangladesh. We have started our journey since 25th January 2012....</p>
                        <div className="">
                            <a className='m-3 text-white' href="https://facebook.com"> <FontAwesomeIcon size='2x' icon={faFacebookSquare} /> </a>
                            <a className='p-3 text-white' href="https://youtube.com"> <FontAwesomeIcon size='2x' icon={faYoutubeSquare} /> </a>
                            <a className='p-3 text-white' href="http://linkedin.com"> <FontAwesomeIcon size='2x' icon={faLinkedinIn} /> </a>
                            <a className='p-3 text-white' href="https://twitter.com"> <FontAwesomeIcon size='2x' icon={faTwitter} /> </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;