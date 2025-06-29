import useCategoriesHooks from '@hooks/useCategoriesHooks'
import Categorie from "@components/ecommerce/Categories/Categorie"
import Loading from "@components/feedback/Loading/Loading"
import GridList from "@components/common/GridList/GridList"
import Heading from "@components/Heading/Heading"

const Categories = () => {
  const {loading, error, records} = useCategoriesHooks()

  return (
    <div>
      <Heading title='Categories' />
      <Loading loading={loading} error={error}>
        <GridList records={records} recordItem={(record) => <Categorie {...record} />} />
      </Loading>
      
    </div>
  )
}

export default Categories