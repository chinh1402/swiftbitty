'use client'
import React, { useState, useEffect, createContext } from 'react';
import OrderMenu from "../components/Generic__components/orderOnline/OrderMenu";
import styles from './orderonline.module.css';
import classNames from 'classnames/bind';
import OrderForm from "../components/Generic__components/orderOnline/OrderForm";
import menuData from "../components/Data__components/ContentData.js";

export const dataContext = createContext();

const cx = classNames.bind(styles)

export default function OrderOnline() {
  // dataList hold the data of items which is getting manipulated thruuout the page
    const [dataList, setDataList] = useState(
      menuData.map((data) => ({
        name: data.comboName,
        isChecked: false,
        selectedValue: 1,
        price: data.totalPrice()
      }))
    );

    const [totalCost, setTotalCost] = useState(0);

    const calculateTotalCost = () => {
      let total = 0;
      dataList.forEach((data) => {
        if (data.isChecked) {
          total += data.selectedValue * data.price;
        }
      });
      setTotalCost(total);
    };
  
    useEffect(() => {
      calculateTotalCost();
    }, [dataList]);

    const [summaryStack, setSummaryStack] = useState([]);

    return (
      <dataContext.Provider value={{dataList, setDataList, totalCost, summaryStack, setSummaryStack}} >
        <div className="grid wide">
          <h1 className={cx("orderOnline__headline") + " heading"}>Order online</h1>
          <OrderMenu />
          <OrderForm />
        </div>
      </dataContext.Provider>
    )
  }
  