import { Container } from "react-bootstrap"
import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom"

const Error = () => {
    const error = useRouteError()
    let errorStatus: number;
    let errorText: string;

    if(isRouteErrorResponse(error)) {
        errorStatus = error.status
        errorText = error.statusText
    }else {
        errorStatus = 404
        errorText = 'Page not Found'
    }

  return (
    <Container>
        <div className="text-center pt-lg-5">
            <h1 className="head">{errorStatus}</h1>
            <p>{errorText}</p>
            <p>
                This Page Not Found Please go to 
                <Link to='/' replace={true}>Home</Link> Page
            </p>
        </div>
    </Container>
  )
}

export default Error