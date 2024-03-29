import React from 'react'
import ReactDOM from 'react-dom'
import App from '../src/app/App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './style/style.css'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
