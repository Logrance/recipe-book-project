import React from 'react'
import ReactDOM from 'react-dom/client'

// ? app
import App from './App/App.jsx';

// ? styles
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
