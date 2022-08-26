
import Products from '../Product/Products';
import { addToDb } from '../Utilits/fakedb';
import useCards from '../Utilits/useCard';

import UseProducts from '../Utilits/UseProducts';
import './Shop.css'

const Shop = () => {

    const [products] = UseProducts()

    const [card,setCard] = useCards()

    




    const HeandelProductCard =(selectedProduct)=>{
        
        let newCard =[]
        const exist = card.find(product=> product.id === selectedProduct.id)
        if(!exist){
            selectedProduct.quantity = 1
            newCard = [...card,selectedProduct]
        }else{
            const rest = card.filter(product => product.id !== selectedProduct.id)
            exist.quantity = exist.quantity + 1
            newCard= [...rest,exist]
        }
        
        setCard(newCard)
        addToDb(selectedProduct.id)
    }



    return (
        <div >
            <div className='product-container'>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                    products.map(product => <Products product={product} key={product.id}
                    HeandelProductCard={HeandelProductCard}
                    ></Products>)
                }

            </div>
            
            </div>
        </div>
    );
};

export default Shop;