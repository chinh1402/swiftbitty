'use client'
import Image from "next/image";
import React, { useState, useEffect, useContext, createContext } from "react";
import classNames from 'classnames/bind';
import styles from '../../../order-online/orderonline.module.css';
import menuData from '../../Data__components/ContentData'
import generateIncreasingArray from "../functions/increasingArr";
import {dataContext} from "../../../order-online/page.js"
import ArrowComponent from "../functions/ArrowComponent";
import { images } from "../../../../../next.config";


const cx = classNames.bind(styles);
function OrderMenu() { 
  const {dataList, setDataList, setSummaryStack} = useContext(dataContext);
  // handle click select

  //flow: click vao header tuong ung => mo ra list tuong ung co tabindex tuong ung bang cach them open
  // => select ra value tuong ung => hien thi tuong ung voi value da selected len header tuong ung

  // exception: blur ra ngoai: tat list di
  let selectHeader = document.getElementsByClassName(cx('select-header'))
  let selectList = document.getElementsByClassName(cx('select-list'))
  let selectValue = document.getElementsByClassName(cx('selected-value'))
  
  const [menuList, setMenuList] = useState(0);

  // select Array (parse in value as first param to declare length of array, default = 5)
  const selectItemArr = generateIncreasingArray();

  // default select header value = 1
  let existValue
  // gens Ids to assign to checkboxes 
  const generateCustomId = (index) => `menuitem${index + 1}`; 

  // listID to store all the IDs of labels and inputs
  const [listID, setListID] = useState([]);

  // manipulate data to calculate total cost

    const checkBoxHandleChanges = (index, isChecked) => {
      // set lai data cua dataList
      setDataList((prevDataList) => {
        const updatedDataList = [...prevDataList];
        updatedDataList[index].isChecked = isChecked;
        return updatedDataList;
      });

      // set lai data cua summaryStack dua tren data cua isChecked va update state
      // nen 2 useState nay k lien quan den nhau => co the chay ngang nhau, k gap van de async race
      setSummaryStack((prevSummaryStack) => {
        // 1. Push summary stack index
        // 2. duplicate => delete; else => push
        if (prevSummaryStack.includes(index)) {
          const newSummaryStack = prevSummaryStack.filter((indexValue) => indexValue !== index);
          return newSummaryStack
        } else {
          prevSummaryStack.push(index);
          return prevSummaryStack;
        }
      })
  };

  // consolelog with useEffect

  const handleSelect = (index, value) => {
    setDataList((prevDataList) => {
      const updatedDataList = [...prevDataList];
      updatedDataList[index].quantity = value;
      return updatedDataList;
    });

    console.log(dataList);
    
    selectValue[index].innerHTML = value;
    selectList[index].classList.toggle(cx('open'));     
  };

  // totalCost logic

  // end of totalcost logic

  useEffect(() => {
    for (let index=0;index<selectHeader.length;index++) {

      // generate ID to push onto listID (for generating different label id for inputs)
      setListID((prevList) => [...prevList, generateCustomId(index)])

      // each header has an event handler
      selectHeader[index].addEventListener('click', () => {
        // DOM element is needed, so this cant be refactor to React codes
        selectList[index].classList.toggle(cx('open'));
        selectList[index].focus();
      })

      // when select list is blurred, list is closed by default
      selectList[index].addEventListener('blur', (e) => {
        // Timeout fix bug double-click header
        setTimeout(() => {
          selectList[index].classList.remove(cx('open'));
        }, 100);
      })
    }

  }, [])

  const [leftArrowVisible, setLeftArrowVisible] = useState(false);
  const [rightArrowVisible, setRightArrowVisible] = useState(true);

  const handleArrowClick = (newScroll, maxScroll) => {
    setLeftArrowVisible(newScroll > 0);
    setRightArrowVisible(newScroll < maxScroll);
  };

    return (
      <>
        <div className={cx('orderonline__wrapper')}>
          <div className={cx('orderonline__arrowComponent-wrapper')}>
            <ArrowComponent direction = 'Left' 
              onArrowClick={handleArrowClick}
              leftArrowVisible={leftArrowVisible}
              rightArrowVisible={rightArrowVisible}
            />
            <ArrowComponent direction = 'Right' 
              onArrowClick={handleArrowClick}
              leftArrowVisible={leftArrowVisible}
              rightArrowVisible={rightArrowVisible}
            
            />
          </div>
          <ul className={cx('orderonline__menu-list') + ' row'}>
            {
              menuData.map((data, index) => {
                let imageSrc = data.comboImageUrl;
                return (
                  <li key={index} className={cx('orderonline__menu-list-item') + ' col l-4 m-6 c-12'}>
                    <div className={cx('item-wrapper')}>
                        <input 
                          type='checkbox'
                          id={listID[index]}
                          className='inputField'
                          onChange={(e) => checkBoxHandleChanges(index, e.target.checked)}
                        />
                        <label htmlFor={listID[index]} /> 
                        <span className={cx('img-wrapper')}>
                          <Image 
                          alt="ComboImage"
                          src={imageSrc}
                          // specify width and height to get the aspect ratio
                          width={308}
                          height={210}
                          style={{
                            width: '100%',
                            height: 'auto',
                          }}
                          priority={true}
                          />
                          {/* <img src={imageSrc} className={cx('img')}></img> */}
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
                                <div className={cx('select-header')} >
                                  <span className={cx('selected-value')}>{existValue || 1}</span>
                                  <img src='../images/ar.png' />
                                </div>
                                <ul className={cx('select-list')} tabIndex={index}>
                                  {
                                    selectItemArr.map((value, i) => {
                                      return (
                                        <li 
                                          key = {i} 
                                          className={cx('select-item')} 
                                          value={value}
                                          onClick={() => handleSelect(index, value)}
                                          >
                                            
                                          {value}
                                        </li>
                                      )
                                    })
                                  }
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