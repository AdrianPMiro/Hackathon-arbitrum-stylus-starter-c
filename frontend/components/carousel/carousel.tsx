import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './styles.css';
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import CardDonative from "@/components/card_donative"

export default function Carousel() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
          <CardDonative title={"Fondo Alimento para niños"} meta={4000} progress={800} information='ayuda-ninos '/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
          <CardDonative title={"Ayuda a Valencia"} meta={250000} progress={100000} information='dana'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
          <CardDonative title={"Fondo verde"} meta={2500} progress={100} information='fondo-verde'/>
          </div>
        </SwiperSlide>
        </Swiper>
    </>
  );
}
