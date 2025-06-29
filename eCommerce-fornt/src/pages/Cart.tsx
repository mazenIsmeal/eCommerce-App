import useCartHooks from "@hooks/useCartHooks"

import CartSubtotalPrice from "@components/ecommerce/CartSubtotalPrice/CartSubtotalPrice"
import Heading from "@components/Heading/Heading"
import CartItemsList from "@components/ecommerce/CartItemsList/CartItemsList"
import Loading from "@components/feedback/Loading/Loading"

const Cart = () => {
  const {loading, error, products, changeHandlerAction, removeItemHandler} = useCartHooks()
  
  return (
    <>
        <Heading title='Cart' />
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