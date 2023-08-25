import React from 'react';
import { Navigation, Pagination,  A11y,Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import slider1 from '../../Assets/image/blog1.jpg'
import slider2 from '../../Assets/image/blog2.jpg'
import slider3 from '../../Assets/image/blog3.jpg'
import slider4 from '../../Assets/image/blog4.jpg'
import styles from './Slider.module.css'




const Slider = () => {
  return (
    <>
     <div  className={styles.sip} >
     <Swiper className={styles.swip}
      // install Swiper modules
      modules={[Navigation, Pagination, A11y,Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      loop
      autoplay={{deley:1500}}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide  >  <img className={styles.img} src={slider1} alt=""/></SwiperSlide>
      <SwiperSlide ><img className={styles.img} src={slider2} alt=""/></SwiperSlide>
      <SwiperSlide  ><img className={styles.img} src={slider3} alt="" /></SwiperSlide>
      <SwiperSlide  ><img className={styles.img} src={slider4} alt="" /></SwiperSlide>
    </Swiper>
     </div>
    </>
  );
}

export default Slider;
