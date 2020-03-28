import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
      <div className={s.item}>
        <img src="https://img1.ak.crunchyroll.com/i/spire3/3614810e9ada5235038e8deb4adc264c1447729591_large.jpg"/> 
        { props.message }
        <div>
          <span>like</span> { props.likesCount }
        </div>
      </div>
  );
}

export default Post;