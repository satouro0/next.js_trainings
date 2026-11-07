"use client"

import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function page() {
  return (
    <Swiper
        className='text-white'
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        slidesPerView={1}
        spaceBetween={16}
        loop
        pagination={{clickable: true}}
        autoplay={{delay: 1000}}
        >
        <SwiperSlide className='text-center mb-20'>one</SwiperSlide>
        <SwiperSlide className='text-center mb-20'>two</SwiperSlide>
        <SwiperSlide className='text-center mb-20'>three</SwiperSlide>
        <SwiperSlide className='text-center mb-20'>four</SwiperSlide>
        <SwiperSlide className='text-center mb-20'>five</SwiperSlide>
    </Swiper>
  )
}
