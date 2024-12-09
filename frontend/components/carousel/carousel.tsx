import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './styles.css';
// import extra modules for out proyect ( and make it cool)
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
          <CardDonative title={"Fondo Alimento para niños"} meta={4000} progress={800} information='ayuda-ninos' contract_address='0x72bf8509525fb6f4d9e3981b9ed1409fcb6a83fd'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
          <CardDonative title={"Ayuda a Valencia"} meta={250000} progress={100000} information='dana' contract_address='0x5e9a891a8055e8a925b30683b91ebc39b37beac5'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
          <CardDonative title={"Fondo verde"} meta={2500} progress={100} information='fondo-verde' contract_address='0x8e43d6bc80bdb1df7d36a0cd2b61dbcaa332304d'/>
          </div>
        </SwiperSlide>
        </Swiper>
    </>
  );
}
