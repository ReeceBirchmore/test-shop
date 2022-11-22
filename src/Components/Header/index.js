import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import styles from "./styles.module.css";
import { Link, useNavigate } from "react-router-dom";

const Header = (props) => {
  const { pageHeader } = props;
  const navigate = useNavigate();

  return (
    <div className={styles.header}>
      <ArrowBackIosIcon fontSize="small" onClick={() => navigate(-1)} />
      <h3>{pageHeader}</h3>
      <ShoppingCartIcon onClick={() => navigate("/cart")} />
    </div>
  );
};

export default Header;
