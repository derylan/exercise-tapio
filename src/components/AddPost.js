import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { v4 as uuidv4} from 'uuid'
import FormPost from './FormPost'

const AddPost = () => {

    const userName = useRef();
    const title = useRef();
    const context = useRef();
    const LOCAL_STORAGE_KEY = 'newPost';
    const [posts, setPosts] = useState([]);
    const id = uuidv4();

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
        let firstInput = userName.current.value;
        let secondInput = title.current.value;
        let thirdInput = context.current.value;
        setPosts(prevPost => {
            return[...prevPost, {id: id, firstInput, secondInput, thirdInput}]
        })
        firstInput.current.value = '';
        secondInput.current.value = '';
        thirdInput.current.value = '';
    }

    return (
        <div>
            <h2>Share some thoughts</h2>
            <FormPost handlePost={handlePost} userName={userName} title={title} context={context}/>
        </div>
    )
}   

    export default AddPost  