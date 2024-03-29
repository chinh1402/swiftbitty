'use client'
import React, { useState, useEffect, createContext } from 'react';
import OrderMenu from "../components/Generic__components/orderOnline/OrderMenu";
import styles from './orderonline.module.css';
import classNames from 'classnames/bind';
import OrderForm from "../components/Generic__components/orderOnline/OrderForm";
import menuData from 'public/JsonData/FoodContent.json';

export const dataContext = createContext();

const cx = classNames.bind(styles)

export default function OrderOnline() {
  const [dataList, setDataList] = useState(
    menuData.map((data) => ({
      name: data.comboName,
      isChecked: false,
      quantity: 1,
      price: data.totalPrice
    }))
  );
  // dataList hold the data of items which is getting manipulated thruuout the page
    const [summaryStack, setSummaryStack] = useState(['_']);
    const [totalCost, setTotalCost] = useState(0);

    const calculateTotalCost = () => {
      let total = 0;
      dataList.forEach((data) => {
        if (data.isChecked) {
          total += data.quantity * data.price;
        }
      });
      setTotalCost(total);
    };
  
    useEffect(() => {
      // each time dataList update, Total cost changes
      calculateTotalCost();
    }, [dataList]);

    return (
      <dataContext.Provider value={{dataList, setDataList, totalCost, summaryStack, setSummaryStack, menuData}} >
        <div className={cx("mobile-padding") + " grid wide"}>
          <h1 className={cx("orderOnline__headline") + " heading"}>Order online</h1>
          <OrderMenu />
          <OrderForm />
        </div>
      </dataContext.Provider>
    )
  }
  