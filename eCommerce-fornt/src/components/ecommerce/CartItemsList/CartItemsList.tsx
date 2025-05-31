import type { TProduct } from "@customType/product"
import CartItem from "../CartItem/CartItem"

type CartItemListProps = {products: TProduct[]}

const CartItemsList = ({products}: CartItemListProps) => {
    const renderList = products.map((el) => (<CartItem key={el.id}{...el} />))
  return (
    <div>{renderList}</div>
  )
}

export default CartItemsList