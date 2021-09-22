import { useState, useEffect, useContext } from "react";
import { ProductsContext } from "../context/productsContext";

function useProducts(productDeleted) {
  const [{ cartProducts }, dispatch] = useContext(ProductsContext);

  useEffect(() => {
    const products = JSON.parse(window.localStorage.getItem("cart-products"));
    if(products){
      dispatch({ type: "FETCH_CART_PRODUCTS", payload: products });
    }else{
      window.localStorage.setItem("cart-products", JSON.stringify([]))
    }
    
  }, [productDeleted]);

  return { cartProducts };
}

export default useProducts;
