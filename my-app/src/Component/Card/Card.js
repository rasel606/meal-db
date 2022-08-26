import React from 'react';
import './Card.css'

const Card = (props) => {
    const { card } = props
    
    let quantity = 0;
    let total = 0;
    for (const product of card) {
        quantity = quantity + product.quantity

        total = total + parseFloat(product.price) * parseInt(product.quantity)
    }

    const tax = total * 2 / 100
    let Shipping = (total > 50) ? total * 5 / 100 : 0
    const grandTotal = total + tax + Shipping


    return (
        <div className='card-component'>

            <div className="card mb-4 shadow-lg p-3 mb-5 bg-body rounded" >
                <div className="card-header text"><h4>SHOPPING DETAILS </h4></div>
                <div className="card-body text">
                    <h2 className="text">Total : {total.toFixed(2)}</h2>
                    <h6>TAX :{tax.toFixed(2)}</h6>
                    <h6>SHIPPING:{Shipping.toFixed(2)}</h6>
                    <h6>GRAND - TOTAL: {grandTotal.toFixed(2)}</h6>
                </div>
            </div>
        </div>
    );
};

export default Card;