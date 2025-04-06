'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import img1 from '/public/images/detservices/1.jpg'
import img2 from '/public/images/detservices/2.jpg'
import img3 from '/public/images/detservices/3.jpg'
import img4 from '/public/images/detservices/4.jpg'
import img5 from '/public/images/detservices/12.jpg'
import img6 from '/public/images/detservices/6.jpg'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

export default function ServiceBody() {
    const lang = typeof window !== 'undefined' ? localStorage.getItem('lang') : 'en'

    const packages = [
        {
            title: 'Silver Ummrah Package',
            oldPrice: 'KD 500',
            newPrice: 'KD 450',
            offer: '10% Off',
            details: 'Includes 3-star hotel, flight, and transport.'
        },
        {
            title: 'Gold Ummrah Package',
            oldPrice: 'KD 680',
            newPrice: 'KD 620',
            offer: 'Limited Offer',
            details: 'Includes 4-star hotel, guided tours, meals, and flights.'
        },
        {
            title: 'Platinum Ummrah Package',
            oldPrice: 'KD 950',
            newPrice: 'KD 850',
            offer: 'Best Value',
            details: '5-star hotel, private transport, full board meals & flight.'
        },
    ]

    return (
        <div className="container changed-container">
            <div className="plan-main plan-main-details">
                <div className="l-side">
                    <div className="title-price">
                        <div className="title">
                            <h4>Ummrah Services</h4>
                            <div className="stars-reviews-cont">
                                <div className="stars">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <span>(2.3k review)</span>
                            </div>
                        </div>
                    </div>
                    <p className="discripton">
                        🌟 Discover Hassle-Free Ummrah Services with Orient 🌟<br />
                        Embark on a spiritual journey with confidence and peace of mind through our tailored Ummrah
                        packages... Contact us today to plan your Ummrah trip and experience excellence in every step! 🕋✈️
                    </p>
                    <div className="packages">
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            spaceBetween={20}
                            slidesPerView={3}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 3000 }}
                            className='swiperPackages'
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                            }}
                        >
                            {packages.map((pkg, index) => (
                                <SwiperSlide key={index}>
                                    <Link href="contact?service=Ummrah" className="package-card">
                                        <h4>{pkg.title}</h4>
                                        <div className="price-section">
                                            <p className="new-price" style={{ fontWeight: 'bold', color: '#2e8b57' }}>
                                                {pkg.newPrice}
                                            </p>
                                            <p className="old-price" style={{ textDecoration: 'line-through', color: '#999' }}>
                                                {pkg.oldPrice}
                                            </p>
                                        </div>
                                        <span className="offer">{pkg.offer}</span>
                                        <p className="details">{pkg.details}</p>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <h3>From our gallery</h3>
                    <div className="imgs-cont">
                        {[img1, img2, img3, img4, img5, img6].map((img, i) => (
                            <Link key={i} data-fancybox="gallery" href={img.src} className="img-cont">
                                <Image src={img} alt={`Saudi-Arabia-${i}`} data-caption={`Caption #${i + 1}`} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
