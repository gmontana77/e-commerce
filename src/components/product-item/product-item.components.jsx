import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

import './product-item.styles.scss';

const ProductItem = ({ item, addItem }) => {
    const { productName, price, imageUrl, productDescription, stock } =item;

return(
    <div className='product-item'>
        <div 
            className='image'
            style={{ 
                backgroundImage:`url('${imageUrl}')` 
            }}
        />
            <div className='product-footer'>
                <span className='productName'>{productName}</span>
                <span className='price'>$ {price}</span>
            </div>
            <span className='productDescription'>{productDescription}</span>
            <div className='product-footer-down'>
                <span className='stock'>Left {stock}</span>
                <CustomButton onClick={() => addItem(item)} inverted> 
                    Add to cart 
                </CustomButton>
            </div>
    </div>
);
};

const mapDispatchToProps = dispach => ({
    addItem: item => dispach(addItem(item))
});

export default connect(
    null,
    mapDispatchToProps
    ) (ProductItem);