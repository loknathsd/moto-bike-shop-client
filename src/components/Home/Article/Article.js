import React from 'react';

const Article = ({ article }) => {
    const { image, title } = article;

    return (
        <div className='col-md-4 my-3 pb-5'>
            <div className='' >
                <img className='img-fluid' src={image} alt="" />
                <div className='d-flex mt-2 fw-bold'>
                    <h5>by-Admin</h5>
                    <p style={{ marginLeft: '150px' }}>May 25 , 2021</p>
                </div>
                <h3 style={{color:'#333333',fontFamily:'Oswald'}}>{title}</h3>
            </div>
        </div>
    );
};

export default Article;