import { useMutation } from '@apollo/react-hooks'
import React, { useState } from 'react'
import '../assets/contact.css'
import { toast } from 'react-toastify'
import { NEW_CONTACT } from '../graphql/mutations'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [newContact, { loading, error }] = useMutation(NEW_CONTACT)

  function handleSubmit(e) {
    e.preventDefault()

    newContact({
      variables: {
        name,
        email,
        phone,
        message,
      },
    })

    setName('')
    setEmail('')
    setPhone('')
    setMessage('')

    toast.success(
      'You have successfully sent a message to B2B Agency and we will get back to you shortly',
    )
  }

  return (
    <div className="contact__container">
      <div className="title__info">
        <h3>Contact Us</h3>
        <p>
          Please complete the form to state your enquiries for the B2B Team and
          will attend to you as soon as possible
        </p>
      </div>
      <div className="contact__card__container">
        <div className="contact__form__container">
          <form className="contact__job__card" onSubmit={handleSubmit}>
            <div className="input one">
              <label className="contact__label">Name:</label>
              <input
                value={name}
                type="text"
                className="contact__input"
                placeholder="Eg. John Smith"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="input two">
              <label className="contact__label">Email:</label>
              <input
                value={email}
                type="email"
                className="contact__input"
                placeholder="Eg. loremipsum122@gmail.com"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input three">
              <label className="contact__label">Phone Number:</label>
              <input
                value={phone}
                type="text"
                className="contact__input"
                placeholder="Eg. 233545200015"
                required
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="input four">
              <label className="contact__label">Message:</label>
              <textarea
                value={message}
                name=""
                cols="30"
                rows="10"
                placeholder="
              Type job details....
            "
                className="contact__textarea"
                required
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="post__btn__container">
              <button className="contact__btn" disabled={loading} type="submit">
                Submit
              </button>
            </div>
            <p className="contact__number">Call us on +233 26 698 1426 </p>
            {error && <p>{error.message}</p>}
          </form>
        </div>
      </div>
    </div>
  )
}
