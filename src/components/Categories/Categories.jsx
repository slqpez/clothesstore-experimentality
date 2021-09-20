import React from 'react'
import bannersStyles from "./categories.module.css"
import banner1 from "../../assets/images/categorias-destacadas-moda-infantil.png"
import banner2 from "../../assets/images/categorias-destacadas-proteccion.png"

const banners= [{title:"MODA INFANTIL", img: banner1, id:1},{title:"PROTECCIÓN", img: banner2, id:2}]

function Banners() {
  return (
    <div className={bannersStyles.bannersContainer}>
      {banners.map(banner=> {
        return(
          <div key={banner.id} className={bannersStyles.bannerCard}>
            <img src={banner.img} alt="Banner category" className={bannersStyles.img} />
            <p className={bannersStyles.title}>{banner.title}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Banners
