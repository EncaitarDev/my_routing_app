import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import ContactPage from '../pages/ContactPage';
import AdminPage from '../pages/AdminPage';
import ErrorPage from '../pages/ErrorPage';
import LoginPage from '../pages/LoginPage';
import ProductListPage from '../pages/ProductListPage';
import CSSPage from '../pages/CSSPage';

const Page = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/products" component={ProductListPage} />
                <Route path="/product/:id" component={ProductPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/admin" component={AdminPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/csspage" component={CSSPage} />
                <Route component={ErrorPage} />
            </Switch>
        </div>
    );
}

export default Page;