import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import App from './App'

import GlobalStyle from './styles/globals'

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <ToastContainer />
    <App />
  </Fragment>
, document.getElementById('root'))
