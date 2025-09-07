import { useForm, type SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { singUp, type singUpType } from "@validation/singUp";
import useCheckEmailAvailability from "@hooks/useCheckEmailAvailability";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actAuthRegister } from "@store/auth/authSlice";
import { useNavigate } from "react-router-dom";

import {Form, Button, Row, Col, Spinner} from 'react-bootstrap';
import Heading from '@components/Heading/Heading';
import { Input } from "@components/Form";

const Register = () => {
  const navigate = useNavigate()

  const dispatch = useAppDispatch()
  const {loading, error} = useAppSelector(state => state.authSlice)

    const {register, handleSubmit, formState: {errors}, getFieldState, trigger} = useForm<singUpType>({
      mode: 'onBlur',
      resolver: zodResolver(singUp)
    })

    const {enteredEmail, emailAvailabilityStatus, checkEmailAvailability, resetCheckEmailAvailability} = useCheckEmailAvailability()
  
    const submitLogin: SubmitHandler<singUpType> = (data) => {
      const {FirstName, LastName, email, password} = data
      dispatch(actAuthRegister({FirstName, LastName, email, password})).unwrap().then(() => {
        navigate('/login?message=account_created')
      })
    }

    const emailOnBlurHandler = async (e: React.FocusEvent<HTMLInputElement>) => {
      await trigger('email')
      const value = e.target.value;
      const {isDirty, invalid} = getFieldState('email')
      if (isDirty && !invalid && enteredEmail !== value) {
        // checking
        checkEmailAvailability(value)
      }

      if (isDirty && invalid && enteredEmail) {
        resetCheckEmailAvailability()
      }
    }

  return (
    <>
      <Heading title="User Register" />
      <Row>
        <Col md={{span: 6, offset: 3}}>
          <Form onSubmit={handleSubmit(submitLogin)}>
            <Input label="FirstName" name="FirstName" register={register} error={errors.FirstName?.message} />
            <Input label="LastName" name="LastName" register={register} error={errors.LastName?.message} />
            <Input 
            label="Email" 
            name="email" 
            onBlur={emailOnBlurHandler} 
            register={register} 
            error={errors.email?.message? errors.email?.message : emailAvailabilityStatus === 'notAvailable' ? 'this email is already use' : emailAvailabilityStatus === 'failed' ? 'error from ths service' : ''} 
            formText={emailAvailabilityStatus === 'checking' ? 'Were currently checking the availability of this email address. Please wait a moment.' : ''}
            success={emailAvailabilityStatus === 'available' ? 'this is email availability' : ''}
            disabled={emailAvailabilityStatus === 'checking' ? true : false}
            />
            <Input label="Password" name="password" type="password" register={register} error={errors.password?.message} />
            <Input label="ConfirmPassword" name="confirmPassword" type="password" register={register} error={errors.confirmPassword?.message} />            
            <Button 
            variant="info" 
            type="submit" 
            style={{color: '#fff', marginBottom: '10px'}}
            disabled={emailAvailabilityStatus === 'checking' ? true : false || loading === 'pending'}
            >
              {
              loading === 'pending' ? 
              <>
                <Spinner animation="border" size="sm"></Spinner> 'Loading....'
              </>: 
              'Submit'}
            </Button>
            {error && (<p style={{ color: "#DC3545", marginTop: "10px" }}>{error}</p>)}
        </Form>
        </Col>
      </Row>
      
    </>
    
  )
}

export default Register