import React from 'react'
import { MdLocationOn, MdAccessTime } from 'react-icons/md'
import '../assets/trendingjobs.css'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_ALL_POSTS } from '../graphql/queries'

export function TrendingJobs() {
  const { data, loading, error } = useQuery(GET_ALL_POSTS)

  if (loading) return <p>Loading...</p>
  if (error) return <pre>{error.message}</pre>

  return (
    <div className="trending__jobs">
      <h4 className="header__trending">Trending Jobs</h4>
      <div className="trending__card__container">
        {data.allPosts.map((job) => {
          const { _id, title, venue, hours, img, jobType } = job
          return (
            <div key={_id} className="trending__job__card">
              <img src={img} alt={title} className="img__job" />
              <h3 className="title__job">{title}</h3>
              <h4 className="venue__job">{venue}</h4>
              <div className="description__container">
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '20px',
                    paddingTop: '5px',
                  }}
                >
                  <MdLocationOn style={{ fontSize: '23px' }} />
                  <div className="location__job">{venue}</div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <MdAccessTime style={{ fontSize: '23px' }} />
                  <div className="description__job">
                    {jobType} | <span> {hours}</span>
                  </div>
                </div>
              </div>
              <Link to={`/joblist/${_id}`}>
                <h5
                  style={{
                    fontSize: '15px',
                    paddingTop: '7px',
                    color: '#001A3B',
                    textDecoration: 'underline',
                    lineHeight: 3,
                    cursor: 'pointer',
                  }}
                >
                  Read More...
                </h5>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
