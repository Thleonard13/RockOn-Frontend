import React from 'react'
import { products } from '../../data/ProductInfo'
import ProductCard from '../ProductCard'
import './products.css'
const Products = ({ title, results }) => {

  console.log(results)

  return (
    <section id='product-section' > 
    {/* Renders error message if there are no products returned*/}
      {results.length <= 0 ? (
      <div className='no-prod-found'>
        <h4>Sorry no results were found.</h4>
        <p>Please alter your search or try again</p>
      </div>
    ) : (
      <>
        <h2>{title.title}</h2>
        <p>{title.subtitle}</p>
        <div className='product-grid-container'>
          <div className='product-grid'>
            {results.map((product) => (
              <ProductCard key={product.product_id} productInfo={product} />
            ))}
          </div>
        </div>
      </>
    )}
    </section>
  )
}

export default Products