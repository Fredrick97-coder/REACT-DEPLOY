import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import { SEARCH } from '../graphql/queries'
import { AiOutlineHeart } from 'react-icons/ai'
import { BiHide } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { month, year } from '../pages/Jobs'
import Pagination from '../pages/Pagination'

export default function SearchResult() {
  const [currentPage, setCurrentPage] = React.useState(1)
  const [postsPerPage, setPostsPerPage] = React.useState(10)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  //route query
  const { query } = useParams()

  //gql query
  const { data, loading } = useQuery(SEARCH, {
    variables: {
      query,
    },
  })

  if (loading)
    return (
      <div className="container text-center">
        <p className="text-danger p-5">Loading...</p>
      </div>
    )

  if (!data.search.length)
    return (
      <div className="container text-center">
        <p className="text-danger p-5">No results...</p>
      </div>
    )

  return (
    <div className="row pb-5">
      {data.search.map((post) => {
        const { _id, title, img, hours, venue } = post
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
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={data.search.length}
        paginate={paginate}
      />
    </div>
  )
}
