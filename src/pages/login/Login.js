import React from 'react'
import img from '../../assets/images/login-img.png'
import logo from '../../assets/images/logo.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../../context'

function Login({hideNav, setHideNav}) {  
const {inputType} = useGlobalContext()
 setHideNav(hideNav)
  return (
    <main>
      <div className='container'>
        <div className='logo'>
          <img src={logo} alt='' />
        </div>
        <div className='main-wrapper'>
          <div className='left-wrapper'>
            <img src={img} alt='file not found' />
          </div>
          <div className='right-wrapper'>
            <div className='right-header'>
              <h2>Welcome!</h2>
              <p>Enter details to login.</p>
            </div>
            <form >
              <div className='form-control'>
                <input type='text' placeholder='Email' />
              </div>
              <div className='password-control form-control'>
                <input type={inputType} placeholder='Password'/>
                <div className='show'>
                  <p>show</p>
                </div>
              </div>
              <div className='forget-password'>
                <a href='#'>Forgot Password</a>
              </div>
              <div className='login-btn'>
                <button>Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Login
