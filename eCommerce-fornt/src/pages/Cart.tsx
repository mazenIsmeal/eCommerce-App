import CartItem from "@components/ecommerce/CartItem/CartItem"
import CartSubtotalPrice from "@components/ecommerce/CartSubtotalPrice/CartSubtotalPrice"
import Heading from "@components/Heading/Heading"

const Cart = () => {
  return (
    <>
        <Heading>Cart</Heading>
        <CartItem />
        <CartItem />
        <CartSubtotalPrice />
    </>
  )
}

export default Cart