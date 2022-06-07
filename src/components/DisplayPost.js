import React from 'react'

const DisplayPost = ({ post }) => {
    return (
        <div>
            <ul className='grid grid-cols-5 h-auto w-auto p-2 border-2'>
                <li>{post.firstInput}</li>
                <li>{post.secondInput}</li>
                <li>{post.thirdInput}</li>
            </ul>
        </div>
    )
}

export default DisplayPost