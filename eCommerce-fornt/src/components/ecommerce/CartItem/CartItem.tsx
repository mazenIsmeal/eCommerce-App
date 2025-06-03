import { Form, Button } from "react-bootstrap";
import styles from "./styles.module.css";
import type { TProduct } from "@customType/product";
import { memo } from "react";

const { cartItem, product, productImg, productInfo, cartItemSelection } =
  styles;

  type CartItemProps = TProduct & {
    changeHandlerAction: (id: number, quantity: number) => void,
    removeItemHandler: (id: number) => void
  }

const CartItem = memo(({id, title, img, price, max, quantity, changeHandlerAction, removeItemHandler}: CartItemProps) => {
  const reanderOption = Array(max).fill(0).map((_, idx) => {
    const quantity = ++idx
    return(<option value={quantity} key={quantity}>{quantity}</option>)
  })

  const changeAction = (event: React.ChangeEvent<HTMLSelectElement>) => {
    quantity = +event.target.value
    changeHandlerAction(id as number, quantity)
  }


  return (
    <div className={cartItem}>
        <div className={product}>
          <div className={productImg}>
            <img src={img} alt={title} />
          </div>
          <div className={productInfo}>
            <h2>{title}</h2>
            <h3>{price.toFixed(2)} EGP</h3>
            <Button
              variant="secondary"
              style={{ color: "white", width: "100px" }}
              className="mt-auto"
              onClick={() => removeItemHandler(id as number)}
            >
              Remove
            </Button>
          </div>
        </div>

        <div className={cartItemSelection}>
          <span className="d-block mb-1">Quantity</span>
          <Form.Select value={quantity}  onChange={changeAction}>
            {reanderOption}
          </Form.Select>
        </div>
      </div>
  )
})

export default CartItem