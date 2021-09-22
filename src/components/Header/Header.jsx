import React, { useState } from "react";
import headerStyles from "./header.module.css";
import cart from "../../assets/icons/icon-cart.svg";
import avatar from "../../assets/icons/icon-user.svg";
import Nav from "../Nav/Nav";
import { useHistory } from "react-router-dom";
import BurguerMenu from "../BurguerMenu/BurguerMenu";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const customId = "custom-id-yes";

function Header() {

  const [inputValue, setInputValue] = useState("");

  const history = useHistory();

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleBrand = (e) => {
    history.push("/");
  };

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
        toastId: customId
        })
    } else {
      history.push(`/products/${inputValue}-from-0`);
    }
  };

  return (
    <header>
      <ToastContainer />
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
        <img src={cart} alt="Cart shop" />
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
          <button className={headerStyles.btnSearch}></button>
        </form>
      </div>
      <Nav show={show} setShow={setShow}></Nav>
    </header>
  );
}

export default Header;
