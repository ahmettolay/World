import { useEffect, useContext } from 'react'
import BlogCreate from './components/BlogCreate'

import BlogContext from './context/blogs'

const App = () => {
  const { fetchBlogs } = useContext(BlogContext)
  useEffect(() => {
    fetchBlogs()
  }, [])

  return (
    <div className='app'>
      <h1>Blog Listesi</h1>
           <BlogCreate />
           <BlogList />

    </div>
  )
}
export default App