import React from "react";

import ProductItem from '../product-item/product-item.components';

import './product-preview.styles.scss';

const ProductPreview = ({ title, items }) => (
    <div className='product-preview'>
        <h1 className='title'>{title.toUpperCase}</h1>
        <div className='preview'>
            {items
                .filter((item, idx) => idx < 4)
                .map(({ id, ...otherItemProps }) => (
                    <ProductItem key={id} {...otherItemProps} />
                ))}
        </div>
    </div>
);

export default ProductPreview;