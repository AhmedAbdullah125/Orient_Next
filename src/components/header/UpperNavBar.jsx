'use client'
import React, { useEffect, useState } from 'react'
import van from '/public/images/van.svg'
import global from '/public/images/global.svg'
import Image from 'next/image'
import Link from 'next/link'

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"
export default function UpperNavBar() {
    function openLangList() {
        document.getElementById("overlay").style.display = "block";
        document.getElementById("langs").style.display = "flex";
        document.getElementById("chevron").style.transform = 'rotate(180deg)';
    }
    function closeLangList() {
        document.getElementById("overlay").style.display = "none";
        document.getElementById("langs").style.display = "none";
        document.getElementById("chevron").style.transform = 'rotate(0deg)';

    }
    // handle language
    let [lang, setLang] = useState('en');
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
    }, [lang]);
    return (
        <div className="container" style={{direction: lang === 'ar' ? 'rtl' : 'ltr'}}>
            <div className='upper'>
                <span className='welcomeSpan font14-400'>{lang === 'ar' ? 'مرحبا بك في لوبز' : 'Welcome to Orient'}</span>
                <div className="right-side">
                    <Link href={'/profile/orders'} className="van">
                        <Image src={van} alt='Van' className='van-img'></Image>
                        <span className='track font14-400'>{lang === 'ar' ? 'تمتع بخدماتنا' : 'Enjoy our services'}</span>
                    </Link>
                    <span className='font14-400'>|</span>
                    <Select onValueChange={(e) => {
                        localStorage.setItem('lang', e);
                        window.location.reload();
                    }} defaultValue={localStorage.getItem('lang')}>
                        <SelectTrigger className="w-[55px]" >
                            <Image src={global} alt='global'></Image>
                            <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="ar">ع</SelectItem>
                                <SelectItem value="en">en</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                </div>
                <div className="overlay" id='overlay' onClick={closeLangList}></div>
            </div>
        </div>
    )
}
