import Categorie from "@components/ecommerce/Categories/Categorie"


import { useAppDispatch, useAppSelector } from "@store/hooks"
import { actGetCategories } from "@store/categories/categoriesSlice"
import { useEffect } from "react"

import Loading from "@components/feedback/Loading/Loading"
import GridList from "@components/common/GridList/GridList"
import Heading from "@components/Heading/Heading"

const Categories = () => {
  const dispatch = useAppDispatch()
  const {loading, error, records} = useAppSelector((state) => state.Categories)

  useEffect(() => {
    if(!records.length) {
      dispatch(actGetCategories())
    }
  }, [dispatch, records])



  return (
    <div>
      <Heading>Categories</Heading>
      <Loading loading={loading} error={error}>
        <GridList records={records} recordItem={(record) => <Categorie {...record} />} />
      </Loading>
      
    </div>
  )
}

export default Categories