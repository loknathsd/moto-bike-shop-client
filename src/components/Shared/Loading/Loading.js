import React from 'react';

const Loading = () => {
    return (
        <div class="d-flex justify-content-center mt-5">
            <div class="spinner-border" style={{width:'3rem',height:'3rem'}} role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;