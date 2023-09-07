"use client"
import React, { useState } from 'react'
import MenuItemContent from './MenuItemContent';
import MenuItemHeader from './MenuItemHeader';

function Menu() {
  const [theIndex, setTheIndex] = useState(0);
  
  return (
    <div id="menu" className="menu">
      <div className="menu__wrapper grid wide">
        <h1 className="menu__heading heading">Our menu</h1>
        {/* MenuItemHeader decides the content of MenuItemContent  */}
        <MenuItemHeader setTheIndex={setTheIndex} />
        <MenuItemContent index = {theIndex}/>
      </div>
    </div>
  );
}

export default Menu;