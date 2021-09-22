import React, { useContext, useState } from "react";
import productCardStyles from "./productCard.module.css";
import calculateDiscount from "../../utils/calculateDiscount";
import { ProductsContext } from "../../context/productsContext";
import cartCardStyles from "./cartCard.module.css";

function ProductCard({
  title,
  price,
  image,
  original_price,
  id,
  cart,
  handleDeleteProduct,
}) {
  const [{ cartProducts }, dispatch] = useContext(ProductsContext);
  const [quantity, setQuantity] = useState(1);
  const styles = cart ? cartCardStyles : productCardStyles;

  const handleAddToCart = async () => {
    const product = { title, image, price, original_price, id, quantity};
    if (cartProducts.length === 0) {
      dispatch({ type: "ADD_PRODUCT_TO_CART", payload: product });
      window.localStorage.setItem(
        "cart-products",
        JSON.stringify(cartProducts)
      );
    } else {
      const newCart = cartProducts.filter((p) => p.id !== id);
      const exists = cartProducts.find((p) => p.id === id);

      if (exists) {
        setQuantity((q) => q + 1);
      } else {
        const product = { title, image, price, original_price, id,quantity };
        dispatch({ type: "ADD_PRODUCT_TO_CART", payload:product });
        window.localStorage.setItem(
          "cart-products",
          JSON.stringify([...newCart, product])
        );
      }
    }
  };


  console.log(quantity)
  return (
    <div className={styles.productCard}>
      {original_price ? (
        <p className={styles.discount}>
          {" "}
          -{calculateDiscount(price, original_price)}%
        </p>
      ) : null}
      <div className={styles.imageContainer}>
        <img
          src={image}
          alt={`${title} image`}
          height="320"
          width="335"
          loading="lazy"
        />
      </div>
      <div className={styles.infoCardContainer}>
        <h3>{title}</h3>
        <div className={styles.pricesContainer}>
          <p className={styles.price}>
            {Intl.NumberFormat("es-CO", {
              style: "currency",
              currency: "COP",
              minimumFractionDigits: 0,
            }).format(price)}
          </p>
          {original_price ? (
            <p className={styles.originalPrice}>
              {Intl.NumberFormat("es-CO", {
                style: "currency",
                currency: "COP",
                minimumFractionDigits: 0,
              }).format(original_price)}
            </p>
          ) : (
            <p className={styles.nodiscount}>Sin descuento</p>
          )}
        </div>

        {cart ? (
          <button
            className={styles.btnDelete}
            onClick={handleDeleteProduct}
            data-id={id}
          >
            Borrar
          </button>
        ) : (
          <button className={styles.btnAdd} onClick={handleAddToCart}>
            Agregar al carrito
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
