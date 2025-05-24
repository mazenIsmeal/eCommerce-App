import { Button } from "react-bootstrap";
import styles from "./style.module.css";
const { product, productImg } = styles;

import type { TProduct } from "@customType/product";
import { addToCart } from "@store/cart/cartSlice";
import { useAppDispatch } from "@store/hooks";

const Product = ({id, title, price, img}: TProduct) => {
  const dispatch = useAppDispatch()

  const cartHandler = () => {
    dispatch(addToCart(id))
  }

  return (
    <div className={product}>
      <div className={productImg}>
        <img
          src={img}
          alt={title}
        />
      </div>
      <h2>{title}</h2>
      <h3>{price} EGP</h3>
      <Button variant="info" style={{ color: "white" }} onClick={cartHandler}>
        Add to cart
      </Button>
    </div>
  )
}

export default Product