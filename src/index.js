import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from './context/blogs'
import './index.css'
import "./components/Blogs/blogShow.css"
import "./components/Blogs/blogCreate.css"
import "../src/components/Footer/footer.css"




const el =  document.getElementById('root')
const root = ReactDOM.createRoot(el)
root.render(
  <Provider>
    <App />
  </Provider>
)
