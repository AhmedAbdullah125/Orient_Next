'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import img1 from '/public/images/detservices/25.jpg'
import img2 from '/public/images/detservices/28.png'
import img3 from '/public/images/detservices/29.jpg'
import img4 from '/public/images/detservices/30.jpg'
import img5 from '/public/images/detservices/31.jpg'
import img6 from '/public/images/detservices/32.jpg'


import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import ServiceTop from '@/components/service/ServiceTop'

export default function Advant() {
    const [lang, setLang] = useState('en')
    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (localStorage.getItem('lang') === 'amh' || localStorage.getItem('lang') === 'en') {
                setLang(localStorage.getItem('lang'));
            }
            else {
                localStorage.setItem('lang', 'en');
                setLang('en');
            }
        }
    })

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
        <>
        <ServiceTop img={img1} title="Flight - Science World" />
        <div className="container changed-container">
            <div className="plan-main plan-main-details">
                <div className="l-side">
                    <div className="title-price">
                        <div className="title">
                            <h4>Flight - Science World</h4>
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
                        Flight: A Marvel of Science and Innovation<br />

                        Flight is one of humanity's greatest achievements, blending the principles of science with the
                        ingenuity of engineering. From the flapping wings of birds that inspired early inventors to the
                        advanced aerodynamics of modern aircraft, flight represents the perfect harmony between nature and
                        technology. It operates on core scientific principles such as lift, thrust, drag, and gravity, all
                        governed by the laws of physics. Over time, innovations like jet engines, supersonic speeds, and
                        even space exploration have revolutionized the way we view flight, transforming it into a tool for
                        connection, exploration, and discovery. As science continues to advance, the future of flight
                        promises sustainable technologies, faster travel, and the possibility of reaching new frontiers
                        beyond Earth.
                    </p>

                    <h3>From our gallery</h3>
                    <div className="imgs-cont">
                        <a data-fancybox="gallery" href={img1.src} className="img-cont"> 
                        <Image src={img1} alt="Saudi-Arabia" data-caption="Caption #1" /></a>
                        <a data-fancybox="gallery" href={img2.src} className="img-cont"> 
                        <Image src={img2} alt="Saudi-Arabia" data-caption="Caption #2" /></a>
                        <a data-fancybox="gallery" href={img3.src} className="img-cont"> 
                        <Image src={img3} alt="Saudi-Arabia" data-caption="Caption #3" /></a>
                        <a data-fancybox="gallery" href={img4.src} className="img-cont"> 
                        <Image src={img4} alt="Saudi-Arabia" data-caption="Caption #4" /></a>
                        <a data-fancybox="gallery" href={img5.src} className="img-cont"> 
                        <Image src={img5} alt="Saudi-Arabia" data-caption="Caption #5" /></a>
                        <a data-fancybox="gallery" href={img6.src} className="img-cont"> 
                        <Image src={img6} alt="Saudi-Arabia" data-caption="Caption #6" /></a>
                    </div>
                </div>


            </div>
        </div>
        </>
    )
}
