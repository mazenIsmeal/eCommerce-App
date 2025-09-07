import {Form} from 'react-bootstrap';
import type { FieldValues, Path, UseFormRegister } from 'react-hook-form';

type InputProps<TFiledValue extends FieldValues> = {
    label: string,
    name: Path<TFiledValue>,
    type?: string,
    register: UseFormRegister<TFiledValue>
    error?: string,
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void,
    formText?: string,
    success?: string,
    disabled?: boolean
}

const SingUp = <TFiledValue extends FieldValues>({register, name, label, type= 'text', error, onBlur, formText, success, disabled}: InputProps<TFiledValue>) => {
  const onblurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(e);
      register(name).onBlur(e)
    } else {
      register(name).onBlur(e)
    }
  }
  return (
    <Form.Group className="mb-3">
        <Form.Label>{label}</Form.Label>
        <Form.Control 
        type={type}  
        {...register(name)} 
        isInvalid={error ? true : false} 
        onBlur={onblurHandler} 
        isValid={success ? true : false}
        disabled = {disabled}
        />
        <Form.Control.Feedback type='invalid'>
        {error}
        </Form.Control.Feedback>

        <Form.Control.Feedback type='valid'>
        {success}
        </Form.Control.Feedback>
        {formText && <Form.Text muted>{formText}</Form.Text>}
    </Form.Group>
  )
}

export default SingUp