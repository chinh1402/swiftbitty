"use client";
import Link from 'next/link';
import idreturn from '../Generic__components/functions/idreturn';

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
            <a href={idreturn("#about")} className="footer__list-item-link">
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
            <a href={idreturn("#menu")} className="footer__list-item-link">
              Our menu combos
            </a>
          </li>
        </ul>
        <div className="footer__socials">
          <a href={nullurl} className="social-item-link">
            <img
              src="../images/insta.svg"
              alt=""
              className="footer__socials-item footer__socials-instagram"
            />
          </a>
          <a href={nullurl} className="social-item-link">
            <img
              src="../images/facebook.svg"
              alt=""
              className="footer__socials-item footer__socials-facebook"
            />
          </a>
          <a href={nullurl} className="social-item-link">
            <img
              src="../images/twitter.svg"
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
            Copyright 2023 © Chinh’s designs
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;