import Yup from 'yup'
import { MIN_PASSWORD_LENGTH } from './const'

export default function getYupValidationSchema(values) {
  return Yup.object().shape({
    email: Yup.string()
      .email('E-mail is not valid!')
      .required('E-mail is required!'),
    password: Yup.string()
      .min(MIN_PASSWORD_LENGTH, `Password has to be longer than ${MIN_PASSWORD_LENGTH} characters!`)  
      .required('Password is required!'),
    passwordConfirmation: Yup.string()
      .oneOf([values.password], 'Passwords are not the same!')
      .required('Password confirmation is required!'),
    consent: Yup.bool()
      .test('consent', 'You have to agree with our Terms and Conditions!', value => value === true)
      .required('You have to agree with our Terms and Conditions!'),
  })
}
/*
passwordConfirmation validation: As far as I know Yup doesn’t have anything like equals method to compare two strings. We need to compare passwordConfirmation value with array values oneOf(array, 'Error message') where array is array with only one value from values object values.password.
consent validation: Yup also doesn’t have method to check whether value is true or false. We need to use test method which takes 3 params. The first is name of the validation (I don’t know why 🤔), the second is error message and the third is our custom validation function 
*/