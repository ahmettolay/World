import { useEffect, useContext } from 'react'
import BlogCreate from './components/Blogs/BlogCreate'
import BlogList from "./components/Blogs/BlogList"
import BlogContext from './context/blogs'
import NavBar from './components/Headers/NavBar'
import HomePage from './components/Pages/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Info from './components/Pages/Info'
import Educations from './components/Pages/Educations'
import Blog from './components/Pages/Blog'
import Layout from './components/Layout/Layout'
import Footer from './components/Footer/Footer'



const App = () => {
  const { fetchBlogs } = useContext(BlogContext)
  useEffect(() => {
    fetchBlogs()
  }, [])

  return (
    <div  className='app'>
           
            <BrowserRouter>
           
            <Routes>
              <Route element={<Layout/>}>
              <Route path='/' element={<HomePage />}/>
              <Route path='/components/Page/HomePage' element={<HomePage />}/>
              <Route path='/components/Pages/Info' element={<Info />}/>
              <Route path='/components/Page/Educations' element={<Educations />}/>
              <Route path='/components/Page/Blog' element={<Blog />}/>
              </Route>
            </Routes>
            </BrowserRouter>
            <Footer/>
           
      
       <div className='BlogCard'>
      
            {/* <BlogList />
            <BlogCreate /> */}
      </div>
    </div>
  )
}
export default App
