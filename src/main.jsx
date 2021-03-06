import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './tailwind.css'
import App from './App'

ReactDOMClient.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)
