import React, { useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import ItemAdded from '../itemAdded/ItemAdded'
import { useCart } from '../../Context/CartContext';
import Logo from './logo2.png'
import './Navbar.css'

const Navbar = () => {

    const navRef = useRef();
    const cartInventory = useCart().cartInventory;

    // calculate number of items in cart for the cart icon
    const cartQuantity = cartInventory.reduce((acc, current) => acc + current.quantity, 0)
    // console.log("CART INVENTORY : ", cartInventory)
 
    // opens and closes the mobile menu
    const openMenu = () =>{
        navRef.current.classList.add('active');
    }

    const closeMenu = () => {
        navRef.current.classList.remove('active');
    }

  return (
    <>
        <section id="header">
            <Link to="/">
                <img src={Logo} id="logo"/>
            </Link>
            <div>
                <ul id="navbar" ref={navRef}>
                    <li><NavLink className="page-link" to="/" onClick={()=> closeMenu()}>Home</NavLink></li>
                    <li><NavLink className="page-link" to="/shop" onClick={()=> closeMenu()}>Shop</NavLink></li>
                    <li><NavLink className="page-link" to="/blog" onClick={()=> closeMenu()}>Blog</NavLink></li>
                    <li><NavLink className="page-link" to="/about" onClick={()=> closeMenu()}>About</NavLink></li>
                    <li><NavLink className="page-link" to="/contact" onClick={()=> closeMenu()}>Contact</NavLink></li> 
                    <li id="lg-bag">
                        <Link to="/cart">
                            <i className="fas fa-shopping-bag"></i>
                            {cartInventory.length > 0 ? <div className='cart-item-number'>{cartQuantity}</div> : null }
                        </Link>
                    </li>
                    <Link to="#" id="close" onClick={()=> closeMenu()}><i className="fas fa-times"></i></Link>
                </ul>
            </div>
            {/* FOR MOBILE SCREENS ONLY */}
            <div id="mobile">
                <Link to="/cart" className='bag' onClick={()=> closeMenu()}>
                    <i className="fas fa-shopping-bag" ></i> 
                    {cartInventory.length > 0 ? <div className='cart-item-number'>{cartQuantity}</div> : null }
                </Link>
                <i id="bar" className="fas fa-outdent" onClick={()=> openMenu()}></i>
            </div>
            
            <ItemAdded />
        </section>
    </>
  )
}

export default Navbar