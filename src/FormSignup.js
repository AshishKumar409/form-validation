import React from 'react'
import useForm from './useForm'
import validate from './validateinfo'

import './Form.css'

const FormSignup = ({submitted}) => {
  const {changeHandler,values,submitHandler,errors} = useForm(validate,submitted)
  
  return (
    <div className="form-content-right">
      <form  className="form" onSubmit={submitHandler}>
        <h1>Get Started And Create An Account!</h1>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
          Username
          </label>
           <input type="text" 
            id="username"
            name="username"
            className="form-input"
            placeholder="Your Username"
            value={values.username}
            onChange={changeHandler}/>
            {errors.username && <p className="error">{errors.username}</p>}
        </div>
          
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" 
            id="email"
            name="email"
            className="form-input"
            placeholder="Enter Your Email"
            value={values.email}
            onChange={changeHandler}/>
             {errors.email &&  <p className="error">{errors.email}</p> }
        </div>
        

        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" 
            id="password"
            name="password"
            className="form-input"
            placeholder="Enter Your Password"
            value={values.password}
            onChange={changeHandler}/>
            {errors.password && <p className="error">{errors.password}</p>}
        </div>
       

        <div className="form-inputs">
          <label htmlFor="password2" className="form-label">
            Confirm Password
          </label>
          <input type="password" 
            id="password2"
            name="password2"
            className="form-input"
            placeholder="Confirm Your Password"
             value={values.password2}
            onChange={changeHandler}/>
            {errors.password2 && <p className="error">{errors.password2}</p>  }
        </div>
        

        <button className="form-input-btn" type="submit">Sign Up</button>
        <span className="form-input-login">
          Already Have an Account? <a href="/">Login Here</a>
        </span>
      </form>
    </div>
  )
}

export default FormSignup
