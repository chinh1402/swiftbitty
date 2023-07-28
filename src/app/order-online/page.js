import OrderMenu from "../components/OrderMenu.js"
import styles from './orderonline.module.css'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export default function OrderOnline() {
    return (
      <>
        <div className="grid wide">
          <h1 className={cx("orderOnline__headline") + " heading"}>Order online</h1>
          <OrderMenu />
        {/* <OrderForm /> */}
        </div>
      </>
    )
  }
  