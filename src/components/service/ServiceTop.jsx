'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'; // Importing React to use JSX syntax and create components.
import img1 from '/public/images/det-services/1.jpg'

export default function ServiceTop() { // Defining the main functional component named 'Footer'.
    const lang = localStorage.getItem('lang')

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
