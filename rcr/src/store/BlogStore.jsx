import { createContext, useCallback, useEffect, useReducer, useState } from "react";
import axios from 'axios';


export const BlogStore = createContext({
    blogsList: [],
    addBlogs: () => {},
    editBlogs: () => {},
    deleteBlog: () => {},
    handlePageShowcase: () => {},
  showPage: () => {},
  searchBlog: () => {}
}) 


function pureReducerFunction(currentState, action) {
    let newBlogList = currentState;
    if(action.type === "INITIAL_BLOGS"){
        newBlogList = action.payload.data;
    }
    else if(action.type === "ADD_BLOG"){
        newBlogList = [action.payload.data, ...currentState];
    }else if(action.type === "EDIT_BLOG"){
        let index = currentState.findIndex(x => x._id === action.payload.id);
        let newBlogListToUpload = [...currentState]
        newBlogListToUpload.splice(index, 1, {_id: action.payload.id, userId: action.payload.data.userId, body: action.payload.data.body, title: action.payload.data.title, tags: action.payload.data.tags, reactions: action.payload.data.reactions, id: action.payload.data.id });
        newBlogList = newBlogListToUpload
    }else if(action.type === "DELETE_BLOG"){
        let findBlogAndDelete = currentState.filter(x => x._id !== action.payload.id);
        newBlogList = findBlogAndDelete;
    }else if(action.type === "SEARCH_BLOG"){
      newBlogList = action.payload.data;
    }
    return newBlogList;
}


const BlogStoreContextProvider = ({children}) => {

    // const [blogsList, setBlogsList] = useState([]);
    const [showPage, setShowPage] = useState("createBlogs");
  
    const [getAddBlog, setAddBlog] = useState("");
    const [getEditBlog, setEditBlog] = useState("");
    const [getdeleteBlog, setdeleteBlog] = useState("");

    const [blogsList, dispacthBlogList] = useReducer(pureReducerFunction, []);

    const [search, setSearch] = useState("");

  
  
    useEffect(() => {
      const controller = new AbortController();
      const {signal} = controller;
      const fetchBlogs = async() => {
        try{
          const {data} = await axios.get('http://127.0.0.1:8084/blog', signal);
        //   setBlogsList(data);
          useCallback(dispacthBlogList({
            type: "INITIAL_BLOGS",
            payload: {
                data
            }
          }), [dispacthBlogList])
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
      const addBlogRequest = async({id, userId, title, body, tags, reactions}) => {
        try{
          const {data} = await axios.post('http://127.0.0.1:8084/blog/new', {
          id, userId, title, body, tags, reactions
        })
        // setBlogsList([data, ...blogsList])

        useCallback(dispacthBlogList({
            type: "ADD_BLOG",
            payload: {
                data,
            }
        }),[dispacthBlogList])
        }catch(error) {
          console.log("Error", error)
        }
      }
  
      if(getAddBlog.title){
        addBlogRequest(getAddBlog);
      }
    }, [getAddBlog])
  
  
    useEffect(() => {
      const deleteBlogRequest = async(id) => {
        try{
          const {data} = await axios.delete(`http://127.0.0.1:8084/blog/${id}`);
        //   let findBlogAndDelete = blogsList.filter(x => x.id !== id);
        //   setBlogsList(findBlogAndDelete)
        useCallback(dispacthBlogList({
            type: "DELETE_BLOG",
            payload: {
                id
            }
        }), [dispacthBlogList])

        }catch(error) {
          console.log("Error", error)
        }
      }
  
      if(getdeleteBlog){
        deleteBlogRequest(getdeleteBlog);
      }
    }, [getdeleteBlog])
  
    
    useEffect(() => {
      const editBlogRequest = async({id, userId, title, body, reactions, tags}) => {
        try{
          const {data} = await axios.put(`http://127.0.0.1:8084/blog/${id}`, {
            userId, title, body, reactions, tags
          });
          useCallback(dispacthBlogList({
            type: "EDIT_BLOG",
            payload: {
                data,
                id
            }
          }), [dispacthBlogList])
         
        //   setBlogsList(newBlogList);
        }catch(error) {
          console.log("Error", error)
        }
      }
  
      if(getEditBlog){
        editBlogRequest(getEditBlog);
      }
    }, [getEditBlog])

    useEffect(() => {
      const fetchSearch = async(value) => {
        try{
          const {data} = await axios.get(`http://127.0.0.1:8084/blog/search?title=${value}`);
          useCallback(dispacthBlogList({
            type: "SEARCH_BLOG",
            payload: {
              data,
            }
          }), [dispacthBlogList])
        }catch(error){
          console.log("Error", error)
        }
      }
      
        const timer = setTimeout(() => {
            fetchSearch(search)
        }, 600)

        return () => {
          clearTimeout(timer)
        }

    }, [search])
  
  
  
    const handlePageShowcase = (pg) => {
      setShowPage(pg)
    }
  
    const addBlogs = (blog) => {
      setAddBlog(blog)
    }
  
    const editBlogs = (blog) => {
      setEditBlog(blog)
    }
  
    const deleteBlog = (id) => {
      setdeleteBlog(id)
    }


    const searchBlog = (title) => {
        setSearch(title);
    }

    return(
        <BlogStore.Provider value={{blogsList, addBlogs, editBlogs, deleteBlog,handlePageShowcase
            , showPage, searchBlog}}>
            {children}
        </BlogStore.Provider>
    )
}

export default BlogStoreContextProvider;