import { ChatBubbleOutline, FavoriteBorder, PublicOutlined, Repeat, VerifiedUser } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react';
import "./Post.css";

function Post() {
  return (
    <div className='post'>
      <div className='post--avatar'>
          <Avatar />
      </div>

      <div className='post--body'>
        <div className='post--header'>
          <div className='post--headerText'>
            <h3>anonymouse
            <span className='post--headerSpecial'>
              <VerifiedUser className="post--badge"/>
                @Enginner
            </span>
            </h3>
          </div>
          <div className='post--headerDescription'>
            <p>Reactなう。</p>
          </div>
        </div>
        <img src='https://source.unsplash.com/random'/>
        <div className='post--footer'>
          <ChatBubbleOutline fontSize='small'/>
          <Repeat fontSize='small' />
          <FavoriteBorder fontSize='small' />
          <PublicOutlined fontSize='small' />
        </div>
      </div>
    </div>
  )
}

export default Post
