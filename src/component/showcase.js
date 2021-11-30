import React from 'react'
import '../assets/showcase.css'
import * as style from 'react-reveal'
import Jump from 'react-reveal/Jump'
import svg from '../assets/constants/home.svg'
import Typical from 'react-typical'

export const img =
  'https://images.unsplash.com/photo-1612296727716-d6c69d2a2cbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80'

const HomeShowcase = () => {
  return (
    <style.Zoom>
      <div className="showcase__section">
        <div
          className="conatiner card bg-transparent"
          style={{ maxWidth: '70vmin' }}
        >
          <Jump>
            <h5 className="card-header pt-5 fw-bold">Welcome</h5>
          </Jump>
          <div className="card-body">
            <h5 className="card-title">to B2B Agency</h5>
            <p className="card-text">
              In here, we listen to you, provide you with diverse possibilities
              in discovering your next job opportunity, next employer and many
              more
            </p>
            <button
              type="button"
              className="btn btn-outline-light btn-rounded"
              data-mdb-ripple-color="dark"
              style={{
                textAlign: 'center',
                marginBottom: '30px',
              }}
            >
              Get Started
            </button>
          </div>
        </div>
        {/* <Typical
          steps={[
            'Welcome to B2B Agency',
            1000,
            'Add value to your life',
            1000,
            'Here, you get the chance of working with renowed campanies ',
            1000,
          ]}
          loop={Infinity}
          wrapper="p"
        /> */}
        <div className="svg__container">
          <img src={svg} alt="" height="200" style={{ marginRight: '40px' }} />
        </div>
      </div>
    </style.Zoom>
  )
}

export default HomeShowcase
