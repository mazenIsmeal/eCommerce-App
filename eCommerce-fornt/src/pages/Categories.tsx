import Categorie from "@components/ecommerce/Categories/Categorie"


import { useAppDispatch, useAppSelector } from "@store/hooks"
import { actGetCategories } from "@store/categories/categoriesSlice"
import { useEffect } from "react"

import Loading from "@components/feedback/Loading/Loading"
import GridList from "@components/common/GridList/GridList"

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
      <Loading loading={loading} error={error}>
        <GridList records={records} recordItem={(record) => <Categorie {...record} />} />
      </Loading>
      
    </div>
  )
}

export default Categories