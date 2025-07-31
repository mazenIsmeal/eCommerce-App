import LottieHandler from "@components/feedback/LottieHandler/LottieHandler"
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"

const Error = () => {
  return (
    <Container>
        <div className="text-center pt-lg-5 d-flex align-items-center flex-column mt-5">
            <LottieHandler type="notFound" />
            <p>
                This Page Not Found Please go to 
                <Link to='/' replace={true}> Home </Link> Page
            </p>
        </div>
    </Container>
  )
}

export default Error