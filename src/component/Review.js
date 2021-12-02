import React from 'react'
// import { GoArrowSmallLeft, GoArrowSmallRight } from 'react-icons/go'
import '../assets/reviews.css'

function Reviews() {
  return (
    <div className="review__container">
      <h2 className="text-white">Customer Reviews</h2>
      {/* <div className="arrow__left"><GoArrowSmallLeft /></div> */}
      <div className="review__client">
        <div className="user__comment__container1">
          <img
            src="https://images.pexels.com/photos/6172477/pexels-photo-6172477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            class=""
            alt=""
          />
          <div className="user__comments">
            <p className="py-3">
              Business2Business has always been the go-to advertisement firm for
              my company. I love their services and hospitality.
            </p>
            <div className="name__area1">
              <h4>Sarah Winfred</h4>
              <p>Operations Manager|Unified</p>
            </div>
          </div>
        </div>
        <div className="section2">
          <div className="user__comment__container2">
            <img
              src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
              class=""
              alt=""
            />
            <div className="user__comments">
              <p className="py-3">
                I came across this agency back in 2017 when I was searching for
                a job. Thier composure, setting and willing to serve is awesome
              </p>
              <div className="name__area2">
                <h4>Michael Todd</h4>
                <p>Executive Director|SpringField</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="arrow__right">
        <GoArrowSmallRight />
      </div> */}
    </div>
  )
}

export default Reviews
