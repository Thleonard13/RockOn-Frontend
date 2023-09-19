import React, { useContext } from 'react'
import { useCart } from '../../Context/CartContext';
import CartItem from './CartItem';
import './cart.css'

const CartList = () => {

  const cartInventory = useCart().cartInventory;

  return (
    <div className='cart-list'>
        {cartInventory.map(item => {
            return <CartItem key={item.product_id} product_id={item.product_id}/>
        })}
    </div>
  )
}

export default CartList