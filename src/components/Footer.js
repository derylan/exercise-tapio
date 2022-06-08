import React from 'react'

const Footer = () => {
    return (
        <div className="bg-cyan-500/50 m-5 text-center rounded text-[12px]">
            <p>Author: Dery Lantigua © 2022 All Right Reserve</p>
            <a className='underline' href="mailto:dery.lantigua@gmail.com">Email Dery</a> <br />
            <p>Photo by <a className='underline' href='https://unsplash.com/@joannakosinska?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Joanna Kosinska</a> on
            <a className='underline' href='https://unsplash.com/s/photos/comment-background?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'> Unsplash</a>
            </p>
        </div>
    )
}

export default Footer