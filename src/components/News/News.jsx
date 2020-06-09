import React from 'react';
import s from './News.module.css';
import Article from './Article';

const News = (props) => {
	let News = props.news.map(article => {
		return <Article img={article.urlToImage} title={article.title} url={article.url}/>
	});

	return (
		<div>
			{News}
		</div>
	);
}

export default News;