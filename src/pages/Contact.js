import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import '../assets/contact.css'
import { toast } from 'react-toastify'
import { ADD_CONTACT } from '../graphql/mutations'

export default function Contact() {
  const [newName, setNewName] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newMessage, setNewMessage] = useState('')
  const [createContact, { data, loading, error }] = useMutation(ADD_CONTACT)

  if (loading) return 'loading...'
  if (error) return `Submission error!${error.message}`
  let name, email, phone, message

  const handleSubmit = async (e) => {
    e.preventDefault()

    createContact({
      variables: {
        name: name.value,
        email: email.value,
        phone: phone.value,
        message: message.value,
      },
    })

    setNewName('')
    setNewEmail('')
    setNewPhone('')
    setNewMessage('')
  }

  const notify = () =>
    toast(
      'You have successfully sent a message to B2B Agency and we will get back to you shortly',
    )

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
                ref={(value) => (name = value)}
                id="name"
                value={newName}
                type="text"
                className="contact__input"
                placeholder="Eg. John Smith"
                required
                onChange={(e) => setNewName(e.target.value)}
              />
            </div>

            <div className="input two">
              <label className="contact__label">Email:</label>
              <input
                ref={(value) => (email = value)}
                id="email"
                value={newEmail}
                type="email"
                className="contact__input"
                placeholder="Eg. loremipsum122@gmail.com"
                required
                onChange={(e) => setNewEmail(e.target.value)}
              />
            </div>
            <div className="input three">
              <label className="contact__label">Phone Number:</label>
              <input
                ref={(value) => (phone = value)}
                id="phone"
                value={newPhone}
                type="text"
                className="contact__input"
                placeholder="Eg. 233545200015"
                required
                onChange={(e) => setNewPhone(e.target.value)}
              />
            </div>

            <div className="input four">
              <label className="contact__label">Message:</label>
              <textarea
                ref={(value) => (message = value)}
                id="message"
                value={newMessage}
                name=""
                cols="30"
                rows="10"
                placeholder="
              Type job details....
            "
                className="contact__textarea"
                required
                onChange={(e) => setNewMessage(e.target.value)}
              />
            </div>
            <div className="post__btn__container">
              <button className="contact__btn" type="submit" onClick={notify}>
                Submit
              </button>
            </div>
            <p className="contact__number">Call us on +233 26 698 1426 </p>
          </form>
        </div>
      </div>
    </div>
  )
}
