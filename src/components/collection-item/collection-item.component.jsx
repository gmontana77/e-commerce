import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

import { ReactComponent as Like } from '../../assets/heart.svg';

import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
  const { productName, price, imageUrl, productDescription, stock } = item;

  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url('${imageUrl}')`
        }}
      />
      <div className='collection-footer'>
      <Like className='like'/>
      <span className='productName'>{productName}</span>
      <span className='price'>${price}</span>
      </div>
      <div className='description'>
      <span className='productDescription'>{productDescription}</span>
      </div>
      <div className='footer-down'>
      <div className='footer-down-inside'>
      <span className='stock'>Left: {stock}</span>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
      </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
