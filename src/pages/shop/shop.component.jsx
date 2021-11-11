import React from 'react';

import SHOP_DATA from './shop.data.js';

import ProductPreview from '../../components/product-preview/product-preview';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: SHOP_DATA
        };
    }

    render() {
        const { products } = this.state;
        return (
            <div className='shop-page'>
                {products.map(({ id, ...otherProductProps }) => (
                    <ProductPreview key={id} {...otherProductProps} />
                ))}
            </div>
        );
    }
}

export default ShopPage;