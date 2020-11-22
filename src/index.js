import React from 'react'
import ReactDOM from 'react-dom'
import App from '../src/App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './dist/style.css'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
