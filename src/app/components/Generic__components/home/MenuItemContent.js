import React from 'react'
import menuData from 'public/JsonData/FoodContent.json';

const MenuDetails = function ({dt}) {
    return dt.comboDetailsItems.map((value, index) => {
        return (
            <div key={index} className="menu__details-infos">
                <div className="menu__details-infos-texts">
                <h4 className="menu__details-combo-piece">
                    {value.name}
                </h4>
                <span className="menu__details-piece-description">
                    {value.description}
                </span>
                </div>
                <h4 className="menu__details-combo-piece-price">
                <span className="menu__details-dollars-small">$</span>{value.price}
                </h4>
            </div>
            )
        }
    )
}

export default function MenuItemContent({index}) {
    const dt = menuData;
    return (
        <div className="menu__details-wrapper">
            <div className="menu__details">
                <div className="menu__details-firstline">
                    {dt && dt[index].firstLine}
                </div>
                <div className="menu__details-infos-total">
                    <h3 className="menu__details-comboname">{dt && dt[index].comboName}</h3>
                    <h3 className="menu__details-comboprice">
                    <span className="menu__details-dollars">$</span>{dt && dt[index].totalPrice}
                    </h3>
                </div>
                {/* This component exist cause there might be more than 3 items in a menu */}
                {dt && <MenuDetails dt={dt[index]} />}
            </div>
        </div>
    )
}