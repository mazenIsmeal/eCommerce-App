import { Suspense } from 'react'
import LottieHandler from '../LottieHandler/LottieHandler'

const PageSuspenseFallback = ({children}: {children: React.ReactNode}) => {
  return (
    <><Suspense fallback={<LottieHandler type='loading' message='Loading Please wait...' />}
      >
          {children}
      </Suspense><div></div></>
  )
}

export default PageSuspenseFallback