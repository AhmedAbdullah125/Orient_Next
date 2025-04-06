import Image from 'next/image';
import React from 'react'; // Importing React to use JSX syntax and create components.

export default function ServiceTop({ img, title }) { // Defining the main functional component named 'Footer'.

    return (
        <section className="single-page">
            <div className="container">
                <div className="banner">
                    <div className="overlay">
                        <p className="p-on-overlay">{title}</p>
                    </div>
                    <div className="haram-slider slider-content">
                        <Image src={img} alt="Haram" data-aos="zoom-in" />
                    </div>
                </div>
            </div>
        </section>
    )
}
