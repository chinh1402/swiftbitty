import Link from 'next/link';
import React from 'react';

function Hero() {
    return (
        <div className="hero" style={{ 
            backgroundImage: "url(../images/hero-img.jpg)" 
            }}>
            <div className="hero-wrapper grid wide">
                <div className="hero__texts">
                <span className="hero__panorama">SPLENDID</span>
                <h1 className="hero__headlines heading">Eat less, taste more</h1>
                <p className="hero__description">
                    Enjoy delightfulness through the bites
                </p>
                <div className="hero__cta-buttons">
                    <Link href="/order-online" className="hero__primary-cta btn">
                    Order online
                    </Link>
                    <a href="#menu" className="hero__cta btn">
                    Our menu
                    </a>
                </div>
                </div>
            </div>
        </div> 
    );
  }
  
  export default Hero;
