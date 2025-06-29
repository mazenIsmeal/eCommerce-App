
import { useAppDispatch, useAppSelector } from "@store/hooks"
import { actGetProductByCatPerfix, productCleanUp } from "@store/product/productSlice"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

const useProductsHooks = () => {
      const dispatch = useAppDispatch();
  const params = useParams()
  const productPrefix = params.prefix
  const {loading, error, records} = useAppSelector((state) => state.Product);
  const cartItem = useAppSelector((state) => state.cart.item)
  const wishlist = useAppSelector((state) => state.wishlist.itemsId)

  const itmeProductQuantity = records.map(el => {
    return {
      ...el, 
      quantity: cartItem[el.id as number] || 0,
      isLiked: wishlist.includes(el.id as number)
    }
  })

  useEffect(() => {
    const promise = dispatch(actGetProductByCatPerfix(params.prefix as string))
    return () => {
      dispatch(productCleanUp())
      promise.abort()
    }
  }, [dispatch, params])

  return {loading, error, itmeProductQuantity, productPrefix}
}

export default useProductsHooks