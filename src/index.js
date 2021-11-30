import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import 'react-toastify/dist/ReactToastify.css'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router } from 'react-router-dom'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'
import { ApolloClient, ApolloProvider } from '@apollo/client'
import { StateProvider } from './context/StateProvider'
import reducer, { initialState } from './context/Reducer'

const client = new ApolloClient({
  link: createHttpLink({ uri: process.env.REACT_APP_GRAPHQL_ENDPOINT }),
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
        <StateProvider initialState={initialState} reducer={reducer}>
          <App />
        </StateProvider>
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
