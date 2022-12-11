import React from 'react';
import Footer from '../../components/Home/Footer/Footer';
import Navigation from '../../components/Home/Navigation/Navigation';
import Products from '../../components/Home/Products/Products';

const ProductsPage = () => {
    return (
        <div>
            <Navigation />
            <Products />
            <Footer />
        </div>
    );
};

export default ProductsPage;