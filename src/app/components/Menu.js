import React from 'react';

function Menu() {
  return (
    <div id="menu" className="menu">
      <div className="menu__wrapper grid wide">
        <h1 className="menu__heading heading">Our menu</h1>
        <ul className="menu__combos-list row">
          <li className="col c-10 l-4 m-5  ">
            <div className="menu__combos-list-item menu__combos-list-item--active">
              <h2 className="menu__item-heading">Quick bite</h2>
              <span className="menu__item-description">Enjoy on the go</span>
            </div>
          </li>
          <li className="col c-10 l-4 m-5 ">
            <div className="menu__combos-list-item">
              <h2 className="menu__item-heading">Fresh &amp; flavorful</h2>
              <span className="menu__item-description">
                Simply delicious, and healthy too!
              </span>
            </div>
          </li>
          <li className="col c-10 l-4 m-5 ">
            <div className="menu__combos-list-item">
              <h2 className="menu__item-heading">Value Meals</h2>
              <span className="menu__item-description">
                Delicious food with fine deal
              </span>
            </div>
          </li>
        </ul>
        <div className="menu__details-wrapper">
          <div className="menu__details">
            <div className="menu__details-firstline">
              This course is available for lunch, dinner
            </div>
            <div className="menu__details-infos-total">
              <h3 className="menu__details-comboname">Quick bite</h3>
              <h3 className="menu__details-comboprice">
                <span className="menu__details-dollars">$</span>18
              </h3>
            </div>
            <div className="menu__details-infos">
              <div className="menu__details-infos-texts">
                <h4 className="menu__details-combo-piece">
                  Classic Cheeseburger
                </h4>
                <span className="menu__details-piece-description">
                  Our juicy beef patty topped with melted cheese, lettuce,
                  tomato, and special sauce on a soft bun.
                </span>
              </div>
              <h4 className="menu__details-combo-piece-price">
                <span className="menu__details-dollars-small">$</span>7
              </h4>
            </div>
            <div className="menu__details-infos">
              <div className="menu__details-infos-texts">
                <h4 className="menu__details-combo-piece">
                  Crispy Chicken Sandwich
                </h4>
                <span className="menu__details-piece-description">
                  A crispy breaded chicken breast topped with lettuce, tomato,
                  and mayo on a toasted bun.
                </span>
              </div>
              <h4 className="menu__details-combo-piece-price">
                <span className="menu__details-dollars-small">$</span>6
              </h4>
            </div>
            <div className="menu__details-infos">
              <div className="menu__details-infos-texts">
                <h4 className="menu__details-combo-piece">Loaded fries</h4>
                <span className="menu__details-piece-description">
                  Crispy golden fries topped with melted cheese, bacon bits, and
                  green onions.
                </span>
              </div>
              <h4 className="menu__details-combo-piece-price">
                <span className="menu__details-dollars-small">$</span>5
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;