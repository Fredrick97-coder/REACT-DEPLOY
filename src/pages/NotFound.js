import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/notfound.css'

function NotFound() {
  return (
    <div className="page__not__found">
      <div className="text-center">
        <h3>
          Oops!
          <img
            style={{ height: '30px' }}
            src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/smiling-face-with-tear_1f972.png"
            alt=""
          />
          Page Not Found{' '}
          <span>
            <Link to="/">Click here....</Link>
          </span>
        </h3>
      </div>
    </div>
  )
}

export default NotFound
