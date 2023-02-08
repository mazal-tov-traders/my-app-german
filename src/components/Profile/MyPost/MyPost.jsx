import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = (props) => {


  let postData = [
    { id: 1, message: 'Hi, how are you?', likesCount: 12},
    { id: 2, message: 'Its my first', likesCount: 23},
   
  ]

  return (
    <div className={s.postsBlock}>
      <div>
        my post
      </div>
      <div>
        new post
      </div>
      <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
      <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
      
      
    </div>
    
  )

}

export default MyPost;
