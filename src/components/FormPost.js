import React from 'react'

const FormPost = ( {handlePost, userName, userTitle, context, setApiPosts, toggle, setToggle }) => {

    const API_URL = 'https://jsonplaceholder.typicode.com/posts';

    fetch(API_URL)
    .then(response => response.json())
    .then(json => setApiPosts(json))

    return (
        <>
        <div className='grid place-items-center'>
            <button className='rounded-full text-white bg-cyan-500 hover:bg-cyan-600 w-1/6' onClick={() => {setToggle(!toggle)}}>{toggle ? 'Own Data' : 'API Data'}</button>
        </div>
        <form className='grid justify-items-center'>
            <label htmlFor="uname">Author: </label>
            <input className='border-2 border-cyan-500 rounded text-sky-500 w-1/4 ' type="text" id="uname" ref={userName} />
            <label htmlFor="title">Title: </label>
            <input className='border-2 border-cyan-500 rounded text-sky-500 w-1/4' type="text" id="title" ref={userTitle} />
            <label htmlFor="thoughts">Thoughts: </label>
            <input className='border-2 border-cyan-500 rounded text-sky-500 w-1/4 h-24' type="text" id="thoughts" ref={context} /> <br />
            <button className='rounded-full text-white bg-cyan-500 hover:bg-cyan-600 w-1/6' onClick={handlePost}>Share</button>
        </form>
        </>
    )
}

export default FormPost