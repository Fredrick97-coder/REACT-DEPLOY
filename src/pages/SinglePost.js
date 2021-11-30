import React, { useState, useMemo, useEffect } from 'react'
import '../assets/jobdetails.css'
import { toast } from 'react-toastify'
import { useLazyQuery, useMutation } from '@apollo/react-hooks'
import { ADD_NEWS } from '../graphql/mutations'
import { SINGLE_POST } from '../graphql/queries'
import omitDeep from 'omit-deep'
import { useParams } from 'react-router-dom'
import { ADD_JOB_SEEKER } from '../graphql/mutations'

function SinglePost() {
  const [jobUser, setJobUser] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPhone, setUserPhone] = useState('')
  const [userTitle, setUserTitle] = useState('')
  const [userCompanyName, setUserCompanyName] = useState('')
  const [userLocation, setUserLocation] = useState('')
  const [getSinglePost, { data: singlePost }] = useLazyQuery(SINGLE_POST)
  const [newName, setNewName] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [values, setValues] = useState({
    img: '',
    description: '',
    venue: '',
    hours: '',
    employerName: '',
    email: '',
    phone: '',
    companyName: '',
    title: '',
    jobType: '',
  })

  let username, userphone, companyName, title, useremail, location
  let name, email
  // JobSeekers
  const [createJobSeeker] = useMutation(ADD_JOB_SEEKER)

  const handleJobSeekerSubmit = async (e) => {
    e.preventDefault()

    try {
      await createJobSeeker({
        variables: {
          username: username.value,
          useremail: useremail.value,
          userphone: userphone.value,
          companyName: companyName.value,
          title: title.value,
          location: location.value,
        },
      })

      setJobUser('')
      setUserEmail('')
      setUserPhone('')
      setUserTitle('')
      setUserCompanyName('')
      setUserLocation('')

      toast.success(
        'You have successfully sent an application to this job. We will review it and get back to you shortly.',
      )
    } catch (err) {
      toast.error(err.message)
    }
  }

  // const jobSeekerNotify = () =>

  //router

  const { postid } = useParams()

  // Display of jobdetails
  useMemo(() => {
    if (singlePost) {
      setValues({
        ...values,
        _id: singlePost.singlePost._id,
        description: singlePost.singlePost.description,
        venue: singlePost.singlePost.venue,
        hours: singlePost.singlePost.hours,
        employerName: singlePost.singlePost.employerName,
        email: singlePost.singlePost.email,
        phone: singlePost.singlePost.phone,
        img: singlePost.singlePost.img,
        companyName: singlePost.singlePost.companyName,
        title: singlePost.singlePost.title,
        jobType: singlePost.singlePost.jobType,
      })
    }
  }, [singlePost])

  //Creating newsletter
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

  useEffect(() => {
    getSinglePost({ variables: { postId: postid } })
  }, [])

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const d = new Date()
  const year = d.getFullYear()
  let month = months[d.getMonth()]

  return (
    <div className="jobDetails__container">
      <div className="jobdetails__left__side__content">
        <div className="left__side__details">
          <div className="section__one">Job Details: </div>
          <hr />
          <div className="section__two">
            <div className="jobdetails__card__container">
              <span className="side__decor"></span>
              <div className="jobdetails__left__content">
                <p className="data__posted">
                  Posted: <span>{`${month} ${year}`}</span>
                </p>
                <div>
                  <h5>
                    <span style={{ color: '#001A3B', paddingRight: '5px' }}>
                      Job Type:
                    </span>
                    {/* {values.jobType} */}
                  </h5>
                </div>
                <div>
                  <h5>
                    <span style={{ color: '#001A3B', paddingRight: '5px' }}>
                      Working Hours:
                    </span>
                    {values.hours}
                  </h5>
                </div>
                <div>
                  <h5>
                    <sapn style={{ color: '#001A3B', paddingRight: '5px' }}>
                      Venue:
                    </sapn>
                    {values.venue}
                  </h5>
                </div>
              </div>
              <div className="jobdetails__img">
                <img src={values.img} alt="title" />
              </div>
            </div>
          </div>
          <hr />
          <div className="section__three">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h4 style={{ padding: '5px 0px 5px 20px', fontWeight: '600' }}>
                <span style={{ color: '#001A3B' }}>Company:</span>{' '}
                {values.companyName}
              </h4>
              <h4 style={{ padding: '5px 20px 5px 20px', fontWeight: '600' }}>
                <span style={{ color: '#001A3B' }}>Job Title:</span>{' '}
                {values.title}
              </h4>
            </div>
            <h5 style={{ padding: '20px 0px 0px 20px', color: '#001A3B' }}>
              Job Description:
            </h5>
            <p style={{ color: 'black', padding: '20px' }}>
              {values.description}
            </p>
            <hr />
          </div>
          <hr />
          {JSON.stringify(values)}

          {/* JobSeeker Application */}

          <form onSubmit={handleJobSeekerSubmit}>
            <div className="notice__section">
              <span className="title">Notice:</span>{' '}
              <p>
                Kindly fill out all the fields correctly in order to be
                contacted.
              </p>
              <p>
                Make sure that the company name and the title of the job
                <br />
                provided above are the same as the ones you provide in the form
              </p>
              <p>
                Failure to do so, may result in you not getting response from
                <br />
                B2B Administration team{' '}
              </p>
              <p>
                Call us for any information, our team is ready to help you 24/7
              </p>
              <p>Thank You</p>
              <p className="contact__number">Call us on +233 26 698 1426 </p>
            </div>

            <hr />
            <h3 style={{ textAlign: 'center' }}>Application Form</h3>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: '20px',
              }}
              className="job__application__form"
            >
              <input
                ref={(value) => (username = value)}
                id="username"
                value={jobUser}
                type="text"
                placeholder="Your Name"
                required
                onChange={(e) => setJobUser(e.target.value)}
              />
              <input
                ref={(value) => (useremail = value)}
                id="useremail"
                value={userEmail}
                type="email"
                placeholder="Email"
                required
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: '20px',
              }}
              className="job__application__form"
            >
              <input
                ref={(value) => (companyName = value)}
                id="companyName"
                value={userCompanyName}
                type="text"
                placeholder="Company Name"
                required
                onChange={(e) => setUserCompanyName(e.target.value)}
              />
              <input
                ref={(value) => (title = value)}
                id="title"
                value={userTitle}
                type="text"
                placeholder="Job Title"
                required
                onChange={(e) => setUserTitle(e.target.value)}
              />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: '20px',
              }}
              className="job__application__form"
            >
              <input
                ref={(value) => (userphone = value)}
                id="userphone"
                value={userPhone}
                type="text"
                placeholder="Phone Number"
                required
                onChange={(e) => setUserPhone(e.target.value)}
              />
              <input
                ref={(value) => (location = value)}
                id="location"
                value={userLocation}
                type="text"
                placeholder="Your Location"
                required
                onChange={(e) => setUserLocation(e.target.value)}
              />
            </div>
            <div
              className="section__four"
              style={{ margin: '10px 0px 10px 20px' }}
            >
              {/* <input type="file" /> */}
            </div>
            <hr />
            <div className="section__five">
              <button
                // onClick={jobSeekerNotify}
                type="submit"
                className="btn btn-primary"
                style={{ margin: '10px 0px 10px 20px' }}
              >
                Apply Now
              </button>
            </div>
          </form>
        </div>

        {/* NewsLetter */}

        <form onSubmit={handleSubmit}>
          <div className="get__intouch">
            <div className="stay__updated">
              <h3>Stay Updated</h3>
              <p>
                Join our newsletter and get the latest job listings and career
                insights delivered straight to your inbox.
              </p>
            </div>
            <div className="input__fields">
              <input
                ref={(value) => (name = value)}
                id="name"
                value={newName}
                type="text"
                placeholder="First Name"
                onChange={(e) => setNewName(e.target.value)}
              />
              <input
                ref={(value) => (email = value)}
                id="email"
                value={newEmail}
                type="email"
                placeholder="email"
                onChange={(e) => setNewEmail(e.target.value)}
              />
            </div>
            <div className="subscription">
              <div className="subscription__radio">
                <div className="input__radio__left">
                  <input type="radio" />
                  <span>Job Seeker</span>
                </div>
                <div className="input__radio__right">
                  <input type="radio" />
                  <span>Job Creator</span>
                </div>
              </div>
              <button type="submit" onClick={notify}>
                SUBSCRIBE
              </button>
            </div>
          </div>
        </form>
      </div>
      <div
        className="jobdetails__right__side__content"
        style={{ backgroundColor: 'black' }}
      >
        <div className="title" style={{ paddingTop: '5px' }}>
          <h4 style={{ textAlign: 'center', color: 'white' }}>
            Our Goals for Users
          </h4>
          <div className="content">
            <p style={{ color: 'white' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              aliquam officia ullam labore non natus minus quos placeat nostrum
              libero!
            </p>
          </div>
          <span className="vertical__line"></span>
        </div>
        <div className="title" style={{ paddingTop: '2px' }}>
          <h4 style={{ textAlign: 'center', color: 'white' }}>
            Our Goals for Users
          </h4>
          <div className="content">
            <p style={{ color: 'white' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              aliquam officia ullam labore non natus minus quos placeat nostrum
              libero!
            </p>
          </div>
          <span className="vertical__line"></span>
        </div>
      </div>
    </div>
  )
}

export default SinglePost
