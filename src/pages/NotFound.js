import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';

const NotFound = () => {
    return (
        <div>
            <Navigation />
            <Logo />
            <h1>Erreur 404</h1>
        </div>
    );
};

export default NotFound;