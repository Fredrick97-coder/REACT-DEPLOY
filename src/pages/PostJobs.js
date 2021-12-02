import { useMutation } from '@apollo/react-hooks'
import React, { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import '../assets/postjobs.css'
import { NEW_JOB } from '../graphql/mutations'
import { toast, ToastContainer } from 'react-toastify'
import { BsFillCloudArrowDownFill } from 'react-icons/bs'

export default function PostJobs() {
  // const [{ basket, user }, dispatch] = useStateValue()
  const [image, setImage] = useState('')
  const [url, setUrl] = useState('')
  const [title, setTitle] = useState('')
  const [employerName, setEmployerName] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [venue, setVenue] = useState('')
  const [img, setImg] = useState('')
  const [jobType, setJobType] = useState('')
  const [description, setDescription] = useState('')
  const [hours, setHours] = useState('')
  const [newPost, { loading, error }] = useMutation(NEW_JOB)

  const handleSubmit = async (e) => {
    e.preventDefault()
    newPost({
      variables: {
        title,
        description,
        img,
        venue,
        employerName,
        companyName,
        email,
        phone,
        jobType,
        hours,
      },
    })

    setTitle('')
    setCompanyName('')
    setDescription('')
    setEmail('')
    setHours('')
    setEmployerName('')
    setImg('')
    setPhone('')
    setJobType('')
    setVenue('')

    toast.success('You have successfully added a new job')
  }

  const uploadImage = () => {
    const data = new FormData()
    data.append('file', image)
    data.append('upload_preset', 'bw95ywzc')
    data.append('cloud_name', 'dldtrwovx')
    fetch('  https://api.cloudinary.com/v1_1/dldtrwovx/image/upload', {
      method: 'post',
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setImg(data.url)
        toast.success('Image uploaded successfully')
      })
      .catch((err) => console.log(err))
  }
  console.log(img)

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
                    value={employerName}
                    type="text"
                    className="post__input"
                    placeholder="Eg. John Smith"
                    required
                    onChange={(e) => setEmployerName(e.target.value)}
                  />
                </div>
                <div className="right__input">
                  <label className="post__label">Phone Number:</label>
                  <input
                    value={phone}
                    type="text"
                    className="post__input"
                    placeholder="Eg. 233545200015"
                    required
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="input__section__two">
                <div className="left__input">
                  <label className="post__label">Email:</label>
                  <input
                    value={email}
                    type="email"
                    className="post__input"
                    placeholder="Eg. loremipsum122@gmail.com"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="right__input">
                  <label className="post__label">Company Name:</label>
                  <input
                    value={companyName}
                    type="text"
                    className="post__input"
                    placeholder="Eg. Joyous Ventures"
                    required
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </div>
              </div>
              <div className="input__section__three">
                <div className="left__input">
                  <label className="post__label">Job Title:</label>
                  <input
                    value={title}
                    type="text"
                    className="post__input"
                    placeholder="Eg. Receptionist"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="center__input">
                  <label className="post__label">Venue/Location:</label>
                  <input
                    value={venue}
                    type="text"
                    className="post__input"
                    placeholder="Eg. East Legon"
                    required
                    onChange={(e) => setVenue(e.target.value)}
                  />
                </div>
                <div className="right__input">
                  <label className="post__label">Working Hours:</label>
                  <input
                    value={hours}
                    type="text"
                    className="post__input"
                    placeholder="Eg. 8hours/Day"
                    required
                    onChange={(e) => setHours(e.target.value)}
                  />
                </div>
              </div>
              <div className="input__section__four">
                <div className="left__input">
                  <label className="post__label">Job Type:</label>
                  <input
                    value={jobType}
                    type="text"
                    className="post__input"
                    placeholder="Eg. Room-to-Room Administrator"
                    required
                    onChange={(e) => setJobType(e.target.value)}
                  />
                </div>
                <div className="right__input">
                  <label for="profile_pic" className="post__label">
                    Copy generated image link to upload:
                  </label>
                  <input
                    className="post__input img"
                    type="text"
                    value={img}
                    disabled
                    onChange={(e) => setImg(e.target.value)}
                  />
                  <div className="image__link__generator ">
                    <input
                      type="file"
                      onChange={(e) => setImage(e.target.files[0])}
                      required
                    />
                    <button onClick={uploadImage}>Upload</button>
                  </div>
                </div>
              </div>
              <div className="input__section__five">
                <label className="post__label">Job Description:</label>
                <textarea
                  value={description}
                  id="description"
                  cols="30"
                  rows="10"
                  placeholder="    
              Type job details....
            "
                  className="post__textarea"
                  required
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="post__btn__container">
                <button className="btn" disabled={loading} type="submit">
                  Submit
                </button>
              </div>
              {error && <p>{error.message}</p>}
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
