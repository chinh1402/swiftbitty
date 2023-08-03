import OrderMenu from "../components/Generic__components/orderOnline/OrderMenu";
import styles from './orderonline.module.css';
import classNames from 'classnames/bind';
import OrderForm from "../components/Generic__components/orderOnline/OrderForm";

const cx = classNames.bind(styles)

export default function OrderOnline() {
    return (
      <>
        <div className="grid wide">
          <h1 className={cx("orderOnline__headline") + " heading"}>Order online</h1>
          <OrderMenu />
          <OrderForm />
        </div>
      </>
    )
  }
  