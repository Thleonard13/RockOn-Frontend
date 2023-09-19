import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { useCart } from '../../Context/CartContext';
import './cart.css'

const CartItem = (props) => {

  const cart = useCart();
  const item = cart.cartInventory.find(ele => ele.product_id === props.product_id)
  const { product_id, name, price, images, quantity } = item;

  const increaseQuantity = () => {
    if(quantity < 10) {
      const newQ = quantity + 1;
      cart.updateQuantity(newQ, product_id)
    }
  }

  const decreaseQuantity = () => {
      if(quantity > 1) {
      const newQ = quantity - 1;
      cart.updateQuantity(newQ, product_id)
    }
  }
  
  return (
      <div className='item-container'>
        <Link to={"/product/" + product_id} className="cart-item-img">
          <img 
            src={images ? require(`../../components/products/${images[0]}`) : require(`../../components/products/images/no_image.png`)}
            width={50}
            alt={name}
          />
        </Link>
        <Link to={"/product/" + product_id}>
          <h4>{name.slice(0, 50) + "..."}</h4>
        </Link>
        <p className='price'>${price}</p>
        <div className='quantity'>
          <button className='quantity-btn' onClick={decreaseQuantity}>-</button>
          <p className='item-quantity'>{quantity}</p>
          <button className='quantity-btn' onClick={increaseQuantity}>+</button>
        </div>
        <button className='remove-btn' onClick={() => cart.removeFromCart(product_id)}>X</button>
      </div>
  )
}


//QUANTITY CHANGE
// (e) =>{cart.updateQuantity(e.target.value, id)}

export default CartItem