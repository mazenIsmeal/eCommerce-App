import Categorie from "@components/ecommerce/Categories/Categorie"
import {Col, Row} from 'react-bootstrap'

import { useAppDispatch, useAppSelector } from "@store/hooks"
import { actGetCategories } from "@store/categories/categoriesSlice"
import { useEffect } from "react"

const Categories = () => {
  const dispatch = useAppDispatch()
  const {loading, error, records} = useAppSelector((state) => state.Categories)

  useEffect(() => {
    dispatch(actGetCategories())
  }, [dispatch])

  const categoriesList = records.length > 0 ? records.map(record => (
    <Col xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2" key={record.id}>
      <Categorie {...record} />
    </Col>
  )) : 'There are no categories'

  return (
    <div>
      <Row>
        {categoriesList}
      </Row>
      
    </div>
  )
}

export default Categories