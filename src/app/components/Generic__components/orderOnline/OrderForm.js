'use client'
import React, { useState, useEffect, useContext } from 'react';
import classNames from 'classnames/bind';
import styles from 'src/app/order-online/orderonline.module.css';
import Validator from '../functions/ValidatorOrderOnline.js';
import { dataContext } from "src/app/order-online/page.js";
import TransacHandler from '../functions/TransacHandler.js';
import GetCurrentPath from '../functions/GetCurrentPath.js';
const cx = classNames.bind(styles);

function OrderForm() {  
        const path = GetCurrentPath();

        let {dataList, totalCost, summaryStack} = useContext(dataContext);
        let itemIndex = 1;
        const originColor = 'black';
        const [emptySummaryListColor, setEmptySummaryListColor] = useState(originColor);
        useEffect(() => {
            let form = new Validator("#order-form");
            form.onSubmit = function(dataValue) {
                if (totalCost) {
                    let orderData = dataList.filter((value) => value.isChecked === true )
                    let orderDetail = {
                        orderData,
                        totalCost,
                    }
                    dataValue = {...dataValue, orderDetail};
                    let foodNames = orderData.map((value) => value.name + "*" + value.quantity);
                    let orderInfo = "Mua hang tai Swiftbitty, thanh toan cho: ";
                    for (let i = 0; i < foodNames.length;i++) {
                        orderInfo += foodNames[i] + " ";
                    }
                    if (orderInfo) {
                        TransacHandler(orderDetail.totalCost, orderInfo, path);
                    }
                }
                else {
                    // Write code here to handle insufficient value
                    setEmptySummaryListColor("#C15803");
                    console.log("insufficient value")
                }
            }
        }, [totalCost])

        useEffect(() => {
            setEmptySummaryListColor(originColor);
        }, [dataList])

    return (
        <>
            <div className={cx("form-container")}>
                <form action="" method="POST" className={cx("form")} id="order-form">
                    <div className={cx("form-wrapper")}>
                        <div className={cx("form-left")}>
                                <div className={cx("form-group-double") + " row-input"}>
                                    <div className={cx("form-group") + " col-input l-6 m-6 c-12"}>
                                        <label htmlFor="fullname" className={cx("form-label")}>
                                            Your Full Name
                                        </label>
                                        <input
                                            id="fullname"
                                            name="fullname"
                                            rules="required"
                                            type="text"
                                            placeholder="Full name"
                                            className={cx("form-control")}
                                        />
                                        <span className={cx("form-message")}></span>
                                    </div>
                                    <div className={cx("form-group") + " col-input l-6 m-6 c-12"}>
                                        <label htmlFor="email" className={cx("form-label")}>
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            rules="required|email"
                                            type="text"
                                            placeholder="Email"
                                            className={cx("form-control")}
                                        />
                                        <span className={cx("form-message")}></span>
                                    </div>
                                </div>
                                <div className={cx("form-group-double") + " row-input"}>
                                    <div className={cx("form-group") + " col-input l-6 m-6 c-12"}>
                                        <label htmlFor="phone-number" className={cx("form-label")}>
                                            Phone number
                                        </label>
                                        <input
                                            id="phone-number"
                                            name="phone-number"
                                            rules="required|phone"
                                            type="text"
                                            placeholder="Ex: 0123456789"
                                            className={cx("form-control")}
                                        />
                                        <span className={cx("form-message")}></span>
                                    </div>
                                    <div className={cx("form-group") + " col-input l-6 m-6 c-12"}>
                                        <label htmlFor="delivery-address" className={cx("form-label")}>
                                            Delivery address
                                        </label>
                                        <input
                                            id="delivery-address"
                                            name="delivery-address"
                                            rules="required"
                                            type="text"
                                            placeholder="123 Main Street"
                                            className={cx("form-control")}
                                        />
                                        <span className={cx("form-message")}></span>
                                    </div>
                                </div>
                                <div className={cx("form-group")}>
                                        <label htmlFor="item-description" className={cx("form-label")}>
                                            Item description
                                        </label>
                                        <input
                                            id="item-description"
                                            name="item-description"
                                            type="text"
                                            placeholder="Ex: extra cheese, if nothing then leave this blank"
                                            className={cx("form-control")}
                                        />
                                        <span className={cx("form-message")}></span>
                                </div>
                                <span className={cx('cash-payment-notif')}>
                                    As of now, we only accept cash payments. We apologize for any inconvenience this may cause.
                                </span>
                            </div>
                        <div className={cx('form-right')}>
                            <div className={cx('form-right-wrapper') + " l-o-4"}>
                                <h2 className={cx('Summary__headline')}>Order Summary</h2>
                                <ul className={cx('Summary__list')}>
                                    {
                                        // '_' to keep the array not empty => for it to always run
                                        summaryStack.map((summaryIndex,index) => {
                                            if (summaryIndex != '_')
                                            return (
                                                    <li key={index} className={cx('Summary__list-item')}>
                                                        <div className={cx('Summary__item-name-container')}>
                                                            <span className={cx('Summary__item-name')}> 
                                                                {itemIndex++}. {dataList[summaryIndex].name}  {dataList[summaryIndex].quantity == 1 ? '' : '* ' + dataList[summaryIndex].quantity}
                                                            </span>
                                                        </div>
                                                        <span className={cx('Summary__item-price')}>{dataList[summaryIndex].price * dataList[summaryIndex].quantity}$</span>
                                                    </li>
                                                )
                                            else if (totalCost == 0)
                                            return (
                                                <span 
                                                    key = {9} 
                                                    className={cx('Summary__empty')}
                                                    style={{ color: emptySummaryListColor }}
                                                    >Please tick the checkbox to choose your meal on top left of each item</span>
                                                )
                                            }
                                        )
                                    }
                                    
                                </ul>
                                <span className={cx('spacer')}></span>
                                <h2 className={cx('Summary__costs')}>Total cost: {totalCost}$</h2>
                                <button className={cx("form-submit")}>Proceed to checkout</button>
                            </div> 
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default OrderForm;