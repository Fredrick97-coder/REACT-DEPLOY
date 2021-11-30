import { useMutation } from '@apollo/react-hooks'
import React, { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import '../assets/postjobs.css'
import { ADD_NEW_JOBS } from '../component/AddPostSetup'
import { toast, ToastContainer } from 'react-toastify'

export default function PostJobs() {
  // const [{ basket, user }, dispatch] = useStateValue()
  const [newTitle, setNewTitle] = useState('')
  // const [loading, setLoading] = useState(false)
  const [newEmployerName, setNewEmployerName] = useState('')
  const [newCompanyName, setNewCompanyName] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newVenue, setNewVenue] = useState('')
  const [newImg, setNewImg] = useState('')
  const [newJobType, setNewJobType] = useState('')
  const [newDescription, setNewDescription] = useState('')
  const [newHours, setNewHours] = useState('')

  let title,
    employerName,
    companyName,
    email,
    phone,
    venue,
    img,
    jobType,
    description,
    hours

  const [createJob] = useMutation(ADD_NEW_JOBS)

  const handleSubmit = async (e) => {
    e.preventDefault()

    createJob({
      variables: {
        title: title.value,
        description: description.value,
        img: img.value,
        venue: venue.value,
        employerName: employerName.value,
        companyName: companyName.value,
        email: email.value,
        phone: phone.value,
        jobType: jobType.value,
        hours: hours.value,
      },
    })

    setNewTitle('')
    setNewCompanyName('')
    setNewDescription('')
    setNewEmail('')
    setNewHours('')
    setNewEmployerName('')
    setNewImg('')
    setNewPhone('')
    setNewJobType('')
    setNewVenue('')
  }

  const notify = () => toast('You have successfully added a new job')

  return (
    <>
      <div className="post__container">
        <h3 className="post__title">kindly fill out all the details below</h3>
        <div className="post__card__container">
          <div className="post__form">
            <form className="post__job__card" onSubmit={handleSubmit}>
              <div className="input__section__one">
                <div className="left__input">
                  <label className="post__label">Employer:</label>
                  <input
                    ref={(value) => (employerName = value)}
                    id="employerName"
                    value={newEmployerName}
                    type="text"
                    className="post__input"
                    placeholder="Eg. John Smith"
                    required
                    onChange={(e) => setNewEmployerName(e.target.value)}
                  />
                </div>
                <div className="right__input">
                  <label className="post__label">Phone Number:</label>
                  <input
                    ref={(value) => (phone = value)}
                    id="phone"
                    value={newPhone}
                    type="text"
                    className="post__input"
                    placeholder="Eg. 233545200015"
                    required
                    onChange={(e) => setNewPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="input__section__two">
                <div className="left__input">
                  <label className="post__label">Email:</label>
                  <input
                    ref={(value) => (email = value)}
                    id="email"
                    value={newEmail}
                    type="email"
                    className="post__input"
                    placeholder="Eg. loremipsum122@gmail.com"
                    required
                    onChange={(e) => setNewEmail(e.target.value)}
                  />
                </div>
                <div className="right__input">
                  <label className="post__label">Company Name:</label>
                  <input
                    ref={(value) => (companyName = value)}
                    id="companyName"
                    value={newCompanyName}
                    type="text"
                    className="post__input"
                    placeholder="Eg. Joyous Ventures"
                    required
                    onChange={(e) => setNewCompanyName(e.target.value)}
                  />
                </div>
              </div>
              <div className="input__section__three">
                <div className="left__input">
                  <label className="post__label">Job Title:</label>
                  <input
                    ref={(value) => (title = value)}
                    id="title"
                    value={newTitle}
                    type="text"
                    className="post__input"
                    placeholder="Eg. Receptionist"
                    required
                    onChange={(e) => setNewTitle(e.target.value)}
                  />
                </div>
                <div className="center__input">
                  <label className="post__label">Venue/Location:</label>
                  <input
                    ref={(value) => (venue = value)}
                    id="venue"
                    value={newVenue}
                    type="text"
                    className="post__input"
                    placeholder="Eg. East Legon"
                    required
                    onChange={(e) => setNewVenue(e.target.value)}
                  />
                </div>
                <div className="right__input">
                  <label className="post__label">Working Hours:</label>
                  <input
                    ref={(value) => (hours = value)}
                    id="hours"
                    value={newHours}
                    type="text"
                    className="post__input"
                    placeholder="Eg. 8hours/Day"
                    required
                    onChange={(e) => setNewHours(e.target.value)}
                  />
                </div>
              </div>
              <div className="input__section__four">
                <div className="left__input">
                  <label className="post__label">Job Type:</label>
                  <input
                    ref={(value) => (jobType = value)}
                    id="jobType"
                    value={newJobType}
                    type="text"
                    className="post__input"
                    placeholder="Eg. Room-to-Room Administrator"
                    required
                    onChange={(e) => setNewJobType(e.target.value)}
                  />
                </div>
                <div className="right__input">
                  <label for="profile_pic" className="post__label">
                    Choose image url to upload:
                  </label>
                  <input
                    type="text"
                    // accept="image/*"
                    ref={(value) => (img = value)}
                    id="img"
                    value={newImg}
                    className="post__input"
                    placeholder="Eg: https://imageurl.com"
                    // onChange={fileResizeAndUpdate}
                    onChange={(e) => setNewImg(e.target.value)}
                  />
                </div>
              </div>
              <div className="input__section__five">
                <label className="post__label">Job Description:</label>
                <textarea
                  ref={(value) => (description = value)}
                  name=""
                  value={newDescription}
                  id="description"
                  cols="30"
                  rows="10"
                  placeholder="    
              Type job details....
            "
                  className="post__textarea"
                  required
                  onChange={(e) => setNewDescription(e.target.value)}
                />
              </div>
              <div className="post__btn__container">
                <button className="btn" type="submit" onClick={notify}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <h3 className="text-danger">Notice</h3>
        <p>This section is only for Job Creators</p>
        <p>
          B2B Team is ready to serve you 24/7 with our experienced technical
          team
        </p>
      </div>
      <ToastContainer />
    </>
  )
}
