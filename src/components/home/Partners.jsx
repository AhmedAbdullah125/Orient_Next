'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import part1 from '/public/images/partner/eg.png';
import part2 from '/public/images/partner/nas.png';
import part3 from '/public/images/partner/partner2.png';
import part4 from '/public/images/partner/partnr1.png';
import part5 from '/public/images/partner/sau.png';
import Marquee from '../ui/marquee';
import { cn } from '@/lib/utils';

export default function Parteners() {
    const [language, setLanguage] = useState('en');  // Default language is 'en'
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setLanguage(localStorage.getItem('lang'));
            // Define the headers with the selected language
            const headers = {
                lang: localStorage.getItem('lang'), // Change language dynamically based on state
            };
        }
    }, []);

    const ReviewCard = ({
        img,
    }) => {
        return (
            <figure
                className={cn(

                )}
            >
                <div className="part-cont" >
                    <Image src={img} alt="Mazar" width={200} height={200} />
                </div>
            </figure>
        );
    };
    let parts = [{ img: part1.src }, { img: part2 }, { img: part3 }, { img: part4 },  { img: part5 }, ];
    
    return (
        <div className="parteners" style={{ direction: language === 'en' ? 'ltr' : 'rtl' }}>
            {/* <div className="container m-auto">
                <h2>{language === 'en' ? 'Accredited by':'معتمدون لدى'  }</h2>
            </div> */}
            <div className="parts-cont">
                <div className="partss" style={{ direction:'ltr' }}>
                    <div className="relative flex  w-full flex-col items-center gap-2 justify-center overflow-hidden  ">
                        <Marquee pauseOnHover className="[--duration:20s] ">
                            {parts.map((review, index) => (
                                <ReviewCard key={index} {...review} />
                            ))}
                        </Marquee>
                    </div>
                </div>

            </div>
        </div>
    )
}
