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
        { description: "", id: 7, image: null, name: "Banner 1", type: "video", url: "https://www.google.com", video: "https://rr3---sn-q4flrner.googlevideo.com/videoplayback?expire=1743953048&ei=OEjyZ6LhLfia1d8PrYLSyQ8&ip=2405%3A4802%3Aa451%3A1d80%3A6055%3Aed82%3A529c%3A699e&id=o-ALienToMopYk5iAwWy2W4SzjAnAID8PWbK4dhPAqpMfp&itag=247&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&bui=AccgBcNYkl-MTP-dHkosSPANUUapfcRT9MS3dzF5sVcazaDPXAr_4OaMzuTxK-cRqfNbvdZiqHwk_4v1&vprv=1&svpuc=1&mime=video%2Fwebm&ns=O3o53iLZNtFF8mXlNzQXyjYQ&rqh=1&gir=yes&clen=2701642&dur=25.509&lmt=1735782460603109&keepalive=yes&lmw=1&c=TVHTML5&sefc=1&txp=2219224&n=vqz0l-R7h0sRpQ&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIhALQi_9rIeEUjVbCEWwsDsrwMXqDYzZjoEARqBkBbRXeLAiBM0Wvbm9FjjzI2HqAZwC8ABwPPusMFSjyZl6t-cfMtIw%3D%3D&rm=sn-42u-nbozsee&rrc=79,80&fexp=24350590,24350737,24350827,24350961,24351147,24351149,24351173,24351283,24351398,24351528,24351543,24351545&req_id=ed14aadd81fea3ee&redirect_counter=2&cm2rm=sn-i3bk77e&cms_redirect=yes&cmsv=e&met=1743931459,&mh=eh&mip=51.158.253.77&mm=34&mn=sn-q4flrner&ms=ltu&mt=1743930458&mv=D&mvi=3&pl=0&rms=ltu,au&lsparams=met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=ACuhMU0wRQIgUjehdgmUcYVae_V0ZOtpFABIXzODIT3tWgYCBMTOySgCIQDzsJLruUGn6CFq2WEC2hWtYZcMeQwO9nPRIeW_grTmcg%3D%3D" },
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
