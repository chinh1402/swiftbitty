import Link from 'next/link';
import React from 'react';

function Contact() {
    return (
        <div id ="contact" className="contact">
        <div className="grid wide">
          <div className="contact-wrapper row">
            <div className="col l-6 m-6 c-12">
              <img
                src="../images/visit-us.jpg"
                alt=""
                className="contact__image"
              />
            </div>
            <span className="contact-offset c-o-1" />
            <div id="phone-contact" className="contact-infos col l-5 m-5 c-12">
              <h1 className="contact-headline heading" >Visit our restaurant</h1>
              <div className="contact-description">
                Address: 123 Main Street <br />
                City: Anytown <br />
                State: California <br />
                Zip Code: 12345 <br />
                <br />
                Email: contact@minimalfastfood.com <br />
                Phone: (123) 456-7890
              </div>
              <span className="contact-seperator" />
              <h2 className="contact-smheadline">Opening hours:</h2>
              <div className="contact-description">
                Monday to Friday: 10:00 AM - 9:00 PM <br />
                Saturday: 11:00 AM - 8:00 PM <br />
                Sunday: Closed <br />
                <br />
                To preserve a seat, you can{" "}
                <Link href="/reservation" className="contact-highlight">
                  make a reservation
                </Link>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Contact;