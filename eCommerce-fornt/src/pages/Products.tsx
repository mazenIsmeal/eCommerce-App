import useProductsHooks from "@hooks/useProductsHooks"
import Loading from "@components/feedback/Loading/Loading"
import GridList from "@components/common/GridList/GridList"
import Heading from "@components/Heading/Heading"
import Product from "@components/ecommerce/Products/Product"

const Products = () => {
  const {loading, error, itmeProductQuantity, productPrefix} = useProductsHooks()
  return (
    <div>
      <Heading title={`${productPrefix} Products`} />
      <Loading loading={loading} error={error} type="product">
        <GridList records={itmeProductQuantity} recordItem={(record) => <Product {...record} />} emptyMessage='no products here' />
      </Loading>
    </div>
  )
}

export default Products