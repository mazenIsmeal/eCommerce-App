import Lottie from "lottie-react";
import notFound from '@assets/LottieFiles/Animation - 1751454096689.json'
import empty from '@assets/LottieFiles/empty.json'
import error from '@assets/LottieFiles/error.json'
import loading from '@assets/LottieFiles/loading.json'

const lottieFileMap = {
    notFound,
    empty,
    error,
    loading
}

type LottieHandlerProps = {
    type: keyof typeof lottieFileMap,
    message?: string
}

const LottieHandler = ({type, message}: LottieHandlerProps) => {
    const lottie = lottieFileMap[type]
    const errorMessage = type === 'error' ? {fontSize: '19px', color: 'red'} : {fontSize: '19px', marginTop: '30px'}

  return (
    <div className="d-flex align-items-center flex-column justify-content-center mb-5">
        <Lottie animationData={lottie} style={{width: '400px'}} />
        {message && <h3 style={errorMessage}>{message}</h3>}
    </div>
  )

}

export default LottieHandler