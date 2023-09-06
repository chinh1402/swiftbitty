import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import heroBackGround from 'public/images/hero-img.jpg';

function Hero() {
    return (
        <>
            <div className="hero-section">
                <Image 
                // className="hero"
                src={heroBackGround}
                alt="Burger hero section"
                quality={75}
                fill
                sizes="100vw"
                priority = {true}
                style={{
                    objectFit: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'left',
                }}
                />
                <div className="hero-wrapper grid wide">
                    <div className="hero__texts">
                    <span className="hero__panorama">SPLENDID</span>
                    <h1 className="hero__headlines heading">Eat less, taste more</h1>
                    <p className="hero__description">
                        Enjoy delightfulness through the bites
                    </p>
                    <div className="hero__cta-buttons">
                        <Link href="/order-online" className="hero__primary-cta btn" prefetch = {true}>
                        Order online
                        </Link>
                        <a href="#menu" className="hero__cta btn">
                        Our menu
                        </a>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
  }
  
  export default Hero;
