import React, { useState } from 'react'
import { ImSearch } from 'react-icons/im'
import { useNavigate } from 'react-router-dom'
import '../assets/search.css'

export default function Search() {
  const [query, setQuery] = useState('')
  let navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search/${query}`)
  }

  return (
    <div className="search__container">
      <form onSubmit={handleSubmit}>
        <div className="query__search">
          <div>
            <input
              className="input"
              value={query}
              type="search"
              placeholder="Search"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="query__search__btn">
              Search
              <ImSearch />
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
