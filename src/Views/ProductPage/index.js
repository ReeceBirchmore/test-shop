import { useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { fetchProduct } from "../../Env/APIUtils";
import styles from "./styles.module.css";
import Quantity from "../../Components/Quantity";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";

const ProductPage = (props) => {
  let { id } = useParams();
  const { cartItems, setCartItems, setHeader } = props;

  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    fetchProduct(id).then(setProduct);
  }, []);

  useEffect(() => {
    setHeader(product?.title);
  }, [product]);

  const handleAddItem = () => {
    setCartItems([...cartItems, product]);
  };

  return (
    <>
      <div className={styles.productImage}>
        <img src={product?.image}></img>
      </div>
      <div className={styles.quickActions}>
        <p className={styles.shipping}>Free shipping</p>
        <FavoriteBorderIcon />
      </div>
      <div className={styles.productDetails}>
        <h2>{product?.title}</h2>
        <p className={styles.description}>{product?.description}</p>
        <p className={styles.price}>£{product?.price}</p>
      </div>
      <div className={styles.productActions}>
        <Quantity quantity={quantity} setQuantity={setQuantity} />
        <Button
          variant="contained"
          className="button"
          onClick={() => handleAddItem()}
        >
          Add to cart
        </Button>
      </div>
    </>
  );
};

export default ProductPage;
