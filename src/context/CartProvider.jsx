import { CartContext } from "./CartContext";
import { useState } from "react";
export const CartProvider=({children}) =>
    {
    const [cart,setCart]=useState([])
    const addToCart=(product)=>{    //data getting from product 

        setCart((prev)=>[...prev,product])// spread operator 
        // {id:1 tittle:shirt} {id:4, tittle:camera} // additon of the product in add to cart
        // ...pre helps to create a new array and it takes all the array of pprevious product and appear in the add to cart page

    }
    return (
        <CartContext.Provider value={{cart,addToCart}}>
            {children}
        </CartContext.Provider>
    )
}