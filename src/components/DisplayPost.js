import React from 'react';
import { GrEdit } from 'react-icons/gr';
import { MdDeleteForever } from 'react-icons/md';

const DisplayPost = ({ post, onDelete }) => {
    return (
        <div>
            <ul className='grid grid-cols-5 h-auto w-auto p-2 border-2'>
                <li className='break-words'>{post.firstInput}</li>
                <li className='break-words'>{post.secondInput}</li>
                <li className='break-words'>{post.thirdInput}</li>
                <GrEdit style={{ cursor:'pointer' }}/>
                <MdDeleteForever style={{ color:'red', cursor:'pointer'}} 
                onClick={() => onDelete(post.id)}/>
            </ul>
        </div>
    )
}

export default DisplayPost