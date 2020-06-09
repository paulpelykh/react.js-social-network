import React from 'react';
import s from './Post.module.css';
import userPhoto from '../../../../assets/images/user.svg';

const Post = (props) => {
    return (
      <div className={s.item}>
        <img src={userPhoto}/> 
        { props.message }
      </div>
  );
}

export default Post;