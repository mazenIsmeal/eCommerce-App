import Product from "@components/ecommerce/Products/Product"

import { useAppDispatch, useAppSelector } from "@store/hooks"
import { actGetProductByCatPerfix, productCleanUp } from "@store/product/productSlice"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import Loading from "@components/feedback/Loading/Loading"
import GridList from "@components/common/GridList/GridList"
import Heading from "@components/Heading/Heading"

const Products = () => {
  const dispatch = useAppDispatch();
  const params = useParams()
  const {loading, error, records} = useAppSelector((state) => state.Product);
  const cartItem = useAppSelector((state) => state.cart.item)

  const itmeProductQuantity = records.map(el => {
    return {
      ...el, 
      quantity: cartItem[el.id as number] || 0,
    }
  })

  useEffect(() => {
    dispatch(actGetProductByCatPerfix(params.prefix as string))
    return () => {
      dispatch(productCleanUp())
    }
  }, [dispatch, params])


  return (
    <div>
      <Heading><span className="text-capitalize">{params.prefix} </span>Products</Heading>
      <Loading loading={loading} error={error}>
        <GridList records={itmeProductQuantity} recordItem={(record) => <Product {...record} />} />
      </Loading>
    </div>
  )
}

export default Products