"use client"
import React, { useEffect, useState } from 'react'
import MenuItemContent from './MenuItemContent';

function Menu() {
  const [theIndex, setTheIndex] = useState(0);
  useEffect(() => {
    const menuItems = document.querySelectorAll('.menu__combos-list-item');
    menuItems.forEach((item, index) => {
      item.onclick = function() {
        const activeItem = document.querySelector('.menu__combos-list-item--active');
        activeItem.classList.remove('menu__combos-list-item--active');
        item.classList.add('menu__combos-list-item--active');
        setTheIndex(index)
      }
    });
  }, [])
  return (
    <div id="menu" className="menu">
      <div className="menu__wrapper grid wide">
        <h1 className="menu__heading heading">Our menu</h1>
        <ul className="menu__combos-list row">
          <li className="col c-11 l-4 m-5  ">
            <div className="menu__combos-list-item menu__combos-list-item--active">
              <h2 className="menu__item-heading">Quick bite</h2>
              <span className="menu__item-description">Enjoy on the go</span>
            </div>
          </li>
          <li className="col c-11 l-4 m-5 ">
            <div className="menu__combos-list-item">
              <h2 className="menu__item-heading">Fresh &amp; flavorful</h2>
              <span className="menu__item-description">
                Simply delicious, and healthy too!
              </span>
            </div>
          </li>
          <li className="col c-11 l-4 m-5 ">
            <div className="menu__combos-list-item">
              <h2 className="menu__item-heading">Value Meals</h2>
              <span className="menu__item-description">
                Delicious food with fine deal
              </span>
            </div>
          </li>
        </ul>
        <MenuItemContent index = {theIndex}/>
      </div>
    </div>
  );
}

export default Menu;