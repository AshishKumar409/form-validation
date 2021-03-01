import React ,{useState} from 'react'
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess'
import './Form.css'


const Form = () => {

  const [isSubmitted, setIsSubmitted] = useState(false)

  function submitted(){
    setIsSubmitted(true)
  }
  
  return (
    <>
       <div className='form-container'>
        
        {!isSubmitted ? (
          <FormSignup submitted  ={submitted} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  )
}

export default Form
