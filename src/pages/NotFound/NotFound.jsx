import React from 'react'
import notFoundStyles from "./notFound.module.css"
function NotFound() {
  return (
    <div className={notFoundStyles.notFoundContainer}>
      <h1>404</h1>
      <p>Not Found. 🏴</p>
    </div>
  )
}

export default NotFound
