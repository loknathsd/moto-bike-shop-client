import React from 'react';
import Navigation from '../../Home/Navigation/Navigation';
import Sidebar from '../Sidebar/Sidebar';
import dashboardLogo from '../../../images/icon/dashboard.png'

const Dashboard = () => {
    return (
        <section className='my-5'>
            <Navigation></Navigation>
            <div className="container pt-5">
                <div className="row">
                    <div className=" col-md-5 col-lg-3">
                       <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-7 col-lg-9 text-center shadow p-5">
                        <img  src={dashboardLogo} alt="" />
                        <h1 style={{marginTop:'-50px',marginBottom:'15px',fontFamily: 'fantasy', color: '#FF1493'}}>TO </h1>
                        <h1 style={{fontFamily: 'fantasy', color: '#FF1493'}}>DASHBOARD</h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;