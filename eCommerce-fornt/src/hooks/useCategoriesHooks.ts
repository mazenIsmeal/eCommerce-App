import { useAppDispatch, useAppSelector } from "@store/hooks"
import { actGetCategories, cleanUpCategories } from "@store/categories/categoriesSlice"
import { useEffect } from "react"

const useCategoriesHooks = () => {
    const dispatch = useAppDispatch()
  const {loading, error, records} = useAppSelector((state) => state.Categories)

  useEffect(() => {
      const promise = dispatch(actGetCategories())

      return () => {
      promise.abort()
      dispatch(cleanUpCategories())
    }
  }, [dispatch])


  return {loading, error, records}
}

export default useCategoriesHooks