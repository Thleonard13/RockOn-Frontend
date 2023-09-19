import React, { useContext} from 'react'
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext';
import './products/products.css'

const ProductCard = (props) => {

  const cart = useCart();

  const { product_id, name, make, price, images, rating} = props.productInfo;

  return (
    <div className="pro">
      <Link to={"/product/" + product_id}>
        <div className='img-container'>
        {images? 
        <img src={require('./products/' + images[0])} alt="no image"/> 
        : 
        <img src={require('./products/images/no_image.png')} alt="no image"/> 
        }   
        </div>
        <div className="des">
            <span>{make}</span>
            <h5>{name}</h5>
            <div className="star">
                {[...Array(rating)].map(() => {
                  return <i key={Math.random(1, 100000)} className="fas fa-star"></i>
                })}
            </div>
            <h4>${price}</h4>
        </div>
      </Link>
      <i className="fas fa-shopping-cart cart" onClick={() => {cart.addToCart(props.productInfo)}}></i> 
    </div>

  )
}

export default ProductCard