
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [blogsList, setblogsList] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    ftechBlogs()
  })

  const ftechBlogs = async () => {
    const api = "https://apis.ccbp.in/ipl";
    const response = await axios.get(api)
    console.log(response.data.teams)
    setblogsList(response.data.teams);
  }

  const onClickBlogDetails = async (blogsId) => {
    const api = `https://apis.ccbp.in/ipl${blogsId}`
    const response = await axios.get(api);
    setSelectedBlog(response.data)
  }
  console.log(blogsList);
  console.log(selectedBlog);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 ">
          <h1 className='heading'> IPL Dashboard</h1>
        </div>
        <div className="col-md-4">
          {blogsList.map((blogs) =>
            <div className="d-flex flex-row mb-2 blogs_container">
              <img src={blogs.team_image_url} alt={blogs.title} className=' image_url' />
            <p style={{marginLeft:"50px"}}>{blogs.name}</p>
            </div>

          )}
        </div>
        
        </div>
    </div>
      
  )
}
export default App;