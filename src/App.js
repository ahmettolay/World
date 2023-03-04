import { useEffect, useContext } from 'react'
import BlogCreate from './components/BlogCreate'
import BlogList from "./components/BlogList"
import BlogContext from './context/blogs'
import NavBar from './components/NavBar/NavBar'
import BlogCard from './components/Card/BlogCard'
import Header from './components/Header/header'


const App = () => {
  const { fetchBlogs } = useContext(BlogContext)
  useEffect(() => {
    fetchBlogs()
  }, [])

  return (
    <div className='app'>
      <Header/>
      
            <NavBar/>
      <h1>Blog Listesi</h1>
      <div className='Blog'>
            <BlogCreate />
            <BlogList />
      </div>
            {/* <BlogCard/> */}
            

           
           

    </div>
  )
}
export default App