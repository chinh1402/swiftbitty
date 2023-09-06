import React from 'react';
import styles from './reservation.module.css';
import classNames from 'classnames/bind';
import ReservationForm from '../components/Generic__components/reservation/ReservationForm';
import Image from 'next/image';
import reservationpic from '../../../public/images/reservation-pic.jpg';
const cx = classNames.bind(styles)

function Reservation() {
    return (
      <>
        <h1 className={cx("Reservation__headline") + " heading"}>Make a reservation</h1>
        <Image 
          src = {reservationpic}
          alt = "picture of the restaurant"
          priority={true}
          style={{
            maxWidth: '100%',
            height: 'auto',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
        <ReservationForm />
      </>
    );
  }
  
  export default Reservation;