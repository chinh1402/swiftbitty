'use client'
import React, { useState, useEffect } from "react";
import classNames from 'classnames/bind';
import styles from '../order-online/orderonline.module.css';
import menuData from './Data__components/ContentData'

const cx = classNames.bind(styles);

function OrderMenu() {

  //flow: click vao header tuong ung => mo ra list tuong ung co tabindex tuong ung bang cach them open
  // => select ra value tuong ung => hien thi tuong ung voi value da selected len header tuong ung

  // exception: blur ra ngoai: tat list di
  let selectHeader = document.getElementsByClassName(cx('select-header'))
  let selectList = document.getElementsByClassName(cx('select-list'))
  let selectValue = document.getElementsByClassName(cx('selected-value'))

  let [chosenValue, setChosenValue] = useState([]);

  // handle click header

  useEffect(() => {
    for (let index=0;index<selectHeader.length;index++) {
      // gan cho moi header 1 onClick, moi cai click se toggle list tuong ung
      selectHeader[index].addEventListener('click', () => {
        selectList[index].classList.toggle(cx('open'));
        selectList[index].focus();
      })

      selectList[index].addEventListener('blur', (e) => {
        setTimeout(() => {
          selectList[index].classList.remove(cx('open'));
        }, 100);
      })

      // Blur xay ra truoc click => open => close (do blur) => open (do click vao header)
      selectList[index].addEventListener('click', (e) => {
        if (e.target.value)
          setChosenValue( () => {
            chosenValue[index] = e.target.value;
          })
          // render
          selectValue[index].innerHTML = chosenValue[index];
          selectList[index].classList.toggle(cx('open'));
          
          console.log(chosenValue);
      })

    }
  }, [])



    return (
      <>
        <div className={cx('orderonline__wrapper')}>
          <ul className={cx('orderonline__menu-list') + ' row'}>
            <li className={cx('orderonline__menu-list-item') + ' col l-4 m-6 c12'}>
              <div className={cx('item-wrapper')}>
                  <span className={cx('img-wrapper')}>
                    <img src='../images/order.png' className={cx('img')}></img>
                  </span>
                  <div className={cx('orderonline__details-wrapper')}>
                    <h3 className={cx('item-headline')}>
                      Quick bite
                    </h3>
                    <p className={cx('item-description')}>
                        Experience the Quick Bites combo - a main dish, Loaded Fries, and a drink, crafted to satisfy your cravings with every delicious bite.
                    </p>
                    <span className={cx('item-price-and-quantity')}>
                      <h4 className={cx('item-price')}>
                        <span className={cx('item-dollar')}>$</span>
                        25
                      </h4>
                      <div className={cx('quantity-handler')}>
                        <span className={cx('quantity-text')}>Quantity</span>
                        <span className={cx('select')}>
                          <div className={cx('select-header')}>
                            <span className={cx('selected-value')}>1</span>
                            <img src='../images/ar.png' />
                          </div>
                          <ul className={cx('select-list')} tabIndex={0}>
                            <li className={cx('select-item')} value={1}>1</li>
                            <li className={cx('select-item')} value={2}>2</li>
                            <li className={cx('select-item')} value={3}>3</li>
                            <li className={cx('select-item')} value={4}>4</li>
                            <li className={cx('select-item')} value={5}>5</li>
                          </ul>
                        </span>
                      </div>
                    </span>
                  </div>
              </div>
            </li>

            <li className={cx('orderonline__menu-list-item') + ' col l-4 m-6 c12'}>
              <div className={cx('item-wrapper')}>
                  <span className={cx('img-wrapper')}>
                    <img src='../images/order.png' className={cx('img')}></img>
                  </span>
                  <div className={cx('orderonline__details-wrapper')}>
                    <h3 className={cx('item-headline')}>
                      Quick bite
                    </h3>
                    <p className={cx('item-description')}>
                        Experience the Quick Bites combo - a main dish, Loaded Fries, and a drink, crafted to satisfy your cravings with every delicious bite.
                    </p>
                    <span className={cx('item-price-and-quantity')}>
                      <h4 className={cx('item-price')}>
                        <span className={cx('item-dollar')}>$</span>
                        25
                      </h4>
                      <div className={cx('quantity-handler')}>
                        <span className={cx('quantity-text')}>Quantity</span>
                        <span className={cx('select')}>
                          <div className={cx('select-header')}>
                            <span className={cx('selected-value')}>1</span>
                            <img src='../images/ar.png' />
                          </div>
                          <ul className={cx('select-list')} tabIndex={1}>
                            <li className={cx('select-item')} value={1}>1</li>
                            <li className={cx('select-item')} value={2}>2</li>
                            <li className={cx('select-item')} value={3}>3</li>
                            <li className={cx('select-item')} value={4}>4</li>
                            <li className={cx('select-item')} value={5}>5</li>
                          </ul>
                        </span>
                      </div>
                    </span>
                  </div>
              </div>
            </li>
            
            <li className={cx('orderonline__menu-list-item') + ' col l-4 m-6 c12'}>
              <div className={cx('item-wrapper')}>
                  <span className={cx('img-wrapper')}>
                    <img src='../images/order.png' className={cx('img')}></img>
                  </span>
                  <div className={cx('orderonline__details-wrapper')}>
                    <h3 className={cx('item-headline')}>
                      Quick bite
                    </h3>
                    <p className={cx('item-description')}>
                        Experience the Quick Bites combo - a main dish, Loaded Fries, and a drink, crafted to satisfy your cravings with every delicious bite.
                    </p>
                    <span className={cx('item-price-and-quantity')}>
                      <h4 className={cx('item-price')}>
                        <span className={cx('item-dollar')}>$</span>
                        25
                      </h4>
                      <div className={cx('quantity-handler')}>
                        <span className={cx('quantity-text')}>Quantity</span>
                        <span className={cx('select')}>
                          <div className={cx('select-header')}>
                            <span className={cx('selected-value')}>1</span>
                            <img src='../images/ar.png' />
                          </div>
                          <ul className={cx('select-list')} tabIndex={1}>
                            <li className={cx('select-item')} value={1}>1</li>
                            <li className={cx('select-item')} value={2}>2</li>
                            <li className={cx('select-item')} value={3}>3</li>
                            <li className={cx('select-item')} value={4}>4</li>
                            <li className={cx('select-item')} value={5}>5</li>
                          </ul>
                        </span>
                      </div>
                    </span>
                  </div>
              </div>
            </li>
          </ul>
        </div>
      </>
    );
}
  
export default OrderMenu;