import React from 'react';
import Image from 'next/image';
import aboutImg from 'public/images/about-us.jpg';

function About() {
    return (
        <div id="about" className="about-us">
        <div className="grid wide">
          <div className="row">
            <div className="about-us__infos col l-6 m-6 c-12">
              <div className="about-us__infos-texts">
                <h1 className="about-us__heading heading">Who are we?</h1>
                <p className="about-us__description">
                  From a small food truck to multiple locations, at Swiftbite we
                  believe that great food doesn&apos;t have to be complicated. We use
                  fresh, high-quality ingredients to make delicious burgers,
                  fries, and salads that hit the spot. Come see why sometimes,
                  less really is more.
                </p>
                {/* <Link href= "#" className="about-us__readmore" scroll = {true}>
                  Read more
                </Link> */}
              </div>
            </div>
            <div className="about-us__quote">
              <span className="highlight highlight-main">&quot;Food</span> is a
              universal language that{" "}
              <span className="highlight">brings people together.</span> I love
              using my creativity and passion for cooking to{" "}
              <span className="highlight">create memorable experiences</span> for
              my guests
              <div className="about-us__quote-chef">~ Chef Elena Ramirez</div>
            </div>
            <div className="about-us-offset c-o-1" />
            <div className="col l-5 m-5 c-12">
              <Image
                src={aboutImg}
                alt="A cheef pounding the dough"
                className="about-us__image"
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
}

export default About;