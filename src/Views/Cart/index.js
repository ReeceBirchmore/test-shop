import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import CartItem from "../../Components/CartItem";
import styles from "./styles.module.css";

const Cart = (props) => {
  const { cartItems } = props;

  const [cartSubtotal, setCartSubtotal] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    cartItems.forEach((item) => {
      total += Number(item.price);
    });
    total = Math.round((total + Number.EPSILON) * 100) / 100;
    setCartSubtotal(total);
    total = Math.round((total + 25 + Number.EPSILON) * 100) / 100;
    setCartTotal(total);
  }, [cartItems]);

  return (
    <>
      {cartItems.length > 0 ? (
        <div className={styles.cart}>
          <div className={styles.cartItems}>
            {cartItems.map((item) => (
              <CartItem itemData={item} />
            ))}
          </div>

          <div className={styles.subtotals}>
            <p className={styles.subTotalItem}>
              Subtotal: <span className="black">£{cartSubtotal}</span>
            </p>
            <p className={styles.subTotalItem}>
              Delivery: <span className="black">£50</span>
            </p>
          </div>

          <div className={styles.divider} />

          <div className={styles.totals}>
            <p className={styles.subTotalItem}>
              Total: <span className="total">£{cartTotal}</span>
            </p>
          </div>

          <Button variant="contained" className="button">
            Continue
          </Button>
        </div>
      ) : (
        <p className={styles.emptyCart}>Your cart is empty</p>
      )}
    </>
  );
};

export default Cart;
