import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from './context/blogs'
import './index.css'
import "./blogShow.css"
import "./blogCreate.css"




const el = document.getElementById('root')
const root = ReactDOM.createRoot(el)
root.render(
  <Provider>
    <App />
  </Provider>
)