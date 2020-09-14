import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import StarsIcon from "@material-ui/icons/Stars";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    color: "#f0c14b",
  },
};

function CheckoutProduct({
  id,
  image,
  title,
  price,
  rating,
  hiddenButton,
  classes,
}) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img src={image} alt="item" className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <StarsIcon classes={{ root: classes.root }} />
            ))}
        </div>
        {!hiddenButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
      </div>
    </div>
  );
}

export default withStyles(styles)(CheckoutProduct);
