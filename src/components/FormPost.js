import React from 'react'

const FormPost = ( {handlePost, userName, title, context }) => {
    return (
        <>
        <form className='grid'>
            <label htmlFor="uname">Author: </label>
            <input className='border-2 border-black rounded text-sky-500' type="text" id="uname" ref={userName} />
            <label htmlFor="title">Title: </label>
            <input className='border-2 border-black rounded text-sky-500' type="text" id="title" ref={title} />
            <label htmlFor="thoughts">thoughts: </label>
            <input className='border-2 border-black rounded text-sky-500' type="text" id="thoughts" ref={context} />
            <button onClick={handlePost}>Share</button>
        </form>
        </>
    )
}

export default FormPost