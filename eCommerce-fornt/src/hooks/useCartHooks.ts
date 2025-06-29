import { useCallback, useEffect } from "react"
import { useAppDispatch,useAppSelector } from "@store/hooks"
import { actGetProductsItem } from "@store/cart/cartSlice"
import { handlerChangeQuantity, itemRemove } from "@store/cart/cartSlice"

const useCartHooks = () => {
    const dispatch = useAppDispatch()
  const {loading, error, item, productsInfo} = useAppSelector((state) => state.cart)

  useEffect(() => {
    const promise = dispatch(actGetProductsItem())
    return () => {
      promise.abort()
    }
  }, [dispatch])

  const products = productsInfo.map((el) => ({...el, quantity: item[el.id as number]}))

  const changeHandlerAction = useCallback((id:number, quantity:number) => {
    dispatch(handlerChangeQuantity({id, quantity}))
  }, [dispatch])

  const removeItemHandler = useCallback((id: number) => {
    dispatch(itemRemove(id))
  },[dispatch])

  return {loading, error, products, changeHandlerAction, removeItemHandler}
}

export default useCartHooks