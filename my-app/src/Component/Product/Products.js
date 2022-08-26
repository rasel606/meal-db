import React from 'react';
import './Product.css'
const Products = (props) => {
    const {product,HeandelProductCard}= props
    const { title, image, price } = product
    return (
        <div>
            <div className="col ">
                <div className="card product shadow p-4 mb-5 bg-body rounded ">
                    <img src={image} className="card-img-top overflow-hidden" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title.slice(0, 15)}</h5>
                        <p className="card-text">{price}</p>
                    </div>
                    <div>
                        <button onClick={
                            ()=>HeandelProductCard(product)
                        } className='btn btn-success'>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;