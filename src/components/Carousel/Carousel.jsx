import React, { useEffect } from 'react'
import 'swiper/css'
import {Navigation} from 'swiper/modules'
import {Swiper,useSwiper,SwiperSlide} from 'swiper/react'
import styles from './Carousel.module.css'
import CarouselLeft from './CarouselLeftNav'
import CarouselRight from './CarouselRightNav'

const Controls = ({data}) => {
    let swiper = useSwiper();
    console.log(swiper)
    useEffect(() => {
        // swiper.slideTo(0)
    },[data])

    return <></>
}

const Carousel = ({data,renderCardComponent}) => {
  return (
    <div className={styles.wrapper}>
        <Swiper initialSlide = {0} modules={{Navigation}} slidesPerView={'auto'} spaceBetween={40} allowTouchMove>
            <Controls data={data} />
            <CarouselLeft />
            <CarouselRight />
            {data.map(item => (
                <SwiperSlide>{renderCardComponent(item)}</SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default Carousel