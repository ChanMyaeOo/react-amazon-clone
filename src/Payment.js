import React from "react";
import { Link } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        {/* payment address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>Fake Street, 121</p>
            <p>Fake City, Fake Country</p>
          </div>
        </div>
        {/* payment item reviews */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and Delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map(({ id, title, image, price, rating }) => (
              <CheckoutProduct
                id={id}
                title={title}
                image={image}
                price={price}
                rating={rating}
              />
            ))}
          </div>
        </div>
        {/* payment method details */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">{/* stripe magic */}</div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
