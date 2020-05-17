import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    return (
        <Link to={{
            pathname:'products',
            selectedImage : props.product_image
        }}>
            <img
                src={props.product_image}
                width="100%"
                height="100%"
                alt="img_alt"
            />
        </Link>
    )
}

export default Product;