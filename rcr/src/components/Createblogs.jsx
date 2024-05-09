import React, { useEffect, useRef } from 'react'
import {v4 as uuidv4} from 'uuid';

const Createblogs = ({addBlogs}) => {


    const userIdRef = useRef("")
    const titleRef = useRef("")
    const bodyRef = useRef("")
    const tagsRef = useRef("")
    const reactionsRef = useRef("")




    const handleSubmit = (e) => {
        e.preventDefault();
        addBlogs({id: uuidv4(), userId: userIdRef.current.value, title: titleRef.current.value, body: bodyRef.current.value, tags: tagsRef.current.value, reactions: reactionsRef.current.value});
        userIdRef.current.value = ""
titleRef.current.value = ""
bodyRef.current.value = ""
tagsRef.current.value = ""
reactionsRef.current.value = ""
    }
  return (
    <form onSubmit={(e) => handleSubmit(e)} className='h-100 w-100 d-flex justify-content-center align-items-center'>
        <div className='m-5 d-flex flex-column justify-content-center align-items-center'>
            <label htmlFor="userId">User Id</label>
            <input type="text" className='inp' ref={userIdRef}/>

            <label htmlFor="title">Title</label>
            <input type="text" className='inp' ref={titleRef}/>

            <label htmlFor="body">Body</label>
            <input type="text" className='inp' ref={bodyRef}/>

            <label htmlFor="tags">Tags</label>
            <input type="text" placeholder='put comma after each tag' className='inp' ref={tagsRef}/>

            <label htmlFor="reactions">Reactions</label>
            <input type="number" className='inp' ref={reactionsRef}/>

            <button type='submit' className='btn btn-warning'>Submit</button>
        </div>
    </form>
  ) 
}

export default Createblogs