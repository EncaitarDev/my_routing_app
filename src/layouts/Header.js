import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../styles/Header.css'

import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpg';
import img4 from '../images/4.jpg';



const Header = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact render={() => (
                    <img src={img1} alt="foto" />
                )} />
                <Route path="/contact" render={() => (
                    <img src={img1} alt="foto" />
                )} />
                <Route path="/products" render={() => (
                    <img src={img2} alt="foto" />
                )} />
                <Route path="/admin" render={() => (
                    <img src={img3} alt="foto" />
                )} />
                <Route render={() => (
                    <img src={img4} alt="foto" />
                )} />
            </Switch>
        </>);
}

export default Header;