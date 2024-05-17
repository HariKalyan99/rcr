import React, { useContext, useState } from 'react'
import { BlogStore } from '../store/BlogStore'

const Editblogs = ({
    setOpenEdit, openEdit, blog}) => {

        const {editBlogs} = useContext(BlogStore)
    const [getuserId, setuserId] = useState(blog.userId)
const [gettitle, settitle] = useState(blog.title)
const [getbody, setbody] = useState(blog.body)
const [gettags, settags] = useState(blog.tags)
const [getreactions, setreactions] = useState(blog.reactions)


const handleSubmit = (e) => {
    e.preventDefault();
    editBlogs({userId: Number(getuserId), title: gettitle, body: getbody, tags: gettags.split(","), reactions: Number(getreactions), id: blog._id});
    setOpenEdit(!openEdit)
}


  return (
    <form onSubmit={(e) => handleSubmit(e)} className='h-100 w-100 d-flex justify-content-center align-items-center'>
    <div className='m-5 d-flex flex-column justify-content-center align-items-center'>
        <label htmlFor="userId">User Id</label>
        <input type="text" className='inp' value={getuserId} onChange={(e) => setuserId(e.target.value)}/>

        <label htmlFor="title">Title</label>
        <input type="text" className='inp' value={gettitle} onChange={(e) => settitle(e.target.value)}/>

        <label htmlFor="body">Body</label>
        <input type="text" className='inp' value={getbody} onChange={(e) => setbody(e.target.value)}/>

        <label htmlFor="tags">Tags</label>
        <input type="text" placeholder='put comma after each tag' className='inp' value={gettags} onChange={(e) => settags(e.target.value)}/>

        <label htmlFor="reactions">Reactions</label>
        <input type="number" className='inp' value={getreactions} onChange={(e) => setreactions(e.target.value)}/>

        <button type='submit' className='btn btn-warning'>Submit</button>

        <button onClick={() => setOpenEdit(!openEdit)}>Don't edit</button>
    </div>
</form>
  )
}

export default Editblogs