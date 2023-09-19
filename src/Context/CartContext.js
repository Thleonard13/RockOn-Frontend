import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const CartContext = createContext({});

// custom hook to access the cart state
export function useCart() {
    return useContext(CartContext);
}

export function CartProvider({ children }) {

  //retrieve cart inventory from local storage
    const localCart = JSON.parse(localStorage.getItem('shoppingCart'))
    const [cartInventory, setCartInventory] = useState(() => {
      if (localCart) {
        return localCart
      }
      return []
    })
    // set cart inventory to local storage
    useEffect(() => {
      window.localStorage.setItem('shoppingCart', JSON.stringify(cartInventory))
    }, [cartInventory])

    function addToCart(newItem){
      setCartInventory((currItems)=>{
        // if item is not in cart already
        if (cartInventory.find(currItem => newItem.product_id === currItem.product_id) == null) {
          return [...currItems, {quantity: 1, ...newItem}];
        } else {
        // else update quantity
          return currItems.map(currItem => {
            if (currItem.product_id === newItem.product_id) {
              return {...currItem, quantity: currItem.quantity + 1}
            } else {
              return currItem;
            }
          }) 
        }
      })
      
      //display in DOM that an item was added to cart
        const modal = document.querySelector('.item-added');
        modal.classList.add('modal-active');
        setTimeout(() => (modal.classList.remove('modal-active')), 4000);
    }

      const removeFromCart =  key => {
        setCartInventory(cartInventory.filter(item => {
          return item.product_id !== key ;
        }));
      }

      const updateQuantity = (newQuantity, key) => {
        console.log(newQuantity)
        setCartInventory((currItems) => {
          return currItems.map((item) => {
            if (item.product_id === key){
                return {...item, quantity: parseInt(newQuantity)}
            } else {
              return item;
            }
          })
        })
    }

    return(
        <CartContext.Provider value={{
            cartInventory, 
            setCartInventory, 
            addToCart, 
            removeFromCart, 
            updateQuantity
          }}>
            {children}
        </CartContext.Provider>
    )
}