import './App.css'
import { Route, Routes, useParams } from 'react-router-dom'
import Navbar from './component/navbar'
import Home from './pages/Home'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import CompleteRegistration from './pages/auth/CompleteRegistration'
import SinglePost from './pages/SinglePost'
import Footer from './component/Footer'
import Jobs from './pages/Jobs'
import PostJobs from './pages/PostJobs'
import { ToastContainer } from 'react-toastify'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import { useStateValue } from './context/StateProvider'
import React, { useEffect } from 'react'
import { auth } from './firebase'

import { InMemoryCache } from '@apollo/client'
import { createHttpLink } from 'apollo-link-http'
import { ApolloClient, ApolloProvider } from '@apollo/client'
import SearchResult from './component/SearchResult'

function App() {
  const [{}, dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log('THE USER IS >>>', authUser)

      if (authUser) {
        //the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, [])

  const client = new ApolloClient({
    link: createHttpLink({ uri: process.env.REACT_APP_GRAPHQL_ENDPOINT }),
    cache: new InMemoryCache(),
  })

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" caseSensitive={false} element={<Home />} />
          <Route path="/jobs/details/:postid" element={<SinglePost />} />
          <Route path="/search/:query" element={<SearchResult />} />
          <Route path="/login" caseSensitive={false} element={<Login />} />
          <Route
            path="/register"
            caseSensitive={false}
            element={<Register />}
          />
          <Route
            path="/register"
            caseSensitive={false}
            element={<CompleteRegistration />}
          />
          <Route path="/jobs" caseSensitive={false} element={<Jobs />} />
          <Route
            path="/postjobs"
            caseSensitive={false}
            element={<PostJobs />}
          />
          <Route path="/contact" caseSensitive={false} element={<Contact />} />
          <Route path="*" caseSension={false} element={<NotFound />} />
        </Routes>

        <Footer />
        <ToastContainer />
      </div>
    </ApolloProvider>
  )
}

export default App
