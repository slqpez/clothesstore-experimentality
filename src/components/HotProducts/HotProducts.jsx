import React, { useEffect, useState } from "react";
import ProductsList from "../ProductsList/ProductsList";
import hotProductsStyle from "./hotProducts.module.css";
import { getProductsByCategory } from "../../services/products";

function HotProducts() {
  const [products, setProducts] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loadding, setLoadding] = useState(false)

  useEffect(() => {
    setLoadding(true)
    getProductsByCategory(offset).then((data) => {
      setProducts(data.results)
      setLoadding(false)
    });
  }, [offset]);

  const handlePrev = () => {
    setOffset((o) => o - 1);
  };

  const handleNext = () => {
    setOffset((o) => o + 1);
  };

  return (
    <div className={hotProductsStyle.hotProductsContainer}>
      <h2>PRODUCTOS MÁS BUSCADOS</h2>
      <p className={hotProductsStyle.loading}>{loadding?"Cargando...":" "}</p>
      <ProductsList products={products} slider={true} />
      <div className={hotProductsStyle.sliderContainer}>
        {offset === 0 ? null : (
          <button
            className={`${hotProductsStyle.btnLeft} ${hotProductsStyle.btnSlider}`}
            onClick={handlePrev}
          ></button>
        )}

        <button
          className={`${hotProductsStyle.btnRight} ${hotProductsStyle.btnSlider}`}
          onClick={handleNext}
        ></button>
      </div>
    </div>
  );
}

export default HotProducts;
