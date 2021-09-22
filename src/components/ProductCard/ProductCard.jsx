import React from "react";
import productCardStyles from "./productCard.module.css";
import calculateDiscount from "../../utils/calculateDiscount"



function ProductCard({ title, price, image, original_price }) {

 


  return (
    <div className={productCardStyles.productCard}>
      {original_price?<p className={productCardStyles.discount}> -{calculateDiscount(price, original_price)}%</p>:null}
      <div className={productCardStyles.imageContainer}>
        <img
          src={image}
          alt={`${title} image`}
          height="320"
          width="335"
          loading="lazy"
        />
      </div>
      <div className={productCardStyles.infoCardContainer}>
        <h3>{title}</h3>
        <div className={productCardStyles.pricesContainer}>
          <p className={productCardStyles.price}>
            {Intl.NumberFormat("es-CO", {
              style: "currency",
              currency: "COP",
              minimumFractionDigits: 0,
            }).format(price)}
          </p>
          {original_price ? (
          <p className={productCardStyles.originalPrice}>
            {Intl.NumberFormat("es-CO", {
              style: "currency",
              currency: "COP",
              minimumFractionDigits: 0,
            }).format(original_price)}
          </p>
        ) : (
          <p className={productCardStyles.nodiscount}>Sin descuento</p>
        )}
        </div>
       

        <button className={productCardStyles.btnAdd}>Agregar al carrito</button>
      </div>
    </div>
  );
}

export default ProductCard;
