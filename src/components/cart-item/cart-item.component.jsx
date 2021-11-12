import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({item: { imageUrl, productName, price, quantity }}) => (
    <div className='cart-items'>
        <img src={imageUrl} alt='item' />
        <div className='item-details'>
            <span className='name'>{productName}</span>
            <span className='price'>
                {quantity} x ${price}
            </span>
        </div>
    </div>
);

export default CartItem;