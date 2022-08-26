import React from 'react';
import Card from '../Card/Card';
import REviewItem from '../ReviewItem/REviewItem';
import { removeDb } from '../Utilits/fakedb';
import useCards from '../Utilits/useCard';

import './Order.css'

const Order = () => {
    const [card,setCard] = useCards()
    console.log(card)

    const handelRemove =product =>{
        const rest = card.filter(pd =>parseInt(pd.id) !==parseInt(product.id))
        setCard(rest)
        removeDb(product.id)
    }

    return (
        <div className='shop-container'>
            <div >
                    {
                        card.map( product => <REviewItem
                            handelRemove={handelRemove} product={product} key={product.id}></REviewItem>)
                    }
            </div>
            <div >
                <Card card={card}></Card>
            </div>
        </div>
    );
};

export default Order;