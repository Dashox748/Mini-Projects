import React, { useEffect, useState } from "react";
import "./product.css";
import { images, thumbnail } from "../index.js";
import plus from "../images/icon-plus.svg";
import minus from "../images/icon-minus.svg";
import { useSelector, useDispatch } from "react-redux";
import {
  changeNotificationToFailed,
  changeNotificationToSucces,
} from "../../redux/Notification";

function Product({ handleAddToCart }) {
  const [currentImage, setCurrentImage] = useState(images.imageA);
  const [activeImage, setActiveImage] = useState("a");
  const [quantityToAdd, setQuantityToAdd] = useState(0);
  const [activeError, setActiveError] = useState(false);

  const dispatch = useDispatch();
  const notification = useSelector((state) => state.notification);

  const handleAddQuant = (type) => {
    if (!type && quantityToAdd === 0) return;
    type
      ? setQuantityToAdd(quantityToAdd + 1)
      : setQuantityToAdd(quantityToAdd - 1);
    console.log(notification);
  };

  const handleAddToCartLocal = (number, name, price) => {
    if (quantityToAdd === 0) {
      dispatch(changeNotificationToFailed());
      return;
    }
    handleAddToCart(number, name, price);
    setQuantityToAdd(0);
    dispatch(changeNotificationToSucces());
  };

  useEffect(() => {
    setActiveError(true);
    setTimeout(() => {
      setActiveError(false);
    }, 3000);
  }, [notification]);

  return (
    <div className="product__container">
      <div
        className={
          activeError
            ? `${notification.NotificationColor} activeError`
            : `${notification.NotificationColor}`
        }
      >
        <span className="errorText">
          <h3>{notification.NotificationAlert}</h3>
          <p>{notification.NotificationText}</p>
        </span>
      </div>
      <div className="product__container-images">
        <img
          src={currentImage}
          alt="main-image"
          className="product__container-main-image"
        />
        <div className="product__container-images-thumbs">
          <span className={activeImage === "a" ? "active" : "thumb"}>
            <img
              src={thumbnail.thumbA}
              alt="thumb"
              onClick={() => {
                setCurrentImage(images.imageA);
                setActiveImage("a");
              }}
            />
          </span>
          <span className={activeImage === "b" ? "active" : "thumb"}>
            <img
              src={thumbnail.thumbB}
              alt="thumb"
              onClick={() => {
                setCurrentImage(images.imageB);
                setActiveImage("b");
              }}
            />
          </span>
          <span className={activeImage === "c" ? "active " : "thumb"}>
            <img
              className="shadow-drop-2-center"
              src={thumbnail.thumbC}
              alt="thumb"
              onClick={() => {
                setCurrentImage(images.imageC);
                setActiveImage("c");
              }}
            />
          </span>
          <span className={activeImage === "d" ? "active" : "thumb"}>
            <img
              src={thumbnail.thumbD}
              alt="thumb"
              onClick={() => {
                setCurrentImage(images.imageD);
                setActiveImage("d");
              }}
            />
          </span>
        </div>
      </div>
      <div className="product__container-info">
        <h3>SNEAKER COMPANY</h3>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div className="product__container-info-price">
          <div>
            <h2>$125.00</h2>
            <span>50%</span>
          </div>
          <h5>$250.00</h5>
        </div>
        <div className="product__container-info-buy">
          <div className="product__container-info-buy-count">
            <img src={minus} onClick={() => handleAddQuant(false)} />
            <span>{quantityToAdd}</span>
            <img src={plus} onClick={() => handleAddQuant(true)} />
          </div>
          <button
            onClick={() => {
              handleAddToCartLocal(
                quantityToAdd,
                "Fall Limited Edition Sneakers",
                125
              );
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
