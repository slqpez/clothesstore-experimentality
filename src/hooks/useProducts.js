import { useState, useEffect, useContext } from "react";
import { ProductsContext } from "../context/productsContext";
import {getProductsByName} from "../services/products";

function useProducts(productName, offset) {
  
  const [{ products }, dispatch] = useContext(ProductsContext);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    getProductsByName(productName, offset)
    .then((data) =>{
      dispatch({
        type: "FETCH_PRODUCTS",
        payload: data.results,
      });
      setLoading(false);
    })
    .catch((error) =>{
      console.log(error);
      setError("No se pudo hacer la petición.")
    })
     
    
  }, [productName, offset]);

  return { products, loading, error };
}

export default useProducts;
