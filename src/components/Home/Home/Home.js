import React from 'react';
import Articles from '../Articles/Articles';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Products></Products>
            <Main></Main>
            <Reviews></Reviews>
            <Articles></Articles>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;