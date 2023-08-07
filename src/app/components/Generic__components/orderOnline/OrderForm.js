'use client'
import React, { useState, useEffect, useContext } from 'react';
import classNames from 'classnames/bind';
import styles from '../../../order-online/orderonline.module.css';
import Validator from '../functions/Validator.js';
import { dataContext } from "../../../order-online/page.js"

const cx = classNames.bind(styles);
function OrderForm() {  
    const {dataList, totalCost} = useContext(dataContext);
    let itemIndex = 1;

    useEffect(() => {
        let form = new Validator("#register-form");
        form.onSubmit = function(dataValue) {
            console.log(dataValue);
        }
    }, [])

    return (
        <>
            <div className={cx("form-container")}>
                <form action="" method="POST" className={cx("form")} id="register-form">
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
                                        dataList.map((value, index) => {
                                            if (value.isChecked) {
                                                return (

                                                    <li key={index} className={cx('Summary__list-item')}>
                                                        <div className={cx('Summary__item-name-container')}>
                                                            <span className={cx('Summary__item-name')}> 
                                                                {itemIndex++}. {value.name}  {value.selectedValue == 1 ? '' : '* ' + value.selectedValue}
                                                            </span>
                                                        </div>
                                                        <span className={cx('Summary__item-price')}>{value.price * value.selectedValue}$</span>
                                                    </li>
                                                )
                                            } else if (totalCost == 0 && index == dataList.length-1) {
                                                return (
                                                    <span key = {9} className={cx('Summary__empty')}>Please tick the checkbox to choose your meal on top left of each item</span>
                                                )
                                            }
                                        })
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