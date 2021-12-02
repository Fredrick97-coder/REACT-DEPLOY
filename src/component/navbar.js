import React, { useState } from 'react'
import { CgClose } from 'react-icons/cg'
import { Link } from 'react-router-dom'
import '../assets/navbar.css'
import logo from '../assets/constants/logo.png'
import { AiOutlineLogin } from 'react-icons/ai'
import { MdContactMail } from 'react-icons/md'
import { auth } from '../firebase'
import { useStateValue } from '../context/StateProvider'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [{ user }, dispatch] = useStateValue()

  // let navigate = useNavigate()

  const handleAuthentication = () => {
    if (user) {
      auth.signOut()
    }
  }

  return (
    <div className="header__container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div
            className="justify-content-between collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <div className="row">
              <Link className="navbar-brand mt-2 mt-lg-0" to="/">
                <img src={logo} height="35" alt="" loading="lazy" />
              </Link>
            </div>

            <div className="">
              <ul className="navbar-nav mb-2 mb-lg-0 mx-7">
                <span className="nav-link text-primary">hello,</span>
                <li className="nav-item">
                  <span className="nav-link">
                    {user
                      ? user?.email.slice(0, user?.email.indexOf('@'))
                      : 'Guest'}
                  </span>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/postjobs">
                    Hiring? Post a job
                  </Link>
                </li>
                <li className="nav-item">
                  {user ? (
                    ''
                  ) : (
                    <Link className="nav-link" to={!user && '/login'}>
                      <AiOutlineLogin
                        fill="#001A3B"
                        style={{ fontSize: '20px', fontWeight: '700' }}
                      />
                    </Link>
                  )}
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    <MdContactMail
                      fill="#001A3B"
                      style={{ fontSize: '20px' }}
                    />
                  </Link>
                </li>
                <li className="nav-item">
                  {user ? (
                    ''
                  ) : (
                    <Link
                      className="nav-link"
                      to={!user && '/register'}
                      style={{
                        backgroundColor: '#001A3B',
                        borderRadius: '15px',
                        color: '#fff',
                        paddingLeft: '7px',
                      }}
                    >
                      Sign Up
                    </Link>
                  )}
                </li>
                <li className="nav-item">
                  {user ? (
                    <Link
                      to="/"
                      className="nav-link"
                      onClick={handleAuthentication}
                    >
                      LOGOUT
                    </Link>
                  ) : (
                    ''
                  )}
                </li>
              </ul>
            </div>
          </div>
          {}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <CgClose /> : <i className="fas fa-bars" />}
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
