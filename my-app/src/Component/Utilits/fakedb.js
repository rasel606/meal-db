const addToDb =id =>{
    let shoppingCard ={}

    const storedCard = localStorage.getItem('shopping-card')
    
    if(storedCard){
        shoppingCard = JSON.parse(storedCard)

    }else{
        shoppingCard = {}
    }

    const quantity =shoppingCard[id]
    if(quantity){
        const newQuantity = quantity + 1
        shoppingCard[id] =newQuantity
        // localStorage.setItem(id,newQuantity)
    }else{
        shoppingCard[id]=1
        // localStorage.setItem(id,1)
    }
    localStorage.setItem('shopping-card',JSON.stringify(shoppingCard))
}

const getStoredCard =()=>{
    let shoppingCard ={}

    const storedCard = localStorage.getItem('shopping-card')
    
    if(storedCard){
        shoppingCard = JSON.parse(storedCard)

    }return shoppingCard
}



const removeDb =id=>{
    const storedCard = localStorage.getItem('shopping-card')
    if(storedCard){
        const shoppingCard = JSON.parse(storedCard)
        if(id in shoppingCard){
            delete shoppingCard[id]
            localStorage.setItem('shopping-card',JSON.stringify(shoppingCard))
        }
    }
}

const deleteShoppingCard = () =>{
    localStorage.setItem('shopping-card')
}


export {addToDb,removeDb,deleteShoppingCard,getStoredCard};