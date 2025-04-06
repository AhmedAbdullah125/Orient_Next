'use client'
import React from 'react'
import Image from 'next/image'
import img1 from '/public/images/detservices/25.jpg'
import img2 from '/public/images/detservices/26.png'
import img3 from '/public/images/detservices/27.jpg'


export default function BlogsGrid() {
    let blogs = [
        {
            img: img1,
            title: 'Flight - Science World - moahmed Ali ',
            content: 'To design a successful airplane, engineers had to master the balance and control of four forces: lift, gravity, thrust and drag, also known as the "four forces'
        },
        {
            img: img2,
            title: 'Science of the Total Environment',
            content: 'Science of the Total Environment is a weekly international peer-reviewed scientific journal covering environmental science. It was established in 1972 and'
        },
        {
            img: img3,
            title: 'Science of the Total Environment',
            content: 'Science of the Total Environment is a weekly international peer-reviewed scientific journal covering environmental science. It was established in 1972 and'
        },
        {
            img: img1,
            title: 'Flight - Science World - moahmed Ali',
            content: 'To design a successful airplane, engineers had to master the balance and control of four forces: lift, gravity, thrust and drag, also known as the "four forces'
        },
        {
            img: img2,
            title: 'Science of the Total Environment',
            content: 'Science of the Total Environment is a weekly international peer-reviewed scientific journal covering environmental science. It was established in 1972 and'
        },
        {
            img: img3,
            title: 'Science of the Total Environment',
            content: 'Science of the Total Environment is a weekly international peer-reviewed scientific journal covering environmental science. It was established in 1972 and'
        },
    ]

    return (
        <div className="news mt-10 brief">
            <div className="container m-auto">
                <div className="latest">
                    <h2>Take a look on our Blogs</h2>
                    <div className="news-cont">

                        {
                            blogs.map((item, index) => (
                                <div className="news">
                                    <Image src={item.img} alt="Mazar" width={200} height={200} />
                                    <div className="news-data">
                                        <div className="text">
                                            <h3>{item.title}</h3>
                                            <p>{item.content}</p>
                                        </div>
                                        <a href="/blog?id=1">
                                            <div className="arrow">
                                                <i className="fa-solid fa-chevron-right"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            ))
                       }

                    </div>
                </div>
            </div>
        </div>
    )
}
