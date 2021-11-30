import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import '../../assets/register.css'
// import { useStateValue } from '../../../context/StateProvider'
import { auth } from '../../firebase'
import { useNavigate } from 'react-router-dom'

function Register() {
  // const [{ user }, dispatch] = useStateValue()
  // const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  let navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    if (!email || !password) {
      toast.error('Email and password is required')
      return
    }
    const config = {
      url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT,
      handleCodeInApp: true,
    }
    auth.sendSignInLinkToEmail(email, config) &&
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
          console.log(auth)
          if (auth) {
            toast.success(
              `Email is sent to ${email}. click the link to verify your account...`,
            )
            navigate('/login')
          }
        })
        .catch((err) => {
          toast.error(err.message)
          setLoading(false)
        })
  }

  return (
    <div className="login__wrapper">
      <div className="circle__login">
        <div className="signup__container">
          {loading ? (
            <h1 className="text-danger">Loading....</h1>
          ) : (
            <h1 className="signup__title">Register</h1>
          )}
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
                disabled={loading}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span></span>
              <label>Password</label>
            </div>
            <div className="pass"> Forgot Password?</div>
            <input type="submit" value="Sign Up" onClick={handleSubmit} />
            <div className="signup_link">
              Already a member? <Link to="/login">SignIn</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
