import React from "react";

import './product-item.styles.scss';

const ProductItem = ({ id, imageUrl, stock, productName, price, productDescription, favorite }) => (
    <div className='product-item'>
        <div className='image'
            style={{ backgroundImage:`url('${imageUrl}')` }}></div>
            <div className='product-footer'>
                <span className='productName'>{productName}</span>
                <span className='productDescription'>{productDescription}</span>
                <span className='favorite'>{favorite}</span>
                <span className='price'>{price}</span>
                <span className='stock'>{stock}</span>
            </div>
    </div>
);

export default ProductItem;