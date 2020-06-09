import React from 'react';
import s from './Article.module.css';

const Article = (props) => {
    return (
        <div className={s.article}>
            <img src={props.img} />
            <div>
                <a href={props.url}>{props.title}</a>
            </div>
        </div>
    );
}

export default Article;