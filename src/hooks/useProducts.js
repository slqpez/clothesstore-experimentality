import { useState, useEffect, useContext } from "react";
import { ProductsContext } from "../context/productsContext";
import {getProductsByName} from "../services/products";

function useProducts(productName) {
  const [{ products }, dispatch] = useContext(ProductsContext);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    getProductsByName(productName)
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
     
    
  }, [productName]);

  return { products, loading, error };
}

export default useProducts;
