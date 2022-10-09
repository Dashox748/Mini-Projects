import React, { useState } from "react";
import logo from "../images/logo.svg";
import "./header.css";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import thumbnail from "../images/image-product-1-thumbnail.jpg";
import deleteIcon from "../images/icon-delete.svg";
import { changeNotificationToInfo } from "../../redux/Notification";
import { useDispatch } from "react-redux";

function Header({ cartList, handleDeleteFromCart }) {
  const [activeCart, setActiveCart] = useState(false);
  const dispatch = useDispatch();
  return (
    <>
      <div className="header__container">
        <div className="header__container-navlogo">
          <img src={logo} alt="logo" />
          <ul className="nav__list">
            <li>
              <a>Collections</a>
            </li>
            <li>
              <a>Men</a>
            </li>
            <li>
              <a>Women</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="header__container_cartlogin">
          <div className="cart-icon">
            <img
              src={cart}
              onClick={() => setActiveCart(!activeCart)}
              className="cart-icon-img"
            />
            {cartList.length > 0 ? (
              <span className="cart-quant">{cartList.length}</span>
            ) : null}
            {activeCart ? (
              <div className="cart__container">
                <h3>Cart</h3>
                {cartList.length === 0 ? (
                  <div className="cart__container_empty">
                    Your cart is empty.
                  </div>
                ) : (
                  <div className="cart__container-list">
                    {cartList.slice(0, 4).map((item, index) => (
                      <div className="cart__container_item" key={index}>
                        <img src={thumbnail} />
                        <div>
                          <h4>{item.Item.name}</h4>
                          <p>
                            <span className="price-before">
                              ${item.Item.price} x {item.Item.quant}
                            </span>
                            ${item.Item.price * item.Item.quant}
                          </p>
                        </div>
                        <img
                          src={deleteIcon}
                          style={{ width: "20px", cursor: "pointer" }}
                          onClick={() => {
                            handleDeleteFromCart(index);
                            dispatch(changeNotificationToInfo());
                          }}
                        />
                      </div>
                    ))}
                    {cartList.length > 4 ? (
                      <span className="cart-more">
                        {cartList.length - 4} more in cart...
                      </span>
                    ) : null}
                    <button> Checkout</button>
                  </div>
                )}
              </div>
            ) : null}
          </div>
          <img src={avatar} style={{ width: "55px", height: "55px" }} />
        </div>
      </div>
    </>
  );
}

export default Header;
