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
    const data = [
        { description: "", id: 7, image: null, name: "Banner 1", type: "video", url: "https://www.google.com", video: "https://rr1---sn-5hnekn7z.googlevideo.com/videoplayback?expire=1743299309&ei=jU7oZ4_mJKL_4-EPmNC4sAE&ip=182.253.126.23&id=o-AAg8A0urvlmE1dFBGXWfq-5vRoYN8GhM_EyZ7wpjGP60&itag=247&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&bui=AccgBcNvR7HU1X_ETedNRGwuleVQFiSOxjhgFPG40pJRm0Qnd1cUR1Wk4v1Zrfe-sgmjfB9wG9vfSPA0&spc=_S3wKlareB6vrX-_654gIBNQkK6EVSRX32jcYm146hEXik3RQXktlEh-ucOC2Cpx7q4&vprv=1&svpuc=1&mime=video%2Fwebm&ns=R_PKiMhDDMzmn-up1tJN-rwQ&rqh=1&gir=yes&clen=2701642&dur=25.509&lmt=1735782460603109&keepalive=yes&fexp=24350590,24350737,24350827,24350961,24351064,24351147,24351173,24351283,24351353,24351398,24351415,24351421,24351423,24351470,24351526,24351528,24351531,51331020,51435733&c=MWEB&sefc=1&txp=2219224&n=9INI8uSE3rxCEw&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRAIgQpA6cSlITz7q5xq7x-_PJUyv4mcAH1zuviGjfGPwO74CIHnvQ6YLEI5K9O-AoFnJp0_ZNAe3hGtI-J77dk0QVHkj&rm=sn-cp1oxu-ngbe7e,sn-npozl7z&rrc=79,104&req_id=3e4f61c50474a3ee&cmsv=e&rms=rdu,au&redirect_counter=2&cms_redirect=yes&ipbypass=yes&met=1743277731,&mh=eh&mip=51.158.253.130&mm=29&mn=sn-5hnekn7z&ms=rdu&mt=1743277270&mv=m&mvi=1&pl=21&lsparams=ipbypass,met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=AFVRHeAwRQIgD3jC5yBpd0m8FHAI-1WEVjSrpy3CI46VHws3VndgK8ICIQDQW7xoBlNmghQtCN07rwWGTEtWJSFVuJkQf-2Nz1Secw%3D%3D" },
        { description: "", id: 7, image: img1, name: "Banner 1", type: "image", url: "https://www.google.com", video: null },
        { description: "", id: 7, image: img2, name: "Banner 1", type: "image", url: "https://www.google.com", video: null },
    ]

    return (
        <div className="container home-slider" style={{direction: 'ltr'}}>
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
                                                <source src={img.video} type="video/mp4" />
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
                                                <source src={img.video} type="video/mp4" />
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
