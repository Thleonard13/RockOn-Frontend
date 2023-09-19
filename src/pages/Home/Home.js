import React, { useEffect, useState } from 'react'

import Hero from './Hero';
import Products from '../../components/products/Products'
import Services from "../../components/Services/Services"
import Banner1 from './Banner1';
import Banner2 from './Banner2';
import Banner3 from './Banner3';
import { fetchAllProducts, fetchProductByCategory } from '../../Services/fetchProducts';

const Home = () => {

  const [allProducts, setAllProducts] = useState()
  const [acousticProducts, setAcousticProducts] = useState()

  const newArrivals = {
    title: "New Arrivals",
    subtitle: "New Gear, Same Vintage Sound"
  }

  const topSellers = {
    title: "Top Sellers",
    subtitle: "Our Best Sellers for a Good Reason"
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setAllProducts(await fetchAllProducts())
        setAcousticProducts(await fetchProductByCategory('Acoustic Guitars'))
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div id='home-page'>
      <Hero />
      <Services />
      {allProducts &&
        <Products title={topSellers} results={allProducts}/>
      }
      <Banner1 />
      {acousticProducts && 
        <Products title={newArrivals} results={acousticProducts}/>
      }
      <Banner2 />
      <Banner3 />
    </div>
  )
}

export default Home;