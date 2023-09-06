"use client";
import { useEffect } from 'react';
import Link from 'next/link';
import idreturn from '../Generic__components/functions/idreturn';
import GetCurrentSlug from '../Generic__components/functions/GetCurrentSlug';
import isHomePage from '../Generic__components/functions/isHomePage';

const Header = () => { 

  useEffect(() => {
    if (document.querySelector('.header__hamburger-menu input') != null
      && document.querySelector('.header__hamburger-menu') != null
    ) {
        
        let hamburgermenu_input = document.querySelector('.header__hamburger-menu input')
        let hamburgermenu = document.querySelector('.header__hamburger-menu')
        hamburgermenu_input.addEventListener('click', function() {
          if (this.checked) {
            hamburgermenu.classList.add('opened');
            hamburgermenu.classList.remove('closed');
          } else {
            hamburgermenu.classList.add('closed');
            hamburgermenu.classList.remove('opened');
          }
      
      })

      let sidebar_item_list = document.querySelectorAll('.header-sidebar-item-link')
      sidebar_item_list.forEach(function(curr) {
          curr.addEventListener('click', function() {
            hamburgermenu.classList.remove('opened');
            hamburgermenu.classList.add('closed');
            hamburgermenu_input.checked = false;
          })
      })
    }
  }, [])

    return (
        <nav className="header">
            <div className="grid wide">
                <div className="header__wrapper ">
                <div className="header__left">
                    <Link href="/" className="header__logo" prefetch = {true}>
                        <span className="header__logo-letter primary-color">S</span>.
                    </Link>
                </div>
                <div className="header__right">
                    <label className={isHomePage(GetCurrentSlug()) ? "header__hamburger-menu hide-on-pc hide-on-tablet" : "display-none"}>
                        <input type="checkbox" />
                    </label>
                    <div className="header-sidebar hide-on-pc hide-on-tablet">
                      <ul className='header-sidebar-list hide-on-pc hide-on-tablet'>
                        <li className='header-sidebar-list-item'>
                          <Link className='header-sidebar-item-link' href='/reservation' prefetch = {true}>
                            Make a reservation
                          </Link>
                        </li>
                        <li className='header-sidebar-list-item'>
                          <Link className='header-sidebar-item-link' href='/order-online' prefetch = {true}>
                            Order online
                          </Link>
                        </li>
                        <li className='header-sidebar-list-item'>
                          <a className='header-sidebar-item-link'
                          href={idreturn("#menu")}
                          style={!isHomePage(GetCurrentSlug()) ? {display: 'none'} : {} }
                          >
                            Menu
                          </a>
                        </li>
                        <li className='header-sidebar-list-item'>
                          <a className='header-sidebar-item-link'
                          href={idreturn("#about")}
                          style={!isHomePage(GetCurrentSlug()) ? {display: 'none'} : {} }
                          >
                            About us
                          </a>
                        </li>
                        <li className='header-sidebar-list-item'>
                          <a className='header-sidebar-item-link'
                          href={idreturn("#phone-contact")}
                          style={!isHomePage(GetCurrentSlug()) ? {display: 'none'} : {} }
                          >
                            Contact
                          </a>
                        </li>
                      </ul>
                      <span className='header-sidebar-copyright'>
                        @Copyright by Ching's design
                      </span>
                    </div>

                    <ul className={!isHomePage(GetCurrentSlug()) ? 'header-list' : 'header-list hide-on-mobile'}>
                      <li className="header-list-items">
                          <a href={idreturn("#about")} 
                          className="header-list-items-links"
                          style={!isHomePage(GetCurrentSlug()) ? {display: 'none'} : {} }
                          >
                            About us
                          </a>
                      </li>
                      <li className="header-list-items">
                          <a 
                          href={idreturn("#contact")}
                          className="header-list-items-links"
                          style={!isHomePage(GetCurrentSlug()) ? {display: 'none'} : {} }
                          >
                            Contact
                          </a>
                      </li>
                      <li className="header-list-items">
                          <Link
                          href="/reservation"
                          className="header-list-items-links header-list-items-btn"
                          prefetch = {true}
                          > 
                          Make a reservation
                          </Link>
                      </li>
                    </ul>
                </div>
                </div>
            </div>
        </nav>
  );
};

export default Header;