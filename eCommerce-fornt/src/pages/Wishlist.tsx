import useWishlistHooks from "@hooks/useWishlistHooks"
import Loading from "@components/feedback/Loading/Loading"
import GridList from "@components/common/GridList/GridList"
import Heading from "@components/Heading/Heading"
import Product from "@components/ecommerce/Products/Product"

const Wishlist = () => {
  const {loading, error, records} = useWishlistHooks()

  return (
    <div>
      <Heading title='Wishlist' />
      <Loading loading={loading} error={error} type="product">
        <GridList records={records} recordItem={(record) => <Product {...record} />} emptyMessage='wishlist is empty' />
      </Loading>
    </div>
  )
}

export default Wishlist