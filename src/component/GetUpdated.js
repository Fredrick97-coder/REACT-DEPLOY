import React, { useState } from 'react'
import '../assets/getupdated.css'
import { ImUsers } from 'react-icons/im'
import { toast } from 'react-toastify'
import { useMutation, gql } from '@apollo/client'
// import { ADD_NEWS } from '../graphql/mutations'

const ADD_NEWS = gql`
  mutation AddNews(
    $name: String!
    $email: String!
    $phone: String!
    $message: String!
  ) {
    newNewsLetter(
      name: $name
      email: $email
      phone: $phone
      message: $message
    ) {
      name
      email
      phone
      message
    }
  }
`

function GetUpdated() {
  const [newName, setNewName] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [toggle, setToggle] = useState(false)

  let name, email

  const [createNews] = useMutation(ADD_NEWS)

  const handleSubmit = async (e) => {
    e.preventDefault()

    createNews({
      variables: {
        name: name.value,
        email: email.value,
      },
    })

    setNewName('')
    setNewEmail('')
  }

  const notify = () =>
    toast(
      'Thanks for subscribing to B2B Agency regular feeds, we will always update you on trending jobs',
    )

  return (
    <div className="container__updated">
      <h2>Get Updated</h2>
      <div className="form__wrapper">
        <ImUsers />
        <div className="form__container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ea
            ab. Temporibus possimus, corrupti placeat deleniti fugit voluptatem
            repellat rem!
          </p>
          <form className="form__container__wrapper" onSubmit={handleSubmit}>
            <div className="input__area">
              <h4>Name</h4>
              <input
                ref={(value) => (name = value)}
                id="name"
                value={newName}
                type="text"
                placeholder="Enter name here"
                onChange={(e) => setNewName(e.target.value)}
                required
              />
              <h4>Email</h4>
              <input
                ref={(value) => (email = value)}
                id="email"
                value={newEmail}
                type="email"
                placeholder="Enter email here"
                required
                onChange={(e) => setNewEmail(e.target.value)}
              />
            </div>
            <div className="radio__btn">
              <div>
                <input type="radio" unchecked />
                <label style={{ paddingLeft: '10px' }}>Job Seeker</label>
              </div>
              <div>
                <input
                  type="radio"
                  value={toggle}
                  onClick={() => {
                    setToggle(true)
                  }}
                />
                <label style={{ paddingLeft: '10px' }}>Employer</label>
              </div>
            </div>
            <button type="submit" className="contact__btn" onClick={notify}>
              Submit
              {/* <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
                Submit
              </a> */}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default GetUpdated
