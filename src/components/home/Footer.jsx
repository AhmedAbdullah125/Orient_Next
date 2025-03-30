'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'; // Importing React to use JSX syntax and create components.
import logo from '../../../src/assets/images/home/logo.png'
// import Loading from '@/app/loading';
// import axios from 'axios';
// import { API_BASE_URL } from '@/lib/apiConfig';



export default function Footer() { // Defining the main functional component named 'Footer'.
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
    // const [loading, setLoading] = useState(true); // State for loading indicator
    // const [data, setData] = useState(null);
    // const [contactData, setContactData] = useState(null);
    // const [error, setError] = useState(null);
    // useEffect(() => {
    //     setLoading(true);
    //     const headers = {
    //         lang: 'ar', // Change language dynamically based on state
    //     };
    //     // Fetch data from the API with Axios
    //     axios.get(`${API_BASE_URL}/social_media`, {
    //         headers: headers,
    //     }).then(response => {
    //         setData(response.data.data);  // Set the response data to state
    //         setLoading(false);  // Set loading to false

    //     })
    //         .catch(error => {
    //             setError(error);  // Handle any errors
    //             console.error('Error fetching data:', error);
    //             setLoading(false)
    //         });
    //     axios.get(`${API_BASE_URL}/contacts`, {
    //         headers: headers,
    //     }).then(response => {
    //         setContactData(response.data.data);  // Set the response data to state
    //         setLoading(false);  // Set loading to false
    //     })
    //         .catch(error => {
    //             setError(error);  // Handle any errors
    //             console.error('Error fetching data:', error);
    //             setLoading(false)
    //         });
    // }, []);  // Run this effect whenever the `language` changes
    // const [whatsapp, setWhatsapp] = useState("");

    // useEffect(() => {
    //     if (contactData?.length) {
    //         const mobileNumber = contactData.find((item) => item.type === "mobile")?.value;
    //         if (mobileNumber) {
    //             setWhatsapp(mobileNumber);
    //         }
    //     }
    // }, [contactData]); // Runs when `contactData` updates

    return (
        <footer id='footer' style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}> {/* Main footer container with padding and background color */}


            <Link href={`https://wa.me/+201013644154?text=Good%20Morning%20Oreient`} target="_blank" className="fixed-what">
                <i className="fa-brands fa-whatsapp"></i>
            </Link>
            <div className="container m-auto" id='footer'>
                <div className="content">
                    <div className="logo">
                        <Image src={logo} alt="Mazar" width={200} height={200} />
                    </div>
                    <div className="links">
                        <h3>{lang === 'ar' ? 'روابط سريعة' : 'Quick Links'}</h3>
                        <ul>
                            <li><Link href="/">{lang === 'ar' ? 'الرئيسية' : 'Home'}</Link></li>
                            <li><Link href="/#about">{lang === 'ar' ? 'من نحن' : 'About Us'}</Link></li>
                            <li><Link href="/#contact">{lang === 'ar' ? 'اتصل بنا' : 'Contact Us'}</Link></li>
                        </ul>
                    </div>
                    <div className="links">
                        <h3>{lang === 'ar' ? 'اتصل بنا' : 'Contact Us'}</h3>
                        <ul>
                            <li ><Link href={`tel:01010010100101001`} >+96555555555555555</Link></li>
                            <li ><Link href={`mailto:orient@gmail`} >orient@gmail.com</Link></li>
                            <li ><Link href={"#footer"} className='address'>Riyadh KSA</Link></li>
                        </ul>
                    </div>
                    <div className="links">
                        <h3>{lang === 'ar' ? 'تابعنا' : 'Follow Us'}</h3>
                        <div className="social">
                            <Link href={'fb.com'} target='_blank'><i className={`fa-brands fa-facebook`}></i></Link>
                            <Link href={'twitter.com'} target='_blank'><i className={`fa-brands fa-twitter`}></i></Link>
                            <Link href={'instagram.com'} target='_blank'><i className={`fa-brands fa-instagram`}></i></Link>
                            <Link href={'linkedin.com'} target='_blank'><i className={`fa-brands fa-linkedin`}></i></Link>
                        </div>
                    </div>
                </div>
                <div className="served">
                    <i className="fa-regular fa-copyright"></i> {lang === 'ar' ? '2025,جميع الحقوق محفوظة لشركة اورينت الوطنية التجارية' : '2025, All rights reserved to Oriental National Trading Co.'}
                </div>
            </div>
        </footer>
    )
}
