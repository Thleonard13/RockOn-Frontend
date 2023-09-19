import { useState, createContext, useContext } from "react";
import { products } from '../data/ProductInfo'

const APContext = createContext({});

export function useActiveProduct() {
    
    return useContext(APContext).activeProduct;
}

export function useUpdateAP() {
    return useContext(APContext).setActiveProduct;
}

export function ActiveProductProvider({ children }) {

    const [activeProduct, setActiveProduct] = useState(products[0]);

    return (
        <APContext.Provider value={{activeProduct, setActiveProduct}}>
            { children }
        </APContext.Provider>
    )
}