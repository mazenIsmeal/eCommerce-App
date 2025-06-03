import { useCallback, useEffect } from "react"
import { useAppDispatch,useAppSelector } from "@store/hooks"
import { actGetProductsItem } from "@store/cart/cartSlice"
import { handlerChangeQuantity, itemRemove } from "@store/cart/cartSlice"

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

  const products = productsInfo.map((el) => ({...el, quantity: item[el.id as number]}))

  const changeHandlerAction = useCallback((id:number, quantity:number) => {
    dispatch(handlerChangeQuantity({id, quantity}))
  }, [dispatch])

  const removeItemHandler = useCallback((id: number) => {
    dispatch(itemRemove(id))
  },[dispatch])

  return (
    <>
        <Heading>Cart</Heading>
        <Loading error={error} loading={loading}>
          {
          products.length ? <>
            <CartItemsList products={products} changeHandlerAction={changeHandlerAction} removeItemHandler={removeItemHandler} />
            <CartSubtotalPrice products={products} />
          </> : 'Your Cart is Empty'
          }
        </Loading>
    </>
  )
}

export default Cart