import React from 'react';
import { GrEdit } from 'react-icons/gr';
import { MdDeleteForever } from 'react-icons/md';

const DisplayPost = ({ posts, onDelete }) => {
    return (
        posts.map((post) => (
        <div key={post.id}>
            <ul className='grid grid-cols-5 h-auto w-auto p-2 border-2'>
                <li className='break-words'>{post.id}</li>
                <li className='break-words'>{post.title}</li>
                <li className='break-words'>{post.body}</li>
                <GrEdit style={{ cursor:'pointer' }}/>
                <MdDeleteForever style={{ color:'red', cursor:'pointer'}} 
                onClick={() => onDelete(post.id)}/>
            </ul>
        </div>
        ))
    )
}

export default DisplayPost