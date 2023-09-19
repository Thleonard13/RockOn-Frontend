import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../Context/Context'
import CartList from '../pages/Cart/CartList'

const CartModal = () => {

  const modal = document.getElementById('cart-modal');

  const closeModal = () => {
    modal.classList.remove('active-modal');
    modal.classList.add('closed-modal');
  }

  return (
    <div id='cart-modal' className='closed-modal'>
        <h1>Item was added to cart</h1>
        <CartList />
        <button onClick={()=>closeModal()}>Continue Shopping</button>
        <button onClick={()=>closeModal()}><Link to="/cart">Check Out</Link></button>
    </div>
  )
}

export default CartModal