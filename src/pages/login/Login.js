import React from 'react'
import img from '../../assets/images/login-img.png'
import logo from '../../assets/images/logo.png'
import { useState } from 'react'
import { useGlobalContext } from '../../context'
import { useNavigate } from 'react-router-dom'

function Login({ setShowNav }) {
  const { handleSubmit, isAuthenticated, loginError } = useGlobalContext()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [inputType, setInputType] = useState('password')

  const navigate = useNavigate()

  const showPassword = () => {
    if(password){
      if (inputType === 'password') {
      setInputType('text')
    } else if(inputType === 'text') {
      setInputType('password')
    }
  }
    
}

  if (isAuthenticated) {
    navigate('/dashboard')
  }

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
            <form>
              <div className='form-control'>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type='text'
                  placeholder='Email'
                />
              </div>
              <div className='password-control form-control'>
                <input
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={inputType}
                />
                <div className='show' onClick={showPassword}>
                  <p>{inputType == 'password' ? 'Show' : 'Hide'}</p>
                </div>
              </div>
              {loginError.show ? (
                <p className='error'>{loginError.msg}</p>
              ) : null}
              <div className='forget-password'>
                <a href='#'>Forgot Password</a>
              </div>
              <div className=''>
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    handleSubmit(email, password)
                  }}
                  className='login-btn'
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Login
