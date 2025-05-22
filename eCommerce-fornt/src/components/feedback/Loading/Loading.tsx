import type { TLoading } from "@customType/shared"

type LoadingProps = {
    loading: TLoading,
    error: null | string,
    children: React.ReactNode
}

const Loading = ({loading, error, children}: LoadingProps) => {
    if(loading === 'pending') {
        return <p>Please Wait For Loading</p>
    }

    if(loading === 'failed') {
        return <p>{error}</p>
    }
  return (
    <>{children}</>
  )
}

export default Loading