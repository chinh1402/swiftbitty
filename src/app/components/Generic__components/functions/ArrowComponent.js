import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from '../../../order-online/orderonline.module.css';
import classNames from 'classnames/bind';


const RightArrowIcon =  '../../../images/arrow_forward_24px.png'
const LeftArrowIcon =  '../../../images/arrow_backward_24px.png'

const cx = classNames.bind(styles);


const ArrowComponent = ({direction, onArrowClick, leftArrowVisible, rightArrowVisible }) => {
  const [menuScroll, setMenuScroll] = useState(0);
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

    setMenuScroll(() => {
      const scrollDistance = direction === 'Right' ? itemsToScroll * itemWidth : -itemsToScroll * itemWidth;
      const newScroll = menuList.scrollLeft + scrollDistance;
      const maxScroll = menuList.scrollWidth - menuList.clientWidth; // Maximum allowable scroll position
      const minScroll = 0; // Minimum allowable scroll position
      const clampedScroll = Math.max(minScroll, Math.min(newScroll, maxScroll));
      menuList.scrollTo({ left: clampedScroll, behavior: 'smooth' });

      // 3 states
      // 1. newScroll <= 0 Right opacity 1, left opacity 0;
      // 2. newScroll >= maxScroll: Right opacity 0, left opacity 1;
      // 3. 0 < newScroll < maxScrool: Right opacity 1, left opacity 1;
      
      setTimeout(() => {
        setIsScrolling(false);
        onArrowClick(clampedScroll, maxScroll);
      }, 500); 

      return clampedScroll;
    });

  };
  const arrowIcon = direction === 'Right' ? RightArrowIcon : LeftArrowIcon;

  const arrowVisible = direction === 'Right' ? rightArrowVisible : leftArrowVisible;

  return (
    <img
      src= {arrowIcon}
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
