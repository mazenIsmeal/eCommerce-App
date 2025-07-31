import type { TProduct } from "@types"
import CartItem from "../CartItem/CartItem"

type CartItemListProps = {
  products: TProduct[],
  changeHandlerAction: (id: number, quantity: number) => void,
  removeItemHandler: (id: number) => void
}

const CartItemsList = ({products, changeHandlerAction, removeItemHandler}: CartItemListProps) => {
    const renderList = products.map((el) => (<CartItem removeItemHandler={removeItemHandler} changeHandlerAction={changeHandlerAction} key={el.id}{...el} />))
  return (
    <div>{renderList}</div>
  )
}

export default CartItemsList