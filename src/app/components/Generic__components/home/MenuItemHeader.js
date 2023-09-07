import { useEffect } from "react";
import menuData from 'public/JsonData/FoodContent.json';

export default function MenuItemHeader ({ setTheIndex }) {
    const dt = menuData
    useEffect(() => {
        const menuItems = document.querySelectorAll('.menu__combos-list-item');
        menuItems.forEach((item, index) => {
          item.onclick = function () {
            const activeItem = document.querySelector('.menu__combos-list-item--active');
            if (activeItem) activeItem.classList.remove('menu__combos-list-item--active');
            item.classList.add('menu__combos-list-item--active');
            setTheIndex(index);
          };
        });
      }, [dt]);
    return(
        <>
        <ul className="menu__combos-list row">
            {
                dt && dt.map((value, index) => {
                    return (
                        <li key = {index} className="col c-11 l-4 m-5">
                            <div className={index == 0 ? "menu__combos-list-item menu__combos-list-item--active": "menu__combos-list-item"}>
                                <h2 className="menu__item-heading">{value.comboName}</h2>
                                <span className="menu__item-description">{value.comboHeadline}</span>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
        </>
    )
}