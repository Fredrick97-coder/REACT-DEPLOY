import React, { useState, useMemo, useEffect } from 'react'
import '../assets/jobdetails.css'
import { toast } from 'react-toastify'
import { useLazyQuery, useMutation } from '@apollo/react-hooks'
import { SINGLE_POST } from '../graphql/queries'
// import omitDeep from 'omit-deep'
import { useParams } from 'react-router-dom'
import { ADD_JOB_SEEKER, NEWS_SUBSCRIPTION } from '../graphql/mutations'
import { gql } from 'apollo-boost'

const SEEKER = gql`
  mutation NewJobSeeker(
    $username: String!
    $title: String!
    $companyName: String!
    $userphone: String!
    $location: String!
    $useremail: String!
  ) {
    newJobSeeker(
      input: {
        username: $username
        title: $title
        companyName: $companyName
        userphone: $userphone
        location: $location
        useremail: $useremail
      }
    ) {
      username
      title
      userphone
      location
      useremail
      companyName
    }
  }
`

function SinglePost() {
  const [username, setUserName] = useState('')
  const [useremail, setUserEmail] = useState('')
  const [userphone, setUserPhone] = useState('')
  const [title, setTitle] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [location, setLocation] = useState('')
  const [getSinglePost, { data: singlePost }] = useLazyQuery(SINGLE_POST)
  const [newName, setNewName] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
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

  // JobSeekers
  const [newJobSeeker, { loading, error }] = useMutation(SEEKER)

  function handleJobSeekerSubmit(e) {
    e.preventDefault()
    newJobSeeker({
      variables: {
        username,
        title,
        userphone,
        location,
        useremail,
        companyName,
      },
    })

    setUserName('')
    setUserEmail('')
    setUserPhone('')
    setTitle('')
    setCompanyName('')
    setLocation('')

    toast.success(
      'You have successfully sent an application to this job. We will review it and get back to you shortly.',
    )
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
  const [createNews] = useMutation(NEWS_SUBSCRIPTION)

  const handleSubmit = async (e) => {
    e.preventDefault()

    createNews({
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
          {/* {JSON.stringify(values)} */}

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
                value={username}
                type="text"
                placeholder="Your Name"
                required
                onChange={(e) => setUserName(e.target.value)}
              />
              <input
                value={useremail}
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
                value={companyName}
                type="text"
                placeholder="Company Name"
                required
                onChange={(e) => setCompanyName(e.target.value)}
              />
              <input
                value={title}
                type="text"
                placeholder="Job Title"
                required
                onChange={(e) => setTitle(e.target.value)}
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
                value={userphone}
                type="text"
                placeholder="Phone Number"
                required
                onChange={(e) => setUserPhone(e.target.value)}
              />
              <input
                value={location}
                type="text"
                placeholder="Your Location"
                required
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div
              className="section__four"
              style={{ margin: '10px 0px 10px 20px' }}
            ></div>
            <hr />
            <div className="section__five">
              <button
                type="submit"
                className="btn btn-primary"
                style={{ margin: '10px 0px 10px 20px' }}
              >
                Apply Now
              </button>
            </div>
            {error && <p>{error.message}</p>}
          </form>
        </div>

        {/* NewsLetter */}

        <form onSubmit={handleSubmit} id="newsletter">
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
                value={name}
                type="text"
                placeholder="First Name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                value={email}
                type="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
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
              <button type="submit" disabled={loading}>
                SUBSCRIBE
              </button>
            </div>
          </div>
          {error && <p>{error.message}</p>}
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
