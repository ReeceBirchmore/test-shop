import Quantity from "../Quantity";
import styles from "./styles.module.css";

const CartItem = (props) => {
  const { itemData } = props;
  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemImage}>
        <img src={itemData.image}></img>
      </div>
      <div className={styles.cartItemDetails}>
        <p className={styles.title}>{itemData.title}</p>
        <p className={styles.price}>£{itemData.price}</p>
      </div>
    </div>
  );
};

export default CartItem;
