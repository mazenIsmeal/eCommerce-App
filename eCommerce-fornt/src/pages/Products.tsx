import Product from "@components/ecommerce/Products/Product"
import {Col, Row} from 'react-bootstrap'

import { useAppDispatch, useAppSelector } from "@store/hooks"
import { actGetProductByCatPerfix, productCleanUp } from "@store/product/productSlice"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import Loading from "@components/feedback/Loading/Loading"

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

  const productsList = records.length > 0 ? records.map(record => (
    <Col xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2" key={record.id}>
      <Product {...record} />
    </Col>
  )) : 'There are no categories'

  return (
    <div>
      <Loading loading={loading} error={error}>
        <Row>
          {productsList}
        </Row>
      </Loading>
      
      
    </div>
  )
}

export default Products