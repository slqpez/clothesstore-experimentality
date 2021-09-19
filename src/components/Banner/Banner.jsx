import React from 'react'
import bannerStyles from './banner.module.css'

function Banner() {
  return (
    <div className={bannerStyles.bannerContainer}>
      <div className={bannerStyles.sliderContainer}>
        <button className={`${bannerStyles.btnLeft} ${bannerStyles.btnSlider}`}></button>
        <button className={`${bannerStyles.btnRight} ${bannerStyles.btnSlider}`}></button>
      </div>
      <div className={bannerStyles.changeContainer}>
        <button className={`${bannerStyles.btnLeftCahnge} ${bannerStyles.btnChange}`}></button>
        <button className={`${bannerStyles.btnRightChange} ${bannerStyles.btnChange}`}></button>
      </div>
    </div>
  )
}

export default Banner
