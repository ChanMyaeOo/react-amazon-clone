import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  // console.log("subtotal ", basket);

  const getTotalPrice = () => {
    const priceArray = basket.map((item) => item.price);
    const total = priceArray.reduce(
      (accumulatedPrice, price) => accumulatedPrice + price,
      0
    );
    return total;
  };
  const totalPrice = getTotalPrice();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(totalPrice) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{totalPrice}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              &nbsp; This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={totalPrice}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
