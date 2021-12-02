import { useQuery, useLazyQuery } from '@apollo/client'
import React, { useState } from 'react'
import { GET_ALL_POSTS } from '../graphql/queries'
import '../assets/jobs.css'
import { AiOutlineHeart } from 'react-icons/ai'
import { BiHide } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import Pagination from './Pagination'
import Search from '../component/Search'

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
export const year = d.getFullYear()
export const month = months[d.getMonth()]

export default function Jobs() {
  const { data, loading, error } = useQuery(GET_ALL_POSTS)
  const [currentPage, setCurrentPage] = React.useState(1)
  const [postsPerPage, setPostsPerPage] = React.useState(10)

  if (loading) return <p>Loading</p>
  if (error) return <pre>{error.message}</pre>

  const indexOfLastPage = currentPage * postsPerPage
  const indexOfFirstPage = indexOfLastPage - postsPerPage
  // const currentPosts = data.slice(indexOfFirstPage, indexOfLastPage)
  console.log(data)

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  return (
    <>
      {/* <Search /> */}
      <div className="jobs">
        <div className="job__container__wrapper">
          {data.allPosts.map((post) => {
            const { _id, title, hours, venue, img } = post
            return (
              <div className="job__card__container" key={_id}>
                <span className="side__decor"></span>
                <div className="jobs__left__side__content">
                  <h3>
                    <Link to={`/jobs/details/${_id}`}>{title}</Link>
                  </h3>
                  <p className="data__posted">
                    <h4>
                      <span style={{ paddingRight: '5px', color: ' #001A3B' }}>
                        Posted:
                      </span>
                      {`${month} ${year}`}
                    </h4>
                  </p>

                  <div>
                    <h4>
                      <span style={{ paddingRight: '5px', color: ' #001A3B' }}>
                        Working Hours:
                      </span>
                      {hours}
                    </h4>
                    <h4>
                      <span style={{ paddingRight: '5px', color: ' #001A3B' }}>
                        Location:
                      </span>
                      {venue}
                    </h4>
                  </div>
                </div>

                <div className="jobs__right__side__content">
                  <img src={img} alt="title" />
                  <div className="jobs__btn__container">
                    <div className="jobs__svg__container">
                      <AiOutlineHeart className="jobs__svg" />
                      <button className="jobs__btn">Shortlist</button>
                    </div>
                    <div className="jobs__svg__container">
                      <BiHide className="jobs__svg" />
                      <button className="jobs__btn">Hide</button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="review">
          <div className="side__content">
            <div className="title">
              <h4>Our Goals for Users</h4>
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  aliquam officia ullam labore non natus minus quos placeat
                  nostrum libero!
                </p>
              </div>
              <span className="vertical__line"></span>
            </div>
            <div className="title">
              <h4>Our Goals for Users</h4>
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  aliquam officia ullam labore non natus minus quos placeat
                  nostrum libero!
                </p>
              </div>
              <span className="vertical__line"></span>
            </div>
            <div className="title">
              <h4>Our Goals for Users</h4>
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  aliquam officia ullam labore non natus minus quos placeat
                  nostrum libero!
                </p>
              </div>
              <span className="vertical__line"></span>
            </div>
          </div>
        </div>
      </div>
      {/* {JSON.stringify(currentPosts)} */}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={data.allPosts.length}
        paginate={paginate}
      />
    </>
  )
}
