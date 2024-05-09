import { useEffect, useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard';
import axios from 'axios'

function App() {

  const [blogsList, setBlogsList] = useState([]);
  const [showPage, setShowPage] = useState("createBlogs");

  const [getAddBlog, setAddBlog] = useState("")
  const [getEditBlog, setEditBlog] = useState("")
  const [getdeleteBlog, setdeleteBlog] = useState("")


  useEffect(() => {
    const controller = new AbortController();
    const {signal} = controller;
    const fetchBlogs = async() => {
      try{
        const {data} = await axios.get('http://localhost:8081/posts', signal);
        setBlogsList(data);
      }catch(error) { 
        console.log("Error", error)
      }
    }

    fetchBlogs();


    return () => {
      controller.abort();
    }
  }, [])

  useEffect(() => {
    const addBlogRequest = async() => {
      try{
        const {data} = await axios.post('http://localhost:8081/posts', {
        id, userId, title, body, tags, reactions
      })
      console.log(data)
      }catch(error) {
        console.log("Error", error)
      }
    }

    if(getAddBlog.title){
      addBlogRequest();
    }
  }, [getAddBlog])


  useEffect(() => {
    const deleteBlogRequest = async(id) => {
      try{
        const {data} = await axios.delete(`http://localhost:8081/posts/${id}`);
        console.log(data)
      }catch(error) {
        console.log("Error", error)
      }
    }

    if(getdeleteBlog){
      deleteBlogRequest();
    }
  }, [getdeleteBlog])

  
  useEffect(() => {
    const editBlogRequest = async({id, usrId, title, body, reactions, tags}) => {
      try{
        const {data} = await axios.put(`http://localhost:8081/posts/${id}`, {
          id, usrId, title, body, reactions, tags
        });
        console.log(data)
      }catch(error) {
        console.log("Error", error)
      }
    }

    if(getEditBlog){
      editBlogRequest();
    }
  }, [getEditBlog])



  const handlePageShowcase = (pg) => {
    setShowPage(pg)
  }

  const addBlogs = (blog) => {
    console.log(blog)
  }

  const editBlogs = (blog) => {
    console.log(blog)
  }

  const deleteBlog = (id) => {
    console.log(id)
  }

  return (
    <div>
      <Dashboard blogsList={blogsList} handlePageShowcase={handlePageShowcase} showPage={showPage} addBlogs={addBlogs}/>
    </div>
  )
}

export default App
