import  { useState,useEffect } from 'react'

const useForm = (validate,callback) => {
  const [values, setValues] = useState({
    username:'',
    email:'',
    password:'',
    password2:''
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)



  const changeHandler = e=>{
    const {name,value} = e.target;
    setValues({
      ...values,[name]:value
    });
  }

  const submitHandler = e=>{
    e.preventDefault()

    setErrors(validate(values))

    setIsSubmitting(true)
  }
  
  useEffect(() => {
    if(Object.keys(errors).length===0 && isSubmitting){
      callback()
    }
    
  }, [errors,callback,isSubmitting])

  return (
    {changeHandler,values,submitHandler,errors}
  )
}

export default useForm;
