import { useEffect } from "react"
import { useAppDispatch,useAppSelector } from "@store/hooks"
import { actGetProductsItem } from "@store/cart/cartSlice"

import CartSubtotalPrice from "@components/ecommerce/CartSubtotalPrice/CartSubtotalPrice"
import Heading from "@components/Heading/Heading"
import CartItemsList from "@components/ecommerce/CartItemsList/CartItemsList"
import Loading from "@components/feedback/Loading/Loading"

const Cart = () => {
  const dispatch = useAppDispatch()
  const {loading, error, item, productsInfo} = useAppSelector((state) => state.cart)

  useEffect(() => {
    dispatch(actGetProductsItem())
  }, [dispatch])

  const products = productsInfo.map((el) => ({...el, quantity: item.id}))

  return (
    <>
        <Heading>Cart</Heading>
        <Loading error={error} loading={loading}>
          <CartItemsList products={products} />
          <CartSubtotalPrice />
        </Loading>
    </>
  )
}

export default Cart