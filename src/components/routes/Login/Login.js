import React, { useState } from "react"
import { usePromiseTracker } from "react-promise-tracker"

//redux
import { connect } from "react-redux"
import { login } from "../../../redux/action/auth"

//components
import Button from "../../ui/Button/Button"
import Spinner from "../../ui/Spinner/Spinner"

//scss
import "./Login.scss"

const Login = (props) => {
   const { promiseInProgress } = usePromiseTracker()
   const [formData, setFormData] = useState({
      email: "",
      password: "",
   })
   const handleChange = (e) => {
      const { name, value } = e.target
      setFormData((prevState) => ({
         ...prevState,
         [name]: value,
      }))
   }
   const onButtonClick = (e) => {
      e.preventDefault()
      // console.log("clcked");
      console.log(formData.email)
      props.login(formData)
   }
   return (
      <>
         <div className='login'>
            <div className='login__form'>
               <div className='login__form--heading'>Welcome back ;)</div>

               <form action='' className='login__form--box' noValidate>
                  <label className='login__form--box--label'>Email</label>
                  <input
                     type='email'
                     name='email'
                     className='login__form--box--input'
                     placeholder='example@email.com'
                     onChange={handleChange}
                  />
                  <label className='login__form--box--label'>Password</label>

                  <input
                     type='password'
                     name='password'
                     className='login__form--box--input'
                     placeholder='Required'
                     onChange={handleChange}
                  />
                  <Button
                     //   onClick={login}
                     style={{
                        width: "100%",
                        borderRadius: "4px",
                        height: "30px",
                        marginBottom: "16px",
                        position: "relative",
                     }}
                     onclick={onButtonClick}
                     value={
                        promiseInProgress ? (
                           <div>
                              <Spinner />
                           </div>
                        ) : (
                           "Login"
                        )
                     }
                     type='blue'
                  />

                  <label className='login__form--box--warning'>
                     Note: Must have an admin account in{" "}
                     <a href='#'>dhaushop.herokuapp.com</a>
                  </label>
               </form>
            </div>
         </div>
      </>
   )
}

export default connect(null, { login })(Login)
