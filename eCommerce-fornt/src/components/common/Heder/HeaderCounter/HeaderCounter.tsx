import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './styles.module.css'

const {logo, pumpCartQuantity, basketQuantity, iconWrapper} = styles

type HeaderCounterProps = {
  totalQuantity: number,
  to: string,
  title: string,
  svgIcon: React.ReactNode
}


const HeaderCounter = ({totalQuantity, to, svgIcon, title}: HeaderCounterProps) => {
    const navigate= useNavigate()
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
            <div onClick={() => navigate(to)}>
              <div className={iconWrapper}>
                {svgIcon}
              </div>
              {totalQuantity > 0 && <div className={quantityStyle}>{totalQuantity}</div>}
                
            </div>
            <h3>{title}</h3>
        </div>
  )
}

export default HeaderCounter