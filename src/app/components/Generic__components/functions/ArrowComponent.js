import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from "src/app/order-online/orderonline.module.css";
import classNames from 'classnames/bind';
import RightArrowIcon from  'public/images/arrow_forward_24px.png'
import LeftArrowIcon from  'public/images/arrow_backward_24px.png'
import Image from 'next/image';

const cx = classNames.bind(styles);


const ArrowComponent = ({direction, onArrowClick, leftArrowVisible, rightArrowVisible }) => {
  const [itemWidth, setItemWidth] = useState(null);
  const [menuList, setMenuList] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  useEffect(() => {
    // Measure the width of the item after the component is mounted
    const measuredItemWidth = document.querySelector('.' + cx('orderonline__menu-list-item')).clientWidth;
    setItemWidth(measuredItemWidth);
    setMenuList(document.querySelector('.' + cx('orderonline__menu-list')));
  }, []);
  

  const handleArrowClick = () => {
    if (isScrolling) {
      return; // Ignore the click if a scroll animation is already in progress
    }

    setIsScrolling(true);
    const viewportWidth = window.innerWidth;

    let itemsToScroll;
    if (viewportWidth >= 1024) {
      itemsToScroll = 3; // Desktop
    } else if (viewportWidth >= 739) {
      itemsToScroll = 2; // Tablet
    } else {
      itemsToScroll = 1; // Mobile
    }

    const scrollDistance = direction === 'Right' ? itemsToScroll * itemWidth : -itemsToScroll * itemWidth;
    const newScroll = menuList.scrollLeft + scrollDistance;
    const maxScroll = menuList.scrollWidth - menuList.clientWidth; // Maximum allowable scroll position
    const minScroll = 0; // Minimum allowable scroll position
    const clampedScroll = Math.max(minScroll, Math.min(newScroll, maxScroll));
    menuList.scrollTo({ left: clampedScroll, behavior: 'smooth' });
    
    setTimeout(() => {
      setIsScrolling(false);
      onArrowClick(clampedScroll, maxScroll);
    }, 500); 


  };
  const arrowIcon = direction === 'Right' ? RightArrowIcon : LeftArrowIcon;

  const arrowVisible = direction === 'Right' ? rightArrowVisible : leftArrowVisible;

  return (
      <Image
        src= {arrowIcon}
        alt = "Arrow to scroll combos items"
        onClick={handleArrowClick}
        className={cx(`${direction.toLowerCase()}-arrow-icon`)}
        style={{
          opacity: arrowVisible ? 1 : 0,
        }}
      />
    
  );
};

ArrowComponent.propTypes = {
  direction: PropTypes.oneOf(['Right', 'Left']).isRequired,
};

export default ArrowComponent;
