'use client'
import React, { useState, useEffect } from 'react'
import UpperNavBar from './UpperNavBar'
import logo from '/public/images/logo.png';
import Image from 'next/image'
import search from '/public/images/search.svg'
import Link from 'next/link'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from 'sonner'
import axios from 'axios'
import { useRouter } from 'next/navigation'

export default function NavBar() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const router = useRouter();
  const [searchData, setSearchData] = useState([]);
  const [selectedCat, setSelectedCat] = useState('toys');
  const [loading, setLoading] = useState(false);
  const [lang, setLang] = useState('en');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setLang(localStorage.getItem('lang') || 'en');
    }
  }, []);

  const sendSearchRequest = async () => {
    setLoading(true);
    let inputValue = document.getElementById('search-input').value;
    if (inputValue) {
      try {
        const response = await axios.get(`${API_BASE_URL}/${selectedCat}?search=${inputValue}`);
        let result = response.data.data;
        setSearchData(result);
        if (result.items === 0) {
          toast.error(lang === 'ar' ? 'لا يوجد بيانات للبحث' : 'No search results found');
        }
      } catch (error) {
        console.error('Error retrieving data:', error);
      }
    } else {
      document.getElementById('search-cont').style.border = '1px solid red';
    }
  };

  const t = (en, ar) => lang === 'ar' ? ar : en;

  return (
    <header style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}>
      <UpperNavBar />
      <div className="container m-auto">
        <div className="mainNavBar">
          <Link href={'/'} className='logoMainLink'>
            <Image src={logo} alt='Orient' className='logo' />
          </Link>
          <div className="input-cont" id='search-cont'>
            <input
              type="text"
              placeholder={t('Search For Products', 'ابحث عن المنتجات')}
              id='search-input'
              onKeyDown={(e) => {
                //  if (e.key === 'Enter') sendSearchRequest();
              }}
            />
            <Select onValueChange={setSelectedCat} defaultValue='toys'>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder={t('Select type', 'اختر النوع')} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="toys">{t('Services', 'الخدمات')}</SelectItem>
                  <SelectItem value="products">{t('Hotels', 'الفنادق')}</SelectItem>
                  <SelectItem value="tickets">{t('Tickets', 'التذاكر')}</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <div className="search-icon" onClick={sendSearchRequest}>
              <Image src={search} alt='search' />
            </div>

            {searchData.paginate && (
              <div className="search-data">
                {searchData?.items?.length > 0 ? (
                  searchData.items.map((item, index) => (
                    <Link href={`/${selectedCat.slice(0, -1)}?id=${item.id}`} key={index} onClick={() => {
                      document.getElementById('search-input').value = '';
                      setSearchData([]);
                      router.push(`/${selectedCat.slice(0, -1)}?id=${item.id}`);
                    }}>
                      <div className="img">
                        <Image src={item.image} alt='image' width={100} height={100} />
                      </div>
                      <div className="text">
                        <h2>{item.name}</h2>
                        <h3>{item.price} {t('K.D', 'د.ك')}</h3>
                      </div>
                    </Link>
                  ))
                ) : (
                  <h4>{t('There are no results', 'لا توجد نتائج')}</h4>
                )}
              </div>
            )}
          </div>
          <Link href={'/services'} className="nav-card">
            <i className="fa-solid fa-server"></i>
            <p>{t('Services', 'الخدمات')}</p>
          </Link>
          <Link href={'/about'} className="nav-card">
            <i className="fa-regular fa-id-card"></i>
            <p>{t('About', 'من نحن')}</p>
          </Link>
          <Link href={'/blogs'} className="nav-card">
            <i className="fa-regular fa-rectangle-list"></i>
            <p>{t('Blogs', 'المدونات')}</p>
          </Link>

        </div>
      </div>
      <div className="fixed-nav-bar-in-mobile">
        <div className="container">
          <Link href={'/services'} className="nav-card">
            <i className="fa-solid fa-server"></i>
            <p>{t('Services', 'الخدمات')}</p>
          </Link>
          <Link href={'/about'} className="nav-card">
            <i className="fa-regular fa-id-card"></i>
            <p>{t('About', 'من نحن')}</p>
          </Link>
          <Link href={'/blogs'} className="nav-card">
            <i className="fa-regular fa-rectangle-list"></i>
            <p>{t('Blogs', 'المدونات')}</p>
          </Link>
        </div>
      </div>
    </header>
  )
}