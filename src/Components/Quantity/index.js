import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import styles from "./styles.module.css";

const Quantity = (props) => {
  const { quantity, setQuantity } = props;

  const handleQuantity = (action) => {
    if (quantity > -1) {
      if (action === "add") {
        setQuantity(quantity + 1);
      } else {
        setQuantity(quantity - 1);
      }
    }
  };

  return (
    <div className={styles.quantity}>
      <div
        className={`${styles.squareEmpty} ${quantity !== 0 && styles.square}`}
      >
        <RemoveIcon
          onClick={() => handleQuantity("subtract")}
          className="smallIcon"
        />
      </div>
      <p>{quantity}</p>
      <div className={`${styles.squareEmpty} ${styles.square}`}>
        <AddIcon onClick={() => handleQuantity("add")} className="smallIcon" />
      </div>
    </div>
  );
};

export default Quantity;
