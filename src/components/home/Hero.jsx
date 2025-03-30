'use client'
import React, { useEffect, useState } from 'react'
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from 'next/image';
import img1 from '/public/images/Haram.png'
import img2 from '/public/images/fondok.jpg'
import axios from 'axios';
export default function HomeSwiper() {
    // const [data, setData] = useState(null);  // State to store fetched data
    // const [loading, setLoading] = useState(true); // State for loading indicator
    // const [error, setError] = useState(null); // State for error handling
    // useEffect(() => {
    //     setLoading(true)
    //     const getHomeData = async () => {
    //         try {
    //             const response = await axios.get("https://loopz-q8.com/api/banners");
    //             let data = response.data.data;
    //             setData(data)
    //             setLoading(false)
    //         } catch (error) {
    //             console.error('Error retrieving data:', error);
    //             throw new Error('Could not get data');
    //             setLoading(false)
    //         }
    //     };
    //     getHomeData();

    // }, []);
    const videoURl = "@/public/videos/1.webm" 
    const data = [
        { description: "", id: 7, image: null, name: "Banner 1", type: "video", url: "https://www.google.com", video: "https://www.w3schools.com/html/mov_bbb.mp4" },
        { description: "", id: 7, image: img1, name: "Banner 1", type: "image", url: "https://www.google.com", video: null },
        { description: "", id: 7, image: img2, name: "Banner 1", type: "image", url: "https://www.google.com", video: null },
    ]

    return (
        <div className="container home-slider" style={{ direction: 'ltr' }}>
            <Swiper
                // navigation
                pagination={{ type: "bullets", clickable: true }}
                spaceBetween={12}
                slidesPerView={7.5}
                autoplay={false}
                loop={true}
                dir='ltr'
                modules={[Autoplay, Navigation, Pagination]}
                breakpoints={{
                    1400: {
                        slidesPerView: 1,
                    },
                    1100: {
                        slidesPerView: 1,
                    },
                    767: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 1,
                        autoplay: false,
                    },
                    640: {
                        slidesPerView: 1,
                        autoplay: false,
                    },

                    100: {
                        slidesPerView: 1,
                        autoplay: false,
                    },
                }}
            >
                {
                    data.map((img, index) =>
                        <SwiperSlide key={index}>
                            {
                                img.url ?
                                    <div className="slide-img">
                                        {img.type == "video" ?
                                            <video width="320" height="240" muted autoPlay={"autoplay"}>
                                                <source src={img.video} type="video/webm" />
                                                <source src={img.video} type="video/ogg" />
                                            </video> :
                                            <>
                                                <Image src={img.image} width={100} height={100} alt='Loops' onClick={() => window.location.href = img.url} />
                                            </>
                                        }
                                    </div>
                                    : <div className="slide-img">
                                        {img.type == "video" ?
                                            <video width="320" height="240" muted loop={true} autoPlay={"autoplay"}>
                                                <source src={img.video} type="video/webm" />
                                                <source src={img.video} type="video/ogg" />
                                            </video> :
                                            <Image src={img.image} width={100} height={100} alt='Loops' />
                                        }
                                    </div>
                            }
                        </SwiperSlide>
                    )

                }
            </Swiper>
        </div>
    )
}
