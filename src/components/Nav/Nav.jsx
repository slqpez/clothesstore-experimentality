import React,{useState} from 'react'
import navStyles from './nav.module.css'

function Nav({show, setShow}) {


  const handleHidde =()=>{
    setShow(false)
  }
  return (
    <nav className={show?navStyles.show:""}>
      <ul>
        <li><a href="#">Hombre</a></li>
        <li><a href="#">Mujer</a></li>
        <li><a href="#">Junior</a></li>
        <li><a href="#">Niños</a></li>
        <li><a href="#">Accesorios</a></li>
        <li><a href="#">Ofertas</a></li>
      </ul>
      <button className={navStyles.closeBtn} onClick={handleHidde}></button>
    </nav>
  )
}

export default Nav
