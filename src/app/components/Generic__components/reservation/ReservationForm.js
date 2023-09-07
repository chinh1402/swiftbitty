'use client'
import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from 'src/app/reservation/reservation.module.css';

import Validator from '../functions/ValidatorReservation';
import TransacHandler from '../functions/TransacHandler';
import GetCurrentPath from '../functions/GetCurrentPath.js';

const cx = classNames.bind(styles);

function ReservationForm() {  
    const path = GetCurrentPath();
    const [totalCost, setTotalCost] = useState(0);

    const handleBlur = (event) => {
        const newValue = event.target.value;
        if (!isNaN(newValue)) {
            setTotalCost(newValue*10);
        }
    }

    useEffect(() => {
        let form = new Validator("#reservation-form");
        form.onSubmit = function(dataValue) {
            dataValue['totalCost'] = totalCost
            dataValue['time'] = Array.from(dataValue['time'].split('T'));
            let orderInfo = "Mua hang tai Swiftbitty, thanh toan cho: "
            + "dat ban " + totalCost + " nguoi";
            if (orderInfo) {
                TransacHandler(totalCost, orderInfo, path);
            }
        }
    }, [totalCost])


    return (
        <>
            <div className={cx("mobile-padding") + ' grid wide'}>
                <div className={cx("form-container")}>
                    <form action="" method="POST" className={cx("form")} id="reservation-form">
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
                                            <label htmlFor="number-of-people" className={cx("form-label")}>
                                                Number of people
                                            </label>
                                            <input
                                                id="number-of-people"
                                                name="number-of-people"
                                                rules="required|numberpeople"
                                                type="text"
                                                placeholder="ex: 3,5..."
                                                onChange={handleBlur}
                                                className={cx("form-control", "number-of-people")}
                                            />
                                            <span className={cx("form-message")}></span>
                                        </div>
                                    </div>
                                    <div className={cx("form-group")}>
                                            <label htmlFor="time" className={cx("form-label")}>
                                                Choose a time
                                            </label>
                                            <input
                                                id="time"
                                                name="time"
                                                type="datetime-local"
                                                rules="required"
                                                className={cx("form-control", "calendar")}
                                            />
                                            <span className={cx("form-message")}></span>
                                    </div>
                                    <div className={cx("form-group")}>
                                            <label htmlFor="comment" className={cx("form-label")}>
                                                Is there anything you would like us to know?
                                            </label>
                                            <textarea
                                                id="comment"
                                                name="comment"
                                                type="text"
                                                placeholder="Comments"
                                                className={cx("form-control", "input-comment")}
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
                                            totalCost <= 0 ? 
                                            <span className={cx('Summary__empty')}>Please fill in the form for summary to generate</span>
                                            :
                                            <span className={cx('Summary__list-item')}>
                                                <div className={cx('Summary__item-name-container')}>
                                                    <span className={cx('Summary__item-name')}> 
                                                        Reservation for {totalCost / 10} People
                                                    </span>
                                                </div>
                                                <span className={cx('Summary__item-price')}>{totalCost}$</span>
                                            </span>
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
            </div>
        </>
    )
}

export default ReservationForm;