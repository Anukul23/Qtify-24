import React from 'react'
import { useState,useEffect } from 'react'
import { useSwiper } from 'swiper/react'
import  LeftArrow from '../../assests/Left-Arrow.png';
import styles from './CarouselLeft.module.css'

const CarouselLeftNavigation = () => {
    const swiper = useSwiper();
    const [isBeginning,setIsBeginning] = useState(swiper.isBeginning)

    useEffect(() => {
        swiper.on("slideChange", () => {
            setIsBeginning(swiper.isBeginning)
        })
    },[swiper])
  return (
    <div className={styles.leftNavigation}>
        {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()}/>}
    </div>
  )
}

export default CarouselLeftNavigation