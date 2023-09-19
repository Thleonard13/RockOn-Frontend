import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../../Context/CartContext';
import { fetchSingleProduct } from '../../Services/fetchProducts';
import './sProduct.css';

const SProduct = () => {
    const cart = useCart();
    const { id } = useParams();
    const [activeProduct, setActiveProduct] = useState();

    useEffect(() => {
        const fetchProductInfo = async () => {
            try {
                const productData = await fetchSingleProduct(id);
                setActiveProduct(productData);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };
        fetchProductInfo();
    }, [id]);

    const toggleProductImg = (idx) => {
        const mainImg = document.getElementById("main-img");
        const smImg = document.getElementsByClassName('small-img');
        mainImg.src = smImg[idx].src;
    }

    if (activeProduct) {
        const { category, name, price, description, images } = activeProduct;
        return (
            <section id="pro-details" className="section-p1">
                <div className="single-pro-image">
                    <img
                        id='main-img'
                        src={images ? require(`../../components/products/${images[0]}`) : require(`../../components/products/images/no_image.png`)}
                        alt="Product"
                        width="100%"
                    />
                    <div className="small-img-group">
                        {/* render additional product images if they exist */}
                        {images.length > 1 && images.map((image, idx) => (
                            <div className="small-img-col" onClick={() => toggleProductImg(idx)} key={idx}>
                                <img src={require(`../../components/products/${image}`)} className="small-img" width="100%" alt={`Product ${idx}`} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="single-pro-details">
                    <h6>{category}</h6>
                    <h4>{name}</h4>
                    <h2>${price}</h2>
                    <button className="normal" onClick={() => cart.addToCart(activeProduct)}>Add To Cart</button>
                    <h4>Product Details</h4>
                    <p>{description}</p>
                </div>
            </section>
        );
    }

    return null; // Render nothing if activeProduct is null
}

export default SProduct;
