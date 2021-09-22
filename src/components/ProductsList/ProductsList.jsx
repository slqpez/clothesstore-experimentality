import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import productsListStyles from "./productsList.module.css"

function ProductsList({ products, slider }) {
  return (
    <div className={!slider?productsListStyles.productsList:productsListStyles.productsSlider}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          image={product.thumbnail}
          original_price={product.original_price}
          id={product.id}
        />
      ))}
    </div>
  );
}

export default ProductsList;
