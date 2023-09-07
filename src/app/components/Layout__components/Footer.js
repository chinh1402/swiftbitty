"use client";
import Image from 'next/image';
import Link from 'next/link';
import facebookIcon from 'public/images/facebook.svg';
import twitterIcon from 'public/images/twitter.svg';
import instaIcon from 'public/images/insta.svg';
import GetCurrentSlug from '../Generic__components/functions/GetCurrentSlug';
import isHomePage from '../Generic__components/functions/isHomePage';

const Footer = () => {
  let nullurl
  return (
    <div className="footer">
      <div className="grid wide">
        <span className="footer__aesline" />
        <ul className="footer__list">
          <li className="footer__list-item">
            <Link href="/#" className="footer__list-item-link">
              Home
            </Link>
          </li>
          <li className="footer__list-item">
            <a 
            href='#about'
            className= {isHomePage(GetCurrentSlug()) ? "footer__list-item-link" : "display-none"}
            >
              About us
            </a>
          </li>
          <li className="footer__list-item">
            <Link href="/reservation" className="footer__list-item-link" prefetch = {true}>
              Make a reservation
            </Link>
          </li>
          <li className="footer__list-item">
            <Link href="/order-online" className="footer__list-item-link" prefetch = {true}>
              Order online
            </Link>
          </li>
          <li className="footer__list-item">
            <a 
            href="#menu"
            className= {isHomePage(GetCurrentSlug()) ? "footer__list-item-link" : "display-none"}
            >
              Our menu combos
            </a>
          </li>
        </ul>
        <div className="footer__socials">
          <a href={nullurl} className="social-item-link">
            <Image
              src={instaIcon}
              alt=""
              className="footer__socials-item footer__socials-instagram"
            />
          </a>
          <a href={nullurl} className="social-item-link">
            <Image
              src={facebookIcon}
              alt=""
              className="footer__socials-item footer__socials-facebook"
            />
          </a>
          <a href={nullurl} className="social-item-link">
            <Image
              src={twitterIcon}
              alt=""
              className="footer__socials-item footer__socials-twitter"
            />
          </a>
        </div>
        <div className="footer__logo-copyright">
          <Link href="/" className="header__logo" prefetch = {true}>
            <span className="header__logo-letter primary-color">S</span>.
          </Link>
          <div className="footer__copyright">
            Copyright 2023 © Chinh&apos;s designs
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;