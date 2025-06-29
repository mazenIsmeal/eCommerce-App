import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "@store/hooks"
import { actGetWishlist, productFullInfoCleanUp } from "@store/wishlist/wishlistSlice"

const useWishlistHooks = () => {
    const dispatch = useAppDispatch()
    const {loading, error, productFullInfo} = useAppSelector((state) => state.wishlist);
    const cartItem = useAppSelector((state) => state.cart.item)

  useEffect(() => {
    const promise = dispatch(actGetWishlist())
    return () => {
      promise.abort()
      dispatch(productFullInfoCleanUp())
    }
  }, [dispatch])

  const records = productFullInfo.map(el => {
    return {
      ...el, 
      quantity: cartItem[el.id as number] || 0,
      isLiked: true
    }
  })
  return {loading, error, records}
}

export default useWishlistHooks