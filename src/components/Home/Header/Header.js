import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navigation from '../Navigation/Navigation';

const Header = () => {
    return (
        <div>
            <Navigation></Navigation>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;
