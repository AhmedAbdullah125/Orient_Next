'use client'
import React, { useEffect, useState } from 'react'
import van from '/public/images/van.svg'
import global from '/public/images/global.svg'
import Image from 'next/image'
import Link from 'next/link'

import {
    Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select"

export default function UpperNavBar() {
    const [lang, setLang] = useState('en');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLang = localStorage.getItem('lang');
            if (storedLang === 'amh' || storedLang === 'en') {
                setLang(storedLang);
            } else {
                localStorage.setItem('lang', 'en');
                setLang('en');
            }
        }
    }, []); // Empty dependency to run only once on mount

    const handleLangChange = (e) => {
        localStorage.setItem('lang', e);
        setLang(e);
        window.location.reload(); // This reload is optional; if you're using state-based i18n, you might not need it
    };

    return (
        <div className="container">
            <div className='upper'>
                <span className='welcomeSpan font14-400'>
                    {lang === 'amh' ? 'ወደ ምስራቅ እንኳን በደህና መጡ' : 'Welcome to Orient'}
                </span>
                <div className="right-side">
                    <Link href={'/#services'} className="van">
                        <Image src={van} alt='Van' className='van-img' />
                        <span className='track font14-400'>
                            {lang === 'amh' ? 'በአገልግሎታችን ይደሰቱ' : 'Enjoy our services'}
                        </span>
                    </Link>
                    <span className='font14-400'>|</span>

                    <Select onValueChange={handleLangChange} value={lang}>
                        <SelectTrigger className="w-[55px]">
                            <Image src={global} alt='global' />
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="amh">አማርኛ</SelectItem>
                                <SelectItem value="en">En</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    );
}
