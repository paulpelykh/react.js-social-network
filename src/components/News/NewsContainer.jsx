import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import News from './News';
import { toggleIsFetching, setNews } from '../../redux/news-reducer';
import Preloader from '../common/Preloader/Preloader';

class NewsContainer extends React.Component {

	componentDidMount() {
		this.props.toggleIsFetching(true);
		axios.get(`http://newsapi.org/v2/everything?q=${this.props.newsType}&from=2020-05-09&sortBy=publishedAt&apiKey=f7eedccf68304f6e81c63506458ae03b`)
			.then(response => {
				this.props.setNews(response.data.articles);
				this.props.toggleIsFetching(false);
			});
	}

	render() {
		return <>
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