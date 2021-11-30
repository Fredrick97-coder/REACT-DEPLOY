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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Distinctio suscipit obcaecati voluptatum illo et perferendis!
            </p>
            <div className="name__area1">
              <h4>Fredrick Otabil</h4>
              <p>DevOps Developer</p>
            </div>
          </div>
        </div>
        <div className="section2">
          <div className="user__comment__container2">
            <img
              src="https://images.pexels.com/photos/6170558/pexels-photo-6170558.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              class=""
              alt=""
            />
            <div className="user__comments">
              <p className="py-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Distinctio suscipit obcaecati voluptatum illo et perferendis!
              </p>
              <div className="name__area2">
                <h4>Sarah Otabil</h4>
                <p>SysOps Developer</p>
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
