import React from 'react'
import Image from 'next/image'
import img1 from '/public/images/logo.png'
import img2 from '/public/images/about/plane2.png'
import img3 from '/public/images/about/dots.png'


export default function Advant() {
  // const [lang, setLang] = useState('en')
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     if (localStorage.getItem('lang') === 'amh' || localStorage.getItem('lang') === 'en') {
  //       setLang(localStorage.getItem('lang'));
  //     }
  //     else {
  //       localStorage.setItem('lang', 'en');
  //       setLang('en');
  //     }
  //   }
  // })

  

  return (
    <div className="advantages">
      <div className="container">
        <div className="advantages-cont">
          {/* Left side with Swiper */}
          <div className="l-side">
            <h2>Orient</h2>
            <h3>Get Your Favourite Resort Bookings</h3>
            <p>
              Orient is a leading travel company that offers a wide range of
              services, including hotel reservations, flight tickets, and car
              rentals. Our team of experienced professionals is dedicated to
              helping you find the perfect accommodations, transportation, and
              travel options for your next trip.
            </p>
          </div>

          {/* Right side with static trip card */}
          <div className="r-side">
            <div className="trip-card">
              <div className="img-cont">
                <Image src={img1} alt="Makkah" />
              </div>
              <h2>Visit Makkah</h2>
              <p>Orient will help you easily choose your destination</p>
              <div className="ies">
                <i className="fa-brands fa-envira"></i>
                <i className="fa-regular fa-map"></i>
                <i className="fa-solid fa-location-arrow"></i>
                <i className="fa-solid fa-plane"></i>
                <i className="fa-solid fa-hotel"></i>
                <i className="fa-solid fa-user-group"></i>
              </div>
              <div className="intersts">
                <i className="fa-solid fa-heart"></i>
                <span>60 people are interested</span>
              </div>
              <div className="dots">
                <Image src={img3} alt="dots" />
              </div>
              <div className="palnee">
                <Image src={img2} alt="plane" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
