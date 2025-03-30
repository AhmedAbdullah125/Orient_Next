'use client'
import React from 'react'
import Image from 'next/image'
import img1 from '/public/images/about/muslim.jpg'
import img2 from '/public/images/about/plane2.png'
import img3 from '/public/images/about/dots.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

export default function Services() {
  const lang = typeof window !== 'undefined' ? localStorage.getItem('lang') : 'en'

  const slides = [
    {
      icon: 'fa-person-walking-luggage',
      title: 'Choose Destination',
      desc: 'Orient will help you easily choose your destination. Quickly go and find out your next destination.',
    },
    {
      icon: 'fa-sliders',
      title: 'Diversity',
      desc: "See what's available at your next trip. If you're looking to travel, enter your data to check available directions.",
    },
    {
      icon: 'fa-meteor',
      title: 'Flexibility',
      desc: "In today's fast world, speed is essential—from adapting to change to seizing new opportunities.",
    },
    {
      icon: 'fa-money-bill-transfer',
      title: 'Good Prices',
      desc: 'Opportunities are rare. When they come, seize the moment and don’t waste the chance.',
    },
  ]

  return (
    <div className="advantages" style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}>
      <div className="container">
        <div className="advantages-cont">
          {/* Left side with Swiper */}
          <div className="l-side">
            <h2>Fast & Easy</h2>
            <h3>Get Your Favourite Resort Bookings</h3>

            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={3}
              pagination={false}
              autoplay={{ delay: 5000 }}
              className='swiperAdvantages'
              //vertical
              direction='vertical'
            >
              {slides.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="advantage">
                    <div className="icon">
                      <i className={`fa-solid ${item.icon}`}></i>
                    </div>
                    <div className="text">
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Right side with static trip card */}
          <div className="r-side">
            <div className="trip-card">
              <div className="img-cont">
                <Image src={img1} alt="Makkah" />
              </div>
              <h2>Visit Makkah</h2>
              <p>14-29 June | by Mohamed Ali</p>
              <div className="ies">
                <i className="fa-brands fa-envira"></i>
                <i className="fa-regular fa-map"></i>
                <i className="fa-solid fa-location-arrow"></i>
              </div>
              <div className="intersts">
                <i className="fa-solid fa-building-user"></i>
                <span>60 people are interested</span>
              </div>
              <div className="dots">
                <Image src={img3} alt="dots" />
              </div>
              <div className="palnee">
                <Image src={img2} alt="plane" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
