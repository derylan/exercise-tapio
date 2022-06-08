import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import DisplayPost from './DisplayPost'
import FormPost from './FormPost'

const AddPost = () => {

    const userName = useRef();
    const userTitle = useRef();
    const context = useRef();
    const LOCAL_STORAGE_KEY = 'newPost';
    const [posts, setPosts] = useState([]);
    const [apiPosts, setApiPosts] = useState([]);
    const [toggle, setToggle] = useState(false);
    const v4 = uuidv4();

    useEffect(() => {
        const storedPost = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (storedPost) {
            setPosts(storedPost)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(posts));
    }, [posts])

    const handlePost = (e) => {
        e.preventDefault();
        let id = userName.current.value;
        let title = userTitle.current.value;
        let body = context.current.value;
        setPosts(prevPost => {
            return [...prevPost, { v4: id, id, title, body }]
        })
        userName.current.value = '';
        userTitle.current.value = '';
        context.current.value = '';
    }

    const deletePost = (id) => {
        setPosts(posts.filter((post) => post.id !== id))
    }

    
    // const [editForm, setEditForm] = useState(false);
    // const formEdit = () => {
    //     setEditForm(!editForm)
    // }

    // const editPost = (id) => {
    //     setPosts(posts.filter((post) => post.id), { userName, title, context })
    // }

    return (
        <div className='m-5'>
            <h2 className="text-3xl m-3 text-center">Share some thoughts</h2>
            <FormPost 
            handlePost={handlePost} 
            userName={userName} 
            userTitle={userTitle} 
            context={context} 
            setApiPosts={setApiPosts}
            setToggle={setToggle}
            toggle={toggle}
            />
            <h3 className="text-2xl m-2 underline text-center m-8">Our users shared thoughts:</h3>
            <div className='grid grid-cols-5 h-auto w-auto p-2 border-2'>
                <h4 className='font-bold '>Name</h4>
                <h4 className='font-bold '>Title</h4>
                <h4 className='font-bold '>Post</h4>
                <h4 className='font-bold '>Edit</h4>
                <h4 className='font-bold '>Delete</h4>
            </div>
                <DisplayPost posts={toggle ? apiPosts : posts} onDelete={deletePost} />
        </div>
    )
}

export default AddPost  