import React from 'react'
import burguerStyles from "./burguerMenu.module.css"

function BurguerMenu({handleShow}) {
  return (
    <div className={burguerStyles.btn} onClick={handleShow}>
    </div>
  )
}

export default BurguerMenu
