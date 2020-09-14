import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import StarsIcon from "@material-ui/icons/Stars";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    color: "#f0c14b",
  },
};

function Product({ id, title, price, rating, image, classes }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarsIcon classes={{ root: classes.root }} />
            ))}
        </div>
      </div>
      <img src={image} />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default withStyles(styles)(Product);
