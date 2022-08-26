import { useEffect, useState } from "react"
import { getStoredCard } from "./fakedb"
import UseProducts from "./UseProducts"

const useCards =()=>{
    const [card,setCard] = useState([])
    const [products] = UseProducts()

    useEffect ( ()=>{
        const storedCard = getStoredCard()
        const savedCard = []
        for( const id in storedCard){
            const addedProduct = products.find( product=> product.id === parseInt(id))
            
            if(addedProduct){
                const quantity =storedCard[id]
                addedProduct.quantity =quantity
                savedCard.push(addedProduct)
            }
        }
        setCard(savedCard)
    },[products])
    return [card,setCard]
}

export default useCards