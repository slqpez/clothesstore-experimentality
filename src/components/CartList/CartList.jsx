import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import cartListStyles from "./cartList.module.css"

function CartList({cartProducts , handleCart, handleEmptyCart, handleDeleteProduct}) {

  if(!handleCart) return null;
  return (
    <ul className={cartListStyles.cartList}>
      {cartProducts.length > 0?<button  className={cartListStyles.emptyCart} onClick={handleEmptyCart}>Vaciar carrito</button>:null}
      {cartProducts.length > 0 ?cartProducts.map(product=>{
        return(
          <ProductCard key={product.id} title={product.title} price={product.price} image={product.image} original_price={product.original_price} id={product.id} cart={true} handleDeleteProduct={handleDeleteProduct}></ProductCard>
        )
      }):<p className={cartListStyles.notProducts}>Aún no tienes productos agregados</p>}
    </ul>
  )
}

export default CartList
