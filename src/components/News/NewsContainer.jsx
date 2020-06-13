import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import News from './News';
import { toggleIsFetching, setNews } from '../../redux/news-reducer';
import Preloader from '../common/Preloader/Preloader';
import { getNews } from '../../api/api';

class NewsContainer extends React.Component {

	componentDidMount() {
		this.props.toggleIsFetching(true);

		let date = new Date();
		let year = new Date().getFullYear();
		let month = new Date().getMonth();
		let day = new Date().getDate();

		let dateToStr = `${year}-${month}-${day}`;
		let newsType = 'all';

		getNews(newsType, dateToStr)
			.then(articles => {
				this.props.toggleIsFetching(false);
				this.props.setNews(articles);
			});
	}

	render() {
		return <>
			{this.props.isFetching ? <Preloader /> : null}
			<News newsType={this.props.newsType} news={this.props.news} />
		</>
	}
}

const mapStateToProps = (state) => ({
	newsType: state.newsPage.newsType,
	news: state.newsPage.news,
	isFetching: state.newsPage.isFetching
});

export default connect(mapStateToProps, { toggleIsFetching, setNews })(NewsContainer);