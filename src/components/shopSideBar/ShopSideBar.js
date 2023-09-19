import React, { useState, useEffect } from 'react';
import { fetchAllProducts, fetchProductByCategory, fetchProductByMake, fetchProductByPriceRange } from '../../Services/fetchProducts';
import './ShopSideBar.css';


const ShopSideBar = (props) => {

  const { results, setResults, setFilteredResults, isOpen, setIsOpen} = props
  // stores selected category button
  const [activeButton, setActiveButton] = useState(null);
  // stores selected price ranges
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  // stores max and min selected prices
  const [minPrices, setMinPrices] = useState();
  const [maxPrices, setMaxPrices] = useState();

// handle category button click
  const handleButtonClick = async (category) => {
    setActiveButton(category);
    // return all products if "All Products" button was selected
    if (category == 'All Products'){
      setResults(await fetchAllProducts())
      return
    }
    // Return products by make if make is specified
    if(category == 'Fender' || category == 'Gibson') {
      setResults(await fetchProductByMake(category))
      return
    }
    // otherwise return products by category
    setResults(await fetchProductByCategory(category));
  };

// handle price range checkbox change
  const handlePriceFilterChange = async (event) => {
    const checkbox = event.target;
    const priceRange = checkbox.name; 
    const [newMinPrice, newMaxPrice] = parsePriceRange(priceRange);

  // updated selectedPriceRanges based on checked inputs
  if (checkbox.checked) {
    setSelectedPriceRanges([...selectedPriceRanges, priceRange]);
    setMinPrices([...minPrices, newMinPrice]);
    setMaxPrices([...maxPrices, newMaxPrice]);
  } else {
    setSelectedPriceRanges(selectedPriceRanges.filter((range) => range !== priceRange));
    setMinPrices(minPrices.filter((min) => min !== newMinPrice));
    setMaxPrices(maxPrices.filter((max) => max !== newMaxPrice));
  }
};

// parse price range from checkbox name
  const parsePriceRange = (priceRange) => {
    const [min, max] = priceRange.split('-');
    return [parseFloat(min), parseFloat(max)];
  };

// update min and max price when price range inputs changed
  useEffect(() => {
    setMinPrices([]);
    setMaxPrices([]);

    selectedPriceRanges.forEach((priceRange) => {
      const [rangeMin, rangeMax] = parsePriceRange(priceRange);
      setMinPrices((prevMinPrices) => [...prevMinPrices, rangeMin]);
      setMaxPrices((prevMaxPrices) => [...prevMaxPrices, rangeMax]);
    });
  }, [selectedPriceRanges]);

// set filtered results based on selected price ranges
  useEffect(() => {
    if (results) {
      const filteredRes = results.filter((product) => {
        // not the most efficient algorithm for large datasets. I will consider changing this as the app scales
        for (let i = 0; i < minPrices.length; i++) {
          if (product.price >= minPrices[i] && product.price <= maxPrices[i]) {
            return true;
          }
        }
        return false;
      });

      setFilteredResults(filteredRes.length > 0 ? filteredRes : null);
    }
  }, [minPrices, maxPrices, results]);

  return (
    <aside className={isOpen? "search-sidebar sidebar-active" : "search-sidebar"}>
      <h2>Refine Your Search</h2>
      <i id="close-filters" 
          className="fas fa-times"
          onClick={() => setIsOpen(!isOpen)}
      ></i>
      <div className='filter-list'>
        <h4>Category</h4>

        {/* category filter buttons */}
        {categories.map((category) => (
          <button
            key={category}
            className={activeButton === category ? 'clicked' : ''}
            onClick={() => handleButtonClick(category)}
          >
            {category === 'All Products' ? 'All Products' : category}
          </button>
        ))}
      </div>
      <div className="filter-list">
        <h4>Pricing</h4>

        {/* price range filter boxes */}
        {priceRanges.map((range) => (
          <div className="price-filter" key={range.name}>
            <input
              type="checkbox"
              id={`price-${range.name}`}
              name={range.name}
              onChange={handlePriceFilterChange}
            />
            <label htmlFor={`price-${range.name}`}>{range.label}</label>
          </div>
        ))}
      </div>
    </aside>
  );
};

// price range options
const priceRanges = [
  { name: '0-250', label: '$0 to $250' },
  { name: '250-500', label: '$250 to $500' },
  { name: '500-750', label: '$500 to $750' },
  { name: '750-1000', label: '$750 to $1000' },
  { name: '1000-10000000000', label: '$1000+' },
];

// category options
const categories = [
  'All Products',
  'Electric Guitars',
  'Acoustic Guitars',
  'Fender',
  'Gibson',
  'Accessories',
];

export default ShopSideBar;





