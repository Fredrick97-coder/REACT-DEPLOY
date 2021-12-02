import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter as Router } from 'react-router-dom'

import { StateProvider } from './context/StateProvider'
import reducer, { initialState } from './context/Reducer'

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
        <App />
      </Router>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
