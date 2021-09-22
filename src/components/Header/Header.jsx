import React, { useState, useContext } from "react";
import headerStyles from "./header.module.css";
import cart from "../../assets/icons/icon-cart.svg";
import avatar from "../../assets/icons/icon-user.svg";
import Nav from "../Nav/Nav";
import { useHistory } from "react-router-dom";
import BurguerMenu from "../BurguerMenu/BurguerMenu";
import CartList from "../CartList/CartList";
import useCartProducts from "../../hooks/useCartProducts";
import { ProductsContext } from "../../context/productsContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const customId = "custom-id-yes";

function Header() {
  const [inputValue, setInputValue] = useState("");
  const [cartDeleted, setCartDeleted] = useState(false)

  const { cartProducts } = useCartProducts(cartDeleted);
  const [state, dispatch] = useContext(ProductsContext);

  const history = useHistory();

  const [show, setShow] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleBrand = () => {
    history.push("/");
  };

  const handleCart = () => {
    setShowCart(!showCart);
  };

  const handleEmptyCart=()=>{
    dispatch({type:"DELETE_ALL_PRODUCTS_FROM_CART"})
    window.localStorage.clear()
    setCartDeleted(!cartDeleted)
  }

  const handleDeleteProduct=(e)=>{
    const id  = e.target.getAttribute("data-id")
    dispatch({ type: "DELETE_PRODUCT_FROM_CART", payload: id });
    const products = JSON.parse(window.localStorage.getItem("cart-products"))
    const newProducts = products.filter(product => product.id !== id)
   window.localStorage.setItem("cart-products", JSON.stringify(newProducts))
    setCartDeleted(!cartDeleted)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) {
      toast.info("No ingresaste valor de búsqueda.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: customId,
      });
    } else {
      history.push(`/products/${inputValue}-from-0`);
    }
  };

  return (
    <header>
      <BurguerMenu handleShow={handleShow} />
      <div className={headerStyles.brandContainer}>
        <h1 className={headerStyles.brand} onClick={handleBrand}>
          CLOTHESSTORE
        </h1>
        <h1 className={headerStyles.mobileBrand} onClick={handleBrand}>
          CS
        </h1>
      </div>
      <div className={headerStyles.iconsContainer}>
        <div className={headerStyles.cartContainer}>
          <span className={headerStyles.productsNumber} onClick={handleCart}>{cartProducts.length}</span>
          <img src={cart} alt="Cart shop" onClick={handleCart} />
          <CartList
            handleCart={showCart}
            cartProducts={cartProducts}
            handleEmptyCart={handleEmptyCart}
            handleDeleteProduct={handleDeleteProduct}
          ></CartList>
        </div>

        <div className={headerStyles.sessionContainer}>
          <img src={avatar} alt="User avatar" />
          <button className={headerStyles.btnSession}>Iniciar sesión</button>
        </div>
      </div>
      <div className={headerStyles.formContainer}>
        <form action="POST" onSubmit={handleSubmit}>
          <input
            autoFocus
            placeholder="Buscar aquí producto"
            type="text"
            onChange={handleInput}
            value={inputValue}
          />
          <button className={headerStyles.btnSearch} id="btn-search"></button>
        </form>
      </div>
      <Nav show={show} setShow={setShow}></Nav>
      <ToastContainer />
    </header>
  );
}

export default Header;
