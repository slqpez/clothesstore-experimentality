import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import productsListStyles from "./productsList.module.css"

function ProductsList({ products }) {
  return (
    <div className={productsListStyles.productsList}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          image={product.thumbnail}
          original_price={product.original_price}
        />
      ))}
    </div>
  );
}

export default ProductsList;
