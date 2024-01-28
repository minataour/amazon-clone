import React from 'react'
import './Login.css'
import { Link , useNavigate} from 'react-router-dom'
import { auth } from './firebase'
import {  signInWithEmailAndPassword ,createUserWithEmailAndPassword } from 'firebase/auth'

function Login() {
    const history = useNavigate()
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const signIn = e => {
        e.preventDefault()
        
        signInWithEmailAndPassword(auth, email, password)
        .then((auth) => {
            if(auth) {
                history('/')
            }
        })
        .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault()
        
        createUserWithEmailAndPassword( auth,email,password)
        .then((auth) => {
            if(auth) {
                history('/')
            }
        })
        .catch(error => alert(error.message))
    }

  return (
    <div className='login'>
        <Link to='/'>
            <img 
            className='login__logo'
            src="https://pngimg.com/uploads/amazon/amazon_PNG2.png" 
            />
        </Link>

        <div className='login__container'>
            <h1>Sign in</h1>

            <form>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                <button type='submit' onClick= {signIn} className='login__signInButton'>Sign In</button>
            </form>

            <p>
                By signing-in you agree to Amazon's (FAKE CLONE) Conditions of Use & Sale. Please see our Privacy Notice, out Cookies Notice and our Internet-Based Ads Notice.
            </p>

            <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
        </div>
    </div>
  )
}

export default Login