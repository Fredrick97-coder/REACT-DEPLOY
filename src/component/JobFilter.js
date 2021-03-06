import React, { useState } from 'react'
import { AiOutlineDoubleRight } from 'react-icons/ai'
import { ImSearch } from 'react-icons/im'
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import '../assets/jobfilter.css'
import { GET_ALL_POSTS } from '../graphql/queries'
import { useQuery } from '@apollo/client'

function JobFilter() {
  const { data, loading, error } = useQuery(GET_ALL_POSTS)
  const [filteredData, setFilteredData] = useState([])
  const [wordEntered, setWordEntered] = useState('')

  let navigate = useNavigate()
  const handleFilter = (event) => {
    const searchWord = event.target.value
    setWordEntered(searchWord)
    const newFilter = data.allPosts.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase())
    })

    if (searchWord === '') {
      setFilteredData([])
    } else {
      console.log(setFilteredData(newFilter))
    }
  }

  const clearInput = () => {
    setFilteredData([])
    setWordEntered('')
  }

  return (
    <div className="filter__container" id="search">
      <div className="job__filter__container">
        <h2>Find the right job vacancy in Ghana</h2>
        <form className="filter__wrapper">
          <div className="job__type">
            <label htmlFor="">What</label>
            <div className="search__input">
              <input
                type="text"
                placeholder="Job title"
                onChange={handleFilter}
                value={wordEntered}
              />
              <div className="search__icon">
                {filteredData.length === 0 ? (
                  <AiOutlineSearch />
                ) : (
                  <AiOutlineClose id="clear__btn" onClick={clearInput} />
                )}
              </div>
            </div>
          </div>

          {/* <div className="search__btn">
            <div>Search</div>
            <ImSearch />
          </div> */}
        </form>
        <div className="browse__container">
          <Link to="/jobs">Browse Jobs</Link>
          <AiOutlineDoubleRight />
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, id) => {
            return (
              <div key={id} className="data__item">
                <div className="link__background">
                  <Link to={`/jobs/details/${value._id}`} target="_blank">
                    {value.title}
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      )}
      {/* {JSON.stringify(filteredData)} */}
    </div>
  )
}

export default JobFilter
