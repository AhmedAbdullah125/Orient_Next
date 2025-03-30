'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'; // Importing React to use JSX syntax and create components.
import img1 from '/public/images/detservices/1.jpg'

export default function ServiceTop() { // Defining the main functional component named 'Footer'.
    const [lang, setLang] = useState('en')
    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (localStorage.getItem('lang') === 'ar' || localStorage.getItem('lang') === 'en') {
                setLang(localStorage.getItem('lang'));
            }
            else {
                localStorage.setItem('lang', 'en');
                setLang('en');
            }
        }
    })
    return (
        <section className="single-page" style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}>
            <div className="container">
                <div className="banner">
                    <div className="overlay">
                        <p className="p-on-overlay">Ummrah Services</p>
                    </div>
                    <div className="haram-slider slider-content">
                        <Image src={img1} alt="Haram" data-aos="zoom-in" />
                    </div>
                </div>
            </div>
        </section>
    )
}
