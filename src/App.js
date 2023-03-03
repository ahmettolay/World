import { useEffect, useContext } from 'react'
import BlogCreate from './components/BlogCreate'
import BlogList from "./components/BlogList"
import BlogContext from './context/blogs'
import NavBar from './components/NavBar'
import BlogCard from './components/Card/BlogCard'


const App = () => {
  const { fetchBlogs } = useContext(BlogContext)
  useEffect(() => {
    fetchBlogs()
  }, [])

  return (
    <div className='app'>
            <NavBar/>
      <h1>Blog Listesi</h1>
      <div className='BlogCard'>
            <BlogCreate />
            <BlogList />
      </div>
            <BlogCard/>
            

           
           

    </div>
  )
}
export default App