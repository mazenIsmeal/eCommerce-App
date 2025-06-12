import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import WishList from '@assets/wishlist.svg?react'

import styles from './styles.module.css'

const {logo, pumpCartQuantity, basketQuantity, iconWrapper} = styles
const HeaderWislist = () => {
    const navigate= useNavigate()
    const totalQuantity = 0
    const [isAnimate, setIsAnimate] = useState(false)
    const quantityStyle = `${basketQuantity} ${
    isAnimate ? pumpCartQuantity : ""
  }`;

    useEffect(() => {
        if (!totalQuantity) {
            return;
        }
        setIsAnimate(true)
        const dubounce = setTimeout(() => {
            setIsAnimate(false)
        }, 300)
        return () => clearTimeout(dubounce)
    }, [totalQuantity])

  return (
    <div className={logo}>
            <div onClick={() => navigate('/cart')}>
              <div className={iconWrapper}>
                <WishList  />
              </div>
              {totalQuantity > 0 && <div className={quantityStyle}>{totalQuantity}</div>}
                
            </div>
        </div>
  )
}

export default HeaderWislist