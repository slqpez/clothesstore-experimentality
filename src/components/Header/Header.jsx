import React,{useState} from "react";
import headerStyles from "./header.module.css";
import cart from "../../assets/icons/icon-cart.svg";
import Nav from "../Nav/Nav"
import BurguerMenu from "../BurguerMenu/BurguerMenu";

function Header() {


  const [show, setShow]= useState(false)

  const handleShow=()=>{
    setShow(true)
  }
  return (
    <header>
      <BurguerMenu handleShow={handleShow}/>
      <div className={headerStyles.brandContainer}>
        <h1 className={headerStyles.brand}>CLOTHESSTORE</h1>
      </div>
      <div>
        <img src={cart} alt="" />
      </div>
      <div className={headerStyles.formContainer}>
        <form action="POST">
          <input type="text" placeholder="Buscar aquí producto" />
          <button className={headerStyles.btnSearch}>
          </button>
        </form>
      </div>
      <Nav show={show} setShow={setShow}></Nav>
    </header>
  );
}

export default Header;
