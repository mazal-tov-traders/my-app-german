import React from 'react';
import s from './Post.module.css';



const Post = (props) => {

  return (

    <div className={s.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUZjSxpnj0-mmEhy7oGe7NXMlL8Qw9lbJJe7fswhQvi8Djr3WPS6hF-B5D__jLFC60xcg&usqp=CAU" alt="" />
      { props.message }
      <div>
        <span>Like {props.likesCount}</span>
      </div>
    </div>


  )

}

export default Post;