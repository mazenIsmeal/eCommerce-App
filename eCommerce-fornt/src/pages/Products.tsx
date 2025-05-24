import Product from "@components/ecommerce/Products/Product"

import { useAppDispatch, useAppSelector } from "@store/hooks"
import { actGetProductByCatPerfix, productCleanUp } from "@store/product/productSlice"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import Loading from "@components/feedback/Loading/Loading"
import GridList from "@components/common/GridList/GridList"

const Products = () => {
  const dispatch = useAppDispatch();
  const params = useParams()
  const {loading, error, records} = useAppSelector((state) => state.Product);

  useEffect(() => {
    dispatch(actGetProductByCatPerfix(params.prefix as string))
    return () => {
      dispatch(productCleanUp())
    }
  }, [dispatch, params])


  return (
    <div>
      <Loading loading={loading} error={error}>
        <GridList records={records} recordItem={(record) => <Product {...record} />} />
      </Loading>
      
      
    </div>
  )
}

export default Products