import { Button, Spinner } from "react-bootstrap";
import styles from "./style.module.css";
import Liks from '@assets/Liks.svg?react'
import IsLiked from '@assets/IsLiked.svg?react'
const { product, productImg, maximumNotice, wishlist } = styles;

import type { TProduct } from "@types";
import { addToCart } from "@store/cart/cartSlice";
import { useAppDispatch } from "@store/hooks";
import { wishlistToggle } from "@store/wishlist/wishlistSlice";
import { memo, useEffect, useState } from "react";

const Product = memo(({id, title, price, img, max, quantity, isLiked}: TProduct) => {
  const dispatch = useAppDispatch()
  const [isBtnDisabled, setIsBtnDisabled] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const currentRemainingQuantity = (max ?? 0) - (quantity ?? 0)
  const quantityReachedToMax = currentRemainingQuantity <= 0 ? true : false

  useEffect(() => {
    if(!isBtnDisabled) {
      return;
    }
    setIsBtnDisabled(true)

    const dubounce = setTimeout(() => {
      setIsBtnDisabled(false)
    }, 300)
    return () => clearTimeout(dubounce);
  }, [isBtnDisabled])

  const cartHandler = () => {
    dispatch(addToCart(id))
    setIsBtnDisabled(true)
  }

  const toggleWishList = () => {
    if (isLoading) {
      return;
    }
    setIsLoading(true)
    dispatch(wishlistToggle(id as number)).unwrap().then(() => setIsLoading(false)).catch(() => setIsLoading(false))
  }

  return (
    <div className={product}>
      <div className={wishlist} onClick={toggleWishList}>
        {isLoading? <Spinner animation="border" size="sm" /> : isLiked?  <IsLiked /> : <Liks />}
      </div>
      <div className={productImg}>
        <img
          src={img}
          alt={title}
        />
      </div>
      <h2>{title}</h2>
      <p className={maximumNotice}>{quantityReachedToMax ? 'You reach in the limit' : `You Can Add ${currentRemainingQuantity}`}</p>
      <h3>{price.toFixed(2)} EGP</h3>
      <Button variant="info" style={{ color: "white" }} onClick={cartHandler} disabled={isBtnDisabled || quantityReachedToMax}>
        {isBtnDisabled ? <><Spinner animation="border" size="sm" />Loading...</> : 'Add To Cart'}
      </Button>
    </div>
  )
})

export default Product