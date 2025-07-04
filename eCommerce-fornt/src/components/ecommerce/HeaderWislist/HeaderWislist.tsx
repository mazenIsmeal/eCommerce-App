import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import WishList from '@assets/wishlist.svg?react'

import styles from './styles.module.css'
import { useAppSelector } from '@store/hooks';

const {logo, pumpCartQuantity, basketQuantity, iconWrapper} = styles


const HeaderWislist = () => {
    const navigate= useNavigate()
    const totalQuantity = useAppSelector(state => state.wishlist.itemsId)
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
            <div onClick={() => navigate('/wishlist')}>
              <div className={iconWrapper}>
                <WishList  />
              </div>
              {totalQuantity.length > 0 && <div className={quantityStyle}>{totalQuantity.length}</div>}
                
            </div>
        </div>
  )
}

export default HeaderWislist