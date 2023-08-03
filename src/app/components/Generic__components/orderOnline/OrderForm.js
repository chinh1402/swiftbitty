'use client'
import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from '../../../order-online/orderonline.module.css';
import Validator from '../functions/Validator.js';

const cx = classNames.bind(styles);
function OrderForm() {
    
    useEffect(() => {
        Validator("#register-form");
    })
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
                                            rules="required"
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
                                            rules="required"
                                            type="text"
                                            placeholder="Ex: 0123456789"
                                            className={cx("form-control")}
                                        />
                                        <span className={cx("form-message")}></span>
                                    </div>
                                    <div className={cx("form-group") + " col-input l-6 m-6 c-12"}>
                                        <label htmlFor="quantities" className={cx("form-label")}>
                                            Quantities
                                        </label>
                                        <input
                                            id="quantities"
                                            name="quantities"
                                            rules="required"
                                            type="text"
                                            placeholder="Ex: 1,2,..."
                                            className={cx("form-control")}
                                        />
                                        <span className={cx("form-message")}></span>
                                    </div>
                                </div>
                                <div className={cx("form-group")}>
                                        <label htmlFor="delivery-address" className={cx("form-label")}>
                                            Delivery address
                                        </label>
                                        <input
                                            id="delivery-address"
                                            name="delivery-address"
                                            rules="required"
                                            type="text"
                                            placeholder="Ex: 123 Main Street"
                                            className={cx("form-control")}
                                        />
                                        <span className={cx("form-message")}></span>
                                </div>
                                <div className={cx("form-group")}>
                                        <label htmlFor="item-description" className={cx("form-label")}>
                                            Item description
                                        </label>
                                        <input
                                            id="item-description"
                                            name="item-description"
                                            rules="required"
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
                            <button className={cx("form-submit")}>Proceed to checkout</button>
                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}

export default OrderForm;