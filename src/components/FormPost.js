import React from 'react'

const FormPost = ( {handlePost, userName, title, context }) => {
    return (
        <>
        <form className='grid justify-items-center'>
            <label htmlFor="uname">Author: </label>
            <input className='border-2 border-black rounded text-sky-500 w-1/4 ' type="text" id="uname" ref={userName} />
            <label htmlFor="title">Title: </label>
            <input className='border-2 border-black rounded text-sky-500 w-1/4' type="text" id="title" ref={title} />
            <label htmlFor="thoughts">Thoughts: </label>
            <input className='border-2 border-black rounded text-sky-500 w-1/4 h-24' type="text" id="thoughts" ref={context} /> <br />
            <button className='rounded-full bg-sky-500 w-1/6' onClick={handlePost}>Share</button>
        </form>
        </>
    )
}

export default FormPost