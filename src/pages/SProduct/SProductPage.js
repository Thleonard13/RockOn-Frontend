import React, { useState, useEffect } from 'react'
import Products from "../../components/products/Products"
import SProduct from './SProduct'
import { products } from '../../data/ProductInfo'
import { fetchAllProducts } from '../../Services/fetchProducts'
import './sProduct.css'


const SProductPage = () => {

  const SimProducts = {
    title: "Similar Products",
    subtitle: "You May Also Be Interested In:"
  }

  const [results, setResults] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const found = await fetchAllProducts();
        setResults(found.slice(0, 4));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <>
      <SProduct />
      {results &&
      <Products title={SimProducts} results={results}/>
      }
    </>
  )
}

export default SProductPage