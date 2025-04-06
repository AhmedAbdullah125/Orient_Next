'use client'
import React, { useEffect, useState } from 'react'
import van from '/public/images/van.svg'
import global from '/public/images/global.svg'
import Image from 'next/image'
import Link from 'next/link'

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select"

export default function UpperNavBar() {

    const [lang, setLang] = useState('en');
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
        <div className="container">
            <div className='upper'>
                <span className='welcomeSpan font14-400'>
                    {lang === 'amh' ? 'ወደ ምስራቅ እንኳን በደህና መጡ' : 'Welcome to Orient'}
                </span>
                <div className="right-side">
                    <Link href={'/profile/orders'} className="van">
                        <Image src={van} alt='Van' className='van-img' />
                        <span className='track font14-400'>
                            {lang === 'amh' ? 'በአገልግሎታችን ይደሰቱ' : 'Enjoy our services'}
                        </span>
                    </Link>
                    <span className='font14-400'>|</span>
                    {/* <Select onValueChange={handleLangChange} value={lang}> */}
                    <Select onValueChange={(e) => {
                        localStorage.setItem('lang', e);
                        window.location.reload();
                    }} defaultValue={localStorage.getItem('lang')}>

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
    )
}
