import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import '../../assets/login.css'
import { useStateValue } from '../../context/StateProvider'
// import { useMutation } from '@apollo/react-hooks'
// import { USER_CREATE } from '../../../Graphql/mutation'
import { auth } from '../../firebase'

const Login = () => {
  let navigate = useNavigate()

  const [{}, dispatch] = useStateValue()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [loading, setLoading] = useState(false)

  // const [userCreate] = useMutation(USER_CREATE)

  const handleSubmit = async (e) => {
    e.preventDefault()
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        const { user } = auth
        const idTokenResult = user.getIdTokenResult()
        console.log(idTokenResult)
        dispatch({
          type: 'SET_USER',
          payload: { email: user.email, token: idTokenResult.token },
        })
        toast.success(`User ${auth.user.email} as successfully logged in`)
        navigate('/')
      })
      .catch((err) => toast.error(err.message))
  }

  return (
    <div className="login__wrapper">
      <div className="circle__login">
        <h1>Login</h1>
        <form>
          <div className="txt__field">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span></span>
            <label>Email</label>
          </div>
          <div className="txt__field">
            <input
              type="password"
              value={password}
              name="password"
              // disabled={loading}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span></span>
            <label>Password</label>
          </div>
          <div className="pass"> Forgot Password?</div>
          <input type="submit" value="Login" onClick={handleSubmit} />
          <div className="signup_link">
            Not a member? <Link to="/register">Signup</Link>
          </div>
          {/* <input
            type="submit"
            value="Login with Google"
            onClick={googleLogin}
            id="google"
          /> */}
        </form>
      </div>
    </div>
  )
}

export default Login
