import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// import LButton from '../LightingButton/LightingButton'
// import LButtonPage from '../LButtonPage/LButtonPage'

const HomePage = () => {
  return (
    <div className="h-student">
      {/* <Router>
        <Switch>
          <Route path="/" exact>
            <button className="lighting-btn" onClick={() => window.location.href='/lbutton'}>Işınlanma Butonu</button>
            <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="example" />
          </Route>
          <Route path="/LButton">
            <LButtonPage />
          </Route>
        </Switch>
        
      </Router> */}
      <h1>HomePage</h1>
    </div>
  )
}

export default HomePage
