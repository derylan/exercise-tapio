import React from 'react'

const FormPost = ( {handlePost, userName, userTitle, context, setApiPosts, toggle, setToggle }) => {

    const API_URL = 'https://jsonplaceholder.typicode.com/posts';

    fetch(API_URL)
    .then(response => response.json())
    .then(json => setApiPosts(json))

    return (
        <>
        <form className='grid justify-items-center'>
            <button className='rounded-full bg-sky-500 w-1/6' onClick={() => {setToggle(!toggle)}}>{toggle ? 'Own Data' : 'API Data'}</button>
            <label htmlFor="uname">Author: </label>
            <input className='border-2 border-black rounded text-sky-500 w-1/4 ' type="text" id="uname" ref={userName} />
            <label htmlFor="title">Title: </label>
            <input className='border-2 border-black rounded text-sky-500 w-1/4' type="text" id="title" ref={userTitle} />
            <label htmlFor="thoughts">Thoughts: </label>
            <input className='border-2 border-black rounded text-sky-500 w-1/4 h-24' type="text" id="thoughts" ref={context} /> <br />
            <button className='rounded-full bg-sky-500 w-1/6' onClick={handlePost}>Share</button>
        </form>
        </>
    )
}

export default FormPost