import { useForm, type SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { singIn, type singInType } from "@validation/singIn";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch } from "@store/hooks";
import { actAuthLogin } from "@store/auth/authSlice";
import { useNavigate } from "react-router-dom";

import {Form, Button, Row, Col, Alert} from 'react-bootstrap';
import Heading from '@components/Heading/Heading';
import { Input } from "@components/Form";


const Login = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const {register, handleSubmit, formState: {errors}} = useForm<singInType>({
    mode: 'onBlur',
    resolver: zodResolver(singIn)
  })

  const submitLogin: SubmitHandler<singInType> = (data) => {
    dispatch(actAuthLogin(data)).unwrap().then(() => navigate('/'))
  }

  return (
        <>
        {
          searchParams.get('message') === 'account_created' 
          && 
          <Alert variant="success">
            Your account successfully created, please login
          </Alert>
        }
      <Heading title="User Login" />
      <Row>
        <Col md={{span: 6, offset: 3}}>
          <Form onSubmit={handleSubmit(submitLogin)}>
            <Input label="Email" register={register} error={errors.email?.message} name="email" />
            <Input label="Password" type="password" register={register} error={errors.password?.message} name="password" />

            <Button variant="info" type="submit" style={{color: '#fff'}}>
              Submit
            </Button>
        </Form>
        </Col>
      </Row>
      
    </>
  )
}

export default Login