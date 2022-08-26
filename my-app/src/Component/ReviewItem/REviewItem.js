import React from 'react';
import './ReviewItem.css'

const REviewItem = (props) => {
    const { product ,handelRemove} = props
    const { title, image, price, quantity } = product
    return (
        <div className='Review-container '>

            <div classNameName=" review-img sm md lg xl">
                <img src={image} classNameName="" alt="..." />
            </div>
            <div className="product-body">
                <div className="">
                    <h5 className="">{title}</h5>
                    <h6> Product Quantity :{quantity}</h6>
                    <p>Price : {price}</p>
                    <div>
                        <button onClick={() =>handelRemove(product)} className='Remove-Btn'>Remove</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default REviewItem;