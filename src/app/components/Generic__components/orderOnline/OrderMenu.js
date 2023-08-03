'use client'
import React, { useState, useEffect } from "react";
import classNames from 'classnames/bind';
import styles from '../../../order-online/orderonline.module.css';
import menuData from '../../Data__components/ContentData'

const cx = classNames.bind(styles);
function OrderMenu() {

  // handle click select

  //flow: click vao header tuong ung => mo ra list tuong ung co tabindex tuong ung bang cach them open
  // => select ra value tuong ung => hien thi tuong ung voi value da selected len header tuong ung

  // exception: blur ra ngoai: tat list di
  let selectHeader = document.getElementsByClassName(cx('select-header'))
  let selectList = document.getElementsByClassName(cx('select-list'))
  let selectValue = document.getElementsByClassName(cx('selected-value'))

  // Set key for li elements in select
  let k = 1000000;
  // useState to save value choosing upon click
  let [chosenValue, setChosenValue] = useState([]);

  let inputField = document.getElementsByClassName(cx('inputField'))
  // gens Ids to assign to checkboxes 
  const generateCustomId = (index) => `menuitem${index + 1}`;

  // checkbox statuses
  let [checkBoxStatus, setCheckBoxStatus] = useState([]);

  // listID to store all the IDs of labels and inputs
  let [listID, setListID] = useState([]);

  useEffect(() => {
    for (let index=0;index<selectHeader.length;index++) {

      // generate ID roi push vao arr
      setListID((prevList) => [...prevList, generateCustomId(index)])

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
        if (e.target.value) {
          setChosenValue(() => {
            chosenValue[index] = e.target.value;
            console.log(chosenValue);
          })
          // render
          selectValue[index].innerHTML = e.target.value;
          selectList[index].classList.toggle(cx('open'));
          }  
        }
      )

      inputField[index].addEventListener('change', (e) => {
        setCheckBoxStatus(() => {
          checkBoxStatus[index] = e.target.checked
          console.log(checkBoxStatus);
        })
      })
    }

  }, [])


    // handle custom checkbox

    return (
      <>
        <div className={cx('orderonline__wrapper')}>
          <ul className={cx('orderonline__menu-list') + ' row'}>
            {
              menuData.map((data, index) => {
                return (
                  <li key={index} className={cx('orderonline__menu-list-item') + ' col l-4 m-6 c-12'}>
                    <div className={cx('item-wrapper')}>
                        <input 
                          type='checkbox'
                          id={listID[index]}
                          className='inputField'
                        />
                        <label htmlFor={listID[index]} /> 
                        <span className={cx('img-wrapper')}>
                          <img src={data.comboImageUrl} className={cx('img')}></img>
                        </span>
                        <div className={cx('orderonline__details-wrapper')}>
                          <h3 className={cx('item-headline')}>
                            {data.comboName}
                          </h3>
                          <p className={cx('item-description')}>
                              {data.comboDescription}
                          </p>
                          <span className={cx('item-price-and-quantity')}>
                            <h4 className={cx('item-price')}>
                              <span className={cx('item-dollar')}>$</span>
                              {data.totalPrice()}
                            </h4>
                            <div className={cx('quantity-handler')}>
                              <span className={cx('quantity-text')}>Quantity</span>
                              <span className={cx('select')}>
                                <div className={cx('select-header')}>
                                  <span className={cx('selected-value')}>1</span>
                                  <img src='../images/ar.png' />
                                </div>
                                <ul className={cx('select-list')} tabIndex={0}>
                                  <li key = {k++} className={cx('select-item')} value={1}>1</li>
                                  <li key = {k++} className={cx('select-item')} value={2}>2</li>
                                  <li key = {k++} className={cx('select-item')} value={3}>3</li>
                                  <li key = {k++} className={cx('select-item')} value={4}>4</li>
                                  <li key = {k++} className={cx('select-item')} value={5}>5</li>
                                </ul>
                              </span>
                            </div>
                          </span>
                        </div>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </>
    );
}
  
export default OrderMenu;