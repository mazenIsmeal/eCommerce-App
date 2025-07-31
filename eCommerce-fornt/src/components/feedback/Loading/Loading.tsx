import type { TLoading } from "@customType/shared.type"
import CategorySkeleton from "../Skeletons/CategorySkeleton/CategorySkeleton"
import ProductSkeleton from "../Skeletons/ProductSkeletons.tsx/ProductSkeletons"
import CartSkeleton from "../Skeletons/CartSkeletons/CartSkeletons"
import LottieHandler from "../LottieHandler/LottieHandler"

const SkeletonsType = {
  category: CategorySkeleton,
  product: ProductSkeleton,
  cart: CartSkeleton
}

type LoadingProps = {
    loading: TLoading,
    error: null | string,
    children: React.ReactNode
    type?: keyof typeof SkeletonsType  // دي معناها هاتلي key object SkeletonsType ب  type بتاعهم
}

const Loading = ({loading, error, children, type = 'category'}: LoadingProps) => {
  const Component = SkeletonsType[type]
    if(loading === 'pending') {
        return <Component />
    }

    if(loading === 'failed') {
        return <LottieHandler type='error' message={error as string} />
    }
  return (
    <>{children}</>
  )
}

export default Loading