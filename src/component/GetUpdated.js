import React, { useState } from 'react'
import '../assets/getupdated.css'
import { ImUsers } from 'react-icons/im'
import { toast } from 'react-toastify'
import { useMutation } from '@apollo/react-hooks'
import { NEWS_SUBSCRIPTION } from '../graphql/mutations'

function GetUpdated() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [newNews, { loading, error }] = useMutation(NEWS_SUBSCRIPTION)

  function handleSubmit(e) {
    e.preventDefault()

    newNews({
      variables: {
        name,
        email,
      },
    })

    setName('')
    setEmail('')
    toast.success(
      'You have successfully subscribed to our daily news on job updates',
    )
  }

  return (
    <div className="container__updated" id="newsletter">
      <h2>Get Updated</h2>
      <div className="form__wrapper">
        <ImUsers />
        <div className="form__container">
          <h4 style={{ fontFamily: 'Poppins' }}>
            Join our weekly newsletter updates to get the latest job posting,
            recommendations and available traings straight from your inbox
          </h4>
          <form className="form__container__wrapper" onSubmit={handleSubmit}>
            <div className="input__area">
              <h4>Name</h4>
              <input
                value={name}
                type="text"
                placeholder="Enter name here"
                onChange={(e) => setName(e.target.value)}
                required
              />
              <h4>Email</h4>
              <input
                value={email}
                type="email"
                placeholder="Enter email here"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="radio__btn">
              {/* <div>
                <input type="radio" unchecked />
                <label style={{ paddingLeft: '10px' }}>Job Seeker</label>
              </div>
              <div>
                <input
                  type="radio"
                  // value={toggle}
                  // onClick={() => {
                  //   setToggle(true)
                  // }}
                />
                <label style={{ paddingLeft: '10px' }}>Employer</label>
              </div> */}
            </div>
            <button type="submit" className="contact__btn" disabled={loading}>
              Submit
              {/* <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
                Submit
              </a> */}
            </button>
            {error && <p>{error.message}</p>}
          </form>
        </div>
      </div>
    </div>
  )
}

export default GetUpdated
