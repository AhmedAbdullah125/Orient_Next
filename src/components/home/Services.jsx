'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'; // Importing React to use JSX syntax and create components.
import img1 from '/public/images/services/umrah.png'
import img2 from '/public/images/services/hotel.png'
import img3 from '/public/images/services/car.jpg'
import img4 from '/public/images/services/plane.png'

export default function Services() { // Defining the main functional component named 'Footer'.
    const [lang, setLang] = useState('en');  // Default language is 'en'
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setLang(localStorage.getItem('lang'));
            // Define the headers with the selected language
            const headers = {
                lang: localStorage.getItem('lang'), // Change language dynamically based on state
            };
        }
    }, []);

    return (
        <div className="services" id="services" style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}>
            <div className="container">
                <h2>We Offer Best Services</h2>
                <div className="services-cont">
                    <Link href="/service" className="service">
                        <div className="img-cont">
                            <Image src={img1} alt="Orient" />
                        </div>
                        <h3 className="service-title">Umrah Services</h3>
                        <p>Discover our exclusive programs and offers for spiritual journeys to Makkah and Madinah. Find the perfect
                            program that enhances your Umrah experience.</p>
                    </Link>
                    <Link href="service" className="service">
                        <div className="img-cont">
                            <Image src={img2} alt="Orient" />
                        </div>
                        <h3 className="service-title">Hotel Reservation</h3>
                        <p>Explore the world with us Big savings on homes and hotels, and attractions - build your perfect trip on any
                            budget.</p>
                    </Link>
                    <Link href="service" className="service">
                        <div className="img-cont">
                            <Image src={img3} alt="Orient" />
                        </div>
                        <h3 className="service-title">Car Reservation</h3>
                        <p>Free Cancellation Available — With Flexible Bookings & No Hidden Fees, Secure Your Car Rental at The Best
                            Price Now. Unbeatable Prices.</p>
                    </Link>
                    <Link href="service" className="service">
                        <div className="img-cont">
                            <Image src={img4} alt="Orient" />
                        </div>
                        <h3 className="service-title">Tourism Plans</h3>
                        <p>You can book a flight on MakeMyTrip in five easy steps: Head over to the MakeMyTrip flight booking page,
                            Enter your departure and arrival destinations,</p>

                    </Link>
                </div>
            </div>
        </div>
    )
}
