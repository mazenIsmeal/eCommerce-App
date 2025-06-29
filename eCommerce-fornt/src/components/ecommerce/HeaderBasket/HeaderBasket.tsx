import { useEffect, useState } from 'react';
import { useAppSelector } from '@store/hooks';
import { getCartTotalQuantity } from '@store/cart/cartSlice';
import { useNavigate } from 'react-router-dom';
import CartItems from '@assets/CartItems.svg?react'
import styles from './styles.module.css'

const {logo, pumpCartQuantity, basketQuantity, logoCart} = styles
const HeaderBasket = () => {
    const navigate= useNavigate()
    const cartItem = useAppSelector(getCartTotalQuantity)
    const [isAnimate, setIsAnimate] = useState(false)
    const quantityStyle = `${basketQuantity} ${
    isAnimate ? pumpCartQuantity : ""
  }`;

    useEffect(() => {
        if (!cartItem) {
            return;
        }
        setIsAnimate(true)
        const dubounce = setTimeout(() => {
            setIsAnimate(false)
        }, 300)
        return () => clearTimeout(dubounce)
    }, [cartItem])
    
  return (
    <div className={logo}>
            
            <div>
                <CartItems className={logoCart} onClick={() => navigate('/cart')} />
                <div className={quantityStyle}>{cartItem}</div>
            </div>
        </div>
  )
}

export default HeaderBasket