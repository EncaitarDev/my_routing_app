import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/Product'


const ProductPage = ({ match }) => {
    return (
        <>
            <div>Stron produktu!</div>
            <Product id={match.params.id} />
            <Link to="/products">Powrót</Link>
        </>
    );
}

export default ProductPage;