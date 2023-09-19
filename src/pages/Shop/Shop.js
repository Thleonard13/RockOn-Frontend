import React, { useState, useEffect } from 'react'
import Header from '../../components/header/Header'
import Products from '../../components/products/Products'
import ShopSideBar from '../../components/shopSideBar/ShopSideBar'
import { fetchAllProducts } from '../../Services/fetchProducts'

import './Shop.css'

const Shop = () => {

    const [ fullResults, setFullResults ] = useState();
    const [ filteredResults, setFilteredResults] = useState();
    const [ isOpen, setIsOpen] = useState(false)


  // fetch all products upon loading page
    useEffect(() => {
      const fetchData = async () => {
        try {
          const found = await fetchAllProducts();
          setFullResults(found);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
    
      fetchData();
    }, []);

    useEffect(() => {
      console.log(isOpen)
    }, [isOpen])

    const headerText = "#stayhome";
    const subHeader = "Save more with coupons & up to 70% off!";
    const NewArrivals = {
      title: "New Arrivals",
      subtitle: "New Gear, Same Vintage Sound"
    }

    // scrolls to the top of the search results when search is changed
    useEffect(() => {
      document.documentElement.scrollTo({
        top: 280,
        left: 0,
        behavior: "instant", // skips the scrolling animation
      });
    }, [filteredResults])
  
  return (
    <>
        <div className='side-menu-btn' onClick={() => setIsOpen(!isOpen)}>
          <i className="fa-solid fa-angles-left"></i> 
          <h4>Refine Your Search</h4>
        </div>
        <Header headerText={headerText} subHeader={subHeader}/>
        <section className='shop-body'>
          <ShopSideBar 
            setResults={setFullResults} 
            results={fullResults}
            setFilteredResults={setFilteredResults}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
          {fullResults !== undefined ? (
          <Products title={NewArrivals} results={filteredResults? filteredResults : fullResults} />
            ) : (
              <p>Loading...</p> 
            )}
        </section>
    </>
  )
}

export default Shop