// hidden api base url
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchAllProducts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/products`);
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchSingleProduct = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`)
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export const fetchProductByCategory = async (category) => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/category?category=${category}`)
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export const fetchProductByMake = async (make) => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/make?make=${make}`)
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export const fetchProductByPriceRange = async (minPrice, maxPrice) => {
    const response = await fetch(`${API_BASE_URL}/products/price?minPrice=${minPrice}&maxPrice=${maxPrice}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        return data;
      })
      .catch(error => {
        console.error('Error:', error);
      });
}