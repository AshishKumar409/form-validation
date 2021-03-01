

const validateinfo = (values) => {
  let errors = {}

  if(!values.username.trim()){
    errors.username = "Username Is Required"
  }

  if(!values.email){
    errors.email = "Email required"
  }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9,-]+\.[A-Z]{2,}$/i.test(values.email)){
    errors.email = "Email Is Invalid"
  } 

  if(!values.password){
    errors.password = "Password required"
  }else if(values.password.length <8){
    errors.password = "Password need to be 8 or more characters" 
  }

  if(!values.password2){
    errors.password2 = "Confirm your password"
  }else if(values.password!==values.password2){
    errors.password2 = "Password need to be matched"
  }

  return errors
}

export default validateinfo
